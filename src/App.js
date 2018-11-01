import React, { Component } from 'react'
import { Text, View } from 'react-native'
import  CreateSwitchNavigator from './navigation/Navigation'
import { Provider } from 'react-redux'
import configureStore from './store'

const store = configureStore()

export class App extends Component {
  render() {
    return (
        <Provider store={store}>
          <CreateSwitchNavigator/>
        </Provider>
    )
  }
}

export default App