import { all } from 'redux-saga/effects';

import { market } from './market';

export default function* rootSaga() {
    yield all ([
        market()
    ]);
}