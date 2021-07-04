import React from 'react';
import Item from "./Item.js";
import './App.css'; 

export default function Items(props) {
  let 物品 = [];
  for (let i = 0; i < props.items.length; i++) {
      let 一个物品 = props.items[i];
      let 链接 = 一个物品.url;
      let 名字 = 一个物品.name;
      let 价格 = 一个物品.price;
      let 描述 = 一个物品.description;
      let 购买 = 一个物品.ItemUrl;
      物品.push(
      <Item 
        链接={链接}
        名字={名字}
        价格={价格}
        描述={描述}
        购买={购买}
       />
    )
  }
    return (
      <div className="Items">
          {物品}
      </div>
    );
}