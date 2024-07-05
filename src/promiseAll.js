// promise all

const url = ['iliakan', 'remy', 'jeresig', 'nishantparashar52', 'mayank8aug'];
const requests = url.map(urlItem => fetch(urlItem));


Promise.all(requests)
.then(responses => {
    debugger;
    console.log(responses);
})