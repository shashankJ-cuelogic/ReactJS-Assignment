import React from 'react';
import 'jsdom-global/register';
import { mount } from 'enzyme';
import { chai, expect } from 'chai';
import { Register } from '../src/app/component/Register';
import { InputElement } from '../src/app/component/InputElement';

describe('Component: Register', function () {

    it('Must return div', () => function () {
        const wrapper = mount(<Register />);
        const element = wrapper.type();
        expect(element).to.equal('div');
    });

    it('Call componentDidMount', () => function () {
        const wrapper = mount(<Register />);
        expect(wrapper.prototype.componentDidMount.calledOnce).to.equal(true);
    });


    it('contains three <InputElement/> component', () => function () {
        const wrapper = mount(<Register />);
        expect(wrapper.find(InputElement)).to.have.length(3);
    });

    it('Check state values for username', () => function () {
         const wrapper = mount(<Register />);
         expect(wrapper.state().useremail).to.equal('asas');
          
    });



});