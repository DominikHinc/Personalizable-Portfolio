import React from 'react';
import { Contact } from "../../models/contact";
import {MaterialIcons, AntDesign, SimpleLineIcons} from '@expo/vector-icons'
import { normalizeIconSize } from '../../helpers/normalize';

export const contactData = [
    new Contact("contact.dominikhinc@gmail.com", <MaterialIcons name="mail" size={normalizeIconSize(45)} /> , "mailto: contact.dominikhinc@gmail.com"),
    new Contact("github.com/DominikHinc",<AntDesign name="github" size={normalizeIconSize(45)}/>, "https://github.com/DominikHinc"),

]