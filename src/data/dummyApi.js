import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {categories, recipes, ingredients} from './dataArray';
export function getCategoryById(categoryId) {
  let category;
  categories.map(data => {
    if (data.id == categoryId) {
      category = data;
    }
  });
  return category;
}

export function getIngredientName(ingredientId) {
  let name;
  ingredients.map(data => {
    if (data.ingredientId === ingredientId) {
      name = data.name;
    }
  });
  return name;
}
export function getIngredientUrl(ingredientId) {
  let url;
  ingredients.map(data => {
    if (data.ingredientId === ingredientId) {
      url = data.photo_url;
    }
  });
  return url;
}

export function getCategoryName(categoryId) {
  let name;
  categories.map(data => {
    if (data.id == categoryId) {
      name = data.name;
    }
  });
  return name;
}

export function getNumberOfRecipes(categoryId) {
  let count = 0;
  recipes.map(data => {
    if (data.categoryId === categoryId) {
      count++;
    }
  });
  return count;
}

export function getAllIngredients(idArray) {
  const ingredientsArray = [];
  idArray.map(index => {
    ingredients.map(data => {
      if (data.ingredientId == index[0]) {
        ingredientsArray.push([data, index[1]]);
      }
    });
  });
  return ingredientsArray;
}

export function getRecipesByIngredient(ingredientId) {
  const recipesArray = [];
  recipes.map(data => {
    data.ingredients.map(index => {
      if (index[0] == ingredientId) {
        recipesArray.push(data);
      }
    });
  });
  return recipesArray;
}

export function getRecipes(categoryId) {
  let recipeArray = [];
  recipes.map(data => {
    if (data.categoryId === categoryId) {
      recipeArray.push(data);
    }
  });
  return recipeArray;
}

export function getRecipesByCategoryName(categoryName) {
  const name = categoryName.toUpperCase();
  const recipeArray = [];
  categories.map(data => {
    if (data.name.toUpperCase().includes(name)) {
      const recipes = getRecipes(data.id);
      recipes.map(item => {
        recipeArray.push(item);
      });
    }
  });
  return recipeArray;
}
export function getRecipesByRecipeName(recipeName) {
  const nameUpper = recipeName.toUpperCase();
  const recipesArray = [];
  recipes.map(data => {
    if (data.title.toUpperCase().includes(nameUpper)) {
      recipesArray.push(data);
    }
  });
  return recipesArray;
}
export function getRecipesByIngredientName(ingredientName) {
  const nameUpper = ingredientName.toUpperCase();
  const recipesArray = [];
  ingredients.map(data => {
    if (data.name.toUpperCase().includes(nameUpper)) {
      // data.name.yoUpperCase() == nameUpper
      const recipes = getRecipesByIngredient(data.ingredientId);
      const unique = [...new Set(recipes)];
      unique.map(item => {
        recipesArray.push(item);
      });
    }
  });
  const uniqueArray = [...new Set(recipesArray)];
  return uniqueArray;
}