function NestedAccordion(obj, parentId) {
    let div = parentId || document.createElement('div');
    for (let i = 0, len = obj.length; i < len; i++) {
        const indexVal = obj[i];
        let header = document.createElement('div');
        header.setAttribute('data', JSON.stringify(obj[i]));
        let node = document.createTextNode(indexVal['header']);
        header.append(node);
        let content = document.createElement('div');
        content.classList.add('hide');
        let nodeContent = document.createTextNode(indexVal['content']);
        content.append(nodeContent);
        header.append(content);
        div.append(header);
    }
    div.addEventListener('click', function (ev) {
        const targetElem = ev.target;
        targetElem.children[0].classList.toggle('hide');
        const data = JSON.parse(targetElem.getAttribute('data')).children;
        ev.target.append(NestedAccordion(data, ev.target));
    })
    document.getElementById('content').appendChild(div);
}
const data = [{
        header: 'Accordion header',
        content: 'Accordion content',
        children: [{
            header: 'Accordion header sub 1',
            content: 'Accordion content sub 1',
            children: [{
                header: 'Accordion header sub 1',
                content: 'Accordion content sub 1',
                children: ''
            }]
        }, {
            header: 'Accordion header 2',
            content: 'Accordion content 2',
            parent: ''
        }]
    },
    {
        header: 'Accordion header 1',
        content: 'Accordion content 1',
        children: ''
    }, {
        header: 'Accordion header 2',
        content: 'Accordion content 2',
        children: ''
    }
]
NestedAccordion(data);