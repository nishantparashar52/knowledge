
function promisify(func) {
    // your code here
    return new function (...args) {
        return new Promise((resolve, reject) => {
            function callback(err, data) {
                if (err) reject(err);
                else resolve(data);
            }
            func.apply(null, [...args, callback]);
        })
    }
}

const promisedFunc = promisify(func);
promisedFunc().then((data) => {
    // handles data
    console.log(data);
  }).catch((error) => {
    // handles error
    console.log(`err ${error}`);
  })