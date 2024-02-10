import { render } from '@testing-library/react';

import AuthFeature from './auth-feature';

describe('AuthFeature', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AuthFeature />);
    expect(baseElement).toBeTruthy();
  });
});
