var assert = require('assert');
var chai = require('chai');
var expect = require('chai').expect;
var should = require('chai').should();

describe('Chai', function () {
    it('expect return 3 when the value is present', function () {
        expect(2 + 1).to.equal(3);
    });

    it('should return 3 when the value is present', function () {
        var demo="hello react";
        demo.should.be.a('string');
    });
});
