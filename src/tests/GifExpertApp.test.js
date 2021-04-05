import { shallow } from "enzyme";
import GifExpertApp from "../components/GifExpertApp";

describe('Testing GifExpertApp.js', () => {
  test('Should create GifExpertApp correctly', () => {
    const wrapper = shallow(<GifExpertApp />)
    expect(wrapper).toMatchSnapshot();
  });

  test('Should show a category list', () => {
    const categories = ['Pokémon', 'One Punch'];
    const wrapper = shallow(<GifExpertApp defaultCategories={categories} />)
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('GifGrid').length).toBe(categories.length);
  });
});
