import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import Modal from 'react-modal';

const OptionModal = (props) =>
    (
   <Modal
  isOpen={!!props.selectedOption}
//  onAfterOpen={afterOpenFn}
  onRequestClose={props.handleModal}
//  closeTimeoutMS={n}
//  style={customStyle}
  contentLabel="Modal"
>
  <h1>Selected Option</h1>
        {props.selectedOption && <p>{props.selectedOption}</p>}
        <button onClick={props.handleModal}>Okay</button>

</Modal>
    );


export default OptionModal;