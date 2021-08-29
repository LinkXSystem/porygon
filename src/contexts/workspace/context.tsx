import React, { useContext, useReducer } from 'react';

import { Card } from '../../models';

import { WorkspaceActionType } from './action';

interface WorkspaceStateContextProps { }

interface WorkspaceState {
    cards: Card[]
};

interface WorkspaceAction { type: string };

const WorkspaceStateContext = React.createContext<WorkspaceStateContextProps>({} as WorkspaceStateContextProps);

const WorkspaceStateReducer = (state: WorkspaceState, action: WorkspaceAction): WorkspaceState => {
    const { type } = action;

    switch (type) {
        case WorkspaceActionType.SET_WORKSPACE: {
            return state;
        }
        case WorkspaceActionType.CREATE_CARD: {
            return state;
        }
        case WorkspaceActionType.UPDATE_CARD: {
            return state;
        }
        case WorkspaceActionType.DELETE_CARD: {
            return state;
        }
        default: {
            return state;
        }
    }
}

const InitialState = {
    cards: []
}

export const WorkspaceStateProvider = ({ children }: React.PropsWithChildren<{}>) => {
    const [state, dispatch] = useReducer(WorkspaceStateReducer, InitialState);

    return (
        <WorkspaceStateContext.Provider value={{ state, dispatch }}>
            {children}
        </WorkspaceStateContext.Provider>
    );
};


export const useWorkspaceState = () => {
    return useContext(WorkspaceStateContext);
}