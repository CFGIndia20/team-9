import { LOGIN } from './types';
import axios from 'axios';
import { useRadioGroup } from '@material-ui/core';


export const login = (no,pass) => dispatch => {
  var sendkey=new  FormData();
  sendkey.append('mobile_number',parseInt(no));
  sendkey.append('password',pass);
  console.log(no,pass);
  // console.log('login',no,pass);

  // axios.post(`https://test-dot-mimimo-react.appspot.com/api/web_login_user`,sendkey)
  //   .then(response =>
  //     dispatch({
  //       type: LOGIN,
  //       payload: response.data
  //     })
  //   );
};

