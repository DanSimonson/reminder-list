import { ADD_REMINDER, DELETE_REMINDER } from "./ReminderTypes";

let TodoId = 1;

export const addReminder = (text) => ({
  type: ADD_REMINDER,
  id: TodoId++,
  text: text,
});

export const deleteReminder = (id) => ({
  type: DELETE_REMINDER,
  id: id,
});
