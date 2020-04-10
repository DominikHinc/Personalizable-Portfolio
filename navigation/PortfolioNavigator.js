import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import HomeScreen from '../screens/HomeScreen';
import ContactScreen from '../screens/ContactScreen';
import WordFishingScreen from '../screens/WordFishingScreen';
import GrocerEatsScreen from '../screens/GorcerEatsScreen';
import BounceBackScreen from '../screens/BounceBackScreen';
import HealthAdvisorScreen from '../screens/HealthAdvisorScreen';
import MyTabBar from './MyTabBar';


const TopTab = createBottomTabNavigator();
// 
const mainTabNavigator = () => {
    return (
        <TopTab.Navigator tabBar={props => <MyTabBar {...props} />} initialRouteName="Home">
            <TopTab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    title: 'Home'
                }}
            />
            <TopTab.Screen
                name="Contact"
                component={ContactScreen}
                options={{
                    title: 'Contact'
                }}
            />
            <TopTab.Screen
                name="GrocerEats"
                component={GrocerEatsScreen}
                options={{
                    title: 'GrocerEats',

                }}
            />
            <TopTab.Screen
                name="WordFishing"
                component={WordFishingScreen}
                options={{
                    title: 'WordFishing'
                }}
            />
            <TopTab.Screen
                name="Health Advisor"
                component={HealthAdvisorScreen}
                options={{
                    title: 'Health Advisor'
                }}
            />
            <TopTab.Screen
                name="BounceBack"
                component={BounceBackScreen}
                options={{
                    title: 'BounceBack'
                }}
            />

        </TopTab.Navigator>
    )
}

export default mainTabNavigator