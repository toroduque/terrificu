import React from "react";
import { withRouter } from "react-router-dom";
import { SortableHandle } from "react-sortable-hoc";
import * as Api from "services/api";
import Icon from "components/Icon";
import CheckBox from "components/CheckBox";
import * as styled from "./styled";

const DragHandle = SortableHandle(() => (
    <styled.DragIconWrapper>
        <Icon glyph="drag" size="14" color="#747474" />
    </styled.DragIconWrapper>
));

const TaskCard = ({ id, uid, description, history }) => {
    const markTaskAsDone = taskId => {
        const currentDate = new Date()
        const completedTime = currentDate.toString()

        const taskDone = {
            isDone: true,
            completedTime
        };

        return Api.updateTask(taskId, taskDone)
            .then(() =>
                Api.getUndoneTasks(uid).then(tasksList => {
                    const location = {
                        path: "/task-list",
                        state: { tasksList }
                    }

                    history.push(location)
                })
            ); 
    };

    return (
        <styled.TaskCardWrapper>
            <DragHandle />
            <styled.DescriptionWrapper>{description}</styled.DescriptionWrapper>
            <styled.CheckBoxWrapper>
                <CheckBox onClick={() => markTaskAsDone(id)} />
            </styled.CheckBoxWrapper>
            <styled.MenuOptionsWrapper>
                <Icon glyph="options" size="14" color="#747474" />
            </styled.MenuOptionsWrapper>
        </styled.TaskCardWrapper>
    );
};

export default withRouter(TaskCard);
