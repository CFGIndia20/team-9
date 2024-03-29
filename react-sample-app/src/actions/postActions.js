import { LOGIN,REGISTER,CLEAR_REGISTRATION,CREATE_PROFILE,is_loggedin,ccp,save_uid,homework_call,product_call,temp_id,upload
  ,admin_ass,admin_work } from './types';
import axios from 'axios';
import { useRadioGroup } from '@material-ui/core';
// axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
// axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
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


export const  log_in = (val) => dispatch => {
  dispatch({
    type: is_loggedin,
    payload: val,
  })
};

export const te_id = (tid,mode) => dispatch => {
  dispatch({
    type: temp_id,
    payload: {tid,mode},
  })
};
export const save_id = (id) => dispatch => {
  dispatch({
    type: save_uid,
    payload: id,
  })
};


export const upload_your_file = (id,mode,file,message) => dispatch => {
  console.log(id,mode,file,message);
  console.log(mode);
  var sendkey=new  FormData();
  
  sendkey.append('upload-file',file);
  sendkey.append('taskId',id);
  sendkey.append('description',message);
  console.log(sendkey.get("file"));
  console.log(typeof(sendkey));
    
  // headers={'Content-Type': 'multipart/form-data' };
 
  console.log(sendkey.entries());
  for (var i of sendkey.entries()){
    console.log(i);
  }


  // if(mode=='homework'){
    console.log('task');

      axios.post('https://us-central1-cfg2020-dca44.cloudfunctions.net/Express/task/dailyUpdate',sendkey,{
        headers: {
          'Content-Type': 'multipart/form-data'
        }
    }) 
  .then(response =>
    dispatch({
      type: upload,
      payload: response.data,
    })
  );
  // }
  // else{
    console.log('product');
  // }
  //   axios.post('https://us-central1-cfg2020-dca44.cloudfunctions.net/Express/user/tasks',s)
  // .then(response =>
  //   dispatch({
  //     type: upload,
  //     payload: response.data,
  //   })
  // );
};


export const aas = (state) => dispatch => {
  console.log(state);
  var s={
    // 'userId':uid,
  }
  // console.log("useridddd",s);
  // debugger;
  console.log("task");
  axios.post('https://us-central1-cfg2020-dca44.cloudfunctions.net/Express/user/tasks',s)
  .then(response =>
    dispatch({
      type: admin_ass,
      payload: response.data,
    })
  );
};

export const aaw = (uid) => dispatch => {
  console.log(uid);
  var s={
    'userId':uid,
  }
  console.log("useridddd",s);
  // debugger;
  axios.post('https://us-central1-cfg2020-dca44.cloudfunctions.net/Express/user/tasks',s)
  .then(response =>
    dispatch({
      type: admin_work,
      payload: response.data,
    })
  );
};
export const PC = (uid) => dispatch => {
  console.log(uid);
  var s={
    'userId':uid,
  }
  console.log("useridddd",s);
  // debugger;
  axios.post('https://us-central1-cfg2020-dca44.cloudfunctions.net/Express/user/tasks',s)
  .then(response =>
    dispatch({
      type: product_call,
      payload: response.data,
    })
  );
};
export const HC = (uid) => dispatch => {
  console.log(uid);
  var s={
    'userId':uid,
  }
  console.log(s);
  // debugger;
  axios.post('https://us-central1-cfg2020-dca44.cloudfunctions.net/Express/user/homework',s)
  .then(response =>
    dispatch({
      type: homework_call,
      payload: response.data,
    })
  );
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

