
function throttle(fn, ms) {
    let timeout, isThrottle = false;

    return function() {

        let context = this, arg = arguments;
        if(isThrottle) return;
        clearTimeout(timeout);
        fn.apply(context, arg);
        isThrottle = true;
        timeout = setTimeout(() => isThrottle = false, ms);
    }
}