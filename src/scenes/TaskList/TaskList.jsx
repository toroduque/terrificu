/* eslint-disable */

import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";
import { SortableContainer, SortableElement, arrayMove } from "react-sortable-hoc";
import fecha from 'fecha'
import { UserContext } from "services/contexts";
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
        uid: null
    };

    componentDidMount() {
        const { user } = this.props
        const { user: { tasksList, uid } } = user

        this.setState({tasksList, uid})
    }

    componentDidUpdate(prevProps) {
        const { user } = this.props

        if(JSON.stringify(prevProps.user) !== JSON.stringify(user)) {
            const { user: { tasksList, uid } } = user
            this.setState({tasksList, uid})
        }
    }

    onSortEnd = ({ oldIndex, newIndex }) => {
        this.setState(prevState => ({
            tasksList: arrayMove(prevState.tasksList, oldIndex, newIndex)
        }));
    };

    static getDerivedStateFromProps(newProps, prevState) {
        const newTasks = newProps.location.state && newProps.location.state.tasksList;
        const currentTaks = prevState.tasksList

        if(newTasks && JSON.stringify(newTasks) !== (JSON.stringify(currentTaks))) {
            return { tasksList: newProps.location.state.tasksList}
        }

        return prevState
    }

    render() {
        const { tasksList, uid } = this.state;

        const SortableTaskCard = SortableElement(({ description, id }) => (
            <TaskCard key={id} id={id} description={description} />
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
                                    uid={uid}
                                    key={task.taskId}
                                    id={task.taskId}
                                    index={index}
                                    description={task.description}
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

export default withRouter(React.forwardRef((props, ref) => (
    <UserContext.Consumer>
        { user => <TaskList {...props} user={user} ref={ref}/> }
    </UserContext.Consumer>
))) 

