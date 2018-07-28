const sinon = require('sinon');
const request = require('request');
const chai = require('chai');
const expect = require('chai').expect;
const should = chai.should();
const knex = require("../config.js");

const base = 'http://localhost:3000';

describe('movie service', () => {

  before = () => {
    return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {id: 1, title: 'Egg benedict', servingSize: '10', prepareTime: '40'},
        {id: 2, title: 'Lasagna', servingSize: '2', prepareTime: '20'},
        {id: 3, title: 'Nabeyaki udon', servingSize: '10', prepareTime: '30'},
        {id: 4, title: 'Grits', servingSize: '10', prepareTime: '5'},
        {id: 5, title: 'New Orleans style gumbo', servingSize: '10', prepareTime: '60'},
        {id: 6, title: 'Macaroni and cheese', servingSize: '10', prepareTime: '10'},
        {id: 7, title: 'Pizza', servingSize: '10', prepareTime: '10'},
        {id: 8, title: 'Seafood salad', servingSize: '10', prepareTime: '15'},
        {id: 9, title: 'California roll', servingSize: '10', prepareTime: '40'},
        {id: 10, title: 'Avocado breakfast bowl', servingSize: '10', prepareTime: '35'},
      ]);
    });
  }

  describe('GET /recipes', () => {
    it('should return status code of 200', (done) => {
      request.get(`${base}/recipes`, (err, res, body) => {
        res.statusCode.should.eql(200);
        done();
      });
    });

    it('should return all recipes', (done) => {
      request.get(`${base}/recipes/list`, (err, res, body) => {
        const data = JSON.parse(res.body);

        res.statusCode.should.eql(200);
        expect(data[0]["title"]).to.equal("Egg benedict");
        expect(data.length).to.equal(10);
        expect(data[9]["prepareTime"]).to.equal("35");
        done();
      });
    });
  });
});