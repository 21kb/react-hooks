import { useEffect, useState } from 'react';

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
