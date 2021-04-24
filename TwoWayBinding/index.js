const setState = state => new Proxy(state, {
    set(target, property ,value) {
        target[property] = value;
        render();
        return true;
    }
});

let state = setState({
    name: '',
    phone: '',
    class: ''
});


let listeners = document.querySelectorAll('[data-model]');
listeners.forEach(element => {
    const name = element.dataset.model;
    
    element.addEventListener('keyup', event => {
        state[name] = element.value;
    })
});
const render = () => {
    let bindings = Array.from(document.querySelectorAll('[data-binding')).map(ev => {
       return ev.dataset.binding;
    });
    bindings.forEach(item => {
        document.querySelector(`[data-binding=${item}]`).innerHTML = state[item];
        document.querySelector(`[data-model=${item}]`).value = state[item];
    })
}

render();

