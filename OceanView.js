function OceanView(arr) {
    const result = [];
    let top = arr[arr.length - 1];
    if(arr.length > 0) result.push(arr.length - 1);
    for(let j = arr.length -2; j >=0; j--) {
        if(arr[j] > top) {
            result.push(j);
            top = arr[j];
        }
    }
    return result.sort((a, b) => a -b);
}

export default OceanView;

