import React from 'react';
import { useAuth } from '../hooks/useAuth';

import AuthRoute from './AuthRoute';
import AppRoute from './AppRoute';
import { NavigationContainer } from '@react-navigation/native';

const Routes: React.FC = () => {
    const { user } = useAuth();

    return (
        <NavigationContainer>
            {
                !!user
                    ? <AppRoute/> 
                    : <AuthRoute/>
            }
        </NavigationContainer>
    )
}

export default Routes;