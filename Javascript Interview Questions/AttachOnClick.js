function onClick(root, predicate, handler) {
    if(root.handlers) {
        root.handlers.push([predicate, handler]);
    } else {
        const originalStopPropogation = Event.prototype.stopImmediatePropagation;
        Event.prototype.stopImmediatePropagation = function() {
            this.immediatePropagationStopped = true;
            originalStopPropogation.apply(this, arguments);
        }
        root.addEventListener('click', function(e) {
            let node = e.target;
            while(node !== root) {
                for(let [p,h] of root.handlers) {
                    if(p(node)) h.call(node, e);
                    if(e.immediatePropagationStopped) return;
                }
                if(e.cancelBubble) return;
                node = node.parentElement;
            }
        })
        root.handlers = [[predicate, handler]];
    }
}

onClick(
    document.body,
    el => el.tagName.toLowerCase() === 'div',
    function(e) {console.log(e)}
)