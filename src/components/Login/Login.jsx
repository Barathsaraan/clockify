import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
function Login() {
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle email submission
    };
    const handleManualLoginClick = () => {
        navigate('/dashboard');
    };

    return (
        <div className="login-page">
            <div className="header">
                <img src="/path-to-your-clockify-logo.png" alt="Clockify" className="logo" />
                <div className="sign-up">
                    Don't have an account? <a href="/signup">Sign up</a>
                </div>
            </div>
            <div className="login-container">
                <div className="login-box">
                    <h2>Log in</h2>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="email"
                            placeholder="Enter email"
                            value={email}
                            onChange={handleEmailChange}
                        />
                        <button type="submit" className="email-button">
                            CONTINUE WITH EMAIL
                        </button>
                    </form>
                    <div className="divider">OR</div>
                    <button className="google-button">
                        <FontAwesomeIcon icon={faGoogle} />
                        <span>Continue with Google</span>
                    </button>
                    <button onClick={handleManualLoginClick} className="manual-login">
                        Log in manually
                    </button>
                </div>
            </div>
            <div className="language-selector">
                <select>
                    <option>English</option>
                    <option>Tamil</option>
                    {/* Add more language options */}
                </select>
            </div>

            <div className="footer">
                <div className="data-region">
                    <select>
                        <option>Data region (Global)</option>
                        {/* Add more data region options */}
                    </select>
                </div>
            </div>
        </div>

    );
}

export default Login;