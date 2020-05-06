import { mount, ReactWrapper } from 'enzyme';
import React from 'react';

import AboutPage from './about';

describe('pages/about', () => {
  let component: ReactWrapper;

  beforeEach(() => {
    component = mount(<AboutPage />);
  });

  it('should contain hero', () => {
    expect(component.find('.hero.is-info.is-large')).toHaveLength(1);
    expect(component.find('.hero-body')).toHaveLength(1);
    expect(component.find('.hero .container')).toHaveLength(1);
    expect(component.find('.hero .title')).toHaveLength(1);
    expect(component.find('.hero .subtitle')).toHaveLength(1);
  });
});
