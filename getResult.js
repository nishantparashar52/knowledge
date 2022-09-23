let result = async function getResult(fns, cb) {
    debugger;
    let finalResult;
    for(let i = 0; i< fns.length; i++) {
        const arg = fns[arguments].slice(1);
        finalResult += await fns.apply[arguments[0], arg];
    }
    return cb(finalResult);
}

result([
    function funcA(callback) {
        setTimeout(function() {
            callback('A result')
        }, 100);
    },
    function funcB(callback, resultA) {
        setTimeout(function() {
            console.log('funcA RESULT', resultA);
            callback('d')
        }, 50);
    },
    function funcC(callback, resultB) {
        setTimeout(function() {
            console.log('funcB RESULT', resultB);
            callback('e')
        }, 10);

    }
    ], function(finalResult) {
        console.log('result', finalResult);
});

function setUp() {
    delay(1000)
    .then(() => sayHello('hello dasd'))
    .catch(err => console.error(err))
}

function delay(time) {
    return new Promise((resolve, reject) => {
        if(isNaN(time)) reject(new Error('not a proper time'));
        setTimeout(resolve , time);
    })
}
setUp();

function sayHello(arg) {
    alert(arg)
}