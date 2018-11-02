import * as React from 'react';

export type UseState = <T>(initialState: T) => [T, (newState: T) => void];
export const useState: UseState = (React as any).useState;

export type UseEffect = (
  didUpdate: () => (() => void) | void,
  params?: any[],
) => void;
export const useEffect: UseEffect = (React as any).useEffect;

export interface IWindowFoucsState {
  type: FocusEvent | null | undefined;
}

export const initialState: IWindowFoucsState = {
  type: null,
};

const useElementFocus = $el => {
  const [state, setState] = useState({});

  const onFocusEvent = (event: FocusEvent) => {
    setState({
      type: event.type,
    });
  };

  useEffect(() => {
    $el.addEventListener('onfocus', onFocusEvent);

    return () => {
      $el.removeEventListener('onfocus', onFocusEvent);
    };
  });

  return state;
};

export default useElementFocus;
