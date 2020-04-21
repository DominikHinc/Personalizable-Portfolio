import { AntDesign, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { Contact } from "../../models/contact";

//This file describes properties of icons and corresponding links located in ContactScreen
//contactData is array that should contain only Contact objects
//Contact object should have:
// Text String - describing form of contact
// Icon - representing form of contact (size should not be normalized here, because it's being normalized before rendering)
// Link - if not provided text's touchable will be disabled and color of the text will be changed to standard font color

export const contactData = [
    new Contact("contact.dominikhinc@gmail.com", <MaterialIcons name="mail" size={45} />, "mailto: contact.dominikhinc@gmail.com"),
    new Contact("github.com/DominikHinc", <AntDesign name="github" size={45} />, "https://github.com/DominikHinc"),
    new Contact("Google Play", <MaterialCommunityIcons name="google-play" size={45} /> , "https://play.google.com/store/apps/developer?id=3TOR+Studio&hl=en_US")

]