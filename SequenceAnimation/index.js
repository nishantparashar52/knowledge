const btn = document.getElementById('btn');
const container = document.getElementById('container');
let playing = false;
const queue = [];
btn.addEventListener('click', () => {
    queue.push(createNode());
    startProcess();
});
function createNode () {
    const node = document.querySelector('.progress-bar');
    const clonedNode = node.cloneNode(true);
    clonedNode.style.display = 'block';
    container.append(clonedNode);
}
function startProcess() {
    if(playing) return;
    console.log(queue.length);
    playing = queue.length >= 3;
    animateSlider();
}
function animateSlider() {
    Promise.resolve();
    const next = container.querySelector(".progress-outer:not(.active)");
    next.classList.add('active');
    setTimeout(() => {
        queue.shift();
        playing = queue.length >= 3;
        if(queue.length >= 3)  {
            animateSlider();
        }
    }, 3000);
}

function singleSlider() {
    const bar = document.querySelector('.bar');
    const queued = document.querySelector('.queued');
    let load = document.querySelector('.load');
    let loader = false;
    let counter = 0;
    let width = 0;
    load.addEventListener('click', loadElem);

    function loadElem() {
        queued.innerHTML = ++counter;
        if(loader === false) {
            bar.style.width = 0;
            tick();
        }
    }
    
    // function is supposed to animate and update the counter recursively
    function tick() {
        loader = true;
        if(++width > 100) {
            bar.style.width = 0;
            queued.innerHTML = --counter;
            width = 0;
            if(counter < 1) {
                loader = false;
                return;
            }
        }
        bar.style.width = `${width}%`;
        setTimeout(tick, 3);
    }
}
singleSlider();
