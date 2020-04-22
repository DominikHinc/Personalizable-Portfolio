import { Ionicons } from '@expo/vector-icons'
import React, { useContext, useEffect, useState } from 'react'
import { Animated, Dimensions, Easing, StyleSheet } from 'react-native'
import { ColorsContext } from '../helpers/ColorsContext'
import { normalizeIconSize } from '../helpers/normalize'

const BouncingCallToActionIcon = ({ currentContentOffset, iconColor }) => {

    const { colors } = useContext(ColorsContext)

    const callToActionAnimatedValue = new Animated.Value(0)

    const [shouldCallToActionAnimationReset, setShouldCallToActionAnimationReset] = useState(false)

    useEffect(() => {
        startCallToActionAnimation()
    }, [])

    useEffect(() => {
        // Every time dimensions change startCallToActionAnimation must be called
        const dimensionsChangeListener = Dimensions.addEventListener('change', () => { setShouldCallToActionAnimationReset(prev => !prev) })

        return () => {
            Dimensions.removeEventListener('change', dimensionsChangeListener)
        }
    }, [])

    useEffect(() => {
        // Every time colors change startCallToActionAnimation must be called
        startCallToActionAnimation()
    }, [colors])

    useEffect(() => {
        startCallToActionAnimation()
    }, [shouldCallToActionAnimationReset])

    const startCallToActionAnimation = () => {
        // This function needs to be called every time component rerenders, because rerendering stops the animation.
        Animated.loop(Animated.spring(callToActionAnimatedValue, {
            toValue: callToActionAnimatedValue._value === 0 ? 1 : 0,
            damping: 20,
            velocity: -10,
        }), { iterations: -1 }).start()
    }

    const callToActionIconMargin = currentContentOffset.interpolate({
        inputRange: [0, Dimensions.get('window').height / 5],
        outputRange: [0, -200],
        extrapolate: 'clamp',
        easing: Easing.ease,
    })
    const callToActionIconAnimationState = {
        transform: [{
            translateY: callToActionAnimatedValue.interpolate({
                inputRange: [0, 0.5, 1],
                outputRange: [0, -20, 0]
            }),

        }, {
            scale: callToActionAnimatedValue.interpolate({
                inputRange: [0, 0.5, 1],
                outputRange: [1, 0.9, 1]
            }),
        },
        {
            rotate: callToActionAnimatedValue.interpolate({
                inputRange: [0, 1],
                outputRange: ['0deg', '360deg']
            }),
        }
        ]
    }


    return (

        <Animated.View style={[styles.callToActionIconContainer, callToActionIconAnimationState, { marginBottom: callToActionIconMargin }]}>
            <Ionicons name="ios-arrow-dropdown" size={normalizeIconSize(50)} color={iconColor !== undefined ? iconColor : 'black'} />
        </Animated.View>

    )
}

const styles = StyleSheet.create({
    mainContainer: {

    },
    callToActionIconContainer: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        alignItems: 'center',

    },
})


export default BouncingCallToActionIcon
