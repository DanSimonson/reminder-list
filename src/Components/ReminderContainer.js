import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { addReminder, deleteReminder } from "../Reminders/ReminderActions";
import "./ReminderContainer.css";

function ReminderContainer(props) {
  const [text, setText] = useState("");
  //const buttonOne = <button onClick={this.submit}>Submit</button>;
  //const buttonTwo = <button>You May Enter</button>;
  const buttonOne = (
    <button
      className="Btn"
      type="button"
      onClick={() => {
        props.addReminder(text);
        setText("");
      }}
      style={{ marginTop: "25px" }}
    >
      Add Reminder
    </button>
  );
  const buttonTwo = (
    <button className="Btn" type="button" style={{ marginTop: "25px" }}>
      Add Reminder
    </button>
  );

  const onChangeReminderText = (e) => {
    setText(e.target.value);
  };

  const reminderList = props.reminders.length ? (
    props.reminders.map((todo) => {
      return (
        <div key={todo.id} className="output">
          <p style={{ width: "3rem" }}>{todo.text}</p>
          <button
            className="Btn"
            onClick={() => props.deleteReminder(todo.id)}
            style={{ marginLeft: "25px" }}
          >
            Delete
          </button>
        </div>
      );
    })
  ) : (
    <p className="center">No Reminders</p>
  );
  return (
    <div className="divContainer">
      <div className="picDiv">
        <img
          src="https://res.cloudinary.com/dmglopmul/image/upload/v1587687687/projectPhotos/blogs/Honey-Do-List2.jpg"
          alt="Honey Do"
        />
      </div>
      <div className="reminderInputDiv">
        <input onChange={onChangeReminderText} value={text} type="text"></input>
        {text !== "" ? buttonOne : buttonTwo}
      </div>
      <h2>Honey Do List</h2>
      <div className="reminderListDiv">{reminderList}</div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    reminders: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addReminder: (text) => dispatch(addReminder(text)),
    deleteReminder: (id) => dispatch(deleteReminder(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReminderContainer);
