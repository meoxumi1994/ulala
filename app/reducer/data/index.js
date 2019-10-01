import { combineReducers } from "redux";
import owner from "./owner";
import user from "./user";
import router from "./router"
import message from "./message"

const data = combineReducers({
    owner,
    user,
    router,
    message,
});

export default data;
