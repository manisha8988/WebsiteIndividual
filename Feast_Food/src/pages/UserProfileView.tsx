// UserProfileView.tsx

import React, { useEffect, useState } from 'react';
import { IoPersonCircleOutline } from 'react-icons/io5';
import { FaRegWindowClose } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import '../css/UserProfileView.css';

interface User {
    fullName: string;
    email: string;
}

function UserProfileView() {
    const navigate = useNavigate();

    const [user, setUser] = useState<User | null>({ fullName: '', email: '' });

    useEffect(() => {
        // Corrected: Added optional chaining (?.) to safely access properties and provided a default value for JSON.parse
        const data: User | null = JSON.parse(localStorage.getItem('userDetails') || 'null');
        setUser(data);
    }, []);

    const handleLogout = () => {
        // Check if a user is currently logged in
        const isLoggedIn = Boolean(localStorage.getItem('userDetails'));

        if (isLoggedIn) {
            // Clear user details from localStorage
            localStorage.removeItem('userDetails');

            // Update the state to reflect logout
            setUser(null);

            navigate('/');
        }
    };

    const handleGoBack = () => {
        navigate(-1);
    };

    return (
        <div className={'user_profile_main'}>
            <div className={'cross-icon'}>
                <button onClick={handleGoBack}>
          <span>
            <FaRegWindowClose />
          </span>
                </button>
            </div>
            <div className={'my_profile'}>
                <h1>My Profile</h1>

                <form className={'user_profile_form'}>
                    <div className={'user_icon'}>
            <span>
              <IoPersonCircleOutline size={100} />
            </span>
                    </div>

                    <div className={'name'}>
                        <p className={'name-box'}>Name: {user?.fullName}</p>
                        <p className={'email-box'}>Email: {user?.email}</p>
                    </div>

                    <div className={'order-history'}>
                        <button className={'order-history-btn'}>Order History</button>
                        <button className={'logout-btn'} onClick={handleLogout}>
                            Sign out
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default UserProfileView;
