import { createStore, applyMiddleware } from 'redux'
import app from '../reducers'
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../sagas/rootSaga'
import { composeWithDevTools } from 'redux-devtools-extension';
const sagaMiddleware = createSagaMiddleware()
const composeEnhancers = composeWithDevTools({
   
});

export default function configureStore() {
    const store = createStore(app, composeWithDevTools(applyMiddleware(sagaMiddleware)))
    sagaMiddleware.run(rootSaga)
    return store
  }