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
        if(acc !== undefined) acc = fn.call(acc, this[i], i, this);
        else acc = this[i];
    }
    return acc;
}


Array.prototype.customMap = function(callback) {
    const arr = [];
    for(let i = 0, len = this.length; i < len ; i++) arr.push(callback(this[i]));
    return arr;
}

[1,2,3].customMap(item => item + 1);

Array.prototype.customForEach = function(callback) {
    for(let i = 0, len = this.length; i < len ; i++) callback(this[i]);
    return this;
}

[1,2,3].forEach(item => item + 1);

Array.prototype.customSome = function(callback) {
    for(let i = 0, len = this.length; i < len ; i++) {
        if(callback(this[i])) return true;
    }
    return false;
}
[1,2,3].customSome(item => item > 2);

Array.prototype.customFind = function(callback) {
    for(let i = 0, len = this.length; i < len ; i++) {
        if(callback(this[i])) return this[i];
    }
    return false;
}
[1,2,3].customSome(item => item > 2);

Array.prototype.customReduce = function(callback, intialVal) {
    let acc = intialVal || undefined;
    for(let i = 0, len = this.length; i < len ; i++) {
        if(acc !== undefined ) acc = callback(acc, this[i]);
        else acc = callback(this[i]);
    }
    return acc;
}
[1,2,3].customReduce((a,b) => a + b, 0);



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