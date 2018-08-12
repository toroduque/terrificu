import React, { Component, Fragment } from "react";
import { Link } from 'react-router-dom';
import Overlay from '../../../components/Overlay'
import Icon from '../../../components/Icon'
import * as styled from "./styled";

class Hero extends Component {
    state = { isShowingNewTaskForm: false }

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
        const { isShowingNewTaskForm } = this.state

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
                            <input type="text" placeholder="...i.g Book hotel in amsterdam"/>
                            <styled.ConfirmButton type="submit"><Link to="/task-list">Add task</Link></styled.ConfirmButton>
                        </Fragment>
                    )}
                </styled.AddTaskFormWrapper>
                { isShowingNewTaskForm && <Overlay onClick={this.hideNewTaskForm}/> }
            </Fragment>

        )
    }
};

export default Hero;
