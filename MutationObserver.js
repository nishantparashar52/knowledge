var elem = document.getElementById('name');
setTimeout(() => {
    elem.classList.add('newClass');
    var newElem = document.createElement('div');
    var textNode = document.createTextNode('hello');
    newElem.appendChild(textNode);
    elem.appendChild(newElem);
}, 1000);

const config = {
    attributes: true,
    childList: true
};

const callback = mutationList => {
    for (let mutation of mutationList) {
        debugger;
        if (mutation.type === 'childList') {
            console.log('elem added');
        } else if (mutation.type === 'attributes') {
            console.log('The ' + mutation.attributeName + ' attribute was modified.');
        }
    }
}

// create an observer instance with callback
const observer = new MutationObserver(callback);

observer.observe(elem, config);
observer.disconnect();