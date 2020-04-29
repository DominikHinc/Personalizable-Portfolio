import { GrocerEatsDetails } from './ProjectsDetails/GrocerEats';
import { WordFishingDetails } from './ProjectsDetails/WordFishing';
import { HealthAdvisorDetails } from './ProjectsDetails/HealthAdvisor';
import { BounceBackDetails } from './ProjectsDetails/BounceBack';
import { ProjectOverview } from '../../models/projectOverview';
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons'
import React from 'react'
import { IconButtonConfig } from '../../models/iconButtonConfig';

export const HOME_SCREEN_TITLE = "Home"
export const CONTACT_SCREEN_TITLE = "Contact"
export const GROCEREATS_TITLE = "GrocerEats"
export const WORD_FISHING_TITLE = "WordFishing"
export const HEALTH_ADVISOR_TITLE = "Health Advisor"
export const BOUNCEBACK_TITLE = "BounceBack"

// This file describes the properties of  My Projects section
// projectsOverview array should contain only ProjectOverview objects
// ProjectOverview should contain:
// Project's title
// Project's image - can be in form of local image by passing require('..example/path') or in form of url to image by passing {uri:"https://example.url"}
// Array of ProjectDetail objects - this property contains data used in ProjectDetailsScreen of each project.
// Array of IconButtonConfig objects, each object represents a button located in "Go to:" section of each project and at the top of ProjectDetailsScreen.
//      IconButtonConfig should contain:
//          Icon that represents given link - if color is not provided icon will be the same color as current font color. (size should not be normalized here, because it's being normalized before rendering)
//          Link - opened when the icon is pressed.
//          Title - text under the icon
// Array of objects that contain title and text of each row located between project's title and "Go to" buttons
// (optional) specialLabel - text of a label that appears in top right corner of project's tab, if not provided the label does not appear

export const projectsOverview = [
    new ProjectOverview(
        GROCEREATS_TITLE,
        require('../../assets/Icons/GrocerEats.png'),
        GrocerEatsDetails,
        [new IconButtonConfig(
            <MaterialCommunityIcons name="google-play" size={45} />,
            "https://play.google.com/store/apps/details?id=pl.dominik.hinc.grocereats",
            'Play Store',
        ),
        new IconButtonConfig(
            <AntDesign name="github" size={45} />,
            "https://github.com/DominikHinc/GrocerEats",
            'GitHub',
        )],
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
        [new IconButtonConfig(
            <MaterialCommunityIcons name="google-play" size={45} />,
            "https://play.google.com/store/apps/details?id=pl.dominikhinc.wordfishing",
            'Play Store',
        ),
        new IconButtonConfig(
            <AntDesign name="github" size={45} />,
            "https://github.com/DominikHinc/WordFishing",
            'GitHub',
        )],
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
                text: "Version control, Android Push Notifications, Local mobile storage management"
            }
        ],
        "Popular"
    ),
    new ProjectOverview(
        HEALTH_ADVISOR_TITLE,
        require('../../assets/Icons/Health_Advisor.png'),
        HealthAdvisorDetails,
        [new IconButtonConfig(
            <MaterialCommunityIcons name="google-play" size={45} />,
            "https://play.google.com/store/apps/details?id=pl.dominik.hinc.heath_advisor",
            'Play Store',
        ), new IconButtonConfig(
            <AntDesign name="github" size={45} />,
            "https://github.com/DominikHinc/Health-Advisor",
            'GitHub',
        )],
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
                text: "Expo, Redux"
            },
            {
                title: "Libraries used:",
                text: "redux, react-redux, react-navigation, validate.js",
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
        [new IconButtonConfig(
            <MaterialCommunityIcons name="google-play" size={45} />,
            "https://play.google.com/store/apps/details?id=pl.dominik.hinc.bounceback",
            'Play Store',
        ), new IconButtonConfig(
            <AntDesign name="github" size={45} />,
            "https://github.com/DominikHinc/BounceBack",
            'GitHub',
        )],
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
                text: "Version control"
            }
        ],
    ),
]