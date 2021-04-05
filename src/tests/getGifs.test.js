import getGifs from "../helpers/getGifs";

describe('Testing getGifs', () => {
  test('Should return 10 elements', async() => {
    const gifs = await getGifs('Pokémon');
    expect(gifs.length).toBe(10);
  });

  test('Should return 0 elements when the word to search is an empty string', async() => {
    const gifs = await getGifs('');
    expect(gifs.length).toBe(0);
  });
});
