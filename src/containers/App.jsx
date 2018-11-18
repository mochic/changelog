import React, { Suspense } from 'react';
import { createResource } from 'simple-cache-provider';
import ErrorBoundary from './ErrorBoundary';
export const Changelog = React.lazy(() => import('./Changelog'));

import './styles/App.css';

// this is far more depraved...and we get to use the new features for no reason!
// based on: https://blog.logrocket.com/async-rendering-in-react-with-suspense-5d0eaac886c8
const changelogResource = createResource(async () => {
  const res = await fetch(
    'https://raw.githubusercontent.com/mochic/changelog/master/CHANGELOG.md'
  );
  return await res.text();
});

export default () => (
  <div className="App">
    <ErrorBoundary>
      <Suspense fallback={<div>loading...</div>}>
        <Changelog changelogResource={changelogResource} />
      </Suspense>
    </ErrorBoundary>
  </div>
);
