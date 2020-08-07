elem.addEventListener('hello', (ev) => console.log(ev.detail.name));

elem.dispatchEvent(new CustomEvent("hello", {
    detail: {
        name: 'nishant'
    }
}));


// mutation observer
<div contentEditable id="elem">Click and <b>edit</b>, please</div>
// script tag starts
let observer = new MutationObserver(mutationRecords => {
  console.log(mutationRecords); // console.log(the changes)
});

// observe everything except attributes
observer.observe(elem, {
  childList: true, // observe direct children
  subtree: true, // and lower descendants too
  characterDataOldValue: true // pass old data to callback
});

