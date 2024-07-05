var payload = {
    a: 1,
    b: 2
}

var response = fetch('https://httpbin.org/post', {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
});
response.then(data => data.json()).then(data => console.log(data));


(async () => {
    const response = fetch('https://httpbin.org/post', {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    });
    const res = await response.json();
    console.log(res);
});