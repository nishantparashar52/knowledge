// function Dropdown(data) {
//     let selectBox = document.createElement('select');
//     let result;
//     function innerFn(data, parent){
//         selectBox = parent ? selectBox.appendChild(parent) : selectBox;
//         for(let i = 0, len = data.length; i < len; i++) {
//             for(let [key, value] of Object.entries(data[i])) {
//                 let option = document.createElement('option');
//                 let node = document.createTextNode(key);
//                 option.append(node);
//                 selectBox.append(option);
//                 if(value.length > 0) {
//                     const innerSelectBox = document.createElement('select');
//                     result = innerFn(value, innerSelectBox);
//                     console.log(result);
//                 } else {
//                     if(result) selectBox.insertBefore(result);
//                 }
//             }
//         }
//     }
//     innerFn(data);
//     document.getElementById('content').appendChild(selectBox);
// }
// const data = [{'nishant': [{'a': []}, {'b': []}]}, 
// {'prashant': []}]
// Dropdown(data);

function flatten(obj, parent) {
    let selectBox = parent || document.createElement('select');
    for(let i =0,len = obj.length; i < len; i++) {
        for(let [key, value] of Object.entries(obj[i])) {
            if(value === '') {
                let option = document.createElement('option');
                option.setAttribute('id', key);
                let node = document.createTextNode(key);
                option.append(node);
                selectBox.append(option);
            } else {
                for(let i = 0, len = selectBox.length; i < selectBox; i++) {
                    const id = selectBox.children[i].getAttribute('id');
                    if(id === value) {
                        let option = document.createElement('option');
                        option.setAttribute('id', key);
                        let node = document.createTextNode(key);
                        option.append(node);
                        selectBox.children[i].append(option);
                    }
                }
            }
        }
    }
    document.getElementById('content').appendChild(selectBox);
    selectBox.addEventListener('onchange', function(ev){
        const filteredData = [];
        for(let i = 0,len = obj.length; i < len; i++) {
            for(let [key, value] of Object.entries(obj[i])) {
                if(value === ev.target.value) filteredData.push(obj[i]);
            }
        }
        ev.target.append(flatten(filteredData, ev.target));
    });
}

let obj = [
    {'prashant': ''},
    {'nishant': ''},
    {'abc': 'nishant'},
    {'aa': 'nishant'},
    {'ankit': ''}
]
flatten(obj);

// not able to find click event on option