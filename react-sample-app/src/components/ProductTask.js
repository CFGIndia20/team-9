import React from 'react';
import Button from '@material-ui/core/Button';
import classe from './Task.module.css';

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
  
function displayProductTaskList() {
    // 
    const productlist=[ "DiyaMaking",
    "Embroidery",
    "maintaining Budget",
    "20 coasters",
    "curtains",];
    return (
        <div>
        {/* <h2 className={classe.heading}></h2> */}
        <div style={{margin:"6em 37em"}}>
               {productlist.map((item,index)=>{
                  return  <Link to="/HomeWork" ><Button className={classe.list_item} key={index}>{item}</Button></Link>
               })}
           
        </div>
        </div>
    );
}
export default displayProductTaskList;