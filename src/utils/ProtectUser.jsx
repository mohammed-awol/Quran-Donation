import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectUser = () => {
 const {userInfo} = useSelector(state => state.auth)
    if (userInfo) {
        return <Outlet/>
    } else {
        return <Navigate to='/Login' replace={true} />
    }

};

export default ProtectUser;