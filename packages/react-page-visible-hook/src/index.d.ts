export declare type UseState = <T>(
  initialState: T,
) => [T, (newState: T) => void];
export declare const useState: UseState;
export declare type UseEffect = (
  didUpdate: () => (() => void) | void,
  params?: any[],
) => void;
export declare const useEffect: UseEffect;
export interface IPageVisibilityState {
  readonly hidden: boolean;
  readonly visibilityState: string;
}
export declare const initialState: IPageVisibilityState;
declare const useVisible: () => IPageVisibilityState;
export default useVisible;
