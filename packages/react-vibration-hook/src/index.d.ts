export declare type UseCallback = <T extends ((...args: any[]) => any)>(
  callback: T,
  args: any[],
) => T;
export declare const useCallback: UseCallback;
export declare type Vibrate = number | number[];
export declare const defaultValue: Vibrate;
declare const useVibration: (value?: Vibrate) => () => () => void;
export default useVibration;
