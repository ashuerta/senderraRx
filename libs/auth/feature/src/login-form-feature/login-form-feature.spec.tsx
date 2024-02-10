import { render } from '@testing-library/react';

import LoginFormFeature from './login-form-feature';

describe('LoginFormFeature', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LoginFormFeature />);
    expect(baseElement).toBeTruthy();
  });
});
