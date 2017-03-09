import React from 'react';
import { shallow, render } from 'enzyme';
import { chai, expect } from 'chai';
import { Login } from '../../../src/app/containers/Login';

describe('Component: Login', function () {

    it('Expected return div', () => {
        const wrapper = shallow(<Login />);
        expect(wrapper.type()).to.equal('div');
    });

    it('Expected return should have h2', () => {
        const wrapper = shallow(<Login />);
        expect(wrapper.find('h2')).to.have.length(1);
    });

    it('Must have two input elements', () => {
        const wrapper = shallow(<Login />);
        expect(wrapper.find('input')).to.have.length(2);
    });

    it('Must have button', () => {
        const wrapper = shallow(<Login />);
        expect(wrapper.find('button')).to.have.length(1);
    });

    it('Must have button text Login', () => {
        const wrapper = render(<Login />);
        expect(wrapper.find('button').text()).to.equal('Login');
    });

    it('h2 must have text Please login', () => {
        const wrapper = render(<Login />);
        expect(wrapper.find('h2').text()).to.equal('Please login');
    });

});
