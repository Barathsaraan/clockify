import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { BsCurrencyDollar, BsThreeDotsVertical } from "react-icons/bs";
import { CiShoppingTag } from "react-icons/ci";
import { FaApple, FaChrome, FaWindows } from "react-icons/fa";
import { IoLogoAndroid } from "react-icons/io";
import clock from '../../assets/images/timer.png';
const TimeTracker = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [isTracking, setIsTracking] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    const [showDialog, setShowDialog] = useState(false);
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
            <div className="dashboard-container">
                <main className="dashboard-main">
                   
                        <div className="time-tracker">
                            <input type="text" placeholder="What are you working on?" className="task-input" />
                            <div className="controls">
                                <button className="project-button">Project</button>
                                <a className="navbar-brand" href="#">
                                    <BsCurrencyDollar />
                                </a>
                                <a className="navbar-brand" href="#">
                                    <FontAwesomeIcon icon="fa-solid fa-dollar-sign" />
                                </a>
                                <a className="navbar-brand" href="#">
                                    <CiShoppingTag />
                                </a>
                                <p>{formatTime(elapsedTime)}</p>
                                {isTracking ? (
                                    <>
                                        <button className="stop-button" onClick={stopTracking}>STOP</button>
                                        <button className="more-button" onClick={() => setShowDialog(true)}>...</button>
                                    </>
                                ) : (
                                    <button className="start-button" onClick={startTracking}>START</button>
                                )}
                                <a className="navbar-brand" href="#">
                                    <BsThreeDotsVertical />
                                </a>
                            </div>
                        </div>
                    
                    {/* {isTracking && (
            <div className="tracking-info">
              <div className="timer-display">{formatTime(elapsedTime)}</div>
            </div>
          )} */}

                    <div className="welcome-message">
                        <div className="message">
                            <img src={clock} className="clock-icon" />
                            <h2>Let's start tracking!</h2>
                            <p>Install Clockify and track time anywhere.</p>
                            <div className="app-icons">
                                <FaApple />
                                <IoLogoAndroid />
                                <FaChrome />
                                <FaWindows />
                            </div>
                            <div>
                                <span>50+ integrations</span>
                            </div>
                        </div>
                    </div>

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

export default TimeTracker;