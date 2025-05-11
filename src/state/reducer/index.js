import { combineReducers } from "redux";
import { menu, about, mode } from "./AllReducer";

const reducers = combineReducers({
    isMenuOpen: menu,
    isAboutOpen: about,
    mode: mode,
})

export default reducers