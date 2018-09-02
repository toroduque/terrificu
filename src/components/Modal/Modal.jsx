import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import * as API from 'services/api'
import Icon from 'components/Icon'
import * as styled from './styled'

class Modal extends Component {
    constructor(props){
        super(props)
        this.el = document.createElement('div')
        this.modalRoot = document.getElementById('modal-root')

        this.state = { // Temporal while is moved to a different component
            taskDescription: ''
        }
    }

    componentDidMount() {
        this.modalRoot.appendChild(this.el)
    }

    componentWillUnmount() {
        this.modalRoot.removeChild(this.el)
    }

    setTasksDescription = (e) => {
        const taskDescription = e.target.value
        this.setState({taskDescription})
    }

    handleAddNewTask = () => {
        const { taskDescription } = this.state
        API.createNewTask(taskDescription).then(() => {
            window.location.reload()
        })
    }

    render(){
        const { taskDescription } = this.state

        return ReactDOM.createPortal(
            <Fragment>
                <styled.ModalWrapper>
                    <styled.TitleWrapper>
                        <styled.AddTaskTitle >
                             Add New Task
                        </styled.AddTaskTitle>
                        <Icon glyph="x" size="12" color="purple" />
                    </styled.TitleWrapper>

                    <input
                        type="text"
                        value={taskDescription}
                        onChange={this.setTasksDescription}
                        placeholder="e.g. buy tickets for conference"/>
                    <styled.ConfirmButton
                        onClick={this.handleAddNewTask}>Add Task</styled.ConfirmButton>
                </styled.ModalWrapper>
            </Fragment>,
            this.el
        )
    }
}

export default Modal
