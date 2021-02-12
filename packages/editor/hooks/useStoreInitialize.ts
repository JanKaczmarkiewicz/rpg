import { useMemo } from 'react';
import { createStore, Reducer } from 'redux';
import { composedEnhancer } from '../store';
import reducer from '../store/map/reducer';
import { State } from '../store/map/types';

const useStoreInitialize = (initialState: State) => {
    const store = useMemo(() => createStore(reducer as Reducer, initialState, composedEnhancer), []);
    return store;
};

export default useStoreInitialize;
