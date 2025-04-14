import { ReactElement, useEffect } from 'react';

import { useRouter } from 'next/router';

const ScrollTop = ({ children }: { children?: ReactElement | null }) => {
  const { pathname } = useRouter();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return children;
};

export default ScrollTop;
