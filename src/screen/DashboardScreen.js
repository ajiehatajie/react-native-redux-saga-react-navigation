import React, { Component } from 'react'
import {
    ActivityIndicator,
    AsyncStorage,
    StatusBar,
    StyleSheet,
    View,Button,Text,TouchableHighlight
  } from 'react-native';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as fetchData from '../actions'
import {FETCHING_DATA} from '../contants/constants'

class DashboardScreen extends Component {
  render() {
      console.log(this.props)
     
    return (
      <View style={styles.container}>
          <Text style={styles.text}>Redux Examples</Text>
         
          <TouchableHighlight style={styles.button} onPress={() => this.props.fetchKecamatan()}>
              <Text style={styles.buttonText}>Load Data</Text>
          </TouchableHighlight>

           <View style={styles.mainContent}>
          {
            this.props.appData.isFetching && <Text>Loading</Text>
          }
          {
             this.props.appData.data.length ? (
              this.props.appData.data.map((person, i) => {
                return <View key={i} >
                  <Text>Name: {person.name}</Text>
                  <Text>Age: {person.age}</Text>
                </View>
              })
            ) : null
          }
          </View>

     
    </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    marginTop: 100
  },
  text: {
    textAlign: 'center'
  },
  button: {
    height: 60,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0b7eff'
  },
  buttonText: {
    color: 'white'
  },
  mainContent: {
    margin: 10,
  }
})
  function mapStateToProps (state) {
    return {
      appData: state.appData
    }
  }
  
  /*
  function mapDispatchToProps (dispatch) {
    return {
      fetchData: () => dispatch({'type':FETCHING_DATA})
    }
  }

  */
 const mapDispatchToProps = {
  ...fetchData,
}
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(DashboardScreen)