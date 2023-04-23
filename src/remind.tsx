import React, { useState } from 'react';
import Calendar from 'react-calendar';
import './remind.css';

interface Reminder {
  date: Date;
  text: string;
}

function Remind() {
  const [date, setDate] = useState<Date>(new Date());
  const [text, setText] = useState<string>('');
  const [reminders, setReminders] = useState<Reminder[]>([]);

  const handleDateChange = (value: Date | Date[], event: React.MouseEvent<HTMLButtonElement>) => {
    if (Array.isArray(value)) {
      setDate(value[0] as Date);
    } else {
      setDate(value as Date);
    }
  };
  

  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setReminders([...reminders, { date, text }]);
    setText('');
  };

  const handleDelete = (index: number) => {
    setReminders(reminders.filter((reminder, i) => i !== index));
  };

  return (
    <div className="Reminder">
      <h1>Reminder App</h1>
      <div className="content">
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <label htmlFor="text">Reminder:</label>
            <input type="text" id="text" value={text} onChange={handleTextChange} />
            <label htmlFor="date">Date:</label>
            <Calendar value={date} onChange={handleDateChange} />
            <button type="submit">Add Reminder</button>
          </form>
        </div>
        <div className="reminders-container">
          <h2>Reminders:</h2>
          <ul>
            {reminders.map((reminder, index) => (
              <li key={index}>
                <span>{reminder.text}</span>
                <span>{reminder.date.toLocaleString()}</span>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Remind;
