import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../pages/Login/index';


const { Navigator, Screen } = createStackNavigator();

const AuthRoute: React.FC = () => {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen name='login' component={Login}/>
        </Navigator>
    );
}

export default AuthRoute;