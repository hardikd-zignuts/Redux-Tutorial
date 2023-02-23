import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCake } from "../Redux/cake/cakeAction";

const CakeShopHook = () => {
  const numOfCake = useSelector((state) => state.cake.numOfCake);
  const dispatch = useDispatch();
  return (
    <>
      <div>
        <h2>Using useSelector Hook and useDispatch Hook</h2>
        <h1>Number of Cake {numOfCake}</h1>
        <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
      </div>
    </>
  );
};

export default CakeShopHook;
