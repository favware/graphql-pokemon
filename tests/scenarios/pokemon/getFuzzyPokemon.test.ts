import { getFuzzyPokemonSpecies } from '#test-utils/queries/pokemon';
import { executeGraphQL } from '#test-utils/testUtils';

describe('getFuzzyPokemon', () => {
  describe('Species only requests', () => {
    test('GIVEN a valid species THEN returns Pokémon', async () => {
      const { data } = await executeGraphQL<'getFuzzyPokemon'>({
        query: getFuzzyPokemonSpecies,
        variables: { pokemon: 'dragonite' }
      });

      expect(data.getFuzzyPokemon).toEqual([{ species: 'dragonite' }]);
    });

    describe('GIVEN a Pokémon with a forme prefix and a space', () => {
      test('GIVEN a mega-prefixed query THEN returns Pokémon', async () => {
        const { data } = await executeGraphQL<'getFuzzyPokemon'>({
          query: getFuzzyPokemonSpecies,
          variables: { pokemon: 'mega salamence' }
        });

        expect(data.getFuzzyPokemon).toEqual([{ species: 'salamence-mega' }]);
      });

      test('GIVEN a gigantamax-prefixed query THEN returns Pokémon', async () => {
        const { data } = await executeGraphQL<'getFuzzyPokemon'>({
          query: getFuzzyPokemonSpecies,
          variables: { pokemon: 'gigantamax pikachu' }
        });

        expect(data.getFuzzyPokemon).toEqual([{ species: 'pikachu-gmax' }]);
      });

      test('GIVEN a gmax-prefixed query THEN returns Pokémon', async () => {
        const { data } = await executeGraphQL<'getFuzzyPokemon'>({
          query: getFuzzyPokemonSpecies,
          variables: { pokemon: 'gmax meowth' }
        });

        expect(data.getFuzzyPokemon).toEqual([{ species: 'meowth-gmax' }]);
      });

      test('GIVEN a alola-prefixed query THEN returns Pokémon', async () => {
        const { data } = await executeGraphQL<'getFuzzyPokemon'>({
          query: getFuzzyPokemonSpecies,
          variables: { pokemon: 'alola marowak' }
        });

        expect(data.getFuzzyPokemon).toEqual([{ species: 'marowak-alola' }]);
      });

      test('GIVEN a alolan-prefixed query THEN returns Pokémon', async () => {
        const { data } = await executeGraphQL<'getFuzzyPokemon'>({
          query: getFuzzyPokemonSpecies,
          variables: { pokemon: 'alolan vulpix' }
        });

        expect(data.getFuzzyPokemon).toEqual([{ species: 'vulpix-alola' }]);
      });

      test('GIVEN a galar-prefixed query THEN returns Pokémon', async () => {
        const { data } = await executeGraphQL<'getFuzzyPokemon'>({
          query: getFuzzyPokemonSpecies,
          variables: { pokemon: 'galar ponyta' }
        });

        expect(data.getFuzzyPokemon).toEqual([{ species: 'ponyta-galar' }]);
      });

      test('GIVEN a galarian-prefixed query THEN returns Pokémon', async () => {
        const { data } = await executeGraphQL<'getFuzzyPokemon'>({
          query: getFuzzyPokemonSpecies,
          variables: { pokemon: 'galarian moltres' }
        });

        expect(data.getFuzzyPokemon).toEqual([{ species: 'moltres-galar' }]);
      });
    });

    describe('GIVEN a Pokémon with a forme prefix WITHOUT a space', () => {
      test('GIVEN a mega-prefixed query THEN returns Pokémon', async () => {
        const { data } = await executeGraphQL<'getFuzzyPokemon'>({
          query: getFuzzyPokemonSpecies,
          variables: { pokemon: 'megabeedirll' }
        });

        expect(data.getFuzzyPokemon).toEqual([{ species: 'beedrill-mega' }]);
      });

      test('GIVEN a gigantamax-prefixed query THEN returns Pokémon', async () => {
        const { data } = await executeGraphQL<'getFuzzyPokemon'>({
          query: getFuzzyPokemonSpecies,
          variables: { pokemon: 'gigantamaxvenusaur' }
        });

        expect(data.getFuzzyPokemon).toEqual([{ species: 'venusaur-gmax' }]);
      });

      test('GIVEN a gmax-prefixed query THEN returns Pokémon', async () => {
        const { data } = await executeGraphQL<'getFuzzyPokemon'>({
          query: getFuzzyPokemonSpecies,
          variables: { pokemon: 'gmaxlapras' }
        });

        expect(data.getFuzzyPokemon).toEqual([{ species: 'lapras-gmax' }]);
      });

      test('GIVEN a alola-prefixed query THEN returns Pokémon', async () => {
        const { data } = await executeGraphQL<'getFuzzyPokemon'>({
          query: getFuzzyPokemonSpecies,
          variables: { pokemon: 'alolaexeggutor' }
        });

        expect(data.getFuzzyPokemon).toEqual([{ species: 'exeggutor-alola' }]);
      });

      test('GIVEN a alolan-prefixed query THEN returns Pokémon', async () => {
        const { data } = await executeGraphQL<'getFuzzyPokemon'>({
          query: getFuzzyPokemonSpecies,
          variables: { pokemon: 'alolangrimer' }
        });

        expect(data.getFuzzyPokemon).toEqual([{ species: 'grimer-alola' }]);
      });

      test('GIVEN a galar-prefixed query THEN returns Pokémon', async () => {
        const { data } = await executeGraphQL<'getFuzzyPokemon'>({
          query: getFuzzyPokemonSpecies,
          variables: { pokemon: 'galardarumaka' }
        });

        expect(data.getFuzzyPokemon).toEqual([{ species: 'darumaka-galar' }]);
      });

      test('GIVEN a galarian-prefixed query THEN returns Pokémon', async () => {
        const { data } = await executeGraphQL<'getFuzzyPokemon'>({
          query: getFuzzyPokemonSpecies,
          variables: { pokemon: 'galarianzigzagoon' }
        });

        expect(data.getFuzzyPokemon).toEqual([{ species: 'zigzagoon-galar' }]);
      });
    });
  });
});
