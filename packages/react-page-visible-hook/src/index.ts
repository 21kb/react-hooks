import { useEffect, useState } from 'react';

export interface IPageVisibilityState {
  readonly hidden: boolean;
  readonly visibilityState: string;
}

export const initialState: IPageVisibilityState = {
  hidden: document.hidden,
  visibilityState: document.visibilityState,
};

const useVisible = () => {
  const [state, setState] = useState(initialState);

  const onVisibilityChangeEvent = (event: any) => {
    setState({
      hidden: document.hidden,
      visibilityState: document.visibilityState,
    });
  };

  useEffect(() => {
    document.addEventListener('visibilitychange', onVisibilityChangeEvent);

    return () => {
      document.removeEventListener('visibilitychange', onVisibilityChangeEvent);
    };
  }, []);

  return state;
};

export default useVisible;
