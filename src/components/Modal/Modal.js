import React from 'react';

import './Modal.css';
import {Transition} from "react-transition-group";

const Modal = (props) => {
    return (
        <Transition
            in={props.show}
            mountOnEnter
            unmountOnExit
            timeout={300}>
            {state => {
                const cssClasses = [
                    "Modal",
                    state === 'entering'
                        ? 'ModalOpen'
                        : state === 'exiting' ? 'ModalClosed' : null
                ];
                return (
                    <div className={cssClasses.join(' ')}>
                        <h1>A Modal</h1>
                        <button className="Button" onClick={props.closed}>
                            Dismiss
                        </button>
                    </div>
                );
            }}
        </Transition>
    );
};

export default Modal;