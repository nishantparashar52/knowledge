
class Node {
    constructor(value) {
        this.children = {};
        this.endOfWord = false;
        this.value = value;
    }
}

class Trie {
    constructor() {
        this.root = new Node(null);
    }
    add(words) {
        let current = this.root;
        for(let word of words) {
            if(current['children'][word] === undefined) {
                current['children'][word] = new Node(word);
            }
            current = current['children'][word];
        }
        current.endOfWord = true;
    }
    find(words) {
        let current = this.root;
        for(let word of words) {
            if(current['children'][word]) current = current['children'][word];
            else return 'false';
        }
        return current.endOfWord;
    }
    findGroup(word) {
        let current = this.root;
        for(let w of word) {
            current = current['children'][w];
        }
        let arr = [], str = '';
        function innerFn(current, str = '') {
            Object.keys(current.children).map(item => {
                let currItem = current.children[item];
                if(!currItem.endOfWord) {
                    str = str.concat(currItem.value);
                    return innerFn(current.children[item], str);  
                } else str = str.concat(currItem.value);
                arr.push(str);
                str = '';
            });
            return arr;
        }
        return innerFn(current);
    }
}
let T = new Trie();
T.add('batman');
T.add('banana');
T.add('nishant parashar');
console.log(T.find('nishant parashar'));
console.log(T.findGroup('bat'));