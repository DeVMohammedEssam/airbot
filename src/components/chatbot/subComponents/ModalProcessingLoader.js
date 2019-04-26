import React from "react";
const ModalProcessingLoader = props => {
  return (
    <div className="processing modal__tabs-content" data-target={props.target}>
      <div className="d-flex justify-content-center align-items-center">
        <div className="processing-circule">procesing...</div>
      </div>
    </div>
  );
};

export default ModalProcessingLoader;
