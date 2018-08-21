import React, { Component } from 'react';
import Icon from '../Icon';
import * as styled from './styled'

class CheckBox extends Component {
    state = { isActive: false }

    handleOnClick = () => {
        const { onClick } = this.props

        this.toggleIsActive()
        onClick()
    }

    toggleIsActive = () => {
        this.setState(prevState => ({ isActive: !prevState.isActive }))
    }

    render() {
        const { isActive } = this.state

        return (
            <styled.CheckBoxWrapper
                onClick={this.handleOnClick}
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
