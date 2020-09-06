// import { commaSeparate } from './../../util/helper';
const initialState = {

}


const market = (prevState = initialState, action) => {

    switch(action.type) {
        case 'FETCH_HISTORICAL_LOAD':
            return Object.assign({}, prevState, {
                loading: true,
                historicalData: null
            });
        case 'FETCH_HISTORICAL_SUCCESS':
            let marketData = [...action.data];
            for (let i = 0, len = action.data.length; i < len; i++) {
                let item = action.data[i];
                const splitData = item.split(',');
                const obj = {
                    time: new Date(Number(splitData[0])),
                    open: splitData[1],
                    high: splitData[2],
                    low: splitData[3],
                    close: splitData[4],
                    volume: splitData[5]
                };
                marketData[i] = obj;
            }
            // const result = commaSeparate(action.data);
            return Object.assign({}, prevState, {
                historicalData: marketData
            });
        default:
            return prevState;
    };  
}
export default market;
