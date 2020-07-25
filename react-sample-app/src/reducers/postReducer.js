import { FETCH_POSTS, NEW_POST,GET_PROPERTY,LOGIN,VERIFY_OTP,REGISTER,CLEAR,UPDATE_DATA,TOKEN_ID,
  LOGOUT,GET_DETAILS,SERVICE_WITH_ID,service_nextTokens,service_availability,service_prosCovered ,service_bookSlot,clear_service_booking } from '../actions/types';

const initialState = {
  
  loggedin:{
    success:false,
  },
  


};

export default function(state = initialState, action) {
  switch (action.type) {
    
     
      case LOGIN:
      return {
        ...state,
        loggedin: action.payload
      };
      
      
    default:
      return state;
  }
}
