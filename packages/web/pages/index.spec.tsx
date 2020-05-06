import { mount, ReactWrapper } from 'enzyme';
import IndexPage from 'pages/index';
import React from 'react';

describe('pages/index', () => {
  let component: ReactWrapper;

  beforeEach(() => {
    component = mount(<IndexPage />);
  });

  it('should contain hero', () => {
    expect(component.find('.hero.is-primary.is-large')).toHaveLength(1);
    expect(component.find('.hero-body')).toHaveLength(1);
    expect(component.find('.hero .container')).toHaveLength(1);
    expect(component.find('.hero .title')).toHaveLength(1);
    expect(component.find('.hero .subtitle')).toHaveLength(1);
  });
});
