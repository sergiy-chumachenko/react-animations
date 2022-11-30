import React, {Component} from "react";

import "./App.css";
import List from "./components/List/List";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";

class App extends Component {
    state = {
        modalIsOpen: false
    }

    showModal = () => {
        this.setState({modalIsOpen: true})
    }
    closeModal = () => {
        this.setState({modalIsOpen: false})
    }

    render() {
        return (
            <div className="App">
                <h1>React Animations</h1>
                <Modal show={this.state.modalIsOpen} closed={this.closeModal}/>
                <Backdrop show={this.state.modalIsOpen}/>
                <button onClick={this.showModal} className="Button">Open Modal</button>
                <h3>Animating Lists</h3>
                <List/>
            </div>
        );
    }
}

export default App;
