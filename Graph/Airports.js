const airports = 'PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM'.split(' ');

const routes = [
    ['PHX', 'LAX'],
    ['PHX', 'JFK'],
    ['JFK', 'OKC'],
    ['JFK', 'HEL'],
    ['JFK', 'LOS'],
    ['MEX', 'LAX'],
    ['MEX', 'BKK'],
    ['MEX', 'LIM'],
    ['MEX', 'EZE'],
    ['LIM', 'BKK'],
];


const adjencyList = new Map();

function addEdges(origin, destination) {
    adjencyList.get(origin).push(destination);
    adjencyList.get(destination).push(origin);
}

function addNodes(airport) {
    adjencyList.set(airport, []);
}

// Create Graph
airports.forEach(addNodes);
routes.forEach(route => addEdges(...route));

function Bfs(start) {
    const queue = [start];
    const visited = new Set();
    while(queue.length > 0) {
        const airport = queue.shift();
        const destinations = adjencyList.get(airport);
        for(let destination of destinations) {
            if(destination === start) console.log('found destination');
            if(!(visited.has(destination)))
                visited.add(destination);
                queue.push(destination);
                console.log(destination);
        }
    }
}