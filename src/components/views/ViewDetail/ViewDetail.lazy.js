import React, { lazy, Suspense } from 'react';

const LazyViewDetail = lazy(() => import('./ViewDetail'));

const ViewDetail = props => (
  <Suspense fallback={null}>
    <LazyViewDetail {...props} />
  </Suspense>
);

export default ViewDetail;
