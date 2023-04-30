import React, {useState, useEffect} from 'react';
import moment from 'moment';
import { Reminder } from './Reminder';
import ReminderForm from "./ReminderForm";


interface ReminderListItemProps {
    reminder: Reminder;
    onEdit: (reminder: Reminder) => void;
    onDelete: (id: number) => void;
  }
  
  const ReminderListItem = ({ reminder, onEdit, onDelete }: ReminderListItemProps) => {
    const [showMenu, setShowMenu] = useState(false);
  
    const handleEdit = () => {
      setShowMenu(false);
      onEdit(reminder);
    };
  
    const handleDelete = () => {
      setShowMenu(false);
      onDelete(reminder.id);
    };
  
    const menu = showMenu ? (
      <ul>
        <li>
          <button type="button" onClick={handleEdit}>
            Edit
          </button>
        </li>
        <li>
          <button type="button" onClick={handleDelete}>
            Delete
          </button>
        </li>
      </ul>
    ) : null;
  
    return (
      <div>
        <div
          style={{ backgroundColor: reminder.color }}
          onClick={() => setShowMenu(!showMenu)}
        >
          <strong>{reminder.title}</strong>
          <br />
          {moment(reminder.date).format("LLL")}
          <br />
          {moment(reminder.date).fromNow()}
        </div>
        {menu}
      </div>
    );
  };
  
  export default ReminderListItem;