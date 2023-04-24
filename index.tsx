import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
const title = 'Exercise: Components and props';
const task = `
Have a look at Child.tsx Try to pass the words: 'PASSED PROPS' as a value from App to ChildComponent. Display the prop via {} directly in Child.
`;

root.render(
  <StrictMode>
    <App title={title} task={task} />
  </StrictMode>
);
