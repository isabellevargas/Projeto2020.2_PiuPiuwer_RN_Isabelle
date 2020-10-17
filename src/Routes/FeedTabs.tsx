import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feed from '../pages/Feed/index';
import Empty from '../pages/Empty/index';
import Logout from '../pages/Logout/index';
import { Ionicons } from '@expo/vector-icons';


const { Navigator, Screen } = createBottomTabNavigator();

const FeedTabs: React.FC = () => {
    return (
        <Navigator
        tabBarOptions={{
            style: {
                elevation: 0,
                shadowOpacity: 0,
                height: 64,
            },
            tabStyle: {
                alignItems: 'center',
                justifyContent: 'center',

            },
            iconStyle: {
                flex: 0,
                width: 20,
                height: 20,
            },
            labelStyle: {
                fontSize: 10,
                marginLeft: 2,
                marginTop: 2,
            },
            inactiveBackgroundColor: '#fafafc',
            activeBackgroundColor: '#ebebf5',
            inactiveTintColor: '#c1bccc',
            activeTintColor: '#b164ae',
        }}>
            <Screen 
            name='Feed' 
            component={Feed} 
            options={{
                tabBarLabel:'Feed',
                tabBarIcon: ({color, size}) => {
                    return (
                        <Ionicons name='ios-home' size={size} color={color}/>
                    );
                }
            }}/>       
            <Screen 
            name='Perfil' 
            component={Empty}
            options={{
                tabBarLabel:'Perfil',
                tabBarIcon: ({color, size}) => {
                    return (
                        <Ionicons name='ios-contact' size={size} color={color}/>
                    );
                }
            }}/>    
            <Screen 
            name='Notificações' 
            component={Empty}
            options={{
                tabBarLabel:'Notificações',
                tabBarIcon: ({color, size}) => {
                    return (
                        <Ionicons name='ios-notifications' size={size} color={color}/>
                    );
                }
            }}/>    
            <Screen 
            name='Configurações' 
            component={Empty}
            options={{
                tabBarLabel:'Configurações',
                tabBarIcon: ({color, size}) => {
                    return (
                        <Ionicons name='ios-settings' size={size} color={color}/>
                    );
                }
            }}/>  
            <Screen 
            name='Sair' 
            component={Logout}
            options={{
                tabBarLabel:'Sair',
                tabBarIcon: ({color, size}) => {
                    return (
                        <Ionicons name='ios-exit' size={size} color={color}/>
                    );
                }
            }}/>        
        </Navigator>
    );
}

export default FeedTabs;