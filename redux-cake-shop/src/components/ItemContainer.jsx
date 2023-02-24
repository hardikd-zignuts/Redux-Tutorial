import React from "react";
import { connect } from "react-redux";
import { buyCake } from "../Redux/cake/cakeAction";
import buyIceCream from "../Redux/iceCream/iceCreamActions";

const ItemContainer = (props) => {
  return (
    <div>
      <h4>Total Items in Store Is {props.items}</h4>
      <button onClick={props.buyItem}>Buy items</button>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  const items = ownProps.cake
    ? state.cake.numOfCake
    : state.iceCream.numOfIceCream;
  return {
    items,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const buyItem = ownProps.cake
    ? () => dispatch(buyCake())
    : () => dispatch(buyIceCream());

  return {
    buyItem,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);
