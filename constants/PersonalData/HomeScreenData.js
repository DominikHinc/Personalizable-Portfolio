
import { AntDesign, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { IconButtonConfig } from '../../models/iconButtonConfig';

export const homeScreenConfig = {
    title:"Hey there, I\'m Dominik Hinc",
    subTitle:"I\'m a mobile app developer",
    backgroundImage:require("../../assets/Images/Desk.jpg"),
    buttons:[
        new IconButtonConfig(<AntDesign name="github" size={45} color="white" />, "https://github.com/DominikHinc"),
        new IconButtonConfig(<MaterialCommunityIcons name="google-play" size={45} color="white" /> , "https://play.google.com/store/apps/developer?id=3TOR+Studio&hl=en_US")
    ]
}