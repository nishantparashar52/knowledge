function Steps(step, cache) {
    if(cache) {
        
    }
    if(step > 1) {
        n = Steps(n - 1) + Steps(n - 2);
    } else if(step === 1 || step === 0) {
        return 1;
    } else return;
}