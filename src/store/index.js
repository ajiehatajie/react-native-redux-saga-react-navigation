import { createStore, applyMiddleware } from 'redux'
import app from '../reducers'
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../sagas/rootSaga'
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'


const persistConfig = {
  key:"root",
  storage
}
const sagaMiddleware = createSagaMiddleware()
const persistedReducer = persistReducer(persistConfig, app)

//const composeEnhancers = composeWithDevTools({
//});

export default function configureStore() {
  
   const store = createStore(persistedReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
    )
   sagaMiddleware.run(rootSaga)
   const persistor = persistStore(store)
    return { store, persistor }
  }
