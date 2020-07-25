import React from 'react';
import Button from '@material-ui/core/Button';
import classe from './Task.module.css';
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

function displayProductList() {
    const list=[ "DiyaMaking",
                "Embroidery",
                "maintaining Budget",
                "20 coasters",
                "curtains",
                ];
    return (
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
            
               {list.map((item,index)=>{
                  return <div>
                    <Grid container>
                    <Grid item lg={6} md={6} sm={6} xs={6} >
                      <div className={classe.pad}><b>{item}</b></div>
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xs={6} >

                    <Link to="/Post" ><Button color="primary" variant="contained" size="small" className={classe.list_item} key={index}>UPLOAD</Button></Link>
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
export default displayProductList;