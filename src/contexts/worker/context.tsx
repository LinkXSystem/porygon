import React, { useContext, useReducer } from 'react';

import { WorkerActionType } from './action';

interface WorkerStateContextProps { }

interface WorkerState {
    isLoad: boolean,
};

interface WorkerAction { type: string };

const WorkerStateContext = React.createContext<WorkerStateContextProps>({} as WorkerStateContextProps);

const WorkerStateReducer = (state: WorkerState, action: WorkerAction): WorkerState => {
    const { type } = action;

    switch (type) {
        case WorkerActionType.LOAD_WORKER_FILE: {
            return state;
        }
        default: {
            return state;
        }
    }
}

const InitialState = {
    isLoad: false
}

export const WorkerStateProvider = ({ children }: React.PropsWithChildren<{}>) => {
    const [state, dispatch] = useReducer(WorkerStateReducer, InitialState);

    return (
        <WorkerStateContext.Provider value={{ state, dispatch }}>
            {children}
        </WorkerStateContext.Provider>
    );
};


export const useWorkerState = () => {
    return useContext(WorkerStateContext);
}