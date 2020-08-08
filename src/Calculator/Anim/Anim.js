class Anim {
    constructor() {
        this.tempVal = 1;
    }
    move(time) {
        const elem = document.getElementsByClassName('childBox');
        const refreshInterval = setInterval(() => {
            if(this.tempVal >= screen.width) {
                clearInterval(refreshInterval);
            }
            else {
                this.tempVal += (screen.width)/time;
                elem[0].style.width = this.tempVal + 'px';
            }
        }, 1000/time);
    }
    reduce(time) {
        const elem = document.getElementsByClassName('childBox');
        const refreshInterval = setInterval(() => {
            if(this.tempVal <= 0) {
                clearInterval(refreshInterval);
            }
            else {
                this.tempVal -= (screen.width)/time;
                elem[0].style.width = this.tempVal + 'px';
            }
        }, 1000/time);
    }
}
var Animation = new Anim();
Animation.move(20); // in how much second it should cover say 1 second then
// logic would be it would cover in 1 second from start to end