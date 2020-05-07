import { AntDesign, Entypo } from '@expo/vector-icons';
import { IconButtonConfig } from '../../models/iconButtonConfig';
import React from 'react';

// This file describes the properties of Image located at the top of the HomeScreen and all things that overlay it.
// homeScreenConfig should contain:
// title - The larger text placed in the center of the image.
// subTitle - The smaller text placed in the center of the image.
// backgroundImage - Image located at the top of the HomeScreen, can be in form of local image by passing require('..example/path') or in form of url to image by passing {uri:"https://example.url"}.
// buttons - array containing IconButtonConfig objects, each object represents a button located at the top right of the HomeScreen.
// IconButtonConfig should contain:
// Icon component that represents given link - if color is not provided icon will be the same color as current font color. (size should not be normalized here, because it's being normalized before rendering)
// Link - opened when the icon is pressed.
// require("../../assets/Images/Desk.jpg")
export const homeScreenConfig = {
    title:"Hey there, I\'m Dominik Hinc",
    subTitle:"I\'m a mobile app developer",
    backgroundImage:{uri:"https://lh3.googleusercontent.com/tkyxg1-lOImoErZnOpBXqq5eB15jUC4Bu8q2DmkZcU0uZal0z_EJkwWEAUB-anFBHj_m5h1guaSdZqUyVAeU4QzWAkoGNJrKD3VS1Y6X7drepYFf-k5TxlHPesXDFphZR-r0OzOfAlIqLmhBHql-1FYgmn7UYVy2F_xExFfZ0lEWVen7V_Qq7WiPuiK8UzfFEi4AAqbFRhaCBF0lySY7PRPO_LjIoLO3bKneFYebeHe6scuoc8tR9ze0-sVvFLw81L_1Tw1WPjOfH_ner7p9XhoHumWQQpOlR-DaGS2O-DbiGfsSrmEttyzw_dPSK0XbTqRnF9cNroA23YQpAoNXV5FXE6cinbnROFqxXWfuKq8--U7sbw_5BDFzzbVuMqy9HMCzXD84NVlVDUTYVd0Njhb6eH-MtKG68kd3uvKDmbOFsviR2Ibz6KkoHiXINx3oZ8DTVmaicqvdgynUsxD0koPZ3j1tgA8mktuCtZTC5DMG1mmbPmnuQ24M6jdpiDjXo_RWFvMv9vOgAmb3T6_Wb_eQ8CuK0-fM4pgMH8-Rc2PxMh2W2FdzzJHVzFaWqTM7jEoCqRmUIgfu9IChpIYaySnV4UHQ4GRUG9D6M-XeO10lnGOnSpAG5wgEqBh4xDivjbDAcPKLSGDCaIv_ZP5fqBl3Q0aZurm2RiP4LqoR1emRqxhmgEMJo6tW2EDdwt9I7EiTfbm3NXkvtTZGBG36zO_tGNrhMyF_7RKBRbCjyUl8RmLT2JGp-g=w1163-h775-no"},
    buttons:[
        new IconButtonConfig(<AntDesign name="github" size={45} color="white" />, "https://github.com/DominikHinc"),
        new IconButtonConfig(<AntDesign name="linkedin-square" size={45} /> , "https://www.linkedin.com/in/dominik-hinc/"),
        new IconButtonConfig(<Entypo name="google-play" size={45} color="white" /> , "https://play.google.com/store/apps/developer?id=3TOR+Studio&hl=en_US"),
    ]
}