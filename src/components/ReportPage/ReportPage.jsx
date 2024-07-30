import React, { useState } from 'react';
import './ReportPage.css';

const ReportPage = () => {
    const [activeTab, setActiveTab] = useState('Summary');

    return (
        <div className="time-report-container">
            <div className="header">
                <div className="left-header">
                    <select className="time-report-dropdown">
                        <option>TIME REPORT</option>
                    </select>
                    <div className="tabs">
                        <button
                            className={activeTab === 'Summary' ? 'active' : ''}
                            onClick={() => setActiveTab('Summary')}
                        >
                            Summary
                        </button>
                        <button
                            className={activeTab === 'Detailed' ? 'active' : ''}
                            onClick={() => setActiveTab('Detailed')}
                        >
                            Detailed
                        </button>
                        <button
                            className={activeTab === 'Weekly' ? 'active' : ''}
                            onClick={() => setActiveTab('Weekly')}
                        >
                            Weekly
                        </button>
                        <button>Shared</button>
                    </div>
                </div>
                <div className="date-selector">
                    <button>This week</button>
                </div>
            </div>
            <div className="filter-section">
                <select><option>FILTER</option></select>
                <select><option>Team</option></select>
                <select><option>Client</option></select>
                <select><option>Project</option></select>
                <select><option>Task</option></select>
                <select><option>Tag</option></select>
                <select><option>Status</option></select>
                <select><option>Description</option></select>
                <button className="apply-filter">APPLY FILTER</button>
            </div>
            <div className="action-buttons"  >
                {activeTab === 'Detailed' && (
                    <div className="detailed-view">
                        <select><option>Time audit</option></select>
                        <select><option>Add time for others</option></select>
                    </div>
                )}
            </div>
            <div className="total-time">
                <span>Total: 00:00:00</span>
                <div className="actions">
                    <select><option>Export</option></select>
                    <button className="icon-button">🖨️</button>
                    <button className="icon-button">🔗</button>
                    <label><input type="checkbox" /> Rounding</label>
                    <select><option>Show amount</option></select>
                </div>
            </div>
            {activeTab === 'Summary' && (
                <div className="chart-container">
                    <div className="chart-header">
                        <select className="billability">
                            <option>Billability</option>
                        </select>
                    </div>
                    <div className="chart">
                        {/* Add placeholder lines for the chart */}
                        <div className="chart-line"></div>
                        <div className="chart-line"></div>
                        <div className="chart-line"></div>
                    </div>
                    <div className="chart-labels">
                        <div>00:00:00<br />Mon, Jul 29</div>
                        <div>00:00:00<br />Tue, Jul 30</div>
                        <div>00:00:00<br />Wed, Jul 31</div>
                        <div>00:00:00<br />Thu, Aug 1</div>
                        <div>00:00:00<br />Fri, Aug 2</div>
                        <div>00:00:00<br />Sat, Aug 3</div>
                        <div>00:00:00<br />Sun, Aug 4</div>
                    </div>
                </div>
            )}
            {activeTab === 'Detailed' && (
                <div className="detailed-view">
                    <table>
                        <thead>
                            <tr>
                                <th>TIME ENTRY</th>
                                <th>AMOUNT</th>
                                <th>USER</th>
                                <th>TIME</th>
                                <th>DURATION</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Add table rows here */}
                        </tbody>
                    </table>
                </div>
            )}
            {activeTab === 'Weekly' && (
                <div className="detailed-view">
                    <table>
                        <thead>
                            <tr>
                                <th>TIME ENTRY</th>
                                <th>AMOUNT</th>
                                <th>USER</th>
                                <th>TIME</th>
                                <th>DURATION</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Add table rows here */}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}

export default ReportPage;