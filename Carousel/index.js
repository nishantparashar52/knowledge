class Carousel {
    constructor(className, timeout) {
        this.itemClassName = className;
        this.items = document.getElementsByClassName(this.itemClassName);
        this.totalItems = this.items.length;
        this.slide = 0;
        this.moving = false;
        this.timeout = timeout;
        this.items[this.totalItems - 1].classList.add('prev');
        this.items[0].classList.add('active');
        this.items[1].classList.add('next');
        this.next = this.next.bind(this);
        this.prev = this.prev.bind(this);
    }
    prev() {
        if(!this.moving) {
            this.slide = this.slide === 0 ? this.totalItems - 1 : this.slide - 1;
            this.moveCarouselTo();
        }
    }

    addEvListener() {
        let next = document.getElementsByClassName('carousel__button--next')[0],
        prev = document.getElementsByClassName('carousel__button--prev')[0];
        next.addEventListener('click', this.next);
        prev.addEventListener('click', this.prev);
    }
    next() {
        if(!this.moving) {
            this.slide = this.slide === (this.totalItems - 1) ? 0 : this.slide + 1;
            this.moveCarouselTo();
        }
    }
    disableInteraction() {
        this.moving = true;
        setTimeout(() => {
           this.moving = false; 
        }, this.timeout);
    }
    moveCarouselTo() {
        if(!this.moving) {
            this.disableInteraction();
            let oldPrevious = this.slide - 2;
            let newPrevious = this.slide - 1;
            let oldNext = this.slide + 2;
            let newNext = this.slide + 1;
            if(newPrevious <= 0) oldPrevious = this.totalItems - 1;
            else if(newNext >= this.totalItems - 1) oldNext = 0;

            if(this.slide === 0) {
                this.oldPrevious = this.totalItems - 2;
                this.newPrevious = this.totalItems - 1;
            } else if(this.slide === this.length - 1) {
                newPrevious = this.slide - 1;
                this.newNext = 0;
                this.oldNext = 1;
            }
            debugger;
            this.items[oldPrevious].className = this.itemClassName;
            this.items[oldNext].className = this.itemClassName;

            // new next
            this.items[newPrevious].className = this.itemClassName + ' prev';
            this.items[newNext].className = this.itemClassName + ' next';
            this.items[this.slide].className = this.itemClassName + ' active';
        }
    }
}
var C1 = new Carousel('carousel__photo', '500');
C1.addEvListener();