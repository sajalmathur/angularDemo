import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/Ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService{
    recipeChanged = new Subject<Recipe[]>();

    constructor(private slService: ShoppingListService){}

    private recipes: Recipe[] = [
        new Recipe(
        'Tasty Schnitzel',
        'A super-tasty Schnitzel - just awesome!',
        'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
        [
            new Ingredient('Meat',1),
            new Ingredient('French Fries',20)
        ]),
        new Recipe
        ('Big Fat Burger',
        'What else you need to say?',
        'https://cdn.pixabay.com/photo/2017/10/11/19/57/food-2842229_960_720.jpg',
        [
            new Ingredient('Buns', 2),
            new Ingredient('Meat', 1)
        ])
    ];

    setRecipes(recipes: Recipe[]){
        this.recipes=recipes;
        this.recipeChanged.next(this.recipes.slice());
    }

    getRecipes(){
       return this.recipes.slice();
    }

    onAddIngredientsToShoppingList(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients);
    }

    getRecipe(index: number){
        return this.recipes[index];
    }

    addRecipe(recipe: Recipe){
        this.recipes.push(recipe);
        this.recipeChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number,newRecipe: Recipe){
        this.recipes[index] = newRecipe;
        this.recipeChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number){
        this.recipes.splice(index, 1);
        this.recipeChanged.next(this.recipes.slice()); 
    }
}