import React, { Component } from 'react';
import Icon from '../Icon';
import * as styled from './styled'

class CheckBox extends Component {
    state = { isActive: false }

    toggleIsActive = () => {
        this.setState(prevState => ({ isActive: !prevState.isActive }))
    }

    render() {
        const { isActive } = this.state

        return (
            <styled.CheckBoxWrapper
                onClick={this.toggleIsActive}
                isActive={isActive}
            >
                {isActive && (
                    <div>
                        <styled.CheckBoxBackground >
                            <Icon glyph="tick" size="11" color="#635AFC" />
                        </styled.CheckBoxBackground>
                    </div>
                )}

            </styled.CheckBoxWrapper>
        )
    }
}
export default CheckBox
