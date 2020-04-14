import { Entypo, MaterialIcons } from '@expo/vector-icons';
import React, { useContext } from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, View, Platform } from 'react-native';
import { darkMode, lightMode } from '../constants/Colors';
import { TAB_BAR_HEIGHT } from '../constants/TABBAR';
import { ColorsContext } from '../helpers/ColorsContext';
import { normalizeMarginSize, normalizePaddingSize } from '../helpers/normalize';
import MyTabBarTab from './MyTabBarTab';
import { useSafeArea } from 'react-native-safe-area-context'
import { projectsOverview } from '../constants/PersonalData/ProjectsOverview';

const MyTabBar = ({ state, descriptors, navigation, position }) => {
    const { colors, setColors } = useContext(ColorsContext)
    const insets = useSafeArea();
    return (
        <View style={[styles.mainBarContainer,{backgroundColor:'transparent', marginTop:insets.top}]}>
            <ScrollView style={styles.tabScrollView} contentContainerStyle={[styles.tabBarScrollContainer]} horizontal={true} >
                <View style={[styles.tabBarInnerContainer ]}>
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
                                navigation.navigate(route.name,{projectDetails:projectsOverview.find(item=>item.title===route.name) !== undefined ? projectsOverview.find(item=>item.title===route.name).projectDetails  : null});
                            }
                        };

                        return (

                            <MyTabBarTab key={label} label={label} isFocused={isFocused} onPress={onPress} options={options} />

                        );
                    })}
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', minWidth: TAB_BAR_HEIGHT / 1.5 + normalizeMarginSize(20) * 2 }}>
                        <TouchableOpacity onPress={() => setColors(colors.background === "#ffffff" ? darkMode : lightMode)} >
                            {colors.background === "#ffffff" ?
                                <Entypo name="moon" size={TAB_BAR_HEIGHT / 1.5} style={styles.darkModeIcon} color={colors.font} />
                                :
                                <MaterialIcons name="wb-sunny" size={TAB_BAR_HEIGHT / 1.5} style={styles.darkModeIcon} color={colors.font} />
                            }


                        </TouchableOpacity>

                    </View>

                </View>

            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    mainBarContainer: {
        position: 'absolute',
        top: 0,
        
        width: '100%',
        height: TAB_BAR_HEIGHT ,
        

    },
    tabScrollView: {
       
    },
    tabBarScrollContainer: {
        width:Platform.OS === 'web' ? '100%' : null
       
    },
    tabBarInnerContainer: {
        flex: 1,
        width: '100%',
        flexDirection: 'row',
        // justifyContent: 'space-evenly',

    },
    darkModeButtonContainer: {

    },
    darkModeIcon: {
        marginHorizontal: normalizeMarginSize(30)
    }
})


export default MyTabBar
