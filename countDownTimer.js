function countDown(time) {
    let currTime = new Date();
    let futureTime = new Date(time);
    let diff = futureTime - currTime;
    let second = 1000;
    let minute = second * 60;
    let hour = minute * 60;
    let day = hour * 24;
    const dayLeft = Math.floor(diff / day);
    const hourLeft = Math.floor((diff % day) / hour);
    const minuteLeft = Math.floor((diff % hour) / minute);
    const secondLeft = Math.floor((diff % minute) / second);
    console.log(`day ${dayLeft} hour ${hourLeft} minute ${minuteLeft} second ${secondLeft}`);
}

let c = setInterval(countDown.bind(null, '15 May 2021'), 1000);