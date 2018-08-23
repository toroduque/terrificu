import React, { Component, Fragment } from "react";
import { SortableContainer, SortableElement, arrayMove } from "react-sortable-hoc";
import * as API from "../../../services/api";
import TaskCard from "./TaskCard";
import * as styled from "./styled";

class TaskList extends Component {
    state = {
        tasksList: null
    };

    componentWillMount() {
        API.getUndoneTasks().then(tasksList => {
            const tasksArray = [];
            Object.keys(tasksList).map(key => {
                const taskObject = {
                    key,
                    ...tasksList[key]
                };

                return tasksArray.push(taskObject);
            });

            this.setState({ tasksList: tasksArray });
        });
    }

    onSortEnd = ({ oldIndex, newIndex }) => {
        this.setState(prevState => ({
            tasksList: arrayMove(prevState.tasksList, oldIndex, newIndex)
        }));
    };

    render() {
        const { tasksList } = this.state;
        const SortableTaskCard = SortableElement(({ description, id }) => (
            <TaskCard id={id} description={description} />
        ));

        const SortableList = SortableContainer(({ tasks }) => {
            return (
                <div>
                    {tasks &&
                        tasks.map((task, index) => {
                            return (
                                <SortableTaskCard
                                    key={task.key}
                                    id={task.key}
                                    index={index}
                                    description={task.task}
                                />
                            );
                        })}
                </div>
            );
        });

        return (
            <Fragment>
                <styled.TopBarWrapper>
                    <div>02/02/2018</div>
                    <div>{tasksList && tasksList.length} Tasks</div>
                    <div>Add task + </div>
                </styled.TopBarWrapper>
                <SortableList tasks={tasksList} onSortEnd={this.onSortEnd} useDragHandle lockAxis="y"/>;
            </Fragment>
        );
    }
}

export default TaskList;
