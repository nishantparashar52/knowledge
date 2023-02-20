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



const getDataCenterApps = async (datacenters, applicationTypes) => {
    const promise = datacenters.map(datacenter => {
        return Promise.all(applicationTypes.map(applicationType => {
            return getAppData(datacenter.url, applicationType)
        }))
    });
    const datacenterApp = await Promise.all(promise);
    return datacenterApp.map(applicationTypeData =>
        applicationTypeData.reduce((acc, {protectedApps, unprotectedApps}) => {
        return {
            protectedApps: acc.protectedApps + protectedApps,
            unprotectedApps: acc.unprotectedApps + unprotectedApps,
        };
    }, {protectedApps: 0, unprotectedApps: 0})
    );
}
getDataCenterApps(datacenters, applicationTypes).then(data => console.log(data))

fetch('http://dummy.restapiexample.com/api/v1/employees')
.then(response => response.json())
.then(result => fetch('https://jsonplaceholder.typicode.com/todos/1')).then(result => console.log(result.json()));