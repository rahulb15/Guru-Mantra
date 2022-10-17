import cakeReducer from "./cake/cakeReducer";
import {createStore} from 'redux';


const store = createStore(cakeReducer)

export default store