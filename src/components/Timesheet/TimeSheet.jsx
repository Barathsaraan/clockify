import React from 'react';
import { FaCopy, FaList, FaRegCalendarAlt, FaRegSave } from 'react-icons/fa';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import './TimeSheet.css'; // Make sure to create this CSS file

const Timesheet = () => {
    const days = ['Mo, Jul 29', 'Tu, Jul 30', 'We, Jul 31', 'Th, Aug 1', 'Fr, Aug 2', 'Sa, Aug 3', 'Su, Aug 4'];

    return (
        <div className="timesheet">
            <div className="timesheet-header">
                <h1>Timesheet</h1>
                <div className="timesheet-controls">
                    <select className="teammates-select">
                        <option>Teammates</option>
                    </select>
                    <button className="list-view-btn"><FaList /> </button>
                    <button className="this-week-btn"><FaRegCalendarAlt /> This week</button>
                    <button className="nav-btn"><IoIosArrowBack /></button>
                    <button className="nav-btn"><IoIosArrowForward /></button>
                </div>
            </div>
            <table className="timesheet-table">
                <thead>
                    <tr>
                        <th>Projects</th>
                        {days.map(day => <th key={day}>{day}</th>)}
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <button className="select-project">+ Select project</button>
                        </td>
                        {days.map(day => <td key={day}></td>)}
                        <td className="total-time">00:00:00</td>
                        <td className="remove-row">×</td>
                    </tr>
                    <tr className="total-row">
                        <td>Total:</td>
                        {days.map(day => <td key={day}>00:00:00</td>)}
                        <td>00:00:00</td>
                    </tr>
                </tbody>
            </table>
            <div className="timesheet-footer">
                <button className="add-row-btn">+ Add new row</button>
                <button className="copy-week-btn"><FaCopy /> Copy last week</button>
                <button className="save-template-btn"><FaRegSave /> Save as template</button>
            </div>
        </div>
    );
};

export default Timesheet;