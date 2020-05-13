import React from 'react'; 
import { connect } from "react-redux";
import { addFeature } from "../actions/CarActions"

const AdditionalFeature = props => {

  return (
    <li>
      <button 
      className="button" 
      onClick={() => {props.addFeature(props.feature)}}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

const mapStateToProps = state => {
  return { state }
}
export default connect(mapStateToProps, {addFeature})(AdditionalFeature);