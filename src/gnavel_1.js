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
async function result(datacenters, applicationTypes) {
let promises = [], result = {protectedApps: 0, unprotectedApps: 0};
for(let i of datacenters) {
    for(let j of applicationTypes) {
        const res = await getAppData(i.name, j);
        result['protectedApps'] += res.protectedApps;
        result['unprotectedApps'] += res.unprotectedApps;
    }
}
return result;
}
result(datacenters, applicationTypes).then(a => console.log(a));


// other way
async function result(datacenters, applicationTypes) {
    let promises = [], result = {protectedApps: 0, unprotectedApps: 0};
    datacenters.forEach(item => {
        applicationTypes.forEach(appT => {
            promises.push(getAppData(`${item}, ${appT}`));
        })
    })
    await Promise.all(promises).then(val => {
        val.reduce((acc, curr) => {
            acc.protectedApps += curr.protectedApps;
            acc.unprotectedApps += curr.unprotectedApps;
            return acc;
        }, result);
    });
    return result;
}
result(datacenters, applicationTypes).then(a => {
    console.log('parallel');
    console.log(a)});