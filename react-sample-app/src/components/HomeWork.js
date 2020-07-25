import React from 'react';
import Button from '@material-ui/core/Button';
import classe from './Task.module.css';

function displayHomeWorkList() {
    const list=[ "DiyaMaking",
                "SoftSkills",
                "Embroidery",
                "maintaining Budget",
                "20 coasters",
                "curtains",
                ];
    return (
        <div>
        <h2 className={classe.heading}>CLICK TO UPLOAD CONTENT</h2>
        <div style={{margin:"6em 37em"}}>
               {list.map((item,index)=>{
                  return <Button className={classe.list_item} key={index}>{item}</Button>
               })}
           
        </div>
        </div>
    );
}
export default displayHomeWorkList;