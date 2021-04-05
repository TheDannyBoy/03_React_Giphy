import { shallow } from 'enzyme';
import { GifGrid } from '../components/GifGrid';
import { useFetchGifs } from '../hooks/useFetchGifs';
jest.mock('../hooks/useFetchGifs');

describe('Testing GifGrid', () => {
  const category = 'Pokémon';

  test('Should create GifGrid correctly', () => {
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true,
    });
    const wrapper = shallow(<GifGrid category={category} />)
    expect(wrapper).toMatchSnapshot();
  })

  test('Should show items when images finished loading', () => {
    const gifs = [{
      id: 'foo',
      url: 'https://foo',
      title: 'bar',
    }, {
      id: 'bar',
      url: 'https://foo',
      title: 'bar',
    }];
    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false,
    });
    const wrapper = shallow(<GifGrid category={category} />)

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('p').exists()).toBe(false);
    expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
  })
  
});
