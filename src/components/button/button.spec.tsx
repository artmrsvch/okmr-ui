import * as React from 'react';
import { shallow } from 'enzyme';
import Button from './index';
import '../../setupTests';

import '@testing-library/jest-dom/extend-expect';

describe('Button', () => {
  it('matches snapshot: invisible', () => {
    const wrapper = shallow(<Button />);
    expect(wrapper).toMatchSnapshot();
  });
});
