export const types = {
    FETCH_HISTORICAL_LOAD: 'FETCH_HISTORICAL_LOAD',
    FETCH_HISTORICAL_SUCCESS: 'FETCH_HISTORICAL_SUCCESS',
    FETCH_HISTORICAL_FAIL: 'FETCH_HISTORICAL_FAIL'
  };
  
  export function fetchHistoricalData() {
    return { type: types.FETCH_HISTORICAL_LOAD };
  }