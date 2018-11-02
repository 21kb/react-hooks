export declare type UseState = <T>(
  initialState: T,
) => [T, (newState: T) => void];
export declare const useState: UseState;
export declare type UseEffect = (
  didUpdate: () => (() => void) | void,
  params?: any[],
) => void;
export declare const useEffect: UseEffect;
export declare const useOfflineOnlineStatus: () => boolean;
export declare const useOfflineStatus: () => boolean;
export declare const useOnlineStatus: () => boolean;
export default useOfflineOnlineStatus;
