import React from 'react';
import { connect } from "react-redux";
import {removeFeature} from "../actions"

const AddedFeature = props => {

  const removeItem = () => {
    props.removeFeature(props.feature);
  };

  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" 
      onClick = {removeItem} >X</button>
      {props.feature.name}(+${props.feature.price})
    </li>
  );
};

const mapDispatchToProps = {removeFeature};

export default connect(null, mapDispatchToProps) (AddedFeature);
