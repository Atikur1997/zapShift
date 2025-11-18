import React from 'react';
import useAuth from '../Hooks/useAuth';
import { Navigate } from 'react-router';

const Privateroutes = ({ children }) => {

    const { user, loading } = useAuth();
    if (loading) {
        return <div>
            <span className="loading loading-spinner text-success"></span>
        </div>
    }

    if (!user) {
        <Navigate to='/login'></Navigate>
    }
    return children;
};

export default Privateroutes;