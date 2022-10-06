function PalindromeLinkedList(head) {
    let fast = head, slow = head, len = 0, startPointer = head;
    while(fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
        len++;
    }

    let mid =  reverse(slow);
    while(len) {
        len--;
        if(mid.val !== startPointer.val) return false;
        mid = mid.next;
        startPointer = startPointer.next;
    }
    return true;
}


function reverse(head) {
    let curr = head, prev = null, next;
    while(curr) {
        next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
}
export default PalindromeLinkedList;