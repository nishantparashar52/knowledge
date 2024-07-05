function TaskRunner(concurrency) {
    this.limit = concurrency;
    this.active = 0;
    this.store = [];
}

TaskRunner.prototype.next = function() {
    if(this.store.length) this.runTask(...this.store.shift());
}


TaskRunner.prototype.runTask = function(task, name,n1) {
    this.active++;
    console.log(`Scheduling task ${n1} current active: ${this.active}`)
    task(name,n1).then(() => {
        this.active--;
        console.log(`Task ${n1} returned, current active: ${this.active}`)
        this.next();
    })

}

TaskRunner.prototype.push = function(task, name,n1) {
    if(this.active < this.limit) this.runTask(task, name,n1);
    else {
        console.log(`queuing task ${n1}`);
        this.store.push([task, name, n1]);
    }
}

const delay = (ms, name) => new Promise(resolve => {
    console.log(`Task ${name} Done`);
    return setTimeout(resolve, ms)});


var task = new TaskRunner(2);
task.push(delay, 1000, 1);
task.push(delay, 2000, 2);
task.push(delay, 1000, 3);
task.push(delay, 1000, 4);
task.push(delay, 1000, 5);
task.push(delay, 1000, 6);