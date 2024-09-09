import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const VerifyEmail = () => {
    const [message, setMessage] = useState('Verifying your email...');
    const location = useLocation();

    useEffect(() => {
        const query = new URLSearchParams(location.search);
        const token = query.get('token');

        if (token) {
            axios.get(`http://localhost:8000/api/user/verify-email?token=${token}`)
                .then(response => {
                    if (response.data.status === 'success') {
                        setMessage('Email verified successfully.');
                    } else {
                        setMessage('An error occurred during email verification. Please try again.');
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                    setMessage('An error occurred during email verification. Please try again.');
                });
        } else {
            setMessage('Invalid verification link.');
        }
    }, [location.search]);

    return (
        <div>
            <h1>{message}</h1>
        </div>
    );
};

export default VerifyEmail;
