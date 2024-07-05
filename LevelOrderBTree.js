var levelOrder = function(root) {
    let queue = [], finalResult = [], level=[];
    queue.push(root);
    while(queue.length !== 0) {

        let size = queue.length;
        let level = [];
        while(size--) {
            const elem = queue.shift();
            level.push(elem.value);
            if(elem.left !==null) queue.push(elem.left);
            if(elem.right !==null) queue.push(elem.right);
        }
        finalResult.push(level);
    }
    return finalResult;
};

export default levelOrder;
