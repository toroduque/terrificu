import { Component } from 'react';

class Toggle extends Component {
    state = {
        isOn: false
    }

    toggle = () => {
        this.setState(prevState => ({ isOn: !prevState.isOn }))
    }

    render() {
        const { children } = this.props
        const { isOn } = this.state

        return children({isOn, toggle: this.toggle})
    }
}

export default Toggle;
