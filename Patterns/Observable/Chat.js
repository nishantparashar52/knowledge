import Subject from "./Subject";
import Observer from "./Observer";
class ChatHistory extends Subject {
    constructor() {
        super();
        this.history = [];
    }
    update(state) {
        this.history.push(state);
        console.log(`updated chat history ${this.history}`);
    }
}

class MessageCount extends Subject {
    constructor() {
        super();
        this.count = 0;
    }
    update(state) {
        this.count += 1;
        debugger;
        console.log(`updated messages ${this.count}`);
    }
}


let chat = new Observer();
let history = new ChatHistory();
let count = new MessageCount();
chat.add(history);
chat.add(count);

chat.receiveMessage('Hi I am Nishant');