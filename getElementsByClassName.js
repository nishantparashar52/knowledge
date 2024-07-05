function getElementsByClassName2(targetClassName) {
    let firstChildren = this.body;

    function recursiveElementCheck(child) {
        let elements = [];
        if(child.classList.contains(targetClassName)) return child;
        for(let k of child.children) {
            elements = elements.concat(recursiveElementCheck(k))
        }
        return elements;
    }
    return recursiveElementCheck(firstChildren);
}

document.getElementsByClassName2 = getElementsByClassName2;