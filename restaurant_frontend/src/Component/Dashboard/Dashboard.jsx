import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar/Sidebar';
import userIcon from '../Assets/icons/profile.png';

import style from './dashboard.module.css'; // Assuming you have styles set up

const Dashboard = () => {
  const navigate = useNavigate();



  return (
    <div className={style.dashboardContainer}>
      <div>
        {/* Sidebar */}
        <Sidebar />
      </div>

      {/* Routes for different sections */}
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;