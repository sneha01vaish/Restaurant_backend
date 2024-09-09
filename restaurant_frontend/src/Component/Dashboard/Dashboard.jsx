import React, { useState, useEffect } from 'react';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import axios from 'axios';
import MenuSection from './Menu/Menusection'
import EmployeeSection from './Employee/EmployeeSection'
import OrderSection from './Order/OrderSection'

import style from './dashboard.module.css'; // Assuming you have styles set up

const Dashboard = () => {
  const [restaurant, setRestaurant] = useState(null);
  const navigate = useNavigate();

  // Fetch restaurant details when dashboard mounts
  useEffect(() => {
    const fetchRestaurant = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:8000/api/restaurant/profile', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setRestaurant(response.data.restaurant);
      } catch (error) {
        console.log('Error fetching restaurant:', error);
      }
    };
    fetchRestaurant();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/signin');
  };

  return (
    <div className={style.dashboardContainer}>
      {/* Sidebar */}
      <div className={style.sidebar}>
        {restaurant && (
          <>
            <img src={restaurant.logo_url} alt="Restaurant Logo" className={style.logo} />
            <h1>{restaurant.name}</h1>
          </>
        )}
        <ul>
          <li><Link to="/menu">Menu</Link></li>
          <li><Link to="/order">Orders</Link></li>
          <li><Link to="/employee">Employees</Link></li>
          <li><button onClick={handleLogout}>Logout</button></li>
        </ul>
      </div>

      {/* Main Content */}
      <div className={style.mainContent}>
        <div className={style.header}>
          <h2>Dashboard</h2>
          <div className={style.profileSection}>
            {/* Profile Icon */}
            <img 
              src="path-to-profile-icon.png" 
              alt="Profile Icon" 
              className={style.profileIcon} 
              onClick={() => navigate('/profile')}
            />
          </div>
        </div>

        {/* Routes for different sections */}
        <Routes>
          <Route path="menu" element={<MenuSection />} />
          <Route path="orders" element={<OrderSection />} />
          <Route path="employees" element={<EmployeeSection />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;