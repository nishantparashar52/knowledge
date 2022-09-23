function LRUCache(size) {
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

var a= new LRUCache(5);
a.insertNode(10);
a.insertNode(20);
a.insertNode(11);
a.insertNode(22);
a.getNode()

11, 20, 10
10, 20, 11, 22

22, 11, 20