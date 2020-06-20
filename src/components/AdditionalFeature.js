import React, { useState, useReducer } from 'react';
import { connect } from "react-redux";
import { addFeature } from "../actions"
import {featureReducer} from "../reducers/featureReducer";


const AdditionalFeature = props => {
  console.log(props);

  const [state, dispatch] = useReducer(featureReducer);

  const addingFeature = () => {
    console.log(props);
    // dispatch({type: "ADD_FEATURE", payload: props});
    addFeature(props);
  }


  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick = {addingFeature}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};


const mapStateToProps = state => {
  return{
    name: state.AddReducer.name,
    price: state.AddReducer.price
  };
};
const mapDispatchToProps = { addFeature };

export default AdditionalFeature;
