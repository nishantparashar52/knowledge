
class Node {
    constructor(value, prev, next) {
        this.value = value;
        this.prev = prev || null;
        this.next = next || null;
    }
}

class LinkedList {
    constructor() {
        this.head = this.tail = null;
    }
    append (value) {
        if(!this.tail) this.head = this.tail = new Node(value);
        else {
            let oldTail = this.tail;
            this.tail = new Node(value);
            oldTail.next = this.tail;
            this.tail.prev = oldTail;
        }
    }
    prepend(value) {
        if(!this.head) this.head = this.tail = new Node(value);
        else {
            let oldHead = this.head;
            this.head = new Node(value);
            this.head.next = oldHead;
            oldHead.prev = this.head;
        }
    }
    deleteHead() {
        if(!this.head) return null; 
        else {
            let removeHead = this.head;
            if(this.head === this.tail) this.head = this.tail = null;
            else {
                this.head = this.head.next;
                this.head.prev = null;
            }
            return removeHead.value;
        }
    }
    deleteTail() {
        if(!this.tail) return null; 
        else {
            let removeTail = this.tail;
            if(this.head === this.tail) this.head = this.tail = null;
            else {
                this.tail = this.tail.prev;
                this.tail.next = null;
            }
            return removeTail.value;
        } 
    }
    searchNode(value) {
        let currentNode = this.head;
        while(currentNode) {
            if(currentNode.value === value) {
                return currentNode;
            } else {
                currentNode = currentNode.next;
            }
        }
        return null;
    }
    searchLoop() {
        let p1 = this.head;
        let p2 = this.head;
        let loop;
        while(p2.next.next) {
            p1 = p1.next;
            p2 = p2.next.next;
            if(p1 === p2) {
                loop = true;
                break;
            }
        }
        if(loop) {
            p1 = this.head;
            while(p1 !== p2) {
                p1 = p1.next;
                p2 = p2.next;
            }
            return p1;
        } else {
            return;
        }
    }
}

var L1 = new LinkedList();
L1.append(1);
L1.append(2);
L1.append(3);
L1.append(4);
L1.append(5);
L1.append(6);
L1.head.next.next.next = L1.head.next;