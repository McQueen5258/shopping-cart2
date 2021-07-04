import React from "react";
import "./App.css";
import Items from "./Items.js";

export default function App() {
  // 1. 再添加3件商品到购物车
  // 2. 向每个项目添加一个项目说明
  // 3. 添加链接以在淘宝上购买商品
  return (
    <div>
      <h1>购物吧!</h1>
      <Items items={
              [
                {
                  url:"https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                  name:"花",
                  price:100,
                  description:"它是一朵美丽的花!",
                  ItemUrl:""
                },
                {
                  url:"https://www.apple.com.cn/v/airpods-max/c/images/overview/hero__gnfk5g59t0qe_large_2x.png",
                  name:"AirPods Max",
                  price:549.00,
                  description:"高调登场。",
                  ItemUrl:"https://www.apple.com/airpods-max/"
                },
                {
                  url:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-mini-select-2020?wid=940&hei=1112&fmt=jpeg&qlt=80&.v=1604343708000",
                  name:"iPhone12 Mini",
                  price:749.00,
                  description:"快速爆炸过去。",
                  ItemUrl:"https://www.apple.com/iphone-12/"
                },
                {
                  url:"https://www.apple.com/v/macbook-pro-13/g/images/overview/hero_endframe__bsza6x4fldiq_large_2x.jpg",
                  name:"MacBook Pro",
                  price:1299.00,
                  description:"一 Pro 到位。",
                  ItemUrl:"https://www.apple.com/macbook-pro-13/"
                }
              ]
            }
        />
    </div>
  );
}
