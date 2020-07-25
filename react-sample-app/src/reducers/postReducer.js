import { LOGIN,REGISTER,CLEAR_REGISTRATION,CREATE_PROFILE,ccp} from '../actions/types';

const initialState = {
  
  loggedin:{
    success:false,
  },
  register_:{
    success:false,
  },
  profile_created:{
    success:false,
  }
  


};

export default function(state = initialState, action) {
  switch (action.type) {
    
     
      case LOGIN:
      return {
        ...state,
        loggedin: action.payload,
      };
      case REGISTER:
      return {
        ...state,
        register_: action.payload,
      };
      case CLEAR_REGISTRATION:
      return {
        ...state,
        register_: false,
      };
      case CREATE_PROFILE:
      return {
        ...state,
        profile_created: action.payload,
      };
      case ccp:
        return {
          ...state,
          profile_created:false,
        };
      
      
    default:
      return state;
  }
}
