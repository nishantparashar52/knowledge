import { response } from './result.js';
function fetchResponse() {
    let promise = fetch("https://reqres.in/api/users?page=2").then(res => res.json());
    promise.then(item => renderHTML(item.data));
}

function renderHTML(response) {
    let itemMap = response.map(item => {
        return `
            <div class="section" style="padding: 10px; margin: 10px;">
            <img src=${item.avatar} />
                <div> Name ${item.first_name}</div>
                <div> Name ${item.last_name}</div>
            </div>
        `
    }).join("");

    document.querySelector('#renderData').insertAdjacentHTML('afterbegin', itemMap);
}
fetchResponse();
console.log(response);