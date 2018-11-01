import { FETCHING_DATA, FETCHING_DATA_SUCCESS, FETCHING_DATA_FAILURE }  from '../contants/constants'
import { put, takeEvery } from 'redux-saga/effects'
import getPeople from '../services/Api'
import getData from '../services/ApiTask'

function* fetchData (action) {
    try {
      //const data = yield getPeople()

      const res = yield getData()
      console.log('sagas get',res.data)
      yield put({ type: FETCHING_DATA_SUCCESS, data:res.data })
    } catch (e) {
      console.log(e)
      yield put({ type: FETCHING_DATA_FAILURE,message:e })
    }
  }
  
  function* rootSaga () {
    yield takeEvery(FETCHING_DATA, fetchData)
  }

  export default rootSaga;