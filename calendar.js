class Calendar {
    constructor() {
        this.months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        this.days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    }
    create(year, month) {
        const table = document.createElement('table');
        const tBody = document.createElement('tbody');
        const firstDay = (new Date(year, month)).getDay();
        const getNoOfDays = this.getDaysInMonth(year, month);
        let date = 1;
        const heading = this.showMonthYearTitle(year, month);
        const div = document.createElement('div');
        div.appendChild(heading);
        this.createDays(table);
        for(let j = 0; j < 6; j++) {
            const tr = document.createElement('tr');
            for(let i = 0, len = this.days.length; i < len ; i++) {
                const td = document.createElement('td');
                let textNode;
                if(j === 0 && i < firstDay) {
                    textNode = document.createTextNode('');
                } else if(getNoOfDays >= date) {
                    textNode = document.createTextNode(date);
                    date++;
                }
                else break;
                td.appendChild(textNode);
                tr.appendChild(td);
            }
            tBody.appendChild(tr);
        }
        table.appendChild(tBody);
        div.appendChild(table);
        return div;
    }
    createDays(table) {
        const tHead = document.createElement('thead');
        const tr = document.createElement('tr');
        for(let i = 0, len = this.days.length; i < len ; i++) {
            const td = document.createElement('td');
            const textNode = document.createTextNode(this.days[i]);
            td.appendChild(textNode);
            tr.appendChild(td);
        }
        tHead.appendChild(tr);
        table.appendChild(tHead);
    }
    showFullYear(year) {
        for(let i = 0, len = this.months.length; i < len; i++) {
            const table = this.create(year, i);
            document.body.appendChild(table);
        }
    }
    getDaysInMonth(year, month) {return new Date(year, month + 1, 0).getDate();}
    showMonthYearTitle(year, month) {
       const elem = document.createElement('div');
        elem.innerHTML = this.months[month] + ', ' + year;
        return elem;
    }
}

var cal = new Calendar();
cal.showFullYear(2020);