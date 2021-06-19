let counter = 0 ;

const getResult = () => {
    console.log("counter", counter++);
}

const getData = (fn, delay) => {
    let timer;
    return function () {
        let ref = this,
        args = arguments;
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn();
        }, delay);
    }
} 

const betterFunction = getData(getResult, 300);
