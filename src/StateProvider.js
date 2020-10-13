import React, {createContext, useContext, useReducer} from "react";

export const StateContext = createContext();//preparing data layer
//wrap the application in the state provider
export const StateProvider = ({reducer, initialState, children}) =>(
    <StateContext.Provider value = {useReducer (reducer,initialState)}>
        {children}
    </StateContext.Provider>
);

//using useStateValue >> data pulling
export const useStateValue = () => useContext(StateContext);