import React,{ useState, useEffect } from "react";
import { Reminder } from "./Reminder";
import moment from "moment";

interface ReminderFormProps {
  reminder: Reminder | null;
  onClose: () => void;
  onSave: (reminder: Reminder) => void;
}

const ReminderForm = ({ reminder, onClose, onSave }: ReminderFormProps) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [color, setColor] = useState("#FFFFFF");

  useEffect(() => {
    if (reminder) {
      setTitle(reminder.title);
      setDate(moment(reminder.date).format("YYYY-MM-DDTHH:mm"));
      setColor(reminder.color);
    }
  }, [reminder]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (title.trim() === "" || date.trim() === "") {
      return;
    }

    const newReminder: Reminder = {
      id: reminder ? reminder.id : Date.now(),
      title: title,
      date: new Date(date),
      color: color,
    };

    onSave(newReminder);
    onClose();
  };

  return (
    <div>
      <h2>{reminder ? "Edit" : "Add"} Reminder</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="date">Date:</label>
          <input
            type="datetime-local"
            id="date"
            value={date}
            onChange={(event) => setDate(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="color">Color:</label>
          <input
            type="color"
            id="color"
            value={color}
            onChange={(event) => setColor(event.target.value)}
          />
        </div>
        <button type="submit">{reminder ? "Save" : "Add"}</button>{" "}
        <button type="button" onClick={onClose}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default ReminderForm;
