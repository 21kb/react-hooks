import { useEffect, useState } from 'react';

export interface IWindowFocusState {
  type: FocusEvent | null | undefined;
}

export const initialState: IWindowFocusState = {
  type: null,
};

const useElementFocus = $el => {
  const [state, setState] = useState({});

  const onFocusEvent = (event: FocusEvent) => {
    setState({
      type: event.type,
    });
  };

  useEffect(() => {
    $el.addEventListener('onfocus', onFocusEvent);

    return () => {
      $el.removeEventListener('onfocus', onFocusEvent);
    };
  });

  return state;
};

export default useElementFocus;
