import React from 'react';
import { render } from 'react-testing-library';
import BoilerplateReactCompnent from '../src/main';

describe('Basic Test', () => {
  it('renders to document', () => {
    const { container } = render(<BoilerplateReactCompnent />);
    const cnt = container.querySelector('.react-sw-update-tips')
      .innerHTML;
    expect(cnt).toMatch(/Hello React/);
  });
});
