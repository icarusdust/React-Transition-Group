import React from "react";

import "./Modal.css";

const modal = props => {
    const cssClasses = [
        "Modal",
         props.show === 'entering' ? "ModalOpen" : props.show === 'exited' ? "ModalClosed" : null]

  return(
      <div className = {cssClasses.join(' ')}>
          <h1>Modal</h1>
          <button onClick = {props.closed}>Dismiss</button>
      </div>
  )
};

export default modal;
