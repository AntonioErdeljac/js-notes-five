import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';

import Card from './index';

const makeProps = ({ children } = {}) => ({
  children: children || 'Content',
});

const renderComponent = (props) => shallow(<Card {...props} />);

describe('Card Component', () => {
  it('renders correctly according to snapshot', () => {
    expect(toJson(renderComponent(makeProps()))).toMatchSnapshot();
  });
});
