import React from 'react';
import { connect } from "react-redux";
import { addFeature } from "../actions"


const AdditionalFeature = props => {
  console.log("AdditionalFeature props: ", props);

  const addingFeature = () => {
    console.log("addingFeature proprs.feature = ", props.feature);
    props.addFeature(props.feature);
  }


  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick = {addingFeature}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

const mapDispatchToProps = { addFeature };

export default connect(null, mapDispatchToProps) (AdditionalFeature);
