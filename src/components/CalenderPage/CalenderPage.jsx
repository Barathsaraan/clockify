import React, { useState } from 'react';
import './CalenderPage.css';

const DayView = ({ currentDate }) => {
  const hours = Array.from({ length: 24 }, (_, i) => i);

  return (
    <div className="calendar-grid day-view">
      <div className="time-column">
        <div className="time-slot header"></div>
        {hours.map(hour => (
          <div key={hour} className="time-slot">
            {hour.toString().padStart(2, '0') + ':00'}
          </div>
        ))}
      </div>
      <div className="day-column">
        <div className="day-header">
          <span className="day-date">
            {currentDate.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}
          </span>
          <span className="day-time">00:00:00</span>
        </div>
        {hours.map(hour => (
          <div key={hour} className="event-slot"></div>
        ))}
      </div>
    </div>
  );
};
const CalendarPage = () => {
  const [view, setView] = useState('week');
  const [currentDate, setCurrentDate] = useState(new Date());

  const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const hours = Array.from({ length: 24 }, (_, i) => i);

  const generateWeekDays = () => {
    const days = [];
    for (let i = 0; i < 7; i++) {
      const day = new Date(currentDate);
      day.setDate(currentDate.getDate() - currentDate.getDay() + i + 1);
      days.push(day);
    }
    return days;
  };

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <div className="view-selector">
          <button className={view === 'calendar' ? 'active' : ''} onClick={() => setView('calendar')}>CALENDAR</button>
          <button className={view === 'week' ? 'active' : ''} onClick={() => setView('week')}>Week</button>
          <button className={view === 'day' ? 'active' : ''} onClick={() => setView('day')}>Day</button>
        </div>
        <div className="calendar-controls">
          <button className="icon-button">
            <span className="plus-icon">+</span>
          </button>
          <button className="icon-button settings-icon">⚙️</button>
          <select className="teammates-dropdown">
            <option>Teammates</option>
          </select>
          <button className="today-button">Today</button>
          <button onClick={() => setCurrentDate(new Date(currentDate.setDate(currentDate.getDate() - (view === 'week' ? 7 : 1))))}>{'<'}</button>
          <button onClick={() => setCurrentDate(new Date(currentDate.setDate(currentDate.getDate() + (view === 'week' ? 7 : 1))))}>{'>'}</button>
        </div>
      </div>
      <div className="zoom-controls">
        <button>-</button>
        <button>+</button>
      </div>
      {view === 'week' ? (
        <div className="calendar-grid week-view">
          <div className="time-column">
            <div className="time-slot"></div>
            {hours.map(hour => (
              <div key={hour} className="time-slot">
                {hour.toString().padStart(2, '0') + ':00'}
              </div>
            ))}
          </div>
          {generateWeekDays().map((day, index) => (
            <div key={index} className="day-column">
              <div className="day-header">
                {daysOfWeek[index]}, {day.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
              </div>
              {hours.map(hour => (
                <div key={hour} className="event-slot"></div>
              ))}
            </div>
          ))}
        </div>
      ) : (
        <DayView currentDate={currentDate} />
      )}
    </div>
  );
};

export default CalendarPage;