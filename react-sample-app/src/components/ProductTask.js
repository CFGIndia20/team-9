// import React from 'react';
import Button from '@material-ui/core/Button';
import classe from './Task.module.css';
import { PC ,te_id } from '../actions/postActions';
import { connect } from 'react-redux';
import React,{Component} from "react";
import Grid from '@material-ui/core/Grid';

import {
    BrowserRouter as Router,
    Switch,
    useLocation,
    IndexRoute,
    Route,
    Link,
    Redirect,
    useParams
  } from "react-router-dom";
  
// function displayProductTaskList() {

// 

class displayProductTaskList extends Component {


    constructor(props) {
      super(props);
      this.cal=this.cal.bind(this);

    }

    cal=(id,mode)=>{
        console.log(id,mode);
        this.props.te_id(id,mode);

    }

    render() {
        console.log(this.props.prod_call);
        
    const productlist=[ 

    // ];
        { 'id':"tlqFuShm7RhoLq0UoCBB",
        'name': "DiyaMaking",
        'desc':'Dia making with glitter',
    },
    { 'id':"id",
    'name': "Embroidery",
    'desc':'some description',
},  { 'id':"id",
'name': "maintaining Budget",
'desc':'some description',
},
,  { 'id':"id",
'name': "curtains",
'desc':'some description',
},
];

          return (
//   return (
        <div>
                <br/>
                <br/>
                <br/>

<Grid container>
  <Grid item lg={4} md={4} sm={2} xs={2} >
  </Grid>

  <Grid item lg={4} md={4} sm={8} xs={8} >

        {/* <h2 className={classe.heading}>CLICK TO UPLOAD CONTENT</h2> */}
        <div 
        // style={{margin:"6em 37em"}}
        >
            
               {productlist.map((item)=>{
                  return <div>
                    <Grid container>
                    <Grid item lg={6} md={6} sm={6} xs={6} >
                      <div className={classe.pad}><b>{item.name}</b></div>
                      <div>{item.desc}</div>
                      <br/>
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xs={6} >

                    <Link to="/Post" > <Button color="primary"  variant="contained" onClick={() => this.cal(item.id,'product')} size="small" className={classe.list_item} key={item.id}>UPLOAD</Button></Link>
                      </Grid>

  </Grid>
  </div>

               })}
           
        </div>
  </Grid>
  <Grid item lg={4} md={4} sm={2} xs={2} >
  </Grid>
  </Grid>

        </div>
    );
}
}
// export default displayProductTaskList;
const mapStateToProps = state => ({
    userid: state.data.userid,
    home_call: state.data.home_call,
    prod_call: state.data.prod_call,
    temp: state.data.temp,

  // newPost: state.posts.item
  });
  
  export default connect(mapStateToProps,{PC,te_id})(displayProductTaskList);