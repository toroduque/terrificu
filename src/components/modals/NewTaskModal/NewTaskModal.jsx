import React, { Component } from "react";
import * as Api from 'services/api'
import { UserContext } from 'services/contexts'
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

    handleAddNewTask = (uid) => {
        const { taskDescription } = this.state
        Api.createNewTask(taskDescription, uid).then(() => {
            window.location.reload()
        })
    }

    render() {
        const { taskDescription } = this.state
        const { onClose } = this.props

        return (
            <UserContext>
                { ({user}) => (
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
                        <styled.ConfirmButton onClick={() => this.handleAddNewTask(user.uid)}>
                          Add Task
                        </styled.ConfirmButton>
                    </Modal>
                )}
            </UserContext>

        );
    }
}

export default NewTaskModal;
