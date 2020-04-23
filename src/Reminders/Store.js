import { createStore } from "redux";
import ReminderReducer from "./ReminderReducer";

const Store = createStore(ReminderReducer);

export default Store;
