import { Injectable } from '@angular/core';
import { HttpClient,HttpResponse } from '@angular/common/http';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';

@Injectable()
export class DataStorageService{
    constructor(private http: HttpClient,private recipeService: RecipeService){
    }

    storeRecipes(){
       return this.http.put('https://ng-recipe-book-cb551.firebaseio.com/recipes.json',
                   this.recipeService.getRecipes());
    }

    getRecipes(){
        this.http.get('https://ng-recipe-book-cb551.firebaseio.com/recipes.json')
        .map(
            (response: Response) => {
                const recipes: Recipe[] = response.json();
                for(let recipe of recipes){
                    if(!recipe['ingredients']){
                        recipe['ingredients'] = [];
                    }
                }
                return recipes;
            }
        )
            .subscribe(
                (recipes: Recipe[]) => {
                    this.recipeService.setRecipes(recipes);
                }
            );
    }
}