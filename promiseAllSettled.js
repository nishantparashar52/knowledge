const promises = [
  Promise.resolve(1),
  Promise.reject(new Error('Oops!')),
  Promise.resolve(3)
];


function allSettled(promises) {
    return Promise.all(promises.map(promise => {
        Promise.resolve(promise).then(val => ({
            status: 'fulfilled',
            val
        }), reason => ({
            status: 'rejected',
            val 
        })
        )
    }))
}