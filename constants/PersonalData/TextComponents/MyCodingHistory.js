import React from 'react'
import { View, StyleSheet } from 'react-native'
import DefaultText from '../../../components/DefaultText'
import { headerMainStyle, standardBoldText, standardText } from '../../FontStyles'
import { normalizeMarginSize } from '../../../helpers/normalize'


const MyCodingHistory = () => {
    return (
        <View>
            <DefaultText style={{ ...headerMainStyle, marginTop: normalizeMarginSize(35) }}>My coding history</DefaultText>
            <DefaultText style={{ ...standardText, ...styles.textLabel }}>
                Over the years I have worked with many different technologies.
            </DefaultText>
            <DefaultText style={{ ...standardText, ...styles.textLabel }}>
                My first language was <DefaultText style={standardBoldText}>C++</DefaultText>. Using it, I learned the basics of programming
                and how to think like a programmer.
            </DefaultText>
            <DefaultText style={{ ...standardText, ...styles.textLabel }}>
                I was part of local coding group, that was primarily about algorithms. We discussed about them a lot, and we were constantly learning from each other.
            </DefaultText>
            <DefaultText style={{ ...standardText, ...styles.textLabel }}>
                After experiencing first hand how much joy can coding bring, I started learning <DefaultText style={standardBoldText}>Java</DefaultText>.
            </DefaultText>
            <DefaultText style={{ ...standardText, ...styles.textLabel }}>
                Although similar in some way to <DefaultText style={standardBoldText}>C++</DefaultText> I liked <DefaultText style={standardBoldText}>Java's</DefaultText> syntax much more. There were a lot of new possibilities that came with new language.
                The thing that I was most interested in was creating non-console applications.
                Writing algorithm visualisations and simple games showed me that there is much more to be discovered than just white text in black console window.
                Since then I created many desktop and mobile applications
                (two of which - <DefaultText style={standardBoldText}>WordFishing</DefaultText> and <DefaultText style={standardBoldText}>BounceBack</DefaultText> - are available on Google Play Store)
                in <DefaultText style={standardBoldText}>Java</DefaultText>.

            </DefaultText>
            <DefaultText style={{ ...standardText, ...styles.textLabel }}>
                My latest discovery that absorbed me completely is <DefaultText style={standardBoldText}>JavaScript</DefaultText>.
                Because <DefaultText style={standardBoldText}>JavaScript</DefaultText> is so different from two languages mentioned earlier, the process of learning it was very refreshing and enjoyable.
                As I got to know it better I have decided that I want to use my previous experience and continue working with mobile platforms, but now using <DefaultText style={standardBoldText}>JavaScript</DefaultText>.


            </DefaultText>
            <DefaultText style={{ ...standardText, ...styles.textLabel }}>
                Thus, I started learning <DefaultText style={standardBoldText}>React</DefaultText>, to in the end learn <DefaultText style={standardBoldText}>React Native</DefaultText>.
            </DefaultText>
            <DefaultText style={{ ...standardText, ...styles.textLabel }}>
                After time I spent writing in it I can easily say it's my favourite way of coding I have ever tried.
                I have created many projects using <DefaultText style={standardBoldText}>React Native</DefaultText>
                (two of which - <DefaultText style={standardBoldText}>GrocerEats</DefaultText> and <DefaultText style={standardBoldText}>Health Advisor</DefaultText> - are available on Google Play Store).

            </DefaultText>
            <DefaultText style={{ ...standardText, ...styles.textLabel }}>
                Because I like experimenting with new stuff and like constantly learning new things this site in not, as one might expect,
                written in <DefaultText style={standardBoldText}>React</DefaultText>, but it uses <DefaultText style={standardBoldText}>react-native-web</DefaultText>.
            </DefaultText>
        </View>
    )
}
const styles = StyleSheet.create({
    textLabel: {
        marginVertical: normalizeMarginSize(10)
    },

})

export default MyCodingHistory
