import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <img src="/path-to-your-clockify-logo.png" alt="Clockify" className="dashboard-logo" />
        <div className="workspace-name">Saraan.barath's workspace</div>
        <button className="upgrade-button">UPGRADE</button>
      </header>
      <div className="dashboard-container">
        <nav className="sidebar">
          <ul>
            <li><a href="#">TIMESHEET</a></li>
            <li><a href="#">TIME TRACKER</a></li>
            <li><a href="#">CALENDAR</a></li>
            <li><a href="#">DASHBOARD</a></li>
            <li><a href="#">REPORTS</a></li>
            <li><a href="#">TAGS</a></li>
            <li><a href="#">PROJECTS</a></li>
            <li><a href="#">TEAM</a></li>
            <li><a href="#">CLIENTS</a></li>
          </ul>
        </nav>
        <main className="dashboard-main">
          <div className="time-tracker">
            <input type="text" placeholder="What are you working on?" className="task-input" />
            <div className="controls">
              <button className="project-button">Project</button>
              <button className="start-button">START</button>
            </div>
          </div>
          <div className="welcome-message">
            <img src="/path-to-your-clock-icon.png" alt="Clock Icon" className="clock-icon" />
            <div className="message">
              <h2>Let's start tracking!</h2>
              <p>Install Clockify and track time anywhere.</p>
              <div className="app-icons">
                <span>50+ integrations</span>
                <img src="/path-to-android-icon.png" alt="Android" />
                <img src="/path-to-apple-icon.png" alt="Apple" />
                <img src="/path-to-chrome-icon.png" alt="Chrome" />
                <img src="/path-to-windows-icon.png" alt="Windows" />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
