import { mount, ReactWrapper } from 'enzyme';
import IndexPage from 'pages/index';
import React from 'react';

describe('pages/index', () => {
  let component: ReactWrapper;

  beforeEach(() => {
    component = mount(<IndexPage />);
  });

  it('should contain title', () => {
    expect(component.find('h1')).toHaveLength(1);
  });
});
