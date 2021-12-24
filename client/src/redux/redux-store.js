import {combineReducers, createStore} from 'redux'
import GameViewReducer from "./GameViewReducer"

let reducers = combineReducers({
    GameViewPage: GameViewReducer,
});

let store = createStore(reducers);

window.store = store;

export default store;