export const types = {
    FETCH_USER_LOAD: 'FETCH_USER_LOAD',
    FETCH_USER_SUCCESS: 'FETCH_USER_SUCCESS',
    FETCH_USER_FAIL: 'FETCH_USER_FAIL'
  };
  
  export function fetchData() {
    return { type: types.FETCH_USER_LOAD };
  }