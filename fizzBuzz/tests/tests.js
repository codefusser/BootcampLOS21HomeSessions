// testing code goes here

'use strict'

var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect;

var myApp = require('../app/library.js');

describe("Fizz Buzz tests ", function() {

    it("should return `Fizz` for number divisible by 3", function() {
        expect(myApp.fizzBuzz(3)).to.equal('Fizz');
        //expect(myApp.convertTempCtoF(40)).to.equal(104);
    });

    it("should return `Buzz` for number divisible by 5", function() {
        expect(myApp.fizzBuzz(5)).to.equal('Buzz');
    });

    it("should return `FizzBuzz` for 15", function() {
        expect(myApp.fizzBuzz(15)).to.equal('FizzBuzz');
    });

    it("should return `FizzBuzz` for 45", function() {
        expect(myApp.fizzBuzz(45)).to.equal('FizzBuzz');
    });

    it("should return `FizzBuzz` for 90", function() {
        expect(myApp.fizzBuzz(90)).to.equal('FizzBuzz');
    });

    it("should return `Fizz` for 63", function() {
        expect(myApp.fizzBuzz(63)).to.equal('Fizz');
    });

    it("should return 7 since its indivisible by 3 and 5", function() {
        expect(myApp.fizzBuzz(7)).to.equal(7);
    });

    it("should return 101 since its indivisible by 3 and 5", function() {
        expect(myApp.fizzBuzz(101)).to.equal(101);
    });


    it("should return `Fizz` for number divisible by 21", function() {
        expect(myApp.fizzBuzz(21)).to.equal('Fizz');
        //expect(myApp.convertTempCtoF(40)).to.equal(104);
    });

    it("should return `Buzz` for number divisible by 20", function() {
        expect(myApp.fizzBuzz(20)).to.equal('Buzz');
    });

    it("should return `FizzBuzz` for 30", function() {
        expect(myApp.fizzBuzz(30)).to.equal('FizzBuzz');
    });

    it("should return `FizzBuzz` for 60", function() {
        expect(myApp.fizzBuzz(60)).to.equal('FizzBuzz');
    });

    it("should return `FizzBuzz` for 75", function() {
        expect(myApp.fizzBuzz(75)).to.equal('FizzBuzz');
    });

    it("should return `Fizz` for 51", function() {
        expect(myApp.fizzBuzz(51)).to.equal('Fizz');
    });

    it("should return 7 since its indivisible by 8 and 8", function() {
        expect(myApp.fizzBuzz(8)).to.equal(8);
    });

    it("should return 131 since its indivisible by 3 and 5", function() {
        expect(myApp.fizzBuzz(131)).to.equal(131);
    });

    it("should return 17 since its indivisible by 3 and 5", function() {
        expect(myApp.fizzBuzz(17)).to.equal(17);
    });

    it("should return 151 since its indivisible by 3 and 5", function() {
        expect(myApp.fizzBuzz(151)).to.equal(151);
    });

});
