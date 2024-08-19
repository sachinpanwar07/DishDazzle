import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { categories,recipes,ingredients } from './dataArray'
export  function getCategoryById(categoryId){
    let category;
    categories.map(data=>{
        if(data.id==categoryId){
            category=data
        }
    })
    return category;
    
}

export  function getIngredientName(ingredientId){
    let name;
    ingredients.map(data=>{
        if(data.ingredientId===ingredientId){
            name=data.name
        }
    })
    return name
}
export  function getIngredientUrl(ingredientId){
    let url;
    ingredients.map(data=>{
        if(data.ingredientId===ingredientId){
            url=data.photo_url
        }
    })
    return url
}

export  function getCategoryName(categoryId){
    let name;
    categories.map(data=>{
        if(data.id==categoryId){
            name=data.name
        }
    })
    return name;
}


