import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import style from '../dashboard.module.css';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function Sidebar() {
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
    <div className={style.sidebar}>
      {restaurant && (
        <>
          <img src={restaurant.logo_url} alt="Restaurant Logo" className={style.logo} />
          <h1>{restaurant.name}</h1>
        </>
      )}

      <div className='d-flex align-items-center'>
        <i className="fa-solid fa-bars" style={{ fontSize: '18px' }}></i>
        <h1>Dashboard</h1>
      </div>

      <div className={style.dropDown}>
        <button className={style.dropDownToggle} type="button" data-bs-toggle="dropdown" aria-expanded="false">
          Menu
        </button>
        <ul className="dropdown-menu">
          <li><Link className="dropdown-item" to="menu">Create menu</Link></li>
          <li><Link className="dropdown-item" to="#">All Menu</Link></li>
        </ul>
      </div>

      <div className={style.dropDown}>
        <button className={style.dropDownToggle} type="button" data-bs-toggle="dropdown" aria-expanded="true">
          Orders
        </button>
        <ul className="dropdown-menu">
          <li><Link className="dropdown-item" to="order">Create Orders</Link></li>
          <li><Link className="dropdown-item" to="#">All Order</Link></li>
        </ul>
      </div>

      <div className={style.dropDown}>
        <button className={style.dropDownToggle} type="button" data-bs-toggle="dropdown" aria-expanded="true">
          Employees
        </button>
        <ul className="dropdown-menu">
          <li><Link className="dropdown-item" to="employee">Employee</Link></li>
          <li><Link className="dropdown-item" to="#">All Employee</Link></li>
        </ul>
      </div>

      <ul>

        <li><button onClick={handleLogout}>Logout</button></li>
      </ul>
    </div>
  )
}

export default Sidebar
