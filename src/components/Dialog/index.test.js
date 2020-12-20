import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';

import Dialog from './index';

const makeProps = ({ isOpen, onClose, children } = {}) => ({
  isOpen: isOpen || (() => {}),
  onClose: onClose || (() => {}),
  children: children || 'Content',
});

const renderComponent = (props) => shallow(<Dialog {...props} />);

describe('Dialog Component', () => {
  it('renders correctly according to snapshot', () => {
    expect(toJson(renderComponent(makeProps()))).toMatchSnapshot();
  });

  it('renders correct children', () => {
    const expectedChildren = 'Content';

    const props = makeProps({ chidlren: expectedChildren });
    const wrapper = renderComponent(props);

    expect(wrapper.children().debug()).toEqual(expectedChildren);
  });
});
