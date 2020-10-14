import React from 'react';
import { useAuth } from '../hooks/useAuth';

import AuthRoute from './authRoute';
import AppRoute from './appRoute';

const Routes: React.FC = () => {
    const { user } = useAuth();

    if (user) {
        return <AppRoute/>
    } else {
        return <AuthRoute/>
    }
}

export default Routes;