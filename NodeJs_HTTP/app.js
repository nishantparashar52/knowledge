const express = require('express');
const app = express();
const dotenv = require('dotenv');
const {
    body,
    validationResult
} = require('express-validator');
var cache = require('memory-cache');

dotenv.config();
app.use(express.json());


// Initial Data
const course = [{
    name: 'nishant',
    class: 'B.Tech',
    id: 1
},
{
    name: 'ankit',
    class: 'BA',
    id: 2
}
];
cache.put('course', course);

app.get('/', (req, res) => {
    res.send('Hey Thanks for showing up');
});
app.get('/api/courses/:id', (req, res) => {
    let data;
    data = getData(course, parseInt(req.params.id), cache);
    if (!data) return res.status('404').send('Error cannot get users');
    res.send(data);
});

app.post('/api/courses', [
    body('name').isLength({
        min: '3'
    }),
    body('class').exists()
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status('400').send({
        errors: errors.array()
    });
    const reqCourse = {
        id: course.length + 1,
        name: req.body.name,
        class: req.body.class
    };
    course.push(reqCourse);
    cache.put('course', course);
    res.send(reqCourse);
});

// put
app.put('/api/courses/:id', [
    body('name').isLength({
        min: '3'
    }),
    body('class').exists()
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status('400').send({
        errors: errors.array()
    });
    data = getData(course, parseInt(req.params.id), cache);
    if (!data) return res.status('404').send('Error cannot set users data');
    data['name'] = req.body.name;
    data['class'] = req.body.class;
    cache.put('course', course);
    res.send(data);
});

// delete
app.delete('/api/courses/:id', (req, res) => {
    let data;
    data = getData(course, parseInt(req.params.id), cache);
    if (!data) return res.status('404').send('Error delete users');
    const index = course.indexOf(data);
    course.splice(index, 1);
    cache.put('course', course);
    res.send(data);
});


// Common function 
const getData = (data, param, cache) => {
    if (!cache) return course.find(item => item.id === param);
    return cache.get('course').find(item => item.id === param);
};
const PORT = process.env.PO || 3000;

app.listen(PORT, () => console.log(`listening on port ${PORT}`));