import { ADD_REMINDER, DELETE_REMINDER } from "./ReminderTypes";

// if you want to show initial data :)
/*const INITIAL_DATA = [
  {
    id: 0,
    text: "Walk the Dog",
  },
  {
    id: 1,
    text: "learn Redux",
  },
];*/

const INITIAL_DATA = [];

const ReminderReducer = (state = INITIAL_DATA, action) => {
  console.log(action);
  switch (action.type) {
    case ADD_REMINDER:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
        },
      ];
    case DELETE_REMINDER:
      const numIndex = parseInt(action.id);
      return state.filter((reminder) => reminder.id !== numIndex);
    default:
      return state;
  }
};

export default ReminderReducer;
