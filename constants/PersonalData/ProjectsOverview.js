import { GrocerEatsDetails } from './ProjectsDetails/GrocerEats';
import { WordFishingDetails } from './ProjectsDetails/WordFishing';
import { HealthAdvisorDetails } from './ProjectsDetails/HealthAdvisor';
import { BounceBackDetails } from './ProjectsDetails/BounceBack';
import ProjectOverview from '../../models/projectOverview';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import React from 'react'


export const GROCEREATS_TITLE = "GrocerEats"
export const WORD_FISHING_TITLE = "WordFishing"
export const HEALTH_ADVISOR_TITLE = "Health Advisor"
export const BOUNCEBACK_TITLE = "BounceBack"

// This file describes properties used in  My Projects section
// projectsOverview array should contain only ProjectOverview objects
// ProjectOverview should contain:
// title - project's title
// image - can be in form of local image by passing require statement or in form of url to image by passing {uri:"https://example.url"}
// projectDetails - in this case details of each project are separated into different files (located in ProjectDetails folder), this property is used in project's details screen
// config for the button located at left side in Go to: section - this is an object that contains title of the button and link that should be open after pressing the button.
// content - array of objects that contain title and text of each row located between project's title and Go to buttons
// specialLabel - text of a label that appears in top right corner of project's tab, if not provided the label does not appear



export const projectsOverview = [
    new ProjectOverview(
        GROCEREATS_TITLE,
        require('../../assets/Icons/GrocerEats.png'),
        GrocerEatsDetails,
        {
            title: 'Play Store',
            link: "https://play.google.com/store/apps/details?id=pl.dominik.hinc.grocereats",
            icon: <MaterialCommunityIcons name="google-play" size={45} />
        },
        [
            {
                title: "Short description:",
                text: "GrocerEats provides easy access to Spoonacular API meal recipes and integrates it with simple to use grocery list.",
            },
            {
                title: "Languages used:",
                text: "JavaScript ES6/ES7/ES8, JSX, SQLite"
            },
            {
                title: "Frameworks used:",
                text: "React Native, React"
            },
            {
                title: "Technologies used:",
                text: "Expo, Redux"
            },
            {
                title: "Libraries used:",
                text: "redux, react-redux, redux-thunk, expo-sqlite, react-reanimated, react-navigation",
            },
            {
                title: "Other:",
                text: "Version control, react-native-debugger, REST API"
            }
        ],
        "Latest"
    ),
    new ProjectOverview(
        WORD_FISHING_TITLE,
        require('../../assets/Icons/WordFishing.png'),
        WordFishingDetails,
        {
            title: 'Play Store',
            link: "https://play.google.com/store/apps/details?id=pl.dominikhinc.wordfishing",
            icon: <MaterialCommunityIcons name="google-play" size={45} />
        },
        [
            {
                title: "Short description:",
                text: "WordFishing makes learning english vocabulary from textbooks easy for polish students.",
            },
            {
                title: "Language used:",
                text: "Java"
            },
            {
                title: "Framework used:",
                text: "LibGDX"
            },
            {
                title: "Technologies used:",
                text: "Gradle, Scene2D"
            },
            {
                title: "Tools used:",
                text: "Android Studio, Skin Composer",
            },
            {
                title: "Other:",
                text: "Version control, Android Push Notifications, Local Android Storage management"
            }
        ],
        "Popular"
    ),
    new ProjectOverview(
        HEALTH_ADVISOR_TITLE,
        require('../../assets/Icons/Health_Advisor.png'),
        HealthAdvisorDetails,
        {
            title: 'Play Store',
            link: "https://play.google.com/store/apps/details?id=pl.dominik.hinc.heath_advisor",
            icon: <MaterialCommunityIcons name="google-play" size={45} />
        },
        [
            {
                title: "Short description:",
                text: "Health Advisor uses provided biometric and demographic data to search the same medical references used by healthcare professionals.",
            },
            {
                title: "Languages used:",
                text: "JavaScript ES6/ES7/ES8, JSX"
            },
            {
                title: "Frameworks used:",
                text: "React Native, React"
            },
            {
                title: "Technologies used:",
                text: "Expo"
            },
            {
                title: "Libraries used:",
                text: "redux, react-redux, react-reanimated, react-navigation, validate.js",
            },
            {
                title: "Other:",
                text: "Version control, react-native-debugger, REST API"
            }
        ],
    ),
    new ProjectOverview(
        BOUNCEBACK_TITLE,
        require('../../assets/Icons/BounceBack.png'),
        BounceBackDetails,
        {
            title: 'Play Store',
            link: "https://play.google.com/store/apps/details?id=pl.dominik.hinc.bounceback",
            icon: <MaterialCommunityIcons name="google-play" size={45} />
        },
        [
            {
                title: "Short description:",
                text: "BounceBack is a game with similar rules to \"Don't touch the spikes\", but enriched with additional visual effects and with some differences in gameplay.",
            },
            {
                title: "Language used:",
                text: "Java"
            },
            {
                title: "Framework used:",
                text: "LibGDX"
            },
            {
                title: "Technologies used:",
                text: "Box2D, Box2Dlight, Gradle, Scene2D"
            },
            {
                title: "Tools used:",
                text: "Android Studio, Skin Composer, 2D Particle editor",
            },
            {
                title: "Other:",
                text: "Version control, Local Android Storage management"
            }
        ],
    ),
]