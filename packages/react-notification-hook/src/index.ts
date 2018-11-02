import * as React from 'react';

export type UseCallback = <T extends ((...args: any[]) => any)>(
  callback: T,
  args: any[],
) => T;
export const useCallback: UseCallback = (React as any).useCallback;

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
