import React from "react";
import "./App.css";
import ReminderContainer from "./Components/ReminderContainer";
import { Provider } from "react-redux";
import Store from "./Reminders/Store";

function App() {
  return (
    <Provider store={Store}>
      <div className="App">
        <ReminderContainer />
      </div>
    </Provider>
  );
}

export default App;
