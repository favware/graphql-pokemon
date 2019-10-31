import { Arg, Args, Query, Resolver } from 'type-graphql';
import { RecipesArgs } from '../arguments/RecipesArguments';
import { Recipe } from '../structures/Recipe';
import { RecipeService } from '../services/RecipeService';

@Resolver(Recipe)
export class RecipeResolver {
  constructor(private recipeService: RecipeService) {}

  @Query(() => Recipe)
  async recipe(@Arg('id') id: string) {
    const recipe = this.recipeService.findById(id);
    if (recipe === undefined) {
      throw new Error(id);
    }

    return recipe;
  }

  @Query(() => [ Recipe ])
  recipes(@Args() { skip, take }: RecipesArgs) {
    return this.recipeService.findAll({ skip, take });
  }
}