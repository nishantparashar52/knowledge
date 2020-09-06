import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import mySaga from './redux/sagas';
import reducers from './redux/reducers';

export default function createStoreWithMiddleware() {
    const sagaMiddleware = createSagaMiddleware();
    const middleware = [sagaMiddleware];

    const enhancers = compose(
        applyMiddleware(...middleware)
    );

    const store = createStore(reducers,enhancers);

    sagaMiddleware.run(mySaga);
    return store;
}
