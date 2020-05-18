
class Calculator {
    getElemValue(elem) {
        return document.getElementById(elem).innerHTML;
    }
    setElemValue(elem, value) {
        const elemVal = document.getElementById(elem).innerHTML;
        document.getElementById(elem).innerHTML = value;
    }
    keyboard(ev) {
        const targetElem = ev.target;
        const elemId = targetElem.id;
        let historyValue = this.getElemValue('historyValue');
        const lastCharacter = historyValue.split('').pop();
        if(elemId === 'clear') {
            this.setElemValue('historyValue', '');
            this.setElemValue('finalValue', '');
            return;
        }
        if(targetElem.innerHTML === '=') {
            this.setElemValue('finalValue', eval(historyValue));
        }
        if(Number(lastCharacter) !== NaN && targetElem.innerHTML !== '=') {
            document.getElementById('historyValue').innerHTML = historyValue + targetElem.innerHTML;
        }
    }
}
var calc = new Calculator();

function keyboard(ev) {
    calc.keyboard(ev);
}