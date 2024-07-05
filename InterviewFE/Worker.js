this.onmessage = function({data}) {
    const { addThis: {a,b} } = data;
    this.postMessage({message: a+b});
}