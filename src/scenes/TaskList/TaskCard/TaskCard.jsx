import React from "react";
import { withRouter } from "react-router-dom";
import { SortableHandle } from "react-sortable-hoc";
import * as API from "../../../../services/api";
import Icon from "../../../components/Icon";
import CheckBox from "../../../components/CheckBox";
import * as styled from "./styled";

const DragHandle = SortableHandle(() => (
    <styled.DragIconWrapper>
        <Icon glyph="drag" size="14" color="#747474" />
    </styled.DragIconWrapper>
));

const TaskCard = ({ id, description }) => {
    const markTaskAsDone = taskId => {
        const taskDone = {
            isDone: true,
            completedTime: new Date()
        };

        return API.updateTask(taskId, taskDone).then(() => window.location.reload()); // temporal fix to refresh page
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
