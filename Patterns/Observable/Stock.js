import Observer from "./Observer.js";
import Subject from "./Subject.js";

Observer.prototype.notify = function() {
    this.observers.forEach(observer => observer.update(this))
}

class StockMarket extends Observer {
    constructor(symbol, price) {
        super();
        this.price = price;
        this.symbol = symbol;
    }
    setPrice(price) {
        this.price = price;
        this.notify();
    }
}

class Graph {
    constructor() {

    }
    update(stock) {
        console.log(`stock price is ${stock.symbol} ${stock.price}`)
    }
}
class NewsTicker {
    update(stock) {
      console.log(`News Ticker: Stock price of ${stock.symbol} updated to ${stock.price}`);
      // Update news ticker based on new stock price
    }
  }

let S = new StockMarket('Affle', 1000);
let G1 = new Graph();
let N = new NewsTicker();
S.add(G1);
S.add(N);
let i = 1000;
let interval = setInterval(() => {
    i += 10;
    S.setPrice(i);
}, 1000);
StockMarket.prototype.stop = function() {
    clearInterval(interval);
}
// S.setPrice(1200);