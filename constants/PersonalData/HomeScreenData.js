
import { AntDesign, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { IconButtonConfig } from '../../models/iconButtonConfig';

// This file describes the properties of Image located at the top of the HomeScreen and all things that overlay it.
// homeScreenConfig should contain:
// title - The larger text placed in the center of the image.
// subTitle = The smaller text placed in the center of the image.
// backgroundImage - Image located at the top of the HomeScreen.
// buttons - array containing IconButtonConfig objects, each object represents a button located at the top right of the HomeScreen.
// IconButtonConfig should contain:
// Icon - if color is not provided icon will be the same color as current font color. (size should not be normalized here, because it's being normalized before rendering)
// Link - which is opened when icon is pressed

export const homeScreenConfig = {
    title:"Hey there, I\'m Dominik Hinc",
    subTitle:"I\'m a mobile app developer",
    backgroundImage:require("../../assets/Images/Desk.jpg"),
    buttons:[
        new IconButtonConfig(<AntDesign name="github" size={45} color="white" />, "https://github.com/DominikHinc"),
        new IconButtonConfig(<MaterialCommunityIcons name="google-play" size={45} color="white" /> , "https://play.google.com/store/apps/developer?id=3TOR+Studio&hl=en_US")
    ]
}