import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header'

describe('Header component', () => {
    it('Should match the snapshot', () => {
        const component = shallow(<Header />)

        expect(component).toMatchSnapshot()
    })
})
