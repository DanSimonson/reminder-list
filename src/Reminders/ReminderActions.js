import { ADD_REMINDER, DELETE_REMINDER } from "./ReminderTypes";

let TodoId = Math.random(); //2; //TodoId++,

export const addReminder = (text) => ({
  type: ADD_REMINDER,
  id: TodoId,
  text,
});

export const deleteReminder = (id) => ({
  type: DELETE_REMINDER,
  id: id,
});
