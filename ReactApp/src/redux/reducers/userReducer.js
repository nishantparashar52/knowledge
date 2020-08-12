const initialState = {

}


const user = (prevState = initialState, action) => {

    switch(action.type) {
        case 'FETCH_USER_LOAD':
            return Object.assign({}, prevState, {
                loading: true
            });
        case 'FETCH_USER_SUCCESS':
            return Object.assign({}, prevState, {
                userData: action.data
            });
        default:
            return prevState;
    };  
}
export default user;
