import React, { useState } from "react";
import { connect } from "react-redux";
import { buyCake } from "../Redux/cake/cakeAction";

const NewCakeShop = (props) => {
  const [number, setNumber] = useState(1);
  return (
    <>
      <div>
        <u>Example of Passing PayLoad</u>
        <h1>Number of Cake {props.numOfCake}</h1>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <button onClick={() => props.buyCake(number)}>Buy Cake</button>
      </div>
    </>
  );
};

const mapToStateProps = (state) => {
  return {
    numOfCake: state.cake.numOfCake,
  };
};
const mapToDispatchProps = (dispatch) => {
  return {
    buyCake: (number) => dispatch(buyCake(number)),
  };
};

export default connect(mapToStateProps, mapToDispatchProps)(NewCakeShop);
