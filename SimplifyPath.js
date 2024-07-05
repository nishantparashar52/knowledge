function SimplifyPath(path) {
    const stack = [];
  let pathArr = path.split('/').filter(item => item !== '.').filter(item => item !== '');
    for(let k of pathArr) {
        if(k === '..') {
            stack.pop();
        } else stack.push(k);
    }
    return '/' + stack.join('/');
}
export default SimplifyPath;