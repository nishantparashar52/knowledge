const cache = [];
async function apiCall() {
    let response = '';
    if(!(cache.length > 0)) {
        let url = await fetch('https://www.algoexpert.io/api/fe/questions');
        response = await url.json();
    } else response = cache;
    const reducer = response.reduce((acc, curr) => {
        const {category} = curr;
        if(acc[category]) acc[category].push(curr);
        else acc[category] = [curr];
        return acc;
    }, {});
    Object.keys(reducer).map((item, index) => {
        const val = reducer[item];
        const div =document.createElement('div');
        div.classList.add('parent');
        const parent =document.createElement('div');
        parent.classList.add('heading');
        parent.innerHTML = item;
        div.appendChild(parent);
        for(let i = 0; i< val.length; i++) {
            const innerDiv =document.createElement('div');
            innerDiv.innerText = val[i].name;
            div.appendChild(innerDiv);
        }
        document.getElementById('container').appendChild(div);
    })
}
apiCall();