import * as React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { MessageOutlined } from '@ant-design/icons';
import Button from './index';
import '../../setupTests';

import '@testing-library/jest-dom/extend-expect';

describe('Button', () => {
  it('matches snapshot: invisible', () => {
    const wrapper = shallow(<Button />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('Button Component Test', () => {
  it('renders without child element', () => {
    const wrapper = shallow(<Button>Button Test</Button>);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('renders with child element', () => {
    const wrapper = shallow(
      <Button>
        <span>Hello World!</span>
      </Button>
    );
    expect(wrapper.contains(<span>Hello World!</span>)).toEqual(true);
  });

  it('renders ghost style with prop ghost', () => {
    const tree = shallow(<Button ghost>Button Test</Button>);
    const props = tree.props();

    expect(props.ghost).toEqual(true);
    expect(toJson(tree)).toMatchSnapshot();
  });

  it('renders button with a loading icon when prop loading is true', () => {
    const tree = shallow(<Button loading>Button Test</Button>);

    expect(tree.find(MessageOutlined)).toHaveLength(0);
    expect(toJson(tree)).toMatchSnapshot();
  });

  it('renders a disabled button with prop disabled', () => {
    const tree = shallow(<Button disabled>Button Test</Button>);
    const props = tree.props();

    expect(props.disabled).toEqual(true);
    expect(toJson(tree)).toMatchSnapshot();
  });

  it('className', () => {
    const fakeClassName = 'test';
    const wrapper = shallow(<Button className={fakeClassName} />);
    expect(wrapper.hasClass('test')).toEqual(true);
  });

  it('Button styling', () => {
    const fakeClassName = 'test';
    const wrapper = shallow(<Button className={fakeClassName} />);
    const wrapperButton = wrapper.find('.test');
    expect(wrapperButton.length).toEqual(1);
  });

  it('Button styling', () => {
    const style = { height: '36px' };
    const fakeClassName = 'test';
    const wrapper = shallow(<Button className={fakeClassName} style={style} />);
    expect(wrapper.hasClass('test')).toEqual(true);
    expect(wrapper.find('.test')).toHaveLength(1);
  });

  it('simulates a click event', () => {
    const onClick = jest.fn();
    const tree = shallow(<Button onClick={onClick}>Button Test</Button>);
    const props = tree.props();

    props.onClick();
    expect(toJson(tree)).toMatchSnapshot();
  });

  it('Test click event', () => {
    const mockCallBack = jest.fn();
    const button = shallow(<Button onClick={mockCallBack}>Ok!</Button>);
    button
      .dive()
      .find('button')
      .simulate('click');
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
});
