export declare type UseState = <T>(
  initialState: T,
) => [T, (newState: T) => void];
export declare const useState: UseState;
export declare type UseEffect = (
  didUpdate: () => (() => void) | void,
  params?: any[],
) => void;
export declare const useEffect: UseEffect;
export interface IOrientationState {
  angle: number;
  type: string;
}
export declare const defaultState: IOrientationState;
declare const useOrientation: (
  initialState?: IOrientationState,
) => IOrientationState;
export default useOrientation;
