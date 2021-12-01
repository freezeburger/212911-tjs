import React, { lazy, Suspense } from 'react';

const LazyViewTemplate = lazy(() => import('./ViewTemplate'));

const ViewTemplate = props => (
  <Suspense fallback={null}>
    <LazyViewTemplate {...props} />
  </Suspense>
);

export default ViewTemplate;
