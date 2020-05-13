import React from 'react';
import {connect} from "react-redux"
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

const App = (props) => {
  
    return (
      <div>
          <Header car={props.car} />
          <AddedFeatures car={props.car} />
          <AdditionalFeatures 
          additionalFeatures={props.additionalFeatures} />
          <Total 
          car={props.car} 
          additionalPrice={props.additionalPrice} />
      </div>
    );
  };
  
  const mapStateToProps = state => {
    return { 
      additionalFeatures: state.additionalFeatures,
      additionalPrice: state.additionalPrice,
      car: state.car  
  }
  }
  
  export default connect(mapStateToProps, {})(App);
