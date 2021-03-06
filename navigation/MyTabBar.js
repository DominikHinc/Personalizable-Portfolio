import { Entypo, MaterialIcons } from '@expo/vector-icons';
import React, { useContext, useState } from 'react';
import { Dimensions, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { useSafeArea } from 'react-native-safe-area-context';
import AboutSiteModal from '../components/AboutSiteModal';
import { darkMode, lightMode, LIGHT_MODE } from '../constants/Colors';
import { TAB_BAR_HEIGHT } from '../constants/TAB_BAR';
import { ColorsContext } from '../helpers/ColorsContext';
import { normalizeHeight, normalizeIconSize, normalizeMarginSize, normalizeWidth } from '../helpers/normalize';
import MyTabBarTab from './MyTabBarTab';
import { CONTACT_SCREEN_TITLE } from '../constants/PersonalData/ProjectsOverview';
import DefaultText from '../components/DefaultText';
import { sectionHeaderStyle } from '../constants/FontStyles';

// Custom tab bar, changes the position from default bottom to top.

const MyTabBar = ({ state, descriptors, navigation, position }) => {
    const { colors, setColors } = useContext(ColorsContext)
    const insets = useSafeArea();
    const verticalView = Dimensions.get('window').height / Dimensions.get('window').width > 1;

    const [isAboutSiteModalActive, setIsAboutSiteModalActive] = useState(false)

    return (
        <View style={[styles.mainBarContainer, { backgroundColor: 'transparent', marginTop: insets.top, height: normalizeHeight(TAB_BAR_HEIGHT) }]}>
            <ScrollView style={styles.tabScrollView} contentContainerStyle={[styles.tabBarScrollContainer, { width: verticalView ? null : '100%' }]} horizontal={true} >
                <View style={[styles.tabBarInnerContainer]}>
                    {state.routes.map((route, index) => {
                        const { options } = descriptors[route.key];
                        const label =
                            options.tabBarLabel !== undefined
                                ? options.tabBarLabel
                                : options.title !== undefined
                                    ? options.title
                                    : route.name;

                        const isFocused = state.index === index;

                        const onPress = () => {
                            const event = navigation.emit({
                                type: 'tabPress',
                                target: route.key,
                                canPreventDefault: true,
                            });

                            if (!isFocused && !event.defaultPrevented) {
                                navigation.navigate(route.name);

                            }
                        };

                        return (
                            <View key={label} style={[styles.tabContainer]}>
                                <MyTabBarTab label={label} isFocused={isFocused} onPress={onPress} options={options} />
                                {label === CONTACT_SCREEN_TITLE && <View style={[styles.myAppsTextContainer, {marginRight:normalizeMarginSize(10)}]}><DefaultText style={{...sectionHeaderStyle, color:colors.gray}}>{'My\nApps:'}</DefaultText></View>}
                            </View>
                        );
                    })}
                    <View style={[styles.darkModeButtonContainer, { minWidth: normalizeWidth(TAB_BAR_HEIGHT / 1.5 + 40) }]} >
                        <TouchableOpacity onPress={() => { setIsAboutSiteModalActive(true) }} >
                            <Entypo name="info" size={normalizeIconSize(TAB_BAR_HEIGHT / 2)} style={[styles.darkModeIcon, { marginHorizontal: normalizeMarginSize(30) }]} color={colors.font} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setColors(colors.mode === LIGHT_MODE ? darkMode : lightMode)} >
                            {colors.mode === LIGHT_MODE ?
                                <Entypo name="moon" size={normalizeIconSize(TAB_BAR_HEIGHT / 1.5)} style={[styles.darkModeIcon, { marginRight: normalizeMarginSize(30) }]} color={colors.font} />
                                :
                                <MaterialIcons name="wb-sunny" size={normalizeIconSize(TAB_BAR_HEIGHT / 1.5)} style={[styles.darkModeIcon, { marginRight: normalizeMarginSize(30) }]} color={colors.font} />
                            }
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
            {isAboutSiteModalActive && <View style={styles.modalContainer}><AboutSiteModal isActive={isAboutSiteModalActive} setActive={setIsAboutSiteModalActive} /></View>}
        </View >
    );
}

const styles = StyleSheet.create({
    mainBarContainer: {
        position: 'absolute',
        top: 0,
        width: '100%',

    },
    tabScrollView: {

    },
    tabBarScrollContainer: {


    },
    tabBarInnerContainer: {
        flex: 1,
        width: '100%',
        flexDirection: 'row',

    },
    tabContainer:{
        flexDirection:'row',
        alignItems:'center'
    },
    myAppsTextContainer:{
    
    },
    darkModeButtonContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    darkModeIcon: {

    },
    modalContainer: {
        position: 'absolute'
    }
})


export default MyTabBar
