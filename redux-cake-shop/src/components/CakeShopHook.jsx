import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCake } from "../Redux/cake/cakeAction";

const CakeShopHook = () => {
  const numOfCake = useSelector((state) => state.cake.numOfCake);
  const dispatch = useDispatch();
  return (
    <>
      <div>
        <u>Using useSelector Hook and useDispatch Hook</u>
        <h1>Number of Cake {numOfCake}</h1>
        <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
      </div>
    </>
  );
};

export default CakeShopHook;
