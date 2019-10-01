import { combineReducers } from "redux";

import createrouter from "./createrouter";
import findrouter from "./findrouter"
import matchroute from "./matchroute"
import matchchat from "./matchchat"

const inst = combineReducers({
    createrouter,
    findrouter,
    matchroute,
    matchchat,
});

export default inst;
