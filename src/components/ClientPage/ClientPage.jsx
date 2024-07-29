// import React from 'react'

// const ClientPage = () => {
//   return (
//     <div>
//       <h1>Client Page</h1>
//     </div>
//   )
// }

// export default ClientPage

import React, { useState } from 'react';
import { FaSearch, FaChevronDown } from 'react-icons/fa';
import './ClientPage.css';

const ClientPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [clients, setClients] = useState([]);

    const handleAddClient = () => {
        // Implement add client functionality
    };

    return (
        <div className="clients-container">
            <h1>Clients</h1>
            <div className="clients-controls">
                <div className="left-controls">
                    <div className="dropdown">
                        <button className="dropdown-toggle">
                            Show active
                        </button>
                    </div>
                    <div className="search-bar">
                        <FaSearch className="search-icon" />
                        <input
                            type="text"
                            placeholder="Search by name"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>
                <div className="right-controls">
                    <input
                        type="text"
                        placeholder="Add new client"
                        className="add-client-input"
                    />
                    <button className="add-button" onClick={handleAddClient}>
                        ADD
                    </button>
                </div>
            </div>

            <div className="clients-table">
                <div className="table-header">
                    <div className="header-cell checkbox-cell">
                        <input type="checkbox" />
                    </div>
                    <div className="header-cell">NAME</div>
                    <div className="header-cell">ADDRESS</div>
                    <div className="header-cell">CURRENCY</div>
                </div>
                {clients.length === 0 ? (
                    <div className="no-clients">No clients found</div>
                ) : (
                    clients.map((client) => (
                        <div key={client.id} className="table-row">
                            {/* Render client data here */}
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default ClientPage;