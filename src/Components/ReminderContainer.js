import React from "react";
import { connect } from "react-redux";
import { addReminder, deleteReminder } from "../Reminders/ReminderActions";
import { bindActionCreators } from "redux";

function ReminderContainer(props) {
  console.log("props: ", props.reminders);
  /*onClick={() => {
    deleteTodo(todo.id);
  }}*/
  debugger;
  const reminderList = props.reminders.length ? (
    props.reminders.map((todo) => {
      console.log("todo.text: ", todo.text);
      return (
        <div key={todo.id}>
          <span>{todo.text}</span>
        </div>
      );
    })
  ) : (
    <p className="center">No More Todos left</p>
  );
  return (
    <div>
      {/*<h2>Honey Do List</h2>
      <button>Add Reminder</button>*/}
      {reminderList}
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log("state: ", state);
  console.log("state: ", state[0].id);
  console.log("state: ", state[0].text);
  return {
    reminders: state,
    //id: state.id,
    //text: state.text,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      addReminder,
      deleteReminder,
    },
    dispatch
  );
  /*return {
    addReminder: () => dispatch(addReminder()),
    deleteReminder: () => dispatch(deleteReminder()),
  };*/
};

export default connect(mapStateToProps, mapDispatchToProps)(ReminderContainer);
