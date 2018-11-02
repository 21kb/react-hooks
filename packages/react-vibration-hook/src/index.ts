import * as React from 'react';

export type UseCallback = <T extends ((...args: any[]) => any)>(
  callback: T,
  args: any[],
) => T;
export const useCallback: UseCallback = (React as any).useCallback;

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
