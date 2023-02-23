import React from "react";
import { useDispatch, useSelector } from "react-redux";
import buyIceCream from "../Redux/iceCream/iceCreamActions";

const IceCreamShop = () => {
  const numOfIceCream = useSelector((state) => state.iceCream.numOfIceCream);
  const dispatch = useDispatch();
  return (
    <>
      <div>
        <h2>Using useSelector Hook and useDispatch Hook</h2>
        <h1>Number of Cake {numOfIceCream}</h1>
        <button onClick={() => dispatch(buyIceCream())}>Buy IceCream</button>
      </div>
    </>
  );
};

export default IceCreamShop;
