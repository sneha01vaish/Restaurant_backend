import React, { useState, useEffect } from 'react';
import axios from 'axios';
import style from './admin.module.css';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const [restaurant, setRestaurant] = useState({
    name: '',
    address: '',
    contact_number: '',
    social_media_links: {
      facebook: '',
      instagram: '',
      twitter: '',
    },
    description: '',
    type: 'restaurant',
    logo_url: '',
  });

  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  // checkProfileStatus logic to redirect if profile is already filled
  useEffect(() => {
    const checkProfileStatus = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:8000/api/restaurant/profile', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.data.restaurant && response.data.restaurant.name) {
          // If profile already exists, redirect to dashboard
          navigate('/dashboard');
        } else {
          // Otherwise, let the user fill out the profile
          setRestaurant(response.data.restaurant);
        }
      } catch (error) {
        console.error('Error checking profile status:', error);
      }
    };
    
    checkProfileStatus();
  }, [navigate]);

  // Handle input changes for the profile form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRestaurant({ ...restaurant, [name]: value });
  };

  // Handle input changes for social media links
  const handleSocialMediaChange = (e) => {
    const { name, value } = e.target;
    setRestaurant((prev) => ({
      ...prev,
      social_media_links: {
        ...prev.social_media_links,
        [name]: value,
      },
    }));
  };

  // Handle form submission to save or update profile
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token'); // Get token from local storage
      const response = await axios.post(
        'http://localhost:8000/api/user/restaurant/profile', // Endpoint to update the profile
        restaurant,
        {
          headers: {
            Authorization: `Bearer ${token}`, // Attach token for authorization
          },
        }
      );
      if (response.status === 200) {
        console.log('Profile updated successfully');

        setSuccessMessage('Profile updated successfully!');
        setTimeout(() => navigate('/dashboard'), 2000); // Redirect to dashboard after successful profile update
      }
    } catch (error) {
      setErrorMessage('Failed to update profile. Please try again.');
      console.log(error);
    }
  };

  return (
    <div className={style.profileContainer}>
      <h1>Complete Your Restaurant Profile</h1>
      <form onSubmit={handleSubmit} className={style.profileForm}>
        <label>Restaurant Name</label>
        <input
          type="text"
          name="name"
          value={restaurant.name}
          onChange={handleInputChange}
          placeholder="Enter restaurant name"
          required
        />

        <label>Address</label>
        <input
          type="text"
          name="address"
          value={restaurant.address}
          onChange={handleInputChange}
          placeholder="Enter address"
          required
        />

        <label>Contact Number</label>
        <input
          type="text"
          name="contact_number"
          value={restaurant.contact_number}
          onChange={handleInputChange}
          placeholder="Enter contact number"
          required
        />

        <label>Social Media Links</label>
        <input
          type="text"
          name="facebook"
          value={restaurant.social_media_links.facebook}
          onChange={handleSocialMediaChange}
          placeholder="Facebook URL"
        />
        <input
          type="text"
          name="instagram"
          value={restaurant.social_media_links.instagram}
          onChange={handleSocialMediaChange}
          placeholder="Instagram URL"
        />
        <input
          type="text"
          name="twitter"
          value={restaurant.social_media_links.twitter}
          onChange={handleSocialMediaChange}
          placeholder="Twitter URL"
        />

        <label>Description</label>
        <textarea
          name="description"
          value={restaurant.description}
          onChange={handleInputChange}
          placeholder="Describe your restaurant"
        ></textarea>

        <label>Restaurant Type</label>
        <select
          name="type"
          value={restaurant.type}
          onChange={handleInputChange}
        >
          <option value="restaurant">Restaurant</option>
          <option value="hotel">Hotel</option>
          <option value="takeaway">Takeaway</option>
        </select>

        <label>Logo URL</label>
        <input
          type="text"
          name="logo_url"
          value={restaurant.logo_url}
          onChange={handleInputChange}
          placeholder="Logo URL"
        />

        {errorMessage && <p className={style.error}>{errorMessage}</p>}
        {successMessage && <p className={style.success}>{successMessage}</p>}

        <button type="submit">Save Profile</button>
      </form>
    </div>
  );
};

export default Profile;