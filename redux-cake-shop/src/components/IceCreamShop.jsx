import React from "react";
import { useDispatch, useSelector } from "react-redux";
import buyIceCream from "../Redux/iceCream/iceCreamActions";

const IceCreamShop = () => {
  const numOfIceCream = useSelector((state) => state.iceCream.numOfIceCream);
  const dispatch = useDispatch();
  return (
    <>
      <div>
        <u>Using useSelector Hook and useDispatch Hook</u>
        <h1>Number of Cake {numOfIceCream}</h1>
        <button onClick={() => dispatch(buyIceCream())}>Buy IceCream</button>
      </div>
    </>
  );
};

export default IceCreamShop;
