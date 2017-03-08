import React from 'react';
import { shallow, render, mount } from 'enzyme';
import { chai, expect } from 'chai';
import { Register } from '../src/app/component/Register';
import { InputElement } from '../src/app/component/InputElement';
import { Link } from "react-router";


describe('Component: Register', function () {

    it('Expected return should have h2', () => {
        const wrapper = shallow(<Register />);
        expect(wrapper.find('h2')).to.have.length(1);
    });

    it('Check useremail state', () => {
        const wrapper = mount(<Register />);
        expect(wrapper.state('useremail')).to.equal('');
    });

    it('Set state check useremail state', () => {
        const wrapper = mount(<Register />);
        wrapper.setState({ useremail: 'demo@gmail.com' });
        expect(wrapper.state('useremail')).to.equal('demo@gmail.com');
    });

    it('Check username state', () => {
        const wrapper = mount(<Register />);
        expect(wrapper.state('username')).to.equal('');
    });

    it('Set state check username state', () => {
        const wrapper = mount(<Register />);
        wrapper.setState({ username: 'demo' });
        expect(wrapper.state('username')).to.equal('demo');
    });

    it('Check password state', () => {
        const wrapper = mount(<Register />);
        expect(wrapper.state('password')).to.equal('');
    });

    it('Set state check password state', () => {
        const wrapper = mount(<Register />);
        wrapper.setState({ password: 'demouser' });
        expect(wrapper.state('password')).to.equal('demouser');
    });

    it('check InputElement counts', () => {
        const wrapper = mount(<Register />);
        expect(wrapper.find(InputElement)).to.have.length(3);
    });

    it('check hr tags counts', () => {
        const wrapper = shallow(<Register />);
        expect(wrapper.find('hr')).to.have.length(4);
    });

    it('check Link ', () => {
        const wrapper = shallow(<Register />);
        expect(wrapper.contains(<Link to={"/"}>Dashboard</Link>)).to.equal(true);
    });

    it('check Link props ', () => {
        const wrapper = shallow(<Register />);
        expect(wrapper.find('Link').prop('to')).to.equal('/');
    });

    it('check Link text ', () => {
        const wrapper = mount(<Register />);
        expect(wrapper.find('Link').text()).to.equal('Dashboard');
    });


    it('check button event ', () => {
        const wrapper = mount(<Register />);
        wrapper.setState({
            useremail: 'demo@ymail.com',
            username: 'demousers',
            password: '4521',
        });
        wrapper.find('button').simulate('click');
        expect(wrapper.state('data')).to.equal('demousers');
    });







});