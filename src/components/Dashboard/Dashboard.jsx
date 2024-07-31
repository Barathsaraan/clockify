
import React, { useEffect, useState } from 'react';
import CalenderPage from '../CalenderPage/CalenderPage';
import ClientPage from '../ClientPage/ClientPage';
import DashboardProject from '../DashboardProject/DashboardProject';
import ProjectPage from '../ProjectPage/ProjectPage';
import ReportPage from '../ReportPage/ReportPage';
import TagsPage from '../TagsPage/TagsPage';
import TeamPage from '../TeamPage/TeamPage';
import Timesheet from '../Timesheet/TimeSheet';
import TimeTracker from '../TimeTracker/TimeTracker';
import './Dashboard.css';
const Dashboard = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [isTracking, setIsTracking] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    const [showDialog, setShowDialog] = useState(false);
    const [activeView, setActiveView] = useState('timeTracker');

    useEffect(() => {
        let timer;
        if (isTracking) {
            timer = setInterval(() => {
                setElapsedTime((prevTime) => prevTime + 1);
            }, 1000);
        } else if (!isTracking && elapsedTime !== 0) {
            clearInterval(timer);
        }
        return () => clearInterval(timer);
    }, [isTracking]);

    const toggleSidebar = () => {
        setIsCollapsed(!isCollapsed);
    };

    const startTracking = () => {
        setIsTracking(true);
    };

    const stopTracking = () => {
        setIsTracking(false);
    };

    const resetTracking = () => {
        setIsTracking(false);
        setElapsedTime(0);
        setShowDialog(false);
    };

    const formatTime = (seconds) => {
        const hrs = Math.floor(seconds / 3600);
        const mins = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;
        return `${hrs}:${mins < 10 ? '0' : ''}${mins}:${secs < 10 ? '0' : ''}${secs}`;
    };

    return (
        <div className="dashboard">
            <header className="dashboard-header">
                <img src="/path-to-your-clockify-logo.png" alt="Clockify" className="dashboard-logo" />
                <div className="workspace-name">Saraan.barath's workspace</div>
                <button className="upgrade-button">UPGRADE</button>
            </header>
            <div className="dashboard-container">
                <nav className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
                    <button onClick={toggleSidebar}>Toggle</button>
                    <ul>
                        <li className={activeView === 'timeTracker' ? 'active' : ''}>
                            <a href="#" onClick={() => setActiveView('timeTracker')}>TIME TRACKER</a>
                        </li>
                        <li className={activeView === 'timesheet' ? 'active' : ''}>
                            <a href="#" onClick={() => setActiveView('timesheet')}>TIMESHEET</a>
                        </li>

                        <li className={activeView === 'calender' ? 'active' : ''}>
                            <a href="#" onClick={() => setActiveView('calender')}>CALENDAR</a>
                        </li>
                        <li className={activeView === 'Dashboardproject' ? 'active' : ''}>
                            <a href="#" onClick={() => setActiveView('Dashboardproject')}>DASHBOARD</a>
                        </li>
                        <li className={activeView === 'Reports' ? 'active' : ''}>
                            <a href="#" onClick={() => setActiveView('Reports')}>REPORTS</a>
                        </li>
                        <li className={activeView === 'Tags' ? 'active' : ''}>
                            <a href="#" onClick={() => setActiveView('Tags')}>TAGS</a>
                        </li>
                        <li className={activeView === 'Projects' ? 'active' : ''}>
                            <a href="#" onClick={() => setActiveView('Projects')}>PROJECTS</a>
                        </li>
                        <li className={activeView === 'Team' ? 'active' : ''}>
                            <a href="#" onClick={() => setActiveView('Team')}>TEAM</a>
                        </li>
                        <li className={activeView === 'client' ? 'active' : ''}>
                            <a href="#" onClick={() => setActiveView('client')}>CLIENTS</a>
                        </li>
                        {/* <li><a href="#">CLIENTS</a></li> */}
                    </ul>
                </nav>
                <main className="dashboard-main">
                    {activeView === 'timeTracker' ? (
                        <TimeTracker />
                    ) : activeView === 'timesheet' ? (
                        <Timesheet />
                    ) : activeView === 'calender' ? (
                        <CalenderPage />
                    ) : (
                        activeView === 'client' ? (
                            <ClientPage />
                        ) : activeView === 'Dashboardproject' ? (
                            <DashboardProject />
                        ) : activeView === 'Reports' ? (
                            <ReportPage />
                        ) : activeView === 'Tags' ? (
                            <TagsPage />
                        ) : (
                            activeView === 'Team' ? (
                                <TeamPage />
                            ) : (
                                activeView === 'Projects' ? (
                                    <ProjectPage />
                                ) : (
                                    <Dashboard />
                                )
                            )
                        )
                    )}


                </main>
            </div>
            {showDialog && (
                <div className="dialog-overlay">
                    <div className="dialog">
                        <p>Are you sure?</p>
                        <button onClick={resetTracking}>DISCARD</button>
                        <button onClick={() => setShowDialog(false)}>CANCEL</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Dashboard;
