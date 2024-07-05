class Section {
    constructor() {
        this.arr = [];
    };
    add = data => {
        this.arr.push(data);
        this.renderData();
    };
    delete = index => {
        if(this.arr[index]) {
            this.arr.splice(index,1);
            this.renderData();
        }
    };
    renderData = () => {
        const item = this.arr;
        const renderedData = item.map(item =>
            `<div class="parent flex vertical">
            ${item.name}
            <div class="flex space-between">
            <div onclick=${() => removeNode(id)}>Delete</div>
            <div onclick=${() => editNode(id)}>Edit</div>
            </div>
        </div>`);
        var temporalDivElement = document.createElement("div");
        for(var i = 0, len = item.length; i < len; i++) {
            temporalDivElement.innerHTML += renderedData[i];
        }
        return temporalDivElement || "";
    };
}

var sec1 =  new Section();
sec1.add({'name': 'nishant', id: 0});
sec1.add({'name': 'atul', id: 1});
sec1.renderData();



class Section {
    constructor() {
        this.arr = [];
    };
    add = data => {
        this.arr.push(data);
        this.renderData();
    };
    delete = index => {
        if(this.arr[index]) {
            this.arr.splice(index,1);
            this.renderData();
        }
    };
    renderData = () => {
        const item = this.arr;
        const renderedData = item.map(item =>
            `<div class="parent flex vertical">
            ${item.name}
            <div class="flex space-between">
            <div onclick=${() => removeNode(id)}>Delete</div>
            <div onclick=${() => editNode(id)}>Edit</div>
            </div>
        </div>`);
        var temporalDivElement = document.createElement("div");
        for(var i = 0, len = item.length; i < len; i++) {
            temporalDivElement.innerHTML += renderedData[i];
        }
        temporalDivElement || "";
document.getElementById('appendDom').append(temporalDivElement);
    };
}

var sec1 =  new Section();
sec1.add({'name': 'nishant', id: 0});
sec1.delete('0')