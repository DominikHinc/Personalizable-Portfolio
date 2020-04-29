import { Entypo, MaterialIcons,MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { Image, StyleSheet } from 'react-native';
import DefaultText from '../../components/DefaultText';
import { normalizeIconSize, normalizeWidth } from '../../helpers/normalize';
import { TAB_BAR_HEIGHT, TAB_WIDTH } from '../TAB_BAR';
import { BOUNCEBACK_TITLE, GROCEREATS_TITLE, HEALTH_ADVISOR_TITLE, WORD_FISHING_TITLE, CONTACT_SCREEN_TITLE, HOME_SCREEN_TITLE } from './ProjectsOverview';
import { TabConfig } from '../../models/tabConfig';

// This file describes the properties of each navigation tab located on top of the screen
// Every case should be named the same as title of a given project in ProjectsOverview.js file or title provided to Home Screen or Contact Screen.

// getTabBarTabsData should return only TabConfig objects
// TabConfig object should contain:
// Text styling object that is supplied to Text component, which is displayed when a given tab is active
// Component displayed as icon of a given tab, it should be a image rectangle whose height is standardImageSize or icon whose size is standardIconSize - it can be dynamically changed.
// Number that describes what should be the width of each tab when it's active
// (optional) Text that is displayed when a given tab is active, if not provided the text will be the same as case label used in switch (project title).

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

        case CONTACT_SCREEN_TITLE:
            return new TabConfig(
                {
                    fontFamily: 'sofia-bold',
                    color: colors.font
                },
                <MaterialIcons name='contact-mail' size={standardIconSize} color={isFocused ? colors.font : colors.gray} />,
                normalizeWidth(TAB_WIDTH) / 1.5

            )
        case GROCEREATS_TITLE:
            return new TabConfig(
                {
                    fontFamily: 'coiny',
                    color: colors.blue,
                },
                isFocused ? <Image source={{uri:"https://lh3.googleusercontent.com/aSQGOUjlgiMg-IcAhJ9c_ewhsEDF-uIF1tTm_WhzbYtzcMPI9cM0ftEK4Lz-UnDljjTHZE-UZ1KoyUTaGDbEoDTQyXG6NCMnbfGOTn8BqsWH2C7uIl64vlsFx7J3vuyINf_lm-TGELCuRtAvTb0D1z7NEMKdtaZsOC5EM8ysEA9-4RlBUJofScfHMo0ftw0ueZ5mVYDIJYKKHpkZDioLcRvSHLz3gVVy5KRQxBC4FHLqSBUAAuf7hkeyFzBNi8FSmJ8Mro8RzxwWmQKfWhqki323PjRWeJV-fLZXiLBOSaQw1pYv28pZUXzwHB7ZOwJBJd-N2-hTpqGehuhB_qo4h38KLTQlSWyjKrc-rVUe-x-7krri4DMNUO-DTgIMt3Bjkk7NmYfQCQ3M_IbfrjrGYTM1vZpvgFzrNT1wW0XKRJ-PCHAPY-SZQWdHfxbzLgSgyqlRHWsC0vTXVr9fkUv_c-hb1yFR5UBxdiJ21ASkDmI3H1hcbZ2AtIg3zIZS5O_bOrtban9hc6xSp9VG2U6Ndif_AvEZ4SyhOEzQlUUkISEc6vTPFxq75LcpmgX-G9HHrOozfUpGO3WxMxp9wfS4gBWtieDyb2IsXVM2NaEalWqrJTEOYbEvCN1k_eEST3Rv3mq-vLHmtYAJSeGAjZi_addhpMnANOhns3ZYEFvSUjc0Bf2dIlsBYp3_692n12wnxlTwxCuob6neJnsH7YvgHv__mT7g0rNB7V8W8hLwo0gykIvXyXliiQ=s600-no"}} style={[styles.iconImage, {
                    width: standardImageSize,
                    height: standardImageSize}]} 
                    />
                    : <Image source={{uri:"https://lh3.googleusercontent.com/1M2K5xM20oNxLoBxhgCMWdJsAnXwHinveP9ONQB18pMEK5WiNxhZfIWiHrAvVDwp5q6vPmbGdmFnKwL38GlSXQRue-l5dkMCQHY-u38ltdt7PzQ5JEqDqnhsUVS3ZW8LylAGNbw4AgpPs4XmyGxV4IPm3BG2CX48WPqHOp0g1bPV0m2FLG5SK3fA9S73uN373EICBlqcVcqu7-s8flAEkWotEzYXo1gy2TTiY0TMOjPPUjsX4pp0-6iNEMXDwKoAcrUP5_u1PJCtOfq3nw12PbNf98qhRHM61zEFZaS3dtdo8IrG5WHgYflIaBfQcdht-kTJRl6Fnf2M04vLvR8AhPOGdU_h3DfpnTFpubipVD8RziqTKAVcpnQ8SjnCLf3HAmFCWsHXBPmc5Hyr73aMIJ3l_w9Xo1wb0IzTYt8J21Sp_U4dNMJYlH-kqtvK9S8ymQqIi-ZhnmnrnWQMK7DaTyWm83hRZuwruUmlAC-h1MxRYe8RUF3IrzgLIqM507B7D_4wqMd7XCXcAv_Xc33tmrca7KXboSBNW9PpV1jBsuSKzj9d1iwzHIsJXGBU95m_VVclKoqhWGZ9sYQFNkKHhnquLgnQbweJt1_WlBu0nkb87v_04tWXcFEaUPRUgeewQuT8_ZQ9ES5mj0jC3UUCp64xUxfwldcLtkAA_32VdRkyf1KXVg0dtqBzjKGKRp0Z4BF526Y5xFzQxROPL2c7d_JPScBrTAUs_A6iqFCKPx0t_LNZ2NgH7A=s600-no"}} style={[styles.iconImage, {
                        width: standardImageSize,
                        height: standardImageSize}]} 
                        />,
                normalizeWidth(TAB_WIDTH) / 1.15
            )

        case WORD_FISHING_TITLE:
            return new TabConfig(
                {
                    fontFamily: 'berkshireswash',
                    fontSize: 19,
                    color: colors.font,
                },
                
                <DefaultText style={{
                    fontFamily: 'berkshireswash',
                    fontSize: 48,
                    color: isFocused ? colors.font : colors.gray
                }}>W</DefaultText>,
                normalizeWidth(TAB_WIDTH)/ 0.95,
                "WORDFISHING"
            )
        case BOUNCEBACK_TITLE:
            return new TabConfig(
                {
                    color: colors.darkBlue,
                    fontFamily: 'gibson',
                    fontSize: 25
                },
                isFocused ? <Image source={{uri:"https://lh3.googleusercontent.com/pPumOFOCa2Vvz9joHWNaqiOuaGTZOgolJOZDkEhz43yeWskWoFSDfDKq5NFYehn1f_jkK_XW0YBnnioUM2oVejtJpeJfOXGpFgG0FLMDzsNixPaoibZS8X8ZGBxJIvpQ8zjkrU18IY8Vb37zN3I5dYX_tj9R8iC680wuukUwqk1iated0hYMy9vZijmQTHCkWaTfhyZVf3YGuOOXTETVHVt-vM8d6Bn_GfWIYeF5LgE8Ipnes19i8I0d3PliVubuAJwsHeyVivmDebfU84UA0VA2sU5_RIU6gDxew6Zbfn3iHjbXunhJ94z9SDnhglSmp6MRkMSWgkSf0Ew_NZTs43Idne3xO1WMMEIywP9U_Ul8jQZAbZ17ib_UzAB5ooO9t15epCln5sbcK3vqd8IbxBhI-DZGTFF7n269fYvMLL_39IMW3-4O9Xxrh2kE0XVCLgS8DrPAxUtU09uucipBEWsjiXA8KoQTbm6sJpIK2Ujkw9p5dKKKzEnKL5iNt14BOJw5E89CRx4jz8Vw43QPh4PILmgRQKiiBOShiG0vTIfeYP9Rh2xOsU-FzdzIBY8a2aw4D8x4sev3hx1pXWkYTEuQ9xuWtgdWApZmPdufKE5lT43r3ZandDW430MHkOuYejjEtSlqoy7Cn4NePafV9U2tpQX40NuQgOb8Nfgz0EGlUIAWmGq7a0OGsQLskURWRae9OYNhzKSoYuD2FcRg49CPRDvmlfTXvx4t9Zhca8DZFcw55lgjpQ=s512-no"}} style={[styles.iconImage, {
                    width: standardImageSize,
                    height: standardImageSize}]}
                    />
                    : <Image source={{uri:"https://lh3.googleusercontent.com/3mK9H1uqwVS8B6vmb6o5mxopxcO4PBWR0ZzWid_W8cpo_ZakbwahhKd-iOjGtpP0SWF0dW8piyjo-In_pAvMwZUJH2zz9l_45maiWQJ9odCiGzZnjcIBbc0UbAD_WopNXSejvs79Tnexz3-SnhTNClaHxl2nkB_4iDWx2I16j71RgIUU-wHbZ3swgRpXORgy0_Bi85DPWTCeBtW13gjKBI0zHBj4P6CBvVBIs1dgDEkgM-dnRhsS0i4nmG4p58FMlEjNRuta3oceLyWypW5Y2szr9joNZ6Jccp9j03Us2zwLWNUmNpWKhJ3yrFjl2pl8QFiSMYZ7RjT09yEj-ZfF6ZXc4uE2z-qoQ5rgPyNLdP6a2QzQ8N7cvjpa08BMveLcexsThAKEhZmKgIqg9kViED5pI4qTYenF4L0oI_rNsTDPv1bEZv1BROI0F-Ch7Efe-G20_S8h0glwf8TVX1JPsxNk4gurqdusDEWqVNLCf2NMyMG2CnnbfLQ91odzijNzE2J1ir5p4OI4K08aOBMi2yc4MvX1crO7OPKBOy86s0ceEUpE1Writb0KY3fAW0S7P_bXmXA0ueJZBnaw9MnNEIr2UaddWdjzUKJ1m1QdKCV-trGN4XYc6hTmG5t_VwYfkplt58teNlGvH2r8opOH-e_pVkY1OFbBE9UJ4h-IeYaH7MTlGPCXE2VjwE3_Kt9SmdSJFbRxTMmBdcgZYI12P_nbz9rElVpG0UVamJxiZwqgPr5foE4kPA=s512-no"}} style={[styles.iconImage, {
                        width: standardImageSize,
                        height: standardImageSize}]}
                        />,
                normalizeWidth(TAB_WIDTH) / 1.2
            )
        case HEALTH_ADVISOR_TITLE:
            return new TabConfig(
                {
                    color: colors.lightGreen,
                    fontFamily: 'impact'
                },
                isFocused ? <Image source={{uri:"https://lh3.googleusercontent.com/JdkZI0oUxM7HTnEAFGxHeXSN8i7KYIMMyuyLJrKuhIA6WT0s6Vg4iIGGd1SdT_x6GkJiSjo3YLCxHp9fm8ofKIJSR-uYAebXr1poZk8R4xNSlkRiM6jU2UpqyGULP4hMcIqob6F5GMH0uDFR4yd0-1YQlKcY5dnAQROZSQD38nfSfzGN1LrD_9SCrSBKeK8GH4LWTccNyRuheiArGKw8osbxsi0Lhav4ZEEquKlp042tzFLfuza9PyhpHkK-5iB9H6j5RFGlrtnnc8dSM26iNWd0qIyG-y8DURCaONNc1wz89QmG9JARTh_ea8cwyKM4uacGiYPsWlx_VCiiwDsovlX6VpfzlyAE-ADVv1ehmf-WXNxebT8Sp7pKbrN-f3V3XvYDmGC8nHQoDax_eJUwMjLcgpvkpNK5pZRoUli05ajPyLvGlUuY1jRaMBxIxuVEdnStYneepCU9_GhIOFYKVPWw_cXjWIt_eB6NUPo8e7S-bKmdVLUwzF3cMVfwKGvA_8vwLqY4PkbKXcyMy_aj8TWH2e4vR6QNIH7KCTSQtvSysXhRFzBUgJf6OgR692PZYoRJVD9qva8ru-SY_VuebrBfzZXZf-poqMGFN4co6ZCeLwUzxIbN3VjM9J3g-Rn2iaLat6if_Ux-Td_u8ZftLU2zJET9GsEA1gF6ZJzlsNKBlu43VFoKkxk5zGupNIpZFtQWU830P0V-JnO1nqQfKQaAvSZQjt2uHf9azzxs2vT1392yReYc1A=s512-no"}} style={[styles.iconImage, {
                    width: standardImageSize,
                    height: standardImageSize}]}
                    />
                    : <Image source={{uri:"https://lh3.googleusercontent.com/22Kn88YYbDB3ZefO65HIAovpokwGXigjfapH2Qj_uz9KpQxRBgTwJBBe1kRo57dId49p7O7B0g_8Eenav5fzxnghxr86Kt1UQvy8J-ZGUKvid2q_A2UUWp80H9ZnF2NqQJj1Yk4s6yE41W-x6hBQiWTyPs0LXkKsf-Fr4Ar37BSesqQB2-0NUKMCZ2O23RIPRuwXR1GP3jWFsasV81ZmtRiGjYZw2zZONkBH6B97cYppT-9Xj9XQBgWQEL9DByDzHE1an8jco3xOZkyBs06LeY3vFBCqTxSdKFQHeJBswIRGzpW0X3HVj4Sr3mrYT1vnnu2jvNV3DzI9q3fwGBmsSj-zYHC3QUtqBeNZP-O56f73t0LQ8hK29RGO6qJQOqCCD4gy_SyDl_OsSG7W1QCnr37Jque_xg2Hy7VSXEuxdfIcdfpavko0Zc6dKCIue1TxPhWdmKA2_3uvzW7zaG42CkS7cqPf88IPls2bBsGH3W5fi8w1FcbqPgAB0SAi9z6yc0BJHBAnt3nAr5cM9HreexbKKnRuDXLskuygynTJO1fAIYEyVfq9BVd9y3zQEFVPsPgzKXQiCcXww_RjRinMgT61RM2-cbn7Hmx3xsL4SqWghiRyzWqnIHZEqSJA7Eg0naCtSQXzQXWnwQV9TkHkCSXEkimJ9-wbqUbvCI9fDKfQK3LmSbaYiKfQCpWrB-mrCAJOiPfcO-A8oyU5NnOE2XzF7ajdwC3mZ5IF-jjHWeYEeZopb5fkhQ=s512-no"}} style={[styles.iconImage, {
                        width: standardImageSize,
                        height: standardImageSize}]}
                        />,
                normalizeWidth(TAB_WIDTH)
            )
        default:
            return new TabConfig(
                {
                    fontFamily: 'sofia-bold',
                    color: colors.font
                },
                <MaterialCommunityIcons name="checkbox-blank" size={standardIconSize} color={isFocused ? colors.font : colors.gray} />,
                normalizeWidth(TAB_WIDTH)
            )
    }
}

const styles = StyleSheet.create({
    iconImage: {

    },
})