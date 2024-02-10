import { render } from '@testing-library/react';

import AuthData from './auth-data';

describe('AuthData', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AuthData />);
    expect(baseElement).toBeTruthy();
  });
});
