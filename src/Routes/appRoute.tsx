import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Feed from '../pages/Feed/index';
import FeedTabs from '../Routes/FeedTabs';


const { Navigator, Screen } = createStackNavigator();

const appRoute: React.FC = () => {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false }}>  
                <Screen name='feed-tabs' component={FeedTabs}/>        
            </Navigator>
        </NavigationContainer>
    );
}

export default appRoute;