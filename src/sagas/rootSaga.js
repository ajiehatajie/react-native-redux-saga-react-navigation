import { FETCHING_DATA, FETCHING_DATA_SUCCESS, FETCHING_DATA_FAILURE }  from '../contants/constants'
import { put, takeEvery } from 'redux-saga/effects'
import getPeople from '../services/Api'


function* fetchData (action) {
    try {
      const data = yield getPeople()
      yield put({ type: FETCHING_DATA_SUCCESS, data })
    } catch (e) {
      yield put({ type: FETCHING_DATA_FAILURE })
    }
  }
  
  function* rootSaga () {
    yield takeEvery(FETCHING_DATA, fetchData)
  }

  export default rootSaga;