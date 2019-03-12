import { useCallback } from 'react';

export interface INotification {
  options?: object;
  title: string;
}

export const defaultValue: INotification = {
  options: {
    dir: 'auto',
    lang: 'EN',
  },
  title: '💡 Test notification!',
};

const useNotification = (value: INotification = defaultValue) => {
  const { options, title } = defaultValue;
  const notify = () =>
    useCallback(() => {
      if (Notification.permission === 'granted') {
        const notification = new Notification(title, options);
      } else {
        // Fail silenty
        return;
      }
    }, []);

  return notify;
};

export default useNotification;
