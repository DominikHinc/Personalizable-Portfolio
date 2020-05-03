import { GrocerEatsDetails } from './ProjectsDetails/GrocerEats';
import { WordFishingDetails } from './ProjectsDetails/WordFishing';
import { HealthAdvisorDetails } from './ProjectsDetails/HealthAdvisor';
import { BounceBackDetails } from './ProjectsDetails/BounceBack';
import { ProjectOverview } from '../../models/projectOverview';
import { Entypo, AntDesign } from '@expo/vector-icons'
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
        {uri:"https://lh3.googleusercontent.com/aSQGOUjlgiMg-IcAhJ9c_ewhsEDF-uIF1tTm_WhzbYtzcMPI9cM0ftEK4Lz-UnDljjTHZE-UZ1KoyUTaGDbEoDTQyXG6NCMnbfGOTn8BqsWH2C7uIl64vlsFx7J3vuyINf_lm-TGELCuRtAvTb0D1z7NEMKdtaZsOC5EM8ysEA9-4RlBUJofScfHMo0ftw0ueZ5mVYDIJYKKHpkZDioLcRvSHLz3gVVy5KRQxBC4FHLqSBUAAuf7hkeyFzBNi8FSmJ8Mro8RzxwWmQKfWhqki323PjRWeJV-fLZXiLBOSaQw1pYv28pZUXzwHB7ZOwJBJd-N2-hTpqGehuhB_qo4h38KLTQlSWyjKrc-rVUe-x-7krri4DMNUO-DTgIMt3Bjkk7NmYfQCQ3M_IbfrjrGYTM1vZpvgFzrNT1wW0XKRJ-PCHAPY-SZQWdHfxbzLgSgyqlRHWsC0vTXVr9fkUv_c-hb1yFR5UBxdiJ21ASkDmI3H1hcbZ2AtIg3zIZS5O_bOrtban9hc6xSp9VG2U6Ndif_AvEZ4SyhOEzQlUUkISEc6vTPFxq75LcpmgX-G9HHrOozfUpGO3WxMxp9wfS4gBWtieDyb2IsXVM2NaEalWqrJTEOYbEvCN1k_eEST3Rv3mq-vLHmtYAJSeGAjZi_addhpMnANOhns3ZYEFvSUjc0Bf2dIlsBYp3_692n12wnxlTwxCuob6neJnsH7YvgHv__mT7g0rNB7V8W8hLwo0gykIvXyXliiQ=s600-no"},
        GrocerEatsDetails,
        [new IconButtonConfig(
            <Entypo name="google-play" size={45} />,
            "https://play.google.com/store/apps/details?id=pl.dominik.hinc.grocereats",
            'Play Store',
        ),
        new IconButtonConfig(
            <AntDesign name="github" size={45} />,
            "https://github.com/DominikHinc/GrocerEats",
            'GitHub (Expo)',
        ),
        new IconButtonConfig(
            <AntDesign name="github" size={45} />,
            "https://github.com/DominikHinc/GrocerEats-Without-Expo",
            'GitHub (No Expo)',
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
                text: "redux, react-redux, redux-thunk, react-native-sqlite-storage, expo-sqlite, react-reanimated, react-navigation",
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
        {uri:"https://lh3.googleusercontent.com/cJuKVOTWMTB2MSS8sqzuRncsTLLeKJ8pnKsXsMPuW4YHW9OsrLbR__iFVIj2EtkXwHJjh31AIzbTU2_XdVOEU80PM5WZq7nBpmA1JU0fZzeWrtYxLSzJ51xry7nhqPdXPOfUQzHfaizjtz6UXfHz3RURv5H8_QHU483hvCT20nacxTK2cG0tKsRlMaXe1DvJrSCDDsxsF4tUJrpDsbUrgqr9rvLdHjRATfmA1goObFi6xkJXlcS5pcP5CmuRztB5IFN9rUMHo96HH8_pN6e0cWwZv-ajlVU64d2FaJXHXOAfwtlMEhx7SPxMLmRmEdWHbRAhZFJdFllq8OD7LMYW9X6MZrTh5xiIV97KFIVu-yJm8ruxcPv_sdYKfK4bjA-QIlTwG87EPWz78ks7CmqVMLTKebBU9fqL6oCMRuERnf1IDecBz-fIaIqalZ0ZCfi4GUubH4oeTdh5PFVNtCHvkNYp2uxtUpezUYpB-5AR5EdolkbxCHSCY6-SzeFfG1d4xCpLJI3EfM9Uxviz8ajtCWc1CH-6lkitJL1UHqJCsRhp5xx_NPS8v1OLRvtqAEE6lLuIMOnJZVP2NMG2VAt9d-wat4stSfgdmBhHhPiUAeGOOlC85h3YEqxaS5nAt_mc-VdbNlVobDAXATNCP-NsI4Qnop-Vw-BEpjh28lHy1zVN6NgJskl-Ur6-lrtPOrrin1zxZ2jTvDSbJ7NefDREq0NRLVBjh3dDL545g4MMhC2FC2pDRSMROg=w419-h202-no"},
        WordFishingDetails,
        [new IconButtonConfig(
            <Entypo name="google-play" size={45} />,
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
        {uri:"https://lh3.googleusercontent.com/JdkZI0oUxM7HTnEAFGxHeXSN8i7KYIMMyuyLJrKuhIA6WT0s6Vg4iIGGd1SdT_x6GkJiSjo3YLCxHp9fm8ofKIJSR-uYAebXr1poZk8R4xNSlkRiM6jU2UpqyGULP4hMcIqob6F5GMH0uDFR4yd0-1YQlKcY5dnAQROZSQD38nfSfzGN1LrD_9SCrSBKeK8GH4LWTccNyRuheiArGKw8osbxsi0Lhav4ZEEquKlp042tzFLfuza9PyhpHkK-5iB9H6j5RFGlrtnnc8dSM26iNWd0qIyG-y8DURCaONNc1wz89QmG9JARTh_ea8cwyKM4uacGiYPsWlx_VCiiwDsovlX6VpfzlyAE-ADVv1ehmf-WXNxebT8Sp7pKbrN-f3V3XvYDmGC8nHQoDax_eJUwMjLcgpvkpNK5pZRoUli05ajPyLvGlUuY1jRaMBxIxuVEdnStYneepCU9_GhIOFYKVPWw_cXjWIt_eB6NUPo8e7S-bKmdVLUwzF3cMVfwKGvA_8vwLqY4PkbKXcyMy_aj8TWH2e4vR6QNIH7KCTSQtvSysXhRFzBUgJf6OgR692PZYoRJVD9qva8ru-SY_VuebrBfzZXZf-poqMGFN4co6ZCeLwUzxIbN3VjM9J3g-Rn2iaLat6if_Ux-Td_u8ZftLU2zJET9GsEA1gF6ZJzlsNKBlu43VFoKkxk5zGupNIpZFtQWU830P0V-JnO1nqQfKQaAvSZQjt2uHf9azzxs2vT1392yReYc1A=s512-no"},
        HealthAdvisorDetails,
        [new IconButtonConfig(
            <Entypo name="google-play" size={45} />,
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
        {uri:"https://lh3.googleusercontent.com/pPumOFOCa2Vvz9joHWNaqiOuaGTZOgolJOZDkEhz43yeWskWoFSDfDKq5NFYehn1f_jkK_XW0YBnnioUM2oVejtJpeJfOXGpFgG0FLMDzsNixPaoibZS8X8ZGBxJIvpQ8zjkrU18IY8Vb37zN3I5dYX_tj9R8iC680wuukUwqk1iated0hYMy9vZijmQTHCkWaTfhyZVf3YGuOOXTETVHVt-vM8d6Bn_GfWIYeF5LgE8Ipnes19i8I0d3PliVubuAJwsHeyVivmDebfU84UA0VA2sU5_RIU6gDxew6Zbfn3iHjbXunhJ94z9SDnhglSmp6MRkMSWgkSf0Ew_NZTs43Idne3xO1WMMEIywP9U_Ul8jQZAbZ17ib_UzAB5ooO9t15epCln5sbcK3vqd8IbxBhI-DZGTFF7n269fYvMLL_39IMW3-4O9Xxrh2kE0XVCLgS8DrPAxUtU09uucipBEWsjiXA8KoQTbm6sJpIK2Ujkw9p5dKKKzEnKL5iNt14BOJw5E89CRx4jz8Vw43QPh4PILmgRQKiiBOShiG0vTIfeYP9Rh2xOsU-FzdzIBY8a2aw4D8x4sev3hx1pXWkYTEuQ9xuWtgdWApZmPdufKE5lT43r3ZandDW430MHkOuYejjEtSlqoy7Cn4NePafV9U2tpQX40NuQgOb8Nfgz0EGlUIAWmGq7a0OGsQLskURWRae9OYNhzKSoYuD2FcRg49CPRDvmlfTXvx4t9Zhca8DZFcw55lgjpQ=s512-no"},
        BounceBackDetails,
        [new IconButtonConfig(
            <Entypo name="google-play" size={45} />,
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