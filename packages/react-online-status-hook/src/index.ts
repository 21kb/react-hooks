import * as React from 'react';

export type UseState = <T>(initialState: T) => [T, (newState: T) => void];
export const useState: UseState = (React as any).useState;

export type UseEffect = (
  didUpdate: () => (() => void) | void,
  params?: any[],
) => void;
export const useEffect: UseEffect = (React as any).useEffect;

export const useOfflineOnlineStatus = () => {
  const [state, setState] = useState(navigator.onLine);

  const onOnlineEvent = () => {
    setState(navigator.onLine);
  };

  const onOfflineEvent = () => {
    setState(navigator.onLine);
  };

  useEffect(() => {
    window.addEventListener('online', onOnlineEvent);
    window.addEventListener('offline', onOfflineEvent);

    return () => {
      window.removeEventListener('online', onOnlineEvent);
      window.removeEventListener('offline', onOfflineEvent);
    };
  });

  return state;
};

export const useOfflineStatus = useOfflineOnlineStatus;
export const useOnlineStatus = useOfflineOnlineStatus;
export default useOfflineOnlineStatus;
