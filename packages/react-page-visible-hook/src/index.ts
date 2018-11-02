import * as React from 'react';

export type UseState = <T>(initialState: T) => [T, (newState: T) => void];
export const useState: UseState = (React as any).useState;

export type UseEffect = (
  didUpdate: () => (() => void) | void,
  params?: any[],
) => void;
export const useEffect: UseEffect = (React as any).useEffect;

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
