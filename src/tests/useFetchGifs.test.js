import { useFetchGifs } from '../hooks/useFetchGifs';
import { renderHook } from '@testing-library/react-hooks';

describe('Testing useFetchGifs', () => {
  test('Should return the initial state', async() => {
    const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('Pokémon'));
    const { data, loading } = result.current;
    await waitForNextUpdate();

    expect(data).toEqual([]);
    expect(loading).toBe(true);
  });

  test('Should return a set of images and loading as false', async() => {
    const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('Pokémon'));
    await waitForNextUpdate();
    const { data, loading } = result.current;

    expect(data.length).toBeGreaterThan(0);
    expect(loading).toBe(false);
  })
  
})
