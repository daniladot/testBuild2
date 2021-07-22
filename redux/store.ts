import {createStore, Store} from 'redux';
import {createWrapper, Context} from 'next-redux-wrapper';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from "./reducers/mainReducer"


export interface State {
    tick: string;
    name: string;
}

// create a makeStore function
const makeStore = (context: Context) => createStore(reducer, composeWithDevTools());

// export an assembled wrapper
export const wrapper = createWrapper<Store<State>>(makeStore, {debug: true});
