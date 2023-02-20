

function LazyMan(name, logFn) {
    setTimeout(() => console.log('0'),0);
    const cmds = [['greet', name]];
    const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
    const execute = {
        greet: val => logFn(`Hi I'm ${val}`),
        eat: val => logFn(`Eat ${val}`),
        sleep: val => sleep(val * 1000).then(() => logFn(`Wake up after ${val} seconds`))
    }
    Promise.resolve().then(executeAction);
    // executeAction();
    function executeAction() {
        for(let [command, val] of cmds) {
          execute[command](val);
        }
    }

    Promise.resolve(12).then(() => console.log('p'));
    return {
        eat: function(val) {
            cmds.push(['eat', val]);
            return this;
        },
        sleep: function(val) {
            cmds.push(['sleep', val]);
            return this;
        },
        sleepFirst: function(val) {
            cmds.unshift(['sleep', val])
            return this;
        }
    }
}

LazyMan('Jack', console.log).eat('Banana').sleep(2).eat('Apple');