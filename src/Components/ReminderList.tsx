import React, { useState } from "react";
import { Reminder } from "./Reminder";
import ReminderForm from "./ReminderForm";
import ReminderListItem from "./ReminderListItem";
import moment from "moment";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

const ReminderList = () => {
  const [reminders, setReminders] = useState<Reminder[]>([]);
  const [editingReminder, setEditingReminder] = useState<Reminder | null>(null);
  const [showAddForm, setShowAddForm] = useState(false);

  const handleSave = (newReminder: Reminder) => {
    const newReminders = reminders.filter((r) => r.id !== newReminder.id);
    newReminders.push(newReminder);
    setReminders(newReminders);
  };

  const handleDelete = (id: number) => {
    const newReminders = reminders.filter((r) => r.id !== id);
    setReminders(newReminders);
  };

  const handleEdit = (reminder: Reminder) => {
    setEditingReminder(reminder);
    setShowAddForm(true);
  };

  const handleSelect = ({ start }: { start: Date }) => {
    setEditingReminder(null);
    setShowAddForm(true);
    const newReminder: Reminder = {
      id: Date.now(),
      title: "",
      date: start,
      color: "#FFFFFF",
    };
    setEditingReminder(newReminder);
  };

  const handleClose = () => {
    setShowAddForm(false);
    setEditingReminder(null);
  };

  const eventList = reminders.map((reminder) => ({
    start: reminder.date,
    end: reminder.date,
    title: reminder.title,
    color: reminder.color,
  }));

  return (
    <div>
      <h2>Reminders</h2>
      <div>
        {reminders.length} {reminders.length === 1 ? "reminder" : "reminders"}
      </div>
      <button type="button" onClick={() => setShowAddForm(true)}>
        Add Reminder
      </button>
      <Calendar
        localizer={localizer}
        events={eventList}
        startAccessor="start"
        endAccessor="end"
        onSelectEvent={(event) =>
          handleEdit(
            reminders.find((r) => r.title === event.title && r.date === event.start)!
          )
        }
        selectable
        onSelectSlot={handleSelect}
      />
      <ReminderForm
        //show={showAddForm}
        reminder={editingReminder}
        onSave={handleSave}
        onClose={handleClose}
      />
      {reminders.map((reminder) => (
        <ReminderListItem
          key={reminder.id}
          reminder={reminder}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
};

export default ReminderList;
