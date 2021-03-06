/**
 * Created by cloudStrife on 18/09/2017.
 */
import { createStore, combineReducers } from 'redux'
import { user , userFB , photos , signin , signup, userDashboard} from './reducers'
//import thunk from 'redux-thunk'

const initialState = {
  user : {
    connected : false
  },
  userFB : {
    available : false
  },
  photos : [],
  signup : {
    success : false ,
    error : false ,
    message : "",
    fieldErrorMessage : "",
    email : "" ,
    password : ""
  },
  signin : {
    error : false ,
    message : "",

  },
  userDashboard : {
    error : false ,
    errorMessage : "",
    loading : false,
    loadingMessage : "",
    loaded : false,
    upload : false,
    uploaded : false,
    isLightboxOpen : false ,
    photoIndex : 0
  }
}


const storeFactory = () => {
        return createStore(
            combineReducers({user,userFB,photos,signin,signup,userDashboard}),
            initialState
        )
}


export default storeFactory;
