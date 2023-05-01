// test-utils.js
import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

const renderWithRouter = (ui, options) =>
  render(<Router>{ui}</Router>, options);

export * from '@testing-library/react';
export { renderWithRouter };
