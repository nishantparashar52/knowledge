// Find the sum 

function findSubArraySum(start, sum, arr) {
    if (start == '') {
        start = 0;
        return getTheSequence(0, arr, sum);
    }
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] === start) {
            return getTheSequence(i, arr, sum);
        }
    }
}

function getTheSequence(index, arr, sum) {
    var subSequence = [];
    for(var i = index; i < arr.length; i++) {
        if(sum > 0) {
            subSequence.push(arr[i]);
            sum = sum - arr[i];
        } else {
            return subSequence;
        }
    }
}

var a = findSubArraySum(2, 15, [2,3,5,5]);
a;
// 2 =>   1 2 3 7 5