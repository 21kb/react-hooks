import { useCallback } from 'react';

export type Vibrate = number | number[];

export const defaultValue: Vibrate = 200;

const useVibration = (value: Vibrate = defaultValue) => {
  const vibrate = () =>
    useCallback(() => {
      navigator.vibrate(value);
    }, []);

  return vibrate;
};

export default useVibration;
