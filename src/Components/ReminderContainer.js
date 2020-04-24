import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { addReminder, deleteReminder } from "../Reminders/ReminderActions";
import "./ReminderContainer.css";

function ReminderContainer(props) {
  const [text, setText] = useState("");
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
      Add
    </button>
  );
  const buttonTwo = (
    <button className="Btn" type="button" style={{ marginTop: "25px" }}>
      Add
    </button>
  );

  const onChangeReminderText = (e) => {
    setText(e.target.value);
  };
  //style={{ marginLeft: "25px" }} // style={{ width: "100%" }}
  const reminderList = props.reminders.length ? (
    props.reminders.map((todo) => {
      return (
        <div key={todo.id} className="output">
          <p>{todo.text}</p>
          <button
            className="Btn positionAbsolute"
            onClick={() => props.deleteReminder(todo.id)}
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
        <input
          onChange={onChangeReminderText}
          value={text}
          type="text"
          className="honeyInput"
        ></input>
        {text !== "" ? buttonOne : buttonTwo}
      </div>
      <div className="wrapper">
        {/*<h2 className="title">Honey Do List</h2>*/}
        <div className="reminderListDiv">{reminderList}</div>
      </div>
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
