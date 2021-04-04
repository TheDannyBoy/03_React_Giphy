import { shallow } from 'enzyme';
import { GifGridItem } from '../components/GifGridItem';

describe('Testing GifGridItem', () => {
  const title = 'Soy un título';
  const url = 'https://foo';

  test('Should create GifGridItem with title and url correctly', () => {
    const wrapper = shallow(<GifGridItem title={title} url={url} />);
    expect(wrapper).toMatchSnapshot();
  })

  test('Should have a paragraph with the title', () => {
    const wrapper = shallow(<GifGridItem title={title} url={url} />);
    expect(wrapper.find('p').text().trim()).toBe(title);
  })

  test('Should have an image with the url as src and title as alt', () => {
    const wrapper = shallow(<GifGridItem title={title} url={url} />);
    const imageProps = wrapper.find('img').props();

    expect(imageProps.src).toBe(url);
    expect(imageProps.alt).toBe(title);
  })

  test('The component should have animate__rubberBand as class', () => {
    const wrapper = shallow(<GifGridItem title={title} url={url} />);
    const divProps = wrapper.find('div').prop('className');

    expect(divProps.includes('animate__rubberBand')).toBe(true);
  })
  
});
