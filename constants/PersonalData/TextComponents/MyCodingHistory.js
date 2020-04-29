import React, { useContext } from 'react'
import { StyleSheet, View } from 'react-native'
import DefaultText from '../../../components/DefaultText'
import { ColorsContext } from '../../../helpers/ColorsContext'
import { normalizeMarginSize } from '../../../helpers/normalize'
import { openLink } from '../../../helpers/OpenLink'
import { headerMainStyle, standardBoldText, standardText } from '../../FontStyles'


// This component is placed at the bottom of Presentation Component.
// It should return View with DefaultText components inside it.
// If there is need for more components like this, they can be added inside Presentation component.


const MyCodingHistory = () => {
    const {colors} = useContext(ColorsContext)
    return (
        <View >
            <DefaultText style={{ ...headerMainStyle, marginTop: normalizeMarginSize(35) }}>My coding history</DefaultText>
            <DefaultText style={{ ...standardText, ...styles.textLabel }}>
                Over the years I have worked with many different technologies.
            </DefaultText>
            <DefaultText style={{ ...standardText, ...styles.textLabel }}>
                My first language was <DefaultText style={standardBoldText}>C++</DefaultText>. Using it, I learned the basics of programming
                and how to think like a programmer.
            </DefaultText>
            <DefaultText style={{ ...standardText, ...styles.textLabel }}>
                I was part of a local coding group, that was primarily about algorithms. We discussed about them a lot
                , and we were constantly learning from each other.
            </DefaultText>
            <DefaultText style={{ ...standardText, ...styles.textLabel }}>
                After experiencing first hand how much joy can coding bring, I started learning <DefaultText style={standardBoldText}>Java</DefaultText>.
            </DefaultText>
            <DefaultText style={{ ...standardText, ...styles.textLabel }}>
                Although similar in some way to <DefaultText style={standardBoldText}>C++</DefaultText> I liked <DefaultText style={standardBoldText}>Java's</DefaultText> syntax much more. There were a lot of new possibilities that came with new language.
                The thing that I was most interested in was creating non-console applications.
                Writing algorithm visualisations and simple games showed me that there is much more to be discovered than just white text in black console window.
                Since then I created many desktop and mobile applications
                (two of which - <DefaultText style={{...standardBoldText, color:colors.linkBlue}} onPress={()=>{openLink("https://play.google.com/store/apps/details?id=pl.dominikhinc.wordfishing")}}>WordFishing
                </DefaultText> and <DefaultText style={{...standardBoldText, color:colors.linkBlue}} onPress={()=>{openLink("https://play.google.com/store/apps/details?id=pl.dominik.hinc.bounceback")}}>BounceBack</DefaultText> - are available on Google Play Store)
                in <DefaultText style={standardBoldText}>Java</DefaultText>.
            </DefaultText>
            <DefaultText style={{ ...standardText, ...styles.textLabel }}>
                When I was learning <DefaultText style={standardBoldText}>Java</DefaultText>, I started taking a real interest in <DefaultText style={standardBoldText}>Design Patterns</DefaultText> 
                . I think it is very interesting, that at some level, most of the programming languages are similar and all of them have to face alike problems.
            </DefaultText>
            <DefaultText style={{ ...standardText, ...styles.textLabel }}>
                My latest discovery that absorbed me completely is <DefaultText style={standardBoldText}>JavaScript</DefaultText>.
                Because <DefaultText style={standardBoldText}>JavaScript</DefaultText> is so different from two languages mentioned earlier, the process of learning it was very refreshing and enjoyable.
                As I got to know it better, I have decided that I want to use my previous experience and continue working with mobile platforms, but now using <DefaultText style={standardBoldText}>JavaScript</DefaultText>.
            </DefaultText>
            <DefaultText style={{ ...standardText, ...styles.textLabel }}>
                Thus, I started learning <DefaultText style={standardBoldText}>React</DefaultText>, to in the end learn <DefaultText style={standardBoldText}>React Native</DefaultText>.
            </DefaultText>
            <DefaultText style={{ ...standardText, ...styles.textLabel }}>
                After time I spent writing in it I can easily say it's my favorite way of coding I have ever tried.
                I have created many projects using <DefaultText style={standardBoldText}>React Native </DefaultText> 
                (two of which - 
                <DefaultText style={{...standardBoldText, color:colors.linkBlue}} onPress={()=>{openLink("https://play.google.com/store/apps/details?id=pl.dominik.hinc.grocereats")}}> GrocerEats
                </DefaultText> and <DefaultText style={{...standardBoldText, color:colors.linkBlue}} onPress={()=>{openLink("https://play.google.com/store/apps/details?id=pl.dominik.hinc.heath_advisor")}}>Health Advisor</DefaultText> - are available on Google Play Store).
            </DefaultText>
            <DefaultText style={{ ...standardText, ...styles.textLabel }}>Around the time I learned how to code in React Native I had opportunity to work with people that are working in the software industry. 
            Although the project we were creating had to be abandoned, I was able to gain experience on how to work with programs like <DefaultText style={standardBoldText}>Jira</DefaultText>
             , <DefaultText style={standardBoldText}>Zeplin</DefaultText> and <DefaultText style={standardBoldText}>Slack</DefaultText>.</DefaultText>
            <DefaultText style={{ ...standardText, ...styles.textLabel }}>
                Because I like experimenting with new stuff and like constantly learning new things this site in not, as one might expect,
                written in <DefaultText style={standardBoldText}>React</DefaultText>, but instead it uses <DefaultText style={standardBoldText}>react-native-web</DefaultText>.
            </DefaultText>
        </View>
    )
}
const styles = StyleSheet.create({
    textLabel: {
        
    },

})

export default MyCodingHistory
