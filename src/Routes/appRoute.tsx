import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Feed from '../pages/Feed/index';
import Login from '../pages/Login/index';


const { Navigator, Screen } = createStackNavigator();

const appRoute: React.FC = () => {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false }}>
                <Screen name='feed' component={Feed}/>            
            </Navigator>
        </NavigationContainer>
    );
}

export default appRoute;