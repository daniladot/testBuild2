import {AnyAction} from "redux";
import {HYDRATE} from "next-redux-wrapper";
import {State} from "../store";

const initState: State = {
    tick: 'init',
    name: 'danial'
}

const reducer = (state: State = initState, action: AnyAction) => {
    switch (action.type) {
        case HYDRATE:
            // Attention! This will overwrite client state! Real apps should use proper reconciliation.
            return {...state, ...action.payload};
        case 'TICK':
            state.name = action.payload
            return {...state};
        default:
            return state;
    }
};

export default reducer