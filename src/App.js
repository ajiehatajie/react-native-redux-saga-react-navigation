import React, { Component } from 'react'
import { Text, View } from 'react-native'
import  CreateSwitchNavigator from './navigation/Navigation'
import { Provider } from 'react-redux'
import configureStore from './store'
import { PersistGate } from 'redux-persist/integration/react'

const { store, persistor } = configureStore()



export class App extends Component {
  render() {
    return (
        <Provider store={store}>
           <PersistGate loading={null} persistor={persistor}>
                <CreateSwitchNavigator/>
           </PersistGate>
        </Provider>
    )
  }
}

export default App