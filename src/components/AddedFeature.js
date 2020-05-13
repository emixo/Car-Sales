import React from 'react';
import { connect } from "react-redux";
import { removeFeature } from "../actions/CarActions"

const AddedFeature = props => {
  return (
    <li>
      <button onClick={()=> {props.removeFeature(props.feature)}} className="button">X</button>
      {props.feature.name}
    </li>
  );
};
const mapStateToProps = state => {
  return { state }
}
export default connect(mapStateToProps, {removeFeature})(AddedFeature);