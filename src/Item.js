import React from 'react';
import './App.css'; 

export default function Item(props) {
  
    return (
      <div className="Item">
        <img src={props.链接}/>
        <ul>
          <li>{props.名字}</li>
          <li>${props.价格}</li>
          <li>{props.描述}</li>
          <li><a href={props.购买}>购买链接</a></li>
        </ul>
      </div>
    );
}
