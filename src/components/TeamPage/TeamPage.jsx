import React, { useState } from 'react';
import './TeamPage.css';

const TeamPage = () => {
  const [activeTab, setActiveTab] = useState('MEMBERS');
  const [searchTerm, setSearchTerm] = useState('');
  const [newGroupName, setNewGroupName] = useState('');

  const members = [
    { name: 'Saraan Barath (you)', email: 'saraan.barath@gmail.com', billableRate: '-', role: 'Owner', group: 'Group' }
  ];

  return (
    <div className="team-page">
      <h2>Team</h2>
      
      <div className="tabs">
        <button 
          className={activeTab === 'MEMBERS' ? 'active' : ''} 
          onClick={() => setActiveTab('MEMBERS')}
        >
          MEMBERS
        </button>
        <button 
          className={activeTab === 'GROUPS' ? 'active' : ''} 
          onClick={() => setActiveTab('GROUPS')}
        >
          GROUPS
        </button>
        <button 
          className={activeTab === 'REMINDERS' ? 'active' : ''} 
          onClick={() => setActiveTab('REMINDERS')}
        >
          REMINDERS
        </button>
      </div>

      {activeTab === 'MEMBERS' && (
        <div className="members-section">
          <div className="search-bar">
            <select>
              <option>Show all</option>
            </select>
            <input 
              type="text" 
              placeholder="Search by name or email"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="add-member-btn">ADD NEW MEMBER</button>
          </div>

          <div className="members-table">
            <div className="table-header">
              <span>Members</span>
              <button className="export-btn">Export</button>
            </div>
            <table>
              <thead>
                <tr>
                  <th><input type="checkbox" /></th>
                  <th>NAME</th>
                  <th>EMAIL</th>
                  <th>BILLABLE RATE (USD)</th>
                  <th>ROLE</th>
                  <th>GROUP</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {members.map((member, index) => (
                  <tr key={index}>
                    <td><input type="checkbox" /></td>
                    <td>{member.name}</td>
                    <td>{member.email}</td>
                    <td>
                      <span>{member.billableRate}</span>
                      <button className="change-btn">Change</button>
                    </td>
                    <td><span className="role-tag">{member.role}</span></td>
                    <td><button className="group-btn">+ {member.group}</button></td>
                    <td>
                      <button className="more-options-btn">⋮</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === 'GROUPS' && (
        <div className="groups-section">
          <div className="groups-table">
            <div className="table-header">
              <span>Groups</span>
              <button className="export-btn">Export</button>
            </div>
            <table>
              <thead>
                <tr>
                  <th>NAME</th>
                  <th>ACCESS</th>
                </tr>
              </thead>
              <tbody>
                {/* Add group rows here if needed */}
              </tbody>
            </table>
          </div>
          <div className="add-group">
            <input 
              type="text" 
              placeholder="Add new group"
              value={newGroupName}
              onChange={(e) => setNewGroupName(e.target.value)}
            />
            <button className="add-btn">ADD</button>
          </div>
        </div>
      )}

      {activeTab === 'REMINDERS' && (
        <div className="reminders-section">
          <div className="reminder-info">
            <span className="standard-feature">STANDARD feature</span>
            <button className="upgrade-btn">Upgrade</button>
          </div>
          <div className="add-reminder">
            <span>If </span>
            <span className="select-members">(select team members)</span>
            <span> tracked Less than </span>
            <input type="number" defaultValue={8} />
            <span> hours per Week, send Them a reminder </span>
            <button className="add-btn">ADD</button>
          </div>
          <div className="reminders-table">
            <div className="table-header">
              <span>Reminders</span>
            </div>
            {/* Add reminder items here if needed */}
          </div>
        </div>
      )}
    </div>
  );
};

export default TeamPage;