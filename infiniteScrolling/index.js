class Infinite {
    constructor(length) {
        this.listItem = document.getElementById('listItem');
        this.endList = document.getElementById('endList');
        this.itemLength = length || 20;
        this.isLoading = false;
        this.count = 1;
        this.appendList();
        this.intersection();
    }
    appendList() {
        this.isLoading = true;
        for(let i = 0; i< this.itemLength; i++) {
            let item = document.createElement('div');
            item.classList.add('item');
            item.innerHTML = `hello ${this.count}`;
            this.listItem.appendChild(item);
            this.count++;
        }
        this.isLoading = false;
    }
    intersection() {
        let options = {
            root: null, // browser viewport
            rootMargin: "0px",
            threshold: '1.0'
        }
        let observer = new IntersectionObserver(this.handleIntersect.bind(this), options);
        observer.observe(this.endList);
    }
    handleIntersect(entries, observer) {
        entries.forEach(entry => {
            if(entry.target.id ==='endList' && entry.isIntersecting && !this.isLoading) {
                setTimeout(() => {
                    this.appendList();
                }, 500);
            }   
        });
    }
}
new Infinite();