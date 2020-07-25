import { LOGIN,REGISTER,CLEAR_REGISTRATION,CREATE_PROFILE,ccp,save_uid} from '../actions/types';

const initialState = {
  
  loggedin:{
    status:'error',
  },
  register_:{
    // success:true,
    // status:'success',
    status:'error',
  },
  userid:'',
  profile_created:{
    // success:false,
    status:'error',

  }
  
};

export default function(state = initialState, action) {
  switch (action.type) {
    
     
      case LOGIN:
      return {
        ...state,
        loggedin: action.payload,
        // userid:action.payload.
      };
      case REGISTER:
      return {
        ...state,
        register_: action.payload,
      };
      case CLEAR_REGISTRATION:
      return {
        ...state,
        register_:{
          status: 'error',}
      };
      case CREATE_PROFILE:
      return {
        ...state,
        profile_created: action.payload,
      };
      case ccp:
        return {
          ...state,
          profile_created:{
            status: 'error',}
        };
        case save_uid:
        return {
          ...state,
          userid:action.payload,
        };
      
      
    default:
      return state;
  }
}
