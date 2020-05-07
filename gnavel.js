const getAppData = (datacenterUrl, applicationType) => new Promise((resolve) => {
    setTimeout(() => {
        resolve({
            protectedApps: Math.floor(Math.random() * 100),
            unprotectedApps: Math.floor(Math.random() * 100)
        });
    }, 1000);
});

const applicationTypes = [
    'vmware',
    'mssql',
    'ahv'
  ];
   
const datacenters = [
    {name: 'olive', url: 'https://www.olive.com/stat'},
    {name: 'comet', url: 'https://www.comet.com/stat'},
    {name: 'blah', url: 'https://www.blah.com/stat'}
];


(function helper() {
    const obj = {};
    let count = datacenters.length * applicationTypes.length;
    for(let i = 0, len = datacenters.length; i < len; i++) {
        objKey = datacenters[i].name;
        if(!obj[objKey]) { obj[objKey] = {'protectedApps': 0, 'unprotectedApps': 0} };
        for(let j = 0, innerLen = applicationTypes.length; j < innerLen; j++) {
            return getAppData(datacenters[i].url, applicationTypes[j]).then(result => {
                objKey = datacenters[i].name;
                getFinalResult(result, objKey, obj);
                count = count - 1;
                if(count === 0) return obj;
            });
        }
    }
})();
function getFinalResult(result, objKey, obj) {
    obj[objKey] = {'protectedApps' : obj[objKey].protectedApps + result.protectedApps, 'unprotectedApps' : obj[objKey].unprotectedApps + result.unprotectedApps};
    return obj;
}

fetch('http://dummy.restapiexample.com/api/v1/employees')
.then(response => response.json())
.then(result => fetch('https://jsonplaceholder.typicode.com/todos/1')).then(result => console.log(result.json()));