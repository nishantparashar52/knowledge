function callLimiter() {
    for(let i = 0; i < 10; i++) {
        rateLimiter(limiter, 3);
    }
}

function limiter(i, delay) {
    return new Promise((res, rej) => setTimeout(() => res('called'), delay || 1000));
}
let temp = 0, running = false, totalCalled = 0;
function rateLimiter(cb, limit) {
    function inner() {
        if(running === true) return;
        ++temp;
        ++totalCalled;
        if(temp < limit && totalCalled <= 20) {
            cb().then((val) => {
                console.log(val);
                running = false;
                --temp;
                inner();
            });
        } else if(temp === limit && totalCalled <= 20) {
            running = true;
            cb().then((val) => {
                console.log(val);
                running = false;
                --temp;
                inner();
            });
        } else if(temp > limit){
            running = true;
            return;
        }
    }
    inner();
}
callLimiter();
