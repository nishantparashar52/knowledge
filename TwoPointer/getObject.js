
function getObject(keys, value) {
    let result = {}, refObject = result;
    keys.forEach((item, indx) => {
        item.split('.').map((item, i, values) => {
            if(!refObject[item]) {
                refObject = (refObject[item] = i === values.length - 1 ? value[indx] : {})
            } else refObject = refObject[item];
        })
        refObject = result;
    })
    return result;
  }

const keys = ['address.street', 'address.house', 'city'];
const values = ['12th main Rd', '501', 'Bangalore'];
console.log(getObject(keys, values));