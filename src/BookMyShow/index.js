import { BMSData } from "./Data.js";
const {
    category,
    layout
} = BMSData;
class BookMyShow {
    constructor(seatsNeeded) {
        this.rowName = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
        this.category = new Array(category.length - 1);
        this.seatsNeeded = seatsNeeded;
        this.bookedSeats = [];
        this.seatClick = this.seatClick.bind(this);
        this.updateSeats = this.updateSeats.bind(this);
    }
    makeLayout() {
        const table = document.createElement('table');
        const tBody = document.createElement('tbody');
        for (let i = 0; i < layout.length; i++) {
            let seatIndex = 1;
            let start = layout[i].start;
            let end = layout[i].end;
            let seats = layout[i].seats;
            const th = document.createElement('th');
            let thNode = document.createTextNode(this.rowName[i]);
            th.appendChild(thNode);
            const tr = document.createElement('tr');
            tr.appendChild(th);
            for (let j = 0; j < end; j++) {
                let textNode;
                const td = document.createElement('td');
                if (seatIndex >= start && seatIndex <= end) {
                    td.setAttribute('exist', true);
                    td.setAttribute('available', true);
                    textNode = document.createTextNode(seatIndex);
                    seatIndex++;
                } else if (seatIndex < start) {
                    textNode = document.createTextNode('');
                    seatIndex++;
                } else break;
                td.appendChild(textNode);
                tr.appendChild(td);
            }
            tBody.addEventListener('click', this.seatClick);
            tBody.appendChild(tr);
        }
        table.appendChild(tBody);
        const selectList = document.createElement("select");
        selectList.id = "seats";
        const options = [1,2,3,4,5,6,7,8,9,10];
        for (var i = 0; i < options.length; i++) {
            const option = document.createElement("option");
            option.value = options[i];
            option.text = options[i];
            selectList.appendChild(option);
        }
        if (selectList.options[this.seatsNeeded]) selectList.options[this.seatsNeeded - 1].defaultSelected = true;
        selectList.addEventListener('change', this.updateSeats);
        document.getElementById('bookMyshow').appendChild(selectList);
        document.getElementById('bookMyshow').appendChild(table);
    }
    seatClick(ev) {
        const noOfSeats =this.seatsNeeded === 0 ? [] : [...this.bookedSeats];
        const _this = this;
        function nextSibling(elem) {
            if(_this.seatsNeeded === 0 && _this.bookedSeats) {
                for(let i = 0, len = _this.bookedSeats.length; i < len; i++) {
                    const currSeat = _this.bookedSeats[i];
                    currSeat.setAttribute('available', true);
                    currSeat.removeAttribute('booked'); 
                    _this.seatsNeeded += 1;
                }
            }
            if(elem === null) {
                _this.bookedSeats = noOfSeats;
                return _this.bookedSeats;
            }
            if(elem.getAttribute('available')) {
                elem.removeAttribute('available');
                elem.setAttribute('booked', true);
                noOfSeats.push(elem);
                _this.seatsNeeded -= 1;
            } else {
                _this.bookedSeats = noOfSeats;
                showBookNowBtn(noOfSeats, _this.bookedSeats)
                return _this.bookedSeats;
            }
            if (_this.seatsNeeded > 0) nextSibling(elem.nextSibling);
            else {
                _this.showBookNowBtn(_this.seatsNeeded, _this.bookedSeats);
                _this.bookedSeats = noOfSeats;
                return _this.bookedSeats;
            }
        }
        return nextSibling(ev.target);
    }
    showBookNowBtn(noOfSeats, bookedSeats) {

        const btn = document.getElementById('bookNow');
        if(noOfSeats > 0) {
            btn.style.display = 'none';
            return;
        };
        btn.style.display = 'block';
        const _this = this;
        btn.addEventListener('click', function(){
            alert(category[0].price * _this.bookedSeats.length);
        })
    }
    updateSeats() {
        const seatsVal = document.getElementById('seats');
        this.seatsNeeded = seatsVal.value || '';
        document.getElementById('bookMyshow').innerHTML ='';
        this.makeLayout();
    }
}

const BMS = new BookMyShow(9);
BMS.makeLayout();