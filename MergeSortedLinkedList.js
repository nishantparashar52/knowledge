function mergeTwoLists (list1, list2) {
    let l1 = list1, l2 = list2, result = new LinkedList(Number.NEGATIVE_INFINITY);
    let dummy = result;
    while(l1 && l2) {
        if(l1.val >= l2.val) {
            result.next = l2;
            result = l2;
            l2 = l2.next;
        } else {
            result.next = l1;
            result = l1;
            l1 = l1.next;
        }
    }
    if(!l1){
        result.next = l2;
    }
    if(!l2){
        result.next = l1;
    }
    return dummy.next;
};

function LinkedList(val, next) {
    this.val = val;
    this.next = next;
}

export default mergeTwoLists;
