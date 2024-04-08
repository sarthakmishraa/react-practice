import { useState } from "react";

export const useCount = () => {
    const [state, setState] = useState(0);

    const increase = () => {
        setState(state + 1);
    };

    const decrease = () => {
        setState(state - 1);
    };

    const reset = () => {
        setState(0);
    };

    return {state, increase, decrease, reset};
}