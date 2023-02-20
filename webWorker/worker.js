this.onmessage = function(e) {
    let { addThis: {a= 0, b= 0} } = e && e.data;
    if(e.data.addThis) {
        this.postMessage({result: a + b});
    }
}
self.addEventListener('message', event => {
    // Get the input value
    const value = event.data;
    if(typeof value === 'number') {
        // Calculate the factorial
        let factorial = 1;
        for (let i = 2; i <= value; i++) {
        factorial *= i;
        }
        
        // Send the result back to the main thread
        self.postMessage({
        input: value,
        result: factorial
        });
    }
  });
