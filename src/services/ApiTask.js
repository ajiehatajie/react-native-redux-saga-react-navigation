import axios from 'axios'
import { BASE_URL } from '../contants/constants'

/*
export default () => {
    return new Promise((resolve, reject) => {
        return resolve(axios.get(BASE_URL))

    })
  }
*/

  async function ambilData() {
    return await axios.get(BASE_URL)   
  }
  export default ambilData 