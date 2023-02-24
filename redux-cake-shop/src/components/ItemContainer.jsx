import React from "react";
import { connect } from "react-redux";

const ItemContainer = (props) => {
  return (
    <div>
      <h4>Total Item in Store Is {props.items}</h4>
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

export default connect(mapStateToProps)(ItemContainer);
