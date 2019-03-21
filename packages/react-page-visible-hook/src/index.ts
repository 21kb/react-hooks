import { useEffect, useState } from 'react';

export interface IPageVisibilityState {
  readonly hidden: boolean;
  readonly visibilityState: string;
}

export const initialState: IPageVisibilityState = () => (global.document ? {
  hidden: document.hidden,
  visibilityState: document.visibilityState,
} : {
  hidden: false,
  visibilityState: "prerender"  
});

const useVisible = () => {
  const [state, setState] = useState(initialState);

  const onVisibilityChangeEvent = (event: any) => {
    setState({
      hidden: document.hidden,
      visibilityState: document.visibilityState,
    });
  };

  useEffect(() => {
    if (global.document) {
      document.addEventListener('visibilitychange', onVisibilityChangeEvent);

      return () => {
        document.removeEventListener('visibilitychange', onVisibilityChangeEvent);
      };
    }
  }, []);

  return state;
};

export default useVisible;
