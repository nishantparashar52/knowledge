
function throttle(fn, ms) {
    let timeout, isThrottle = false;
    let context = this, arg = arguments;
    return function() {
        if(isThrottle) return;
        clearTimeout(timeout);
        fn.apply(context, arg);
        isThrottle = true;
        timeout = setTimeout(() => isThrottle = false, ms);
    }
}