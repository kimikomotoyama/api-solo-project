
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {id: 1, title: 'Egg benedict', servingSize: '10', prepareTime: '40', ingredients: {
          "egg": "4", "bacon": "4 pieces", "vinegar": "2 teaspoons", "butter": "4 teaspoons"
        }},
        {id: 2, title: 'Lasagna', servingSize: '2', prepareTime: '20', ingredients: {
          "sausage": "1 pound", "ground beef": "3/4 pound", "garlic": "2 cloves", "canned tomatoes": "28 ounces",
          "water": "1/2 cup", "sugar": "2 tablespoons", "salt": "1/2 tablespoon", "lasagna noodles": "12"
        }},
        {id: 3, title: 'Nabeyaki udon', servingSize: '2', prepareTime: '30', ingredients: {
          "udon noodles": "2", "shiitake mushrooms": "4", "chicken": "1/2 pound", "egg": "2"
        }},
        {id: 4, title: 'Grits', servingSize: '2', prepareTime: '5', ingredients: {
          "grits": "2", "chicken soup": "1 can"
        }},
        {id: 5, title: 'New Orleans style gumbo', servingSize: '10', prepareTime: '60', ingredients: {
          "butter": "2 tablespoons", "onion": "1", "garlic": "2 cloves", "cajun seasoning": "1 tablespoon",
          "chicken broth": "32 ounces", "sausage": "12 ounces"
        }},
        {id: 6, title: 'Macaroni and cheese', servingSize: '10', prepareTime: '10', ingredients: {
          "macaroni": "1 pack", "cheese": "1 box", "milk": "1/3 cups", "butter": "2 tablespoons", "salt": "1 teaspoon"
        }},
        {id: 7, title: 'Pizza', servingSize: '3', prepareTime: '10', ingredients: {
          "pizza dough": "1", "shredded cheese": "1/2 bag", "tomatoes": "2", "mushrooms": "1 bag"
        }},
        {id: 8, title: 'Seafood salad', servingSize: '2', prepareTime: '15', ingredients: {
          "lettuce": "1/3", "tomatoes": "1", "beans": "1 can", "salmon": "1/3 cups", "avocadoes": "1", "spinach": "1 cup"
        }},
        {id: 9, title: 'California roll', servingSize: '4', prepareTime: '120', ingredients: {
          "sushi rice": '2 cups', "avocado": "1", "seaweed": "4 sheets", "sesame seeds": "1/3 cup",
          'cucumber': "1", "crabsticks": "4", "wasabi": "any", "soy sauce": "any"
        }},
        {id: 10, title: 'Avocado breakfast bowl', servingSize: '10', prepareTime: '35', ingredients: {
          "water": "1/2 cup", "red quinoa": "1/4 cup", "olive oil": "1 1/2 teaspoons", "egg": "2", "salt": "1 pinch"
        }},
      ]);
    });
};
