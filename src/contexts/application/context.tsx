import React, { useContext, useReducer } from 'react';

import { ApplicationActionType } from './action';

interface ApplicationStateContextProps { }

interface ApplicationState {
};

interface ApplicationAction { type: string };

const ApplicationStateContext = React.createContext<ApplicationStateContextProps>({} as ApplicationStateContextProps);

const ApplicationStateReducer = (state: ApplicationState, action: ApplicationAction): ApplicationState => {
    const { type } = action;

    switch (type) {
        case ApplicationActionType.INITIALIZE_WORKSPACE: {
            return state;
        }
        case ApplicationActionType.INITIALIZE_WORKER: {
            return state;
        }
        default: {
            return state;
        }
    }
}

const InitialState = {

}

export const ApplicationStateProvider = ({ children }: React.PropsWithChildren<{}>) => {
    const [state, dispatch] = useReducer(ApplicationStateReducer, InitialState);

    return (
        <ApplicationStateContext.Provider value={{ state, dispatch }}>
            {children}
        </ApplicationStateContext.Provider>
    );
};


export const useApplicationState = () => {
    return useContext(ApplicationStateContext);
}