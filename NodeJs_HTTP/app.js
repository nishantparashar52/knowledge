const express = require('express');
const app = express();
const dotenv = require('dotenv');
const { body, validationResult } = require('express-validator');
var cache = require('memory-cache');

dotenv.config();
app.use(express.json());


//cache usage
//data
const course = [{
    name: 'nishant',
    class: 'B.Tech',
    id: 1
},
{
    name: 'ankit',
    class: 'BA',
    id: 2
}];

cache.put('course', course);

app.get('/', (req,res) => {
    res.send('Hey Thanks for showing up');
});
app.get('/api/courses/:id', (req,res) => {
    let data;
    if(!cache) {
        data = course.find(item => item.id === parseInt(req.params.id));
    } else data = cache.get('course').find(item => item.id === parseInt(req.params.id));
    if(!data) return res.status('404').send('Error cannot get users');
    res.send(data);
});

app.post('/api/courses', [
    body('name').isLength({min: '3'}),
    body('class').exists()
], (req,res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) return res.status('400').send({errors: errors.array()});
    const reqCourse = {
        id: course.length + 1,
        name: req.body.name,
        class: req.body.class
    };
    course.push(reqCourse);
    cache.put('course', course);
    res.send(reqCourse);
});
const PORT = process.env.PO || 3000;

app.listen(PORT, () =>console.log(`listening on port ${PORT}`));