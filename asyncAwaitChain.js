var A = wait => new Promise((resolve, reject) => setTimeout(resolve), wait);
var A1 = wait => new Promise((resolve, reject) => setTimeout(resolve), wait);
var A2 = wait => new Promise((resolve, reject) => setTimeout(resolve), wait);

[A(100), A1(1000), A2(2000)].reduce((p, fn) => p.then(fn), Promise.resolve())
.then(result3 => console.log(`all passed ${result3}`));


function fetchUrl(url) {
    return fetch(url).then(res => res.text()).then(data => console.log(data)).catch(err => console.log(err));
}

async function fetchUrl(url) {
    var data = await fetch(url);
    console.log(data.text())
}
let urls = ['https://dummy.restapiexample.com/api/v1/employees', 'https://dummy.restapiexample.com/api/v1/employee/1']
const jsonRes = urls.map(async url => {
    const response = await fetch(url);
    console.log(await response.text());
})

function logUrl(urls) {
    const fetchedUrl = urls.map(url => {
        return fetch(url).then(res => res.text());
    });

    // log them in order
    fetchedUrl.reduce((promise, fetchedUrl) => {
        return promise.then(() => fetchedUrl)
        .then(data => console.log(data))
    }, Promise.resolve());
}

async function logUrl(urls) {
    const fetchedUrl = urls.map(async url => {
        const response = await fetch(url);
        return response.text();
    });

    // log them in order
    for(const textResponse in fetchedUrl) console.log(await textResponse);
}