import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import * as styled from './styled'

class Modal extends Component {
    constructor(props){
        super(props)
        this.el = document.createElement('div')
        this.modalRoot = document.getElementById('modal-root')
    }

    componentDidMount() {
        this.modalRoot.appendChild(this.el)
    }

    componentWillUnmount() {
        this.modalRoot.removeChild(this.el)
    }

    render(){
        return ReactDOM.createPortal(
            <Fragment>
                <styled.ModalWrapper>
                    Add task
                    <inpu type="text" />
                </styled.ModalWrapper>
            </Fragment>,
            this.el
        )
    }
}

export default Modal
