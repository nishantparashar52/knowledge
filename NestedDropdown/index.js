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

function flatten(obj) {
    let selectBox = document.createElement('select');
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
                    break;
                }
            }
        }
    }
    document.getElementById('content').appendChild(selectBox);
    selectBox.addEventListener("mouseenter", function( event ) {   
        // highlight the mouseenter target
        event.target.style.color = "purple";
        setTimeout(() => {
            event.target.style.color = ""; 
        },500);
    });
    selectBox.addEventListener('mouseover', function(ev){
        console.log(ev.target);
    });
}

let obj = [
    {'prashant': '',},
    {'nishant': ''},
    {'abc': 'nishant'},
    {'aa': 'nishant'},
    {'ankit': ''}
]
flatten(obj);