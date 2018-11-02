export declare type UseCallback = <T extends ((...args: any[]) => any)>(
  callback: T,
  args: any[],
) => T;
export declare const useCallback: UseCallback;
export interface INotification {
  options?: object;
  title: string;
}
export declare const defaultValue: INotification;
declare const useNotification: (value?: INotification) => () => () => void;
export default useNotification;
