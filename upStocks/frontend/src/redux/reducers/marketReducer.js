// import { commaSeparate } from './../../util/helper';
const initialState = {

}


const market = (prevState = initialState, action) => {

    switch(action.type) {
        case 'FETCH_HISTORICAL_LOAD':
            return Object.assign({}, prevState, {
                loading: true
            });
        case 'FETCH_HISTORICAL_SUCCESS':
            // const result = commaSeparate(action.data);
            return Object.assign({}, prevState, {
                historicalData: action.data
            });
        default:
            return prevState;
    };  
}
export default market;
