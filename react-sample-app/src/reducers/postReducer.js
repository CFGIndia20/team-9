import { LOGIN,REGISTER,CLEAR_REGISTRATION,CREATE_PROFILE,ccp,save_uid,is_loggedin,homework_call,product_call,temp_id} from '../actions/types';

const initialState = {
  
  loggedin:{
    status:'error',
  },
  is_log:false,
  register_:{
    // success:true,
    // status:'success',
    status:'error',
  },
  userid:'pRMNaYBe5UShwPmxKxA1CppKgO',
  profile_created:{
    // success:false,
    status:'error',
  },
  home_call:[
    {

    }
  ],
  prod_call:[],
  temp:{
    tid:'',
    mode:'',
  }
  
};

export default function(state = initialState, action) {
  switch (action.type) {
    
      case is_loggedin:
      return {
        ...state,
        is_log: action.payload,
        // userid:action.payload.
      };
      case temp_id:
      return {
        ...state,
        temp: action.payload,
        // userid:action.payload.
      };
      case homework_call:
      return {
        ...state,
        home_call: [action.payload],
        // userid:action.payload.
      };
      case product_call:
      return {
        ...state,
        prod_call: [action.payload],
        // userid:action.payload.
      };
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
