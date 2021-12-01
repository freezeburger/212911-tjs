import React, { lazy, Suspense } from 'react';

const LazyViewList = lazy(() => import('./ViewList'));

const ViewList = props => (
  <Suspense fallback={null}>
    <LazyViewList {...props} />
  </Suspense>
);

export default ViewList;
