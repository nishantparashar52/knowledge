
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
}
let T = new Trie();
T.add('bat');
T.add('banana');
T.add('nishant parashar');
console.log(T.find('nishant parashar'));