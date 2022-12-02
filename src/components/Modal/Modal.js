import React from 'react';

import './Modal.css';
import {CSSTransition} from "react-transition-group";

const animationTiming = {
    enter: 400,
    exit: 1000
};

const Modal = (props) => {
    return (
        <CSSTransition
            in={props.show}
            mountOnEnter
            unmountOnExit
            timeout={animationTiming}
            classNames="fade-slide"
        >
            <div className="Modal">
                <h1>A Modal</h1>
                <button className="Button" onClick={props.closed}>
                    Dismiss
                </button>
            </div>
        </CSSTransition>
    );
};

export default Modal;