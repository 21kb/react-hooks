import { useEffect, useState } from "react";

export const initialState = () =>
	global.document
		? {
				readyState: document.readyState
		  }
		: { readyState: null };

const useDOMState = () => {
	const [state, setState] = useState(initialState);

	const handleDOM = () => {
		if (global.document) {
			setState({ readyState: document.readyState });
		}
	};

	useEffect(() => {
		if (global.document) {
			document.addEventListener("DOMContentLoaded", handleDOM);
			return () => {
				document.removeEventListener("DOMContentLoaded", handleDOM);
			};
		}
	}, []);

	return state;
};

export default useDOMState;
