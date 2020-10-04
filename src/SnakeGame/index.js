const BG_COLOR =  "#000";
const FOOD_COLOR =  'red';
const SNAKE_COLOR = '#fff';



class Snake {
    constructor(id = 'canvas', height = '400', width = '400', FrameRate = '5', Size = '20') {
        this.canvas = document.getElementById(id);
        this.ctx = this.canvas.getContext('2d');
        this.canvas.height = height;
        this.canvas.width = width;
        this.FR = FrameRate;
        this.S = Size;
        this.T = this.canvas.width / this.S;
        this.init();
        this.pos, this.vel, this.food, this.snake;
        this.gameLoop = this.gameLoop.bind(this);
        this.KeyPush = this.KeyPush.bind(this);
    }

    init() {
        this.pos = {
            x: 10, y: 10
        };
        this.vel = {
            x: 0, y: 0
        };
        this.snake = [
            {x: 8, y: 10},
            {x: 9, y: 10},
            {x: 10, y: 10},
            {x: 11, y: 10}
        ];
        this.randomFood();
    }
    randomFood() {
        this.food = {x: Math.floor(Math.random() * this.T), y: Math.floor(Math.random() * this.T)};


        for(let cell of this.snake) {
            if(this.food.x === cell.x || this.food.y === cell.y) {
                return this.randomFood();
            }
        }
    }
    KeyPush(evt) {
        switch(evt.keyCode) {
            case 37: {
                return this.vel = { x: -1, y: 0};
            }
            case 38: {
                return this.vel = { x: 0, y: -1};
            }
            case 39: {
                return this.vel = { x: 1, y: 0};
            }
            case 40: {
                return this.vel = { x: 0, y: 1};
            }
        }
    }

    gameLoop() {
        this.ctx.fillStyle = BG_COLOR;
        this.ctx.fillRect(0, 0, canvas.width, canvas.height);
    
        this.ctx.fillStyle = SNAKE_COLOR;
    
        for(let cell of this.snake) {
            this.ctx.fillRect(cell.x * this.S, cell.y * this.S, this.S, this.S);
        }
    
        this.ctx.fillStyle = FOOD_COLOR;
        this.ctx.fillRect(this.food.x * this.S, this.food.y * this.S, this.S, this.S);
    
        this.pos.x += this.vel.x;
        this.pos.y += this.vel.y;
    
        if(this.pos.x < 0 || this.pos.y < 0 || this.pos.x > this.T || this.pos.y > this.T) {
            this.init();
        }
        if(this.food.x === this.pos.x && this.food.y === this.pos.y) {
            this.snake.push({...this.pos});
            this.pos.x += this.vel.x;
            this.pos.y += this.vel.y;
            this.randomFood();
        }
    
        if(this.vel.x || this.vel.y) {
            for(let cell of this.snake) {
                if(cell.x === this.pos.x && cell.y === this.pos.y)  {
                    return this.init();
                }
            }
            this.snake.push({...this.pos});
            this.snake.shift();
        }
    }


}

var S = new Snake();

document.addEventListener('keydown', S.KeyPush);

setInterval(() => {
    requestAnimationFrame(S.gameLoop);
}, 1000/ 5);
