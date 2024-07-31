import React, { useState } from 'react';
import './ProjectPage.css'; // You'll need to create this CSS file

const ProjectPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="project-page">
      <div className="header">
        <h1>Projects</h1>
        <button className="create-project-btn">CREATE NEW PROJECT</button>
      </div>

      <div className="filter-bar">
        <div className="filter-options">
          <span className="filter-label">FILTER</span>
          <select><option>Active</option></select>
          <select><option>Client</option></select>
          <select><option>Access</option></select>
          <select><option>Billing</option></select>
        </div>
        <div className="search-bar">
          <input 
            type="text" 
            placeholder="Find by name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="apply-filter-btn">APPLY FILTER</button>
        </div>
      </div>

      <div className="projects-table">
        <div className="table-header">
          <span>Projects</span>
          <button className="export-btn">Export</button>
        </div>
        <table>
          <thead>
            <tr>
              <th><input type="checkbox" /></th>
              <th>NAME</th>
              <th>CLIENT</th>
              <th>TRACKED</th>
              <th>AMOUNT</th>
              <th>PROGRESS</th>
              <th>ACCESS</th>
            </tr>
          </thead>
          <tbody>
            {/* You can map over your projects data here */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProjectPage;