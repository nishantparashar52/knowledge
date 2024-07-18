function once(fn) {
    let result;
    let done = false;

    return function() {
        if (!done) {
            done = true;
            result = fn.apply(this, arguments);
        }

        return result;
    };
}

module.exports = once;