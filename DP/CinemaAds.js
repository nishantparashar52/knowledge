//There are ‘n’ ads. Each ad has an effectiveness value associated with it which is given in an array of size ‘n’ in the format [v1, v2, …, vn], where ‘v1’ is the effectiveness value of the first ad, ‘v2’ is the effectiveness value of the second ad, and so on. The show in which these ads will be shown is ‘m’ length long (starting from 0 till m), and the time when the ads can be shown is given in the format [(a1, b1), (a2, b2), …, (an, bn)], where ith tuple in the array denotes the timing of the ith ad in the format (start_time, end_time). Note that any ‘ai’ and ‘bi’ cannot be smaller than 0 and cannot be larger than ‘m’. When you choose to show an ad, you cannot show another ad within 4 minutes of it’s end. So if you select to show the ad having timings as (2, 4), then you cannot show another ad before 9, hence next ad cannot be (8, 10), but it can be (9, 12). You have to select the ads to show to the audience such that you maximize the sum of the effectiveness values of the ads, given the above constraints. For example, if ‘m’ is 20, and the timings of the ads are [(2, 3), (6, 9), (10, 12), (12, 13), (14, 17)] and the effectiveness values are [3, 9, 10, 6, 7], then you can show ad 2 and ad 5 (one-based-indexing) and have an effectiveness value of 16, which is the maximum you can get given the constraints.


// https://www.geeksforgeeks.org/goldman-sachs-interview-experience-2019-3/?ref=leftbar-rightbar


function showMaxAds(arr, limit, duration, priceArr) {
    let i = 0;
    let j = arr.length - 1;
    let finalSum = 0;
    debugger;
    while(i <= j && j >= 0){
        const {start: is, end: ie} = arr[i];
        const {start: js, end: je} = arr[j];
        if(is > 0 && ie + limit <= js && js <= duration) {
            finalSum = Math.max(finalSum, priceArr[i] + priceArr[j]);
            if(priceArr[i + 1] > priceArr[i]) i++;
            else if(priceArr[j - 1] > priceArr[j]) j--;
        }
    }
    return finalSum;
}

showMaxAds([{start: 2, end: 3}, {start: 6, end: 9}, {start: 10, end: 12}, {start: 12, end: 13}, {start: 14, end: 17}], 4, 20, [3, 9, 10, 6, 7]);

// for(let i = 0, len = arr.length; i < len; i++) {