Array.prototype.myMap = function(callback) {
    let newArray = [];
    for(let item of this) {
        newArray.push(callback(item));
    }
    return newArray;
}

Array.prototype.mySome = function(callback, b) {
    for(var c = 0, d = this; c < d.length; c++) {
        if(callback.call(b, d[c], c, d)) return !0;
        return !1;
    }
}


Array.prototype.some1 = function (
    a, // expression to test each element of the array against
    b, // optionally change the 'this' context for the given callback
    c, // placeholder iterator variable
    d // placeholder variable (stores context of original array)
    ) { 

      for (c = 0, d = this; c < d.length; c++) {
          debugger;

        // iterate over all of the array elements
        if (a.call(b, d[c], c, d)) // call the given expression, passing in context, value, index, and original array
        return !0; // if any expression evaluates true, immediately return since 'some' is true
    return !1 // otherwise return false since all callbacks evaluated to false  
    }
}


Array.prototype.customSome = function(fn) {
    for(let i = 0, len = this.length; i < len; i++) {
        if (fn(this[i], this)) return true;
    }
    return false;
}



Array.prototype.some2 = function(fn, b) {
    for(let i = 0; i < this.length; i++) {
        if(fn.call(b, this[i], i, this)) return !0;
    }
    return !1;
}
Array.prototype.find = function(fn, b) {
    for(let i = 0; i < this.length; i++) {
        if(fn.call(b, this[i], i, this)) return this[i];
    }
}

Array.prototype.filter = function(fn, b) {
    const arr = [];
    for(let i = 0; i < this.length; i++) {
        if(fn.call(b, this[i], i, this)) {
            arr.push(this[i]);
        }
    }
    return arr;
}

Array.prototype.reduce = function(fn, initialVal) {
    const acc = initialVal || undefined;
    for(let i = 0; i < this.length; i++) {
        if(acc !== undefined) acc = fn.call(b, acc, this[i], i, this);
        else acc = this[i];
    }
    return acc;
}






// amazon
["dig1 8 1 5 1","let1 art can","dig2 3 6","let2 own kit dig","let3 art zero"]
arr[1].split(' ')[1]

["let1 art can","let3 art zero", "let2 own kit dig", "dig1 8 1 5 1", "dig2 3 6"]




const pow = (x, p) => p === 1 ? x : x * pow(x, p - 1);

3
/ \
9  20
  /  \
15   7