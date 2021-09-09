import React, { useContext, useState } from "react";
import { SettingsContext } from "../context/SettingsContext";

const SetPomodoro = () => {
  const [newTimer, setNewTimer] = useState({
    work: 0.5,
    short: 0.2,
    long: 0.5,
    active: "work",
  });

  const { updateExecute } = useContext(SettingsContext);

  const handleChange = (input) => {
    const { name, value } = input.target;
    switch (name) {
      case "work":
        setNewTimer({
          ...newTimer,
          work: parseFloat(value),
        });
        break;
      case "shortBreak":
        setNewTimer({
          ...newTimer,
          short: parseFloat(value),
        });
        break;
      case "longBreak":
        setNewTimer({
          ...newTimer,
          long: parseFloat(value),
        });
        break;
      default:
        break;
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    updateExecute(newTimer);
  };
  return (
    <div className="form-container">
      <form noValidate onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <div>
            <label style={{ color: "#EF690C" }}>Work</label>
            <input
              className="input"
              type="number"
              name="work"
              onChange={handleChange}
              value={newTimer.work}
              step="any"
            />
          </div>
          <div>
            <label style={{ color: "#1DDE9B" }}>Short Break</label>
            <input
              className="input"
              type="number"
              name="shortBreak"
              onChange={handleChange}
              value={newTimer.short}
              step="any"
            />
          </div>
          <div>
            <label style={{ color: "#3674F5" }}>Long Break</label>
            <input
              className="input"
              type="number"
              name="longBreak"
              onChange={handleChange}
              value={newTimer.long}
              step="any"
            />
          </div>
        </div>
        <button type="submit">Set Timer</button>
      </form>
    </div>
  );
};

export default SetPomodoro;
