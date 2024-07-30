import { BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title, Tooltip } from 'chart.js';
import React from 'react';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const DashboardProject = () => {
  const chartData = {
    labels: ['Mon, Jul 29', 'Tue, Jul 30', 'Wed, Jul 31', 'Thu, Aug 1', 'Fri, Aug 2', 'Sat, Aug 3', 'Sun, Aug 4'],
    datasets: [
      {
        data: [0, 0, 0, 0, 0, 0, 0],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        max: 1,
        ticks: {
          stepSize: 0.1,
          callback: (value) => value.toFixed(2) + 'h',
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>Dashboard</h1>
        <div className="dashboard-controls">
          <select>
            <option>Project</option>
          </select>
          <select>
            <option>Only me</option>
          </select>
          <button>This week</button>
        </div>
      </header>
      <div className="dashboard-content">
        <div className="dashboard-summary">
          <div className="summary-item">
            <h3>Total time</h3>
            <p className="large-text">00:00:00</p>
          </div>
          <div className="summary-item">
            <h3>Top project</h3>
            <p className="large-text">--</p>
          </div>
          <div className="summary-item">
            <h3>Top client</h3>
            <p className="large-text">--</p>
          </div>
        </div>
        <div className="dashboard-main">
          <div className="dashboard-chart">
            <Bar data={chartData} options={chartOptions} />
          </div>
          <table className="dashboard-table">
            <tbody>
              <tr>
                <td>No project</td>
                <td>00:00:00</td>
                <td>0.00%</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="dashboard-sidebar">
          <div className="dashboard-activities">
            <h3>Most tracked activities</h3>
            <select>
              <option>Top 10</option>
            </select>
          </div>
        </div>
      </div>
      <div className="dashboard-footer">
        <p>00:00:00</p>
      </div>
    </div>
  );
};

export default DashboardProject;
