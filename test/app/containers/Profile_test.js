import React from 'react';
import { shallow, render, mount } from 'enzyme';
import { chai, expect } from 'chai';
import { Profile } from '../../../src/app/containers/Profile';

describe('Component: Profile', function () {
    it('Expected return should have h2', () => {
        const wrapper = shallow(<Profile />);
        expect(wrapper.find('h2')).to.have.length(1);
    });

    it('username state check', () => {
        const wrapper = mount(<Profile />);
        expect(wrapper.state('username')).to.equal('Demo');
    });

    it('useremail state check', () => {
        const wrapper = mount(<Profile />);
        expect(wrapper.state('useremail')).to.equal('demo@gmail.com');
    });

    it('useremail set state check', () => {
        const wrapper = mount(<Profile />);
        wrapper.setState({ useremail: 'johan@gmail.com' });
        expect(wrapper.state('useremail')).to.equal('johan@gmail.com');
    });

    it('username set state check', () => {
        const wrapper = mount(<Profile />);
        wrapper.setState({ username: 'johan' });
        expect(wrapper.state('username')).to.equal('johan');
    });

    it('Check p tags', () => {
        const wrapper = shallow(<Profile />);
        expect(wrapper.find('p')).to.have.length(2);

    });

    it('Must return div', () => {
        const wrapper = shallow(<Profile />);
        expect(wrapper.type()).to.equal('div');

    });


});