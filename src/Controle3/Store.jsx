import {legacy_createStore} from 'redux'
import Reducervoiture from './Reducer.jsx'
const StoreVoiture=legacy_createStore(Reducervoiture)
export default StoreVoiture
