import React, { Component } from "react";
import * as Api from 'services/api'
import Modal from "components/Modal";
import Icon from "components/Icon";
import * as styled from "./styled";

class NewTaskModal extends Component {
    state = {
        taskDescription: null
    }

    setTasksDescription = (e) => {
        const taskDescription = e.target.value
        this.setState({taskDescription})
    }

    handleAddNewTask = () => {
        const { taskDescription } = this.state
        Api.createNewTask(taskDescription).then(() => {
            window.location.reload()
        })
    }

    render() {
        const { taskDescription } = this.state
        const { onClose } = this.props

        return (
            <Modal>
                <styled.TitleWrapper>
                    <styled.AddTaskTitle>Add New Task</styled.AddTaskTitle>
                    <Icon glyph="x" size="12" color="purple" onClick={onClose}/>
                </styled.TitleWrapper>

                <input
                    type="text"
                    value={taskDescription}
                    onChange={this.setTasksDescription}
                    placeholder="e.g. buy tickets for conference"
                />
                <styled.ConfirmButton onClick={this.handleAddNewTask}>
                  Add Task
                </styled.ConfirmButton>
            </Modal>
        );
    }
}

export default NewTaskModal;
