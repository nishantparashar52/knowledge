Hi, this is Rajarshi!!

Hi


const o1 = {a: 1, b: 2, c: function Name() {console.log('dsdsds')}, e: [1,2,3]};
const o2 = {a: 1, b: 2, c: 3, d: {c1: d2}};

o1 === o2 // -> false

const equalObj = (o1, o2) {
	let obj1Keys = Object.keys(o1);
  let obj2Keys = Object.keys(o1);
  if(obj1Keys.length !== obj2Keys.length) return false;
  
  for(const [key,value] of Object.entries(obj)){
    const obj1Value = o1[item];
    const obj2Value = o2[item];
        if(typeof obj1Value === 'object' && typeof obj2Value === 'object') {
                if(Array.isArray(obj1Value) && Array.isArray(obj2Value)) {
                    if(obj1Value.length !== obj2Value.length) return false;
            else compareValue(JSON.stringify(obj1Value), JSON.stringify(obj2Value)
                equalObj(obj1Value, obj2Value);
        else return false;
        
        if(typeof obj2Value === 'function' && typeof obj1Value === 'function') compareValue(JSON.stringify(o1.item), JSON.stringify(o2.item);
        else return false;
        
        
        if(o1.item !== o2.item) return false;
	}
	function compareValue(val, val2) {
		if(val1 === val2) return true;
  	return false;
	}

 
equalObj(o1, o2); // -> true

a & b       'ccx' && 'dsds'

if(a == b & c==d) false

if(a == b && c==d) false

if(undefined && ())


function debouce(fn, delay) {
	let timer = null;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn(args), delay);
  }
}

function debouce(fn, delay) {
	let timer = null;
	let throttle = true;
  return function (...args) {
    // if(!throttle) {
			//	clearTimeout(timer);
		// }
    // if(timer) clearTimeout(timer);
			timer = setTimeout(() => {
			timer = false;
			fn(args), delay);
		}
  }
}





new Promise((resolve, reject) => resolve(setTimout(() => console.log(), 100))

var a = new Promise

a.then(fn => fn())
.then(val => console.log()


class Promise {
	constructor(fn) {
		this.fn = fn.bind(this, arguments);
    this.successCallback = '';
    this.errorCallback = '';
    this.status = '';
    this.value = '';
	}
  then(cb) {
    this.successCallback = cb;
		return this; 
	}
  resolve() {
		this.status = 'success';
    this.successCallback = cb;
}
  catch(cb) {
  	this.errorCallback = cb;
    return this;
  }
  finally(cb) {
		
	}
  return this;
	}

}
.then(ab => ab()).then()