function LRUCache1(size) {
    this.size = size;
    this.LruValue = [];
    this.insertNode = function(val) {
        if(this.LruValue.length < 3) this.LruValue.unshift(val);
        else {
            this.LruValue.pop();
            this.LruValue.unshift(val)
        }
    }

    this.getNode = function() {
        console.log(this.LruValue);
    }
}

var a= new LRUCache1(5);
a.insertNode(10);
a.insertNode(20);
a.insertNode(11);
a.insertNode(22);
a.getNode()

// 11, 20, 10
// 10, 20, 11, 22

// 22, 11, 20


var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.map = new Map();
 };
 
 /** 
  * @param {number} key
  * @return {number}
  */
 LRUCache.prototype.get = function(key) {
     if(this.map.has(key)) {
         let value = this.map.get(key);
         this.map.delete(key);
         this.map.set(key, value);
         return value;
     } else {
         return -1;
     }
 };
 
 /** 
  * @param {number} key 
  * @param {number} value
  * @return {void}
  */
 LRUCache.prototype.put = function(key, value) {
     if(this.get(key) === -1) {
        if(this.capacity === this.map.size) {
            for(let k of this.map) {
                this.map.delete(k[0]);
                break;
            }
        }
     }
     this.map.set(key, value);
 };
 
 /** 
  * Your LRUCache object will be instantiated and called as such:
  * var obj = new LRUCache(capacity)
  * var param_1 = obj.get(key)
  * obj.put(key,value)
  */

 export default LRUCache;