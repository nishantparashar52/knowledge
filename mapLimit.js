function mapLimit(inputs, limit, iteratee, cb) {
    for(let i = 0; i < inputs.length; i+=limit) {
        inputs.slice(i, i + limit).forEach(item => iteratee(item, cb));
    }
    function iteratee(item, cb) {
        if(item === inputs.length) cb(inputs);
    }
}

mapLimit([1, 2, 3, 4, 5], 2, getNameById, (allResults) => {
    console.log(`User ${allResults}`); // ["User1", "User2", "User3", "User4", "User5"]
  });

function getNameById(id, callback) {
    const randomNumber = Math.floor(Math.random() * 200) + 100;
    setTimeout(() => callback(id), randomNumber);
}