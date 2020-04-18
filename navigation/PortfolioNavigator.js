import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import { projectsOverview } from '../constants/PersonalData/ProjectsOverview';
import ContactScreen from '../screens/ContactScreen';
import HomeScreen from '../screens/HomeScreen';
import ProjectDetailsScreen from '../screens/ProjectDetailsScreen';
import MyTabBar from './MyTabBar';


const TopTab = createBottomTabNavigator();

const mapProjectFromProjectsOverviewToNavigation = () => {
    return projectsOverview.map(item => {
        return <TopTab.Screen
        key={item.title}
        name={item.title}
        component={ProjectDetailsScreen}
        options={{
            title:item.title,
        }}
    />
    })
}

const mainTabNavigator = () => {
    return (
        <TopTab.Navigator tabBar={props => <MyTabBar {...props} />} initialRouteName='Contact'>
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
            {mapProjectFromProjectsOverviewToNavigation()}

        </TopTab.Navigator>
    )
}

export default mainTabNavigator