import React from 'react';
import './Spinner.css'; 

const Spinner = () => {
  return (
    <div className="design">
    <div className="spinner">
       
      <div className="double-bounce1"></div>
      <div className="double-bounce2"></div>
      
    </div>
    <div>Please Wait a Moment...</div>
    </div>
  );
};

export default Spinner;
