import React from 'react'
import { View } from 'react-native'
import { headerMainStyle, standardText } from '../../FontStyles'
import DefaultText from '../../../components/DefaultText'

// This component is placed at the top of Presentation Component.
// It should return View with DefaultText components inside it.
// If there is need for more components like this, they can be added inside Presentation component.

const AboutMe = () => {
    return (
        <View>
            <DefaultText style={headerMainStyle}>About Me</DefaultText>
            <DefaultText style={standardText}>
                I'm a passionate self-taught developer, who seeks for more knowledge everyday.
            </DefaultText>
            <DefaultText style={standardText}>
                For the past 4 years, I have been working with code almost every day.
                I like to learn new stuff, especially if then I can put what I learned into use.
                I enjoy creating apps. The whole process from idea on paper to a functional product is something I will never get bored of.
                If I had to choose one thing, why I like coding, it would be confronting different ideas and solutions people have regarding the same problem.
            </DefaultText>
        </View>
    )
}

export default AboutMe
