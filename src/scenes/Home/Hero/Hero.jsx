import React, { Component, Fragment } from "react";
import { Link } from 'react-router-dom';
import * as API from 'services/api'
import Overlay from 'components/Overlay'
import Icon from 'components/Icon'
import * as styled from "./styled";

class Hero extends Component {
    state = {
        isShowingNewTaskForm: false,
        taskDescription: "",
    }

     setTaskDescription = (e) => {
         const taskDescription = e.target.value
         this.setState({taskDescription})
     }

    toggleTest = () => {
        this.setState(prevState => ({ isShowingNewTaskForm: !prevState.isShowingNewTaskForm }))
    }

    hideNewTaskForm = (e) => {
        e.stopPropagation()
        this.setState({isShowingNewTaskForm: false})
    }

    showNewTaskForm = (e) => {
        e.stopPropagation()
        this.setState({isShowingNewTaskForm: true})
    }

    render(){
        const { isShowingNewTaskForm, taskDescription } = this.state

        return (
            <Fragment>
                <styled.Herowrapper>
                    <span>This simple task breaker will help you get your shit done.</span>
                </styled.Herowrapper>
                <styled.AddTaskFormWrapper onClick={this.showNewTaskForm} isShowingNewTaskForm={isShowingNewTaskForm}>
                    <styled.TitleWrapper>
                        <styled.AddTaskTitle isShowingNewTaskForm={isShowingNewTaskForm}>
                            { isShowingNewTaskForm ? 'Add New Task' : 'Add Task +' }
                        </styled.AddTaskTitle>
                        { isShowingNewTaskForm && <Icon glyph="x" size="12" color="purple" onClick={this.hideNewTaskForm} /> }
                    </styled.TitleWrapper>

                    { isShowingNewTaskForm && (
                        <Fragment>
                            <input type="text" onChange={this.setTaskDescription} value={taskDescription} placeholder="...i.g Book hotel in amsterdam"/>
                            <Link to="/task-list">
                                <styled.ConfirmButton onClick={() => API.createNewTask(taskDescription)} type="submit">Add task</styled.ConfirmButton>
                            </Link>
                        </Fragment>
                    )}
                </styled.AddTaskFormWrapper>
                { isShowingNewTaskForm && <Overlay onClick={this.hideNewTaskForm}/> }
            </Fragment>

        )
    }
};

export default Hero;
