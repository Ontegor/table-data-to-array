import { useState, useCallback } from 'react';

const useMergeState = initialState => {
    const [state, setState] = useState(initialState || {});

    const mergeState = useCallback(newState => {
        setState(currentState => ({ ...currentState, ...newState }));
    }, []);

    return [state, mergeState];
};

export default useMergeState;