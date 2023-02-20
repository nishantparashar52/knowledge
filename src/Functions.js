Function.prototype.method = function(name, func) {
    if(!this.prototype[name]) {
        this.prototype[name] = func;
        return this;
    }
}

// add a method conditionally
Function.prototype.methodConditional = function(name, func) {
    if(!this.prototype[name]) {
        this.prototype[name] = func;
        return this;
    }
}
String.method('trim', function() {
    return this.replace(' ', '');
});
Number.method('', function() {

})


// closure

var myObject = function() {
    var value = 0;
    return {
        increment: function(inc) {
            value += typeof inc === 'number' ? inc : 1 
        },
        getValue: function() {
            return value;
        }
    }
}();


// closure to convert the color from white to yellow


function fade(node) {
    let value = 1;
    function step() {
        let hex = value.toString(16);
        // node.style = {...node.style, backgroundColor: 'ffff' + hex + hex, height: hex * 100}
        node.style.backgroundColor = '#ffff' + hex + hex;
        // if(value === 15) alert('HEY')
        console.log(node);
        if(value < 15) {
            value += 1;
            setTimeout(step,100);
        }
    }
    setTimeout(step, 100);
}
// let body = document.getElementsByTagName('body');
// fade(document.body);

// slider in x time
function animateSlider(time, frame) {
    let width = 0;
    const div = document.createElement('div');
    div.style.backgroundColor = '#ccc';
    div.style.height = '100px';
    div.style.width = width;
    document.body.append(div);
    function step() {
        width += window.screen.width / frame;
        div.style.width = width + 'px';
        if(width >= window.screen.width) return;
        setTimeout(step, time / frame);
    }
    setTimeout(step, 0);
}

// animateSlider(3000,500);
// create event handler on array of nodes


function attachEventOnNodes(nodes) {
    var i;
    for(i =0, len = nodes.length; i < len;i++) {
        nodes[i].onclick = function(i) {
            return function(e) {
                alert(i);
            }
        }(i)
        // nodes[i].onclick = function(e) {
        //     alert(i);
        // }
    }   
}

function createNodes(count) {
    for(let i =0, len = count; i < len;i++) {
       const div= document.createElement('div');
       div.innerText = `div ${i}`;
       div.id = `div ${i}`
       document.body.appendChild(div);
    }
}

function getId(id) {
    return document.getElementById(id);
}
// createNodes(10);
// attachEventOnNodes([getId('div 0'), getId('div 1'), getId('div 2'), getId('div 3')])


Function.method('curry', function() {
    let that = this, slice = Array.prototype.slice;
    args = slice.apply(arguments);
    return function(){
        return that.apply(null, args.concat(slice.apply(arguments)));
    }
})
function add(a) {
    return function(b) {
        return a + b;
    }
}
let add1 = add.curry(1);
console.log(add1(5)); // args.concat is not a method

// memoize function

function memoize(memo, fundamental) {
    var shell = function(n) {
        var result = memo[n];
        if(typeof result !== 'number') {
            result = fundamental(shell, n);
            memo[n] = result;
        }
        return result;
    }
    return shell;
}

var fibonacci = memoize([0,1], function(shell, n) {
    return shell(n -1) + shell(n -2);
})

var factorial = memoize([1,1], function(shell, n) {
    return n * shell(n -1);
})
console.log(fibonacci(10));
console.log(factorial(5));


if(typeof Object.beget !== 'function') {
    Object.beget = function(o) {
        let F = function() {};
        F.prototype = o;
        return new F();
    }
}

let another_obj = Object.beget({name: 'nishant', profession: 'coder'});
another_obj.name = 'urvashi';


Function.method('new', function() {
    var that = Object.beget(this.prototype);
    var other = this.apply(that, arguments);
    return (typeof other === 'object' && other) || that;
});

var Mam = function(name) {
    this.name = name;
}
Mam.prototype.get_name = function() {
    return this.name;
}

var myMam = new Mam('nishant madam');
var name = myMam.get_name();



Function.method('inherits', function(Parent) {
    this.prototype = new Parent();
    return this;
})


function is_array(value) {
    return value && typeof value === 'object' && value.constructor === Array
}
// better method
function is_array(value) {
    return value && typeof value === 'object' && typeof value.length === 'number'
    && typeof value.splice ==='function' &&
    !(value.propertyIsEnumerable('length'))
}

let A1 =new Array([1,23]);
let A2 = [1,2];
let A3 = Array.from([1]);
console.log(is_array(A1));
console.log(is_array(A2));
console.log(is_array(A3));


Array.method('customReduce', function(f, value){
let i;
    for(let i =0, len =this.length; i < len;i++) {
        value = f(this[i], value);
    }
    return value;
})

// merge intervals

var mergeInterval = function(intervals) {
    let finalArr = [];
    let nextLeft, nextRight;
    for(let i = 0, len = intervals.length; i < len;i++) {
        const [left, right] = intervals[i];
        if(i + 1 <= len) {
            [nextLeft, nextRight] = intervals[i+1];
            if(right <= nextLeft) {
                finalArr.push([left, nextRight]);
            } else finalArr.push([left, right]);
        }
    }
    return finalArr;
}

