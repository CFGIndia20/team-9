import { LOGIN,REGISTER,CLEAR_REGISTRATION,CREATE_PROFILE,ccp,save_uid } from './types';
import axios from 'axios';
import { useRadioGroup } from '@material-ui/core';

// axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';
export const login = (no,pass) => dispatch => {
  // var sendkey=new  FormData();
  // sendkey.append('mobile_number',parseInt(no));
  // sendkey.append('password',pass);
  // console.log(no,pass);
  // console.log('login',no,pass);
  var s={
    'phoneNo':no,
    'password':pass,
  }
  console.log(s);
  axios.post(`https://us-central1-cfg2020-dca44.cloudfunctions.net/Express/user/login`,s)
  .then(response =>
    dispatch({
      type: LOGIN,
      payload: response.data
    })
    // console.log(payload);
  );
  // axios.post(`https://test-dot-mimimo-react.appspot.com/api/web_login_user`,sendkey)
  //   .then(response =>
  //     dispatch({
  //       type: LOGIN,
  //       payload: response.data
  //     })
  //   );
};


export const save_id = (id) => dispatch => {
  dispatch({
    type: save_uid,
    payload: id,
  })
};

export const register = (no,pass) => dispatch => {
  var s={
    'phoneNo':no,
    'password':pass,
  }
  console.log(s);
  axios.post('https://us-central1-cfg2020-dca44.cloudfunctions.net/Express/user/signUp',s)
  .then(response =>
    dispatch({
      type: REGISTER,
      payload: response.data
    })
  );
};


export const create_pro = (state) => dispatch => {

  var s={
    'name':state.name,
    'location':state.location,
    'timeAvail':state.avail,
    'role':'Women',
  }
  console.log(s);
  // var headers= {
  //   'Access-Control-Allow-Origin': '*',
  //   'Content-Type': 'application/json',
  // };
  // var sendkey=new  FormData();
  // console.log(state);
  // sendkey.append('name',state.name);
  // sendkey.append('location',state.location);
  // sendkey.append('timeAvail',state.timeAvail);
  
  // console.log(no,pass);
  // console.log('login',no,pass);

  axios.post(`https://us-central1-cfg2020-dca44.cloudfunctions.net/Express/user/userInfo`,s)
    .then(response =>
      dispatch({
        type: CREATE_PROFILE,
        payload: response.data
      })
    );
};

