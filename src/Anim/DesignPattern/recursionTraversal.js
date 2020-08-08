// https://javascript.info/recursion#recursive-traversals


let company = {
    sales: [{
      name: 'John',
      salary: 1000
    }, {
      name: 'Alice',
      salary: 1600
    }],
  
    development: {
      sites: [{
        name: 'Peter',
        salary: 2000
      }, {
        name: 'Alex',
        salary: 1800
      }],
  
      internals: [{
        name: 'Jack',
        salary: 1300
      }]
    }
  };
  function Salary(obj) {
      let finalSalary = 0;
      function innerFn(innerObj) {
          for(let key in innerObj) {
              const val = innerObj[key];
              if(Array.isArray(val)) finalSalary += reduceSalary(val);
              else {
                  return innerFn(val);
              }
          }
      }
      innerFn(obj);
      return finalSalary;
  }
  
  function reduceSalary(arr) {
      return arr.reduce((acc, currItem) => acc + currItem.salary, 0);
  }
  
  Salary(company);