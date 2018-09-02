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
        const { children } = this.props

        return ReactDOM.createPortal(
            <Fragment>
                <styled.ModalWrapper>
                    { children }
                </styled.ModalWrapper>
            </Fragment>,
            this.el
        )
    }
}

export default Modal
