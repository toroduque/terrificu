import React, { Component } from 'react';
import Icon from '../../../components/Icon'
import CheckBox from '../../../components/CheckBox'
import * as styled from './styled';

class TaskCard extends Component {
    state = {
        isTaskDone: false
    }

    render() {
        const { isTaskDone } = this.state;
        const { description } = this.props;
        console.log('isTaskDone', isTaskDone)

        return (
            <styled.TaskCardWrapper>
                <styled.DragIconWrapper>
                    <Icon glyph="drag" size="14" color="#747474"/>
                </styled.DragIconWrapper>
                <styled.DescriptionWrapper>{ description }</styled.DescriptionWrapper>
                <styled.CheckBoxWrapper>
                    <CheckBox />
                </styled.CheckBoxWrapper>
                <styled.MenuOptionsWrapper>
                    <Icon glyph="options" size="14" color="#747474" />
                </styled.MenuOptionsWrapper>
            </styled.TaskCardWrapper>
        )
    }
}

export default TaskCard
