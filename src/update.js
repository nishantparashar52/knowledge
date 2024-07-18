function update(state, commands) {
    const newState = { ...state };
    for(const key in state) {
        if(state[key].hasOwnProperty('$set')) {
            newState[key] = state[key].$set;
        }
    }
    return newState;
}