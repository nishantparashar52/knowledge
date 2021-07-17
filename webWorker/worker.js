this.onmessage = function(e) {
    let { addThis: {a= 0, b= 0} } = e && e.data;
    if(e.data.addThis) {
        this.postMessage({result: a + b});
    }
}