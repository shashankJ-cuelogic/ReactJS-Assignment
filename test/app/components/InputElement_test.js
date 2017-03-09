import React from 'react';
import { shallow, render, mount } from 'enzyme';
import { chai, expect } from 'chai';
import { InputElement } from '../../../src/app/component/InputElement';
import { Register } from '../../../src/app/containers/Register';


describe('Component: InputElement', function () {
    const wrapperRegister = mount(<Register />);
    const wrapper = mount(<InputElement inputType={'text'} fieldname={'username'} placeholder={'User Name'} value={'demo'} controlFunc={(event) => wrapperRegister.instance().handleOnchange(event)} />);
    it('should have p tag', () => {
        expect(wrapper.find('p')).to.have.length(1);
    });

    it('should have one input tag', () => {
        expect(wrapper.find('input')).to.have.length(1);
    });

    it('Passing props', () => {

        expect(wrapper.props().inputType).to.equal('text');
        expect(wrapper.props().fieldname).to.equal('username');
        expect(wrapper.props().placeholder).to.equal('User Name');
        expect(wrapper.props().value).to.equal('demo');
        expect(wrapper.props().controlFunc).to.be.an('function');

    });


});