import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import { projectsOverview, HOME_SCREEN_TITLE, CONTACT_SCREEN_TITLE } from '../constants/PersonalData/ProjectsOverview';
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
        initialParams={{title:item.title}}
    />
    })
}

const mainTabNavigator = () => {
    return (
        <TopTab.Navigator tabBar={props => <MyTabBar {...props} />} initialRouteName={"GrocerEats"} >
            <TopTab.Screen
                name={HOME_SCREEN_TITLE}
                component={HomeScreen}
                options={{
                    title: HOME_SCREEN_TITLE
                }}
            />
            <TopTab.Screen
                name={CONTACT_SCREEN_TITLE}
                component={ContactScreen}
                options={{
                    title: CONTACT_SCREEN_TITLE
                }}
            />
            {mapProjectFromProjectsOverviewToNavigation()}

        </TopTab.Navigator>
    )
}


export default mainTabNavigator