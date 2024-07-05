function AddNumberLinkedList(l1, l2) {
    let carry = 0, finalNode = new ListNode(-1);
    let result = finalNode;
    
    while(l1 || l2 || carry) {
        let node1Val = l1 ? l1.val : 0;
        let node2Val = l2 ? l2.val : 0;
        let nextDigit = Math.floor((node1Val + node2Val + carry) % 10);
        finalNode.next = new ListNode(nextDigit);
        carry = Math.floor((node1Val + node2Val + carry) / 10);
        l1 = l1 ? l1.next : null;
        l2 = l2 ? l2.next : null;
        finalNode = finalNode.next;
    }
    return result.next;
}

function ListNode(list) {
    this.val = list;
    this.next = null;
}


export default AddNumberLinkedList;
