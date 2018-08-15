import React, { Component } from "react";
import * as API from "../../../services/api";
import TaskCard from "./TaskCard";
import * as styled from "./styled";

class TaskList extends Component {
    state = {
        tasksList: null
    }

    componentWillMount() {
        API.getTasks()
            .then(tasksList => this.setState({tasksList}))
    }

    render() {
        const { tasksList } = this.state

        return (
            <div>
                <styled.TopBarWrapper>
                    <div>02/02/2018</div>
                    <div>0/2 Tasks</div>
                    <div>Add task + </div>
                </styled.TopBarWrapper>
                { tasksList && Object.keys(tasksList).map(key =>
                    <TaskCard
                        key={key}
                        description={tasksList[key].task}
                    />)}
            </div>
        );
    }
}

export default TaskList;
