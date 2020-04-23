import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { addReminder, deleteReminder } from "../Reminders/ReminderActions";
import { bindActionCreators } from "redux";

function ReminderContainer(props) {
  const [text, setText] = useState("");
  //console.log("props: ", props);
  /*onClick={() => {
    deleteTodo(todo.id);
  }}*/
  const onChangeReminderText = (e) => {
    setText(e.target.value);
  };

  ///onClick={() => this.props.deleteTodo(todo.id)}

  const reminderList = props.reminders.length ? (
    props.reminders.map((todo) => {
      return (
        <div key={todo.id}>
          <span>{todo.text}</span>
          <button onClick={() => props.deleteReminder(todo.id)}>Delete</button>
        </div>
      );
    })
  ) : (
    <p className="center">No Reminders</p>
  );
  return (
    <>
      <input onChange={onChangeReminderText} value={text} type="text"></input>
      <button
        type="button"
        onClick={() => {
          props.addReminder(text);
          setText("");
        }}
        style={{ marginTop: "25px" }}
      >
        Add Reminder
      </button>
      <h2>Honey Do List</h2>
      {reminderList}
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    reminders: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  /*return bindActionCreators(
    {
      addReminder,
      deleteReminder,
    },
    dispatch
  );*/
  return {
    addReminder: (text) => dispatch(addReminder(text)),
    deleteReminder: (id) => dispatch(deleteReminder(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReminderContainer);
