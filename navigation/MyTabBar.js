import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { TAB_BAR_HEIGHT } from '../constants/TABBAR';
import MyTabBarTab from './MyTabBarTab';
import Colors from '../constants/Colors';
import { normalizePaddingSize } from '../helpers/normalize';

const MyTabBar = ({ state, descriptors, navigation, position }) => {
    return (
        <View style={styles.mainBarContainer}>
            <ScrollView style={styles.tabBarScrollContainer} horizontal={true} >
                <View style={styles.tabBarInnerContainer}>
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

                        const onLongPress = () => {
                            navigation.emit({
                                type: 'tabLongPress',
                                target: route.key,
                            });
                        };

                        return (

                            <MyTabBarTab label={label} isFocused={isFocused} onLongPress={onLongPress} onPress={onPress} options={options} />

                        );
                    })}
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    mainBarContainer: {
        position: 'absolute',
        top: 0,
        // backgroundColor: Colors.primary,
        width: '100%',
        height: TAB_BAR_HEIGHT + normalizePaddingSize(25) ,
        paddingBottom:normalizePaddingSize(25)

    },
    tabBarScrollContainer: {
        
    },
    tabBarInnerContainer: {
        flex: 1,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',

    },

})


export default MyTabBar
