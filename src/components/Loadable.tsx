import { ElementType, PropsWithChildren, Suspense } from 'react';

import Loader from './Loader';

export const Loadable =
  (Component: ElementType) => (props: PropsWithChildren) => (
    <Suspense fallback={<Loader />}>
      <Component {...props} />
    </Suspense>
  );
