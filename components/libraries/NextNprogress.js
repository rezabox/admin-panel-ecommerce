'use client';

import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';

const NextNprogress = ({ children }) => {
  return (
    <>
      {children}
      <ProgressBar
        height="4px"
        color="#fffd00"
        options={{ showSpinner: true }}
        shallowRouting
      />
    </>
  );
};
export default NextNprogress;