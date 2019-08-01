import { Recipe } from './recipe.model';

export class RecipeService{
    private recipes: Recipe[] = [
        new Recipe('A Test Recipe','This is simply a test','https://cdn.pixabay.com/photo/2017/07/16/10/43/recipe-2508859_960_720.jpg'),
        new Recipe('Another Test Recipe','This is simply a test','https://live.staticflickr.com/4918/32494470838_436daefb93_b.jpg')
    ];

    getRecipes(){
       return this.recipes.slice();
    }
}