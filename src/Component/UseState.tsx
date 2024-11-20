import * as React from 'react';
import { useState } from 'react';
function Listgroup(){
    const listvalues = ["First","second","third","fourth","Five"];
    //useState is a React hook that lets you add and manage state in functional components, returning a state variable and a function to update it
    //selected item is called variable name and select item is called function to assign value to variable 
    const [selecteditem,selectitem] = useState(-1);
    return <ul className="list-group">
        {listvalues.map((item,index)=>(
        <li key = {index} className={selecteditem == index ? "list-group-item active" :"list-group-item"} onClick = {()=>selectitem(index) } >{item}</li>))}
  </ul>
}

export default Listgroup;