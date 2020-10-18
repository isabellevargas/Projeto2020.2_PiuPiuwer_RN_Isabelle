import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Feed from '../pages/Feed/index';
import FeedTabs from './FeedTabs';


const { Navigator, Screen } = createStackNavigator();

const AppRoute: React.FC = () => {
    return (
        <Navigator screenOptions={{ headerShown: false }}>  
            <Screen name='feed-tabs' component={FeedTabs}/>        
        </Navigator>
    );
}

export default AppRoute;