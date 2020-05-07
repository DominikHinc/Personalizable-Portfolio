# Personalizable portfolio website/application that scales dynamically to look the same on every device
This project is written in React Native with the help of react-native-web and expo-web.
Because all persononal data is located in one folder, it is very easy to customize this project to serve you as your own portfolio website.

Because of the technology this project is written in, it can be build as a website (you can find my version hosted [here](https://dominikhinc.pl/ "here")) and as a mobile application (my version hosted by expo [here](https://expo.io/@osobanr7/portfolio-dominik-hinc "here"))

## Table of Contents
* [Installation](#installation)
* [Customization](#customization)
    + [Home Screen welcoming image](#home-screen-welcoming-image)
    + [Adding projects](#adding-projects)
    + [Project details page](#project-details-page)
    + [Tab bar icons](#tab-bar-icons)
    + [My skills section](#my-skills-section)
    + [About me section](#about-me-section)
    + [My coding history](#my-coding-history)
    + [Contact page](#contact-page)
    + [Footer text](#footer-text)

## Installation
To run this project you will have to have expo-cli installed.
You can install it by executing this command:

`$ npm install -g expo-cli`

Then just execute `npm install` command in the directory that contains copied repository.

Execute `expo start` command if you want to start the project.

If you want to learn more about creating apps with expo click [here](https://reactnative.dev/docs/environment-setup "reactnative.dev/docs/environment-setup").


## Customization
It's open source, so you can customize everything. But if you like the default design, you will only need to customize files located in *PersonalData*  folder.
### Home Screen welcoming image
![](https://lh3.googleusercontent.com/pw/ACtC-3fKXbfxQN3ZN67HvFjukY4XPu03N-jZmHjZcVlCEVR8JRkF-OT33GCAyqC53yx8NJLvJ8K8a3nkQVRWe54i9_fgor8lFmVILHYmHgIhwsqy2GCOikhoxyvF7mnHm62fKbUUZJe22L7OKfO-WCi8ppFr=w1680-h848-no)
Customizing this part is very straight forward. All config for this part is located in *HomeScreenData.js* file.
There you will find *homeScreenConfig* object which should contain:
+ title - The larger text placed in the center of the image.
+ subTitle - The smaller text placed in the center of the image.
+ backgroundImage - path to the image, can be in form of local file by passing require('..example/path') or in form of URL to the image by passing {uri:"https://example.url"}.
+ buttons - array containing IconButtonConfig objects, each object represents a button located at the top right of the screen. IconButtonConfig object consists of:
    +  Icon component that represents a given link.
    +  Link that is opened when the icon is pressed.

```javascript
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import { IconButtonConfig } from '../../models/iconButtonConfig';

export const homeScreenConfig = {
    title:"Hey there, I\'m Dominik Hinc",
    subTitle:"I\'m a mobile app developer",
    backgroundImage:{uri:"https://example.url"},
    buttons:[
        new IconButtonConfig(<AntDesign name="github" size={45} color="white" />, "https://github.com/DominikHinc"),
        new IconButtonConfig(<AntDesign name="linkedin-square" size={45} /> , "https://www.linkedin.com/in/dominik-hinc-84b3461a9/"),
        new IconButtonConfig(<Entypo name="google-play" size={45} color="white" /> , "https://play.google.com/store/apps/developer?id=3TOR+Studio&hl=en_US"),
    ]
}
```
### Adding projects
![](https://lh3.googleusercontent.com/pw/ACtC-3eKNBX3h3mpjED23gBq4XyY9Ru9RcV1b3Y2zWuzxU3ICbB7Cy4eCLI5s__EQS75vCX_mNc9UzrFNiI_j4OBRhBxJGMdySYI72N8zL_FhzNSlal8cM7SmpCQK-iuz7GbG3FBUxDCl90ii4YyJaNQmFgR=w1680-h806-no)

There are two steps in adding a new project. Step one is adding info about the project and step two is configuring how should it's tab bar icon look (To learn more about second step click [here](#tab-bar-icons)).

The info about projects is located in *ProjectsOverview.js* file.

There you will find *projectsOverview* array which should only contain ProjectOverview objects.

*ProjectOverview* object consists of:
+ Project's title - when configuring project's tab bar icon, the case in switch statement has to be the same as a title given here, so I recommend putting title into a separate variable.
+ Project's image - can be in form of a local file by passing require('..example/path') or in form of a URL to the image by passing {uri:"https://example.url"}
+ Array of ProjectDetail objects - this property contains data used in project details page of each project. (To learn about project details page click [here](#project-details-page))
+ Array of IconButtonConfig objects, each object represents a button located in "Go to:" section of a given project and a button at the top of project details page. IconButtonConfig should contain:
    + Icon that represents given link.
    + Link opened when the icon is pressed.
    + Text that appears under the icon.
+ Array of objects that contain title and text of each row located between project's title and "Go to" buttons.
+ (optional) specialLabel - text of a label that appears in top right corner of project's tab, if not provided the label does not appear.

```javascript
import { GrocerEatsDetails } from './ProjectsDetails/GrocerEats';
import { ProjectOverview } from '../../models/projectOverview';
import { IconButtonConfig } from '../../models/iconButtonConfig';
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';

export const GROCEREATS_TITLE = "GrocerEats"

export const projectsOverview = [
     new ProjectOverview(
        GROCEREATS_TITLE,
        {uri:"https://example.url"},
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
            "https://github.com/DominikHinc/GrocerEats-React-Native",
            'GitHub (RN CLI)',
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
                text: "Expo, Redux, React Native CLI"
            },
            {
                title: "Libraries used:",
                text: "redux, react-redux, redux-thunk, react-native-sqlite-storage, expo-sqlite, react-reanimated, react-navigation",
            },
            {
                title: "Other:",
                text: "Git Version Control, react-native-debugger, REST API"
            }
        ],
        "Latest"
    // The rest of the array
]
```

### Project details page
![](https://lh3.googleusercontent.com/IMC_f7o6gozEVD8HX1ftzD46cKR2h98Ql3uJ5c_wfZnmx-zihjw0KQS4mdJ8mkPD85T8Z4aqrf7tahW3TWeeZqrVHYcME2Z6mDtUADo5y9bcYsiRsBS3XajpH5PSbMlmXqKz5-SjzdASSuLGJOAtYWTxda7AeUpa1e_YiMIQ-pgl7SgWrtb8pNfidGID-rh1fWTxvEOrwg5uM2wTrD2MVZ3vzNUMjIP634ynOg-t-A9u2ZS5Z3vzqaMKnaKFpmXFGeabZnC8hIs1wbz15VKIXSa9RGjaIwiw6bAPm1r6atVq6KZB-BRBPD2R5_Q62p01hyy7GEwUnboKWzlrazjOMlviuzb0xV_7hYtubpFTU31XuZMvg371UzdbqM3E9Jdq3MnQJXTQfcWVE0LZj7lrJUq1qABdJNP7h9UyufJFsL55S5DjEeqaz16pkTUI4nm7RoWtbs6F3rNGDsR8yKHGY586qs10P_cTmRGc_Ma3MhZvaEJLktDEX-PYoxYfvYrp_l31CJqqen-iFzHvVsSyQm_OvV3FIIhTkTqVyZuY6VTIRNAo0wlmor5nm5HOCRofB1FnXWNIACctuo0ILjjMHVjfnGQjqjU_EsPx8TMgY8q8aFWsaxXvUOtSKyrBHMGnXARnoFVekkzX_PCo7BIUvtPc4Z9wnerWinJ171yd5yGjCNp6pJBNCAksZNNoqpQMGsEvJFT8IDUoQKmUpBZRDDNYu2Z8dejCYClivjNZpkRJ451FRNuM3Q=w1440-h663-no)

Although you could put *ProjectDetail* objects array directly inside *ProjectOverview* object, I decided to separate each project's details into it's own file. All those files are located in *ProjectsDetails* folder.
Array of *ProjectDetail* objects for each project should contain only *ProjectDetail* objects.
*ProjectDetail* object consists of:
+ Title of a given section.
+ Gif/Webp/other type of image - can be in form of a local file by passing require('..example/path') or in form of a URL to the image by passing {uri:"https://example.url"}, the image will always scale to fit the screen, and it will always keep the original aspect ratio.
+ Text displayed under the title.
 
Example from *GrocerEats.js* file:
```javascript
import { ProjectDetail } from "../../../models/projectDetail";

export const GrocerEatsDetails = [
    new ProjectDetail(
        "What I learned from creating this project",
        {uri:"https://lh3.googleusercontent.com/Rest_of_the_link"},
        'I learned how to truly polish an app to make it look and perform good on every device. I further improved my Redux skills and first time used in app my knowledge about SQL. After a few days of intense work, I also learned how to better organize my time in order to stay constantly productive during long coding sessions.'
    ),
    //Rest of the array
]
```

### Tab bar icons
![](https://lh3.googleusercontent.com/pw/ACtC-3eBWjSSii-z33UgCegqV2QylMj4g7vJy7rYaEhk2TFKtet3wkR06LsFmtDTDvRYu43D65BVkz_35-4xLkji_L7For_rcZ4DQ4vAO1ODZFmpgRZHPCY5wSmUhtlvE3UTyoVEx_0J4VPdCyysXD3h1Xdx=w1179-h109-no)

Config for this part is located in *TabBarTabsData.js* file.
There you will find *getTabBarTabsData* function that returns *TabConfig* object.
This function receives screen's title (project's title) as its argument and returns corresponding object based on that property.
*TabConfig* object consists of:
+ Text styling object that is supplied to Text component, which is displayed when a given tab is active.
+ Component displayed as icon of a given tab, it should be an image rectangle whose height is *standardImageSize* or icon whose size is *standardIconSize* - it can be dynamically changed.
+ Width of tab when it's active.
+ (optional) Text that is displayed when a given tab is active, if not provided the text will be the same as case label used in switch (project's title).
```javascript
import { TAB_BAR_HEIGHT, TAB_WIDTH } from '../TAB_BAR';
import { GROCEREATS_TITLE, HOME_SCREEN_TITLE } from './ProjectsOverview';
import { TabConfig } from '../../models/tabConfig';
import { Entypo } from '@expo/vector-icons';
import { normalizeIconSize, normalizeWidth } from '../../helpers/normalize';
import { Image } from 'react-native';

export const getTabBarTabsData = (title, isFocused, colors) => {

    const standardIconSize = normalizeIconSize(48)
    const standardImageSize = normalizeWidth(TAB_BAR_HEIGHT - 15)

    switch (title) {
        case HOME_SCREEN_TITLE:
            return new TabConfig(
                {
                    fontFamily: 'sofia-bold',
                    color: colors.font
                },
                <Entypo name="home" size={standardIconSize} color={isFocused ? colors.font : colors.gray} />,
                normalizeWidth(TAB_WIDTH) / 2
            )
        case GROCEREATS_TITLE:
            return new TabConfig(
                {
                    fontFamily: 'coiny',
                    color: colors.blue,
                },
                isFocused ? <Image source={require('../../assets/Icons/GrocerEats.png')} style={[styles.iconImage, {
                    width: standardImageSize,
                    height: standardImageSize}]} 
                    />
                    : <Image source={require('../../assets/Icons/GrocerEats_Gray.png')} style={[styles.iconImage, {
                        width: standardImageSize,
                        height: standardImageSize}]} 
                        />,
                normalizeWidth(TAB_WIDTH) / 1.15
            )
        //Rest of the cases
    }
}
```
### My skills section
![](https://lh3.googleusercontent.com/pw/ACtC-3dSHeUc13BzpYna9wt5xP8TbydMd4GYl-CxnePzu0uONhWFf03mPipTCZrjXOrlas8eE2kyh44A2IcFqeDzprARZDSudd8FA582X5WV2DCTQqRC9Icd9aLub1mQYjCq9NkXWZTKjzx9imLUubJZlKto=w1680-h445-no)

Config for this part is located in *MySkills.js* file.
There you will find *mySkills* array which should only contain *MySkillsColumn* objects.
*MySkillsColumn* object consists of:
+ Title of a given column.
+ Array of skills.
```javascript
import MySkillsColumn from "../../models/mySkillsColumn";

export const mySkills = [
    new MySkillsColumn(
        "Languages:",
        [
            'JavaScript ES6/ES7/ES8',
            'Java',
            'C++',
            "SQLite and SQL",
            "HTML/CSS"
        ]
    ),
    //Rest of the array
]
```
### About me section
![](https://lh3.googleusercontent.com/jJA6a5GvxzO56ziHk3M810AxSbvObebx6fthgn-xBBev2MXIlnjK0yq2SdCbccUczGlbDA06FjkJQ9O9gzK18UvqCvKDE2YeE6IMxBgjjwfhoxuiU7zgbTSj44wfmQQxh5RfLsOZakFn0scGDpyrtbg5t6QRCyEX57KYfqJBHxTUXhywSwVwlFuR53gkcR0IRNdKCh0yXypxhqs2uQOu6yo-8TA3UnnhDv8poBJRWxhjh8XvUiJH39jfzjUZz3XKlFWkf5UwrT2sycdOZ30SImvde2jIc2_HspR0xt51uZaohvvIvfOgb0m2JRW31H3m6ydWiSyiaDGM4pNgsDR4ImdLrwUu_WS8llipoA4GiN6sI2WYk-4vp3AtYczMc2qa_lpCp3EM-TcBFcEi3xebb9A1l3SXbtzzFvD2vjDnWDbmGSU62uxojR9Q_Raa7lP-pUU33z_kIjR7S_sbD9mmMtS4P8NttqrvNTvysmFY90HDFmUuWvED8Ea2Hs2hCSSTWSEkSvqaEDnpE197lOCw-uIpzJCZEZJee_N9gXflJ5P5aYdk3gYWCHWV_G43ZlBTKHYLQkYJiiGmrI9hg4ip1xCX2K9KiNjQIEgfLulUkXPKtf_WVx-FtgA8bdC4pCf-ln0NQkaHI0wvPdnu6_gvep4eoOPviiNwcM2c_DaZCBt4XXrDmGmy8Zr4TZMfiioeIR-Lwqq5_XeFDGvZw3G9N2xq7ufsCvh4g88NbDsWEdLiT8na4bjG_g=w1680-h216-no)

Config for this part is located in *AboutMe.js* file.
There you will find *AboutMe* React Native component which should return View component.
I decided to keep this part as a React Native component to give more options to personalize it.
Inside returned View can be anything, but I decided to use only Text components.

```javascript
import { headerMainStyle, standardText } from '../../FontStyles';
import DefaultText from '../../../components/DefaultText';
import { View } from 'react-native';

const AboutMe = () => {
    return (
        <View>
            <DefaultText style={headerMainStyle}>About Me</DefaultText>
            <DefaultText style={standardText}>
                I'm a passionate self taught developer, who seeks for more knowledge everyday.
            </DefaultText>
            <DefaultText style={standardText}>
                For the past 4 years, I have been working with code every day.
                I like to learn new stuff, especially if then I can put what I learned into use.
                I enjoy creating apps. The whole process from idea on paper to a functional product is something I will never get bored of.
                If I had to choose one thing, why I like coding, it would be confronting different ideas and solutions people have regarding the same problem.
            </DefaultText>
        </View>
    )
}
```
### My coding history
![](https://lh3.googleusercontent.com/pw/ACtC-3eL9R1Z-cKUOBBT7hTij8IH5kjyi-ZW7dLK0DZGzNt_Ak0Nh1ruhoj2q7r-XQnyYlL9ftu1w60ZShDY4cyc59h_ybGU9_ajCN8ITlmsBFRRUX1-j7fAjnqtEACQJa3g2uxlF5OtmHiXgjwRjNEjFBlQ=w1680-h590-no)

Config for this part is located in *MyCodingHistory.js* file.
There you will find *MyCodingHistory* React Native component which should return View component.
I decided to keep this part as a React Native component to give more options to personalize it.
Inside returned View can be anything, but I decided to use only Text components.

```javascript
import { headerMainStyle, standardBoldText, standardText } from '../../FontStyles';
import { normalizeMarginSize } from '../../../helpers/normalize';
import DefaultText from '../../../components/DefaultText';

const MyCodingHistory = () => {

    return (
        <View>
           <DefaultText style={{ ...headerMainStyle, marginTop: normalizeMarginSize(35) }}>My coding history</DefaultText>
            <DefaultText style={{ ...standardText, ...styles.textLabel }}>
                Over the years I have worked with many different technologies.
            </DefaultText>
            <DefaultText style={{ ...standardText, ...styles.textLabel }}>
                My first language was <DefaultText style={standardBoldText}>C++</DefaultText>. Using it, I learned the basics of programming
                and how to think like a programmer.
            </DefaultText>
            
            {/* Rest of the text components */}
            
        </View>
    )
}
```
### Contact page
![](https://lh3.googleusercontent.com/pw/ACtC-3cMD2zECIzjevRHlY9Ua8sroiDACG6uT5diGSS8mmtATLyLhPPZ4cf8-EN-pKHgSIjKPm97xaCkOceJydT2NNrgkgLeSIvQZ6RIf56GtiA6zAm76Hh7EI_F8ckQPMH0Orqs7g_5M5qHH2RYB8FiaZuh=w1680-h790-no)

If you want the left side of the screen to work, you will have to implement your own sendEmail function. I have used [EmailJS](https://www.emailjs.com/ "EmailJS"), but you can use whatever you want.

Config for the right part of the screen is located in *ContactData.js* file.

There you will find *contactData* array which should only contain *Contact* objects.

*Contact* object consists of:
+ Text - describing form of contact.
+ Icon - representing form of contact.
+ Link - that will be opened after pressing the text.

```javascript
export const contactData = [
    new Contact("contact.dominikhinc@gmail.com", <MaterialIcons name="mail" size={45} />, "mailto: contact.dominikhinc@gmail.com"),
    new Contact("GitHub", <AntDesign name="github" size={45} />, "https://github.com/DominikHinc"),
    new Contact("LinkedIn", <AntDesign name="linkedin-square" size={45} /> , "https://www.linkedin.com/in/dominik-hinc-84b3461a9/"),
    new Contact("Google Play", <Entypo name="google-play" size={45} /> , "https://play.google.com/store/apps/developer?id=3TOR+Studio&hl=en_US"),
]
```
### Footer text
![](https://lh3.googleusercontent.com/VbOixgJHor0wyqtI2mvL02KyR5i2p-C24LkF2td_OOMgGWw2ofPhRen7-dhhyh2C1Bl-OcvrAE5wgZrEhga4uGkPWEC06gHL3KPETV15Wue-HNMoNYru_nLMbWOwG5gUY09ziFcuCbToCa-7oQtPTinGMsYFxxmxMeJ7qHhOgvdqMYoYqIwlreRQlOQnqBJXuiy7YWCJ1wPcbfq1FUMadBrFDAFypXvsOjItRfmPac-0muUpv-me-zSnpXjD0Yt89f19Lxx1ZMBIHijdGIiVFWKrH88JxcucUPOf4MuE_fZfF-vXPHt-i2XUybw_2vqHcu23KQiSkdafI4jt0fQf_Wl7rcCGZTHGyV68H5PUau8b2qAIuK4bc0yDHh9ogh3Fq01kkZOM2kAiE-icfXV-AxS8f6BDi38PpXaGqpOtgxtIhjeMS80HZHE4H-vg_uknDFQO-60GzOtUGIJMXV3caKUiX6KM8kMfycpiU6-qh61jGwKl-g0ix4hPjmMLGNGzHxnBFsTDW3tDO_D_nA19fTBs_7Px87A4Eb9B_NisfuAeOy-mfRX12K1EGdRDlpRvsT8xfsEGvhQSa_XK7eED0bKju1G6jv3m_gePbktJVuceOJK4iiHlB7tzX9-KFARaoqBzsGMxgM5WTJNkX6oNwPfF8dGJ97dCeUiKM-Eu1sM7t8wBeNjqZ9Ej9XSmEvFlZAnKnlyn9Zpg-JH2bBYCpLRf7IpQk8Soa8udp1MPWGOpd_fQ5qZdQg=w1897-h93-no)
Config for this part is located in *AppData.js* file.

There you will find *footerText* string.
```javascript
import { Platform } from "react-native";

export const footerText = `${Platform.OS === 'web' ? "Site" : "App"} created by Dominik Hinc`
```












