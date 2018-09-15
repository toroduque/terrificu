import React, { Component, Fragment } from "react";
import { SortableContainer, SortableElement, arrayMove } from "react-sortable-hoc";
import fecha from 'fecha'
import withUserContext from 'components/hoc/withUserContext';
import Toggle from 'components/Toggle'
import NewTaskModal from 'components/modals/NewTaskModal'
import Overlay from 'components/Overlay'
import Spinner from 'components/Spinner'
import TaskCard from "./TaskCard";
import * as styled from "./styled";

// fecha format
fecha.masks.normalDate = 'D/M/YYYY'

class TaskList extends Component {
    state = {
        tasksList: null,
    };

    componentDidMount() {
        const { user } = this.props
        const tasksList = this.arrangeTasks(user.tasksList)
        this.setState({tasksList})
    }

    onSortEnd = ({ oldIndex, newIndex }) => {
        this.setState(prevState => ({
            tasksList: arrayMove(prevState.tasksList, oldIndex, newIndex)
        }));
    };

    arrangeTasks = (tasksList) => {
        const tasksArray = [];
        Object.keys(tasksList).map(key => {
            const taskObject = {
                key,
                ...tasksList[key]
            };

            return tasksArray.push(taskObject);
        });

        return tasksArray
    }

    render() {
        const { tasksList } = this.state;
        const SortableTaskCard = SortableElement(({ description, id }) => (
            <TaskCard id={id} description={description} />
        ));

        if(!tasksList) {
            return <Spinner />
        }

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
            <Toggle>
                {({isOn, toggle}) => (
                    <Fragment>
                        <styled.TopBarWrapper>
                            <div>{fecha.format(new Date(), 'normalDate')}</div>
                            <div>{tasksList && tasksList.length} Tasks</div>
                            <styled.AddTaskButton onClick={toggle}> Add task + </styled.AddTaskButton>
                        </styled.TopBarWrapper>
                        <SortableList tasks={tasksList} onSortEnd={this.onSortEnd} useDragHandle lockAxis="y"/>;

                        { isOn && (
                            <Fragment>
                                <NewTaskModal onClose={toggle}/>
                                <Overlay onClick={toggle}/>
                            </Fragment>
                        )}
                    </Fragment>
                )}
            </Toggle>
        )
    }
}

export default withUserContext(TaskList);
