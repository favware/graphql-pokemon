import { Recipe } from '../structures/Recipe';
import { Args, Arg } from 'type-graphql';
import { RecipesArgs } from '../arguments/RecipesArguments';

export class RecipeService {
  public findById(@Arg('id') id: string) {
    const recipe = new Recipe();
    recipe.creationDate = new Date();
    recipe.id = id.toString();
    recipe.ingredients = [ 'apple', 'pie' ];

    return recipe;
  }

  public findAll(@Args() { skip, take }: RecipesArgs) {
    const recipe = new Recipe();
    recipe.creationDate = new Date();
    recipe.id = skip.toString();
    recipe.ingredients = [ 'apple', 'pie', take.toString() ];

    return recipe;
  }
}