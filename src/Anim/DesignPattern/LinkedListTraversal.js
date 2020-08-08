let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  };
function traversal(obj) {
    const arr = [];
    function inner(innerObj) {
        while(innerObj !== null) {
            if(innerObj.value) {
                arr.push(innerObj.value);
                return inner(innerObj.next);
            }
        }
    }
    inner(obj);
    return arr;
}
traversal(list);

// approach 2 loop based

function traversal2(obj) {
    let arr = [];
    while(obj !== null) {
        arr.push(obj.value);
        obj = obj.next; 
    }
    return arr;
}

function traversal2(obj) {
    if(obj.next) traversal2(obj.next);
}

function sumTo(num) {
    if(num > 1) return n + sumTo(n - 1);
    else return 1;
}