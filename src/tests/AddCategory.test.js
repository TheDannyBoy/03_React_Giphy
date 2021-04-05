import { shallow } from "enzyme";
import { AddCategory } from "../components/AddCategory";

describe('Testing - AddCategory', () => {

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('Should create AddCatefory correctly', () => {
    const setCategories = jest.fn();
    const wrapper = shallow(<AddCategory setCategories={setCategories} />)

    expect(wrapper).toMatchSnapshot();
  })

  test('Should submit changed data', () => {
    const setCategories = jest.fn();
    const wrapper = shallow(<AddCategory setCategories={setCategories} />)
    const input = wrapper.find('input');
    input.simulate('change', { target: { value: 'foo' } });
    const form = wrapper.find('form');
    form.simulate('submit', { preventDefault: jest.fn() });

    expect(setCategories).toHaveBeenCalled();
    expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
    expect(input.prop('value')).toBe('');
  })
});
