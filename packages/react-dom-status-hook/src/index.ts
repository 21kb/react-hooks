import { useEffect, useState } from 'react';

export interface IDOMReadyState {
  readonly readyState: string;
}

export const initialState: IDOMReadyState = {
  readyState: document.readyState,
};

const useDOMState = () => {
  const [state, setState] = useState(initialState);

  const handleDOM = () => {
    // document.readyState is a read-only property AFAICT.
    // Therefore, `setReadyState` has no effect on
    // `document.readyState`. Doing this just to make TS
    // happy.
    setState({ readyState: document.readyState });
  };

  useEffect(() => {
    document.addEventListener('DOMContentLoaded', handleDOM);
    return () => {
      document.removeEventListener('DOMContentLoaded', handleDOM);
    };
  }, []);

  return state;
};

export default useDOMState;
