import * as React from 'react';

export type UseState = <T>(initialState: T) => [T, (newState: T) => void];
export const useState: UseState = (React as any).useState;

export type UseEffect = (
  didUpdate: () => (() => void) | void,
  params?: any[],
) => void;
export const useEffect: UseEffect = (React as any).useEffect;

export interface IOrientationState {
  angle: number;
  type: string;
}

export const defaultState: IOrientationState = {
  angle: 0,
  type: 'landscape-primary',
};

const useOrientation = (initialState: IOrientationState = defaultState) => {
  const [state, setState] = useState(initialState);

  const onOrientationChangeEvent = () => {
    const { orientation } = screen as any;
    const { angle, type } = orientation;

    if (!orientation) {
      setState(initialState);
    }

    setState({ angle, type });
  };

  useEffect(() => {
    window.addEventListener(
      'orientationchange',
      onOrientationChangeEvent,
      true,
    );

    return () => {
      window.addEventListener(
        'orientationchange',
        onOrientationChangeEvent,
        true,
      );
    };
  }, []);

  return state;
};

export default useOrientation;
