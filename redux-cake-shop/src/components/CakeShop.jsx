import React from "react";
import { connect } from "react-redux";
import { buyCake } from "../Redux/cake/cakeAction";

const CakeShop = (props) => {
  return (
    <>
      <div>
        <u>
        Using Connect Function
        </u>
        <h1>Number of Cake {props.numOfCake}</h1>
        <button onClick={props.buyCake}>Buy Cake</button>
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
    buyCake: () => dispatch(buyCake()),
  };
};

export default connect(mapToStateProps, mapToDispatchProps)(CakeShop);
