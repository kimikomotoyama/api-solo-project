const sinon = require('sinon');
const assert = require('assert');
const request = require('request');
const describe = require("mocha").describe;
const chai = require('chai');
const expect = require('chai').expect;
const should = chai.should();
const knex = require("../config.js");

const base = 'http://localhost:3000';

describe('recipes', () => {

  //currently, this before does not work and must manually do knex seed:run
  //each time you run npm test
  before = () => {
    return knex('recipes').del()
    .then(function (result) {
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
    })
    .then((result) => {
      console.log(result);
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

  describe('POST /recipes', () => {
    it("should post a recipe", () => {
      request.post({
        url:`${base}/recipes/`, 
        form: {
          title:'Spinach casserole',
          servingSize: "4",
          prepareTime: "90",
      }}, 
      function(err, httpResponse, body){ 
        expect(httpResponse.statusCode).to.equal(200);

        request.get(`${base}/recipes/list`, (err, res, body) => {
          const data = JSON.parse(res.body);
  
          res.statusCode.should.eql(200);
          expect(body["title"]).to.equal("Spinach casserole");
          expect(data.length).to.equal(11);
          done();
        });
        
      })
    });
  });

  describe('POST /recipes/edit', () => {
    it("should update a recipe with id = 1", () => {
      request.post({
        url:`${base}/recipes/edit`, 
        form: {
          id: 1,
          title:'Chilli',
      }}, 
      function(err, httpResponse, body){
        expect(httpResponse.statusCode).to.equal(200);
        
        request.get(`${base}/recipes/list`, (err, res, body) => {
          const data = JSON.parse(res.body);
  
          res.statusCode.should.eql(200);
          expect(data[0]["title"]).to.equal("Chilli");
          expect(data.length).to.equal(11);
          expect(data[0]["prepareTime"]).to.equal("40");
          done();
        });
      })
    });
  });

  describe('POST /recipes/delete', () => {
    it("should delete the recipe with id = 2", () => {
      request.post({
        url:`${base}/recipes/delete`, 
        form: {
          id: 2,
      }}, 
      function(err, httpResponse, body){
        expect(httpResponse.statusCode).to.equal(200);
        
        request.get(`${base}/recipes/list`, (err, res, body) => {
          const data = JSON.parse(res.body);
  
          res.statusCode.should.eql(200);
          expect(data.length).to.equal(10);
          expect(data[1]["title"]).to.equal("Nabeyaki udon");
          done();
        });
      })
    });
  });

});