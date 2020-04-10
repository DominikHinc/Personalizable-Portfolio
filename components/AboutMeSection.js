import React, { useContext } from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import DefaultText from './DefaultText'
import { headerMainStyle, standardText, standardBoldText, sectionHeaderStyle, standardTextLeft } from '../constants/FontStyles'
import { ColorsContext } from '../helpers/ColorsContext'
import { normalizePaddingSize, normalizeMarginSize, normalizeFontSize } from '../helpers/normalize'
import { languages, technologies, smallerLibraries, softSkills, general, frameworks } from '../constants/MySkills'

const renderSkillsLabel = (label) => {
    return <DefaultText key={label} style={standardTextLeft}>- {label}</DefaultText>
}

const AboutMeSection = ({ }) => {

    const { colors } = useContext(ColorsContext)
    const verticalView = Dimensions.get('window').height / Dimensions.get('window').width > 1;

    return (
        <View style={[styles.sectionMainContainer, { backgroundColor: colors.second, paddingHorizontal: verticalView ? '5%' : '20%' }]}>
            <DefaultText style={headerMainStyle}>About Me</DefaultText>
            <DefaultText style={standardText}>
                I'm a passionate self taught developer, who seeks for more knowledge everyday.
            </DefaultText>
            <DefaultText style={standardText}>
                For the past 4 years, I have been working with code almost every day.
                I like to learn new stuff, especially if then I can put what I learned into use.
                I enjoy creating apps. The whole process from idea on paper to a functional product is something I will never get bored of.
                If I had to choose one thing, why I like coding, it would be confronting different ideas and solutions people have regarding the same problem.
            </DefaultText>

            <DefaultText style={{ ...headerMainStyle, marginTop: normalizeMarginSize(50) }}>My skills</DefaultText>
            <View style={[styles.mySkillsMainContainer, { flexDirection: verticalView ? 'column' : 'row' }]}>
                <View style={[styles.mySkillsColumn, { alignItems: verticalView ? 'center' : 'flex-start' }]}>
                    <DefaultText style={{ ...sectionHeaderStyle, marginTop: normalizeMarginSize(20) }}>Languages:</DefaultText>
                    {languages.map(item => renderSkillsLabel(item))}
                    <DefaultText style={{ ...sectionHeaderStyle, marginTop: normalizeMarginSize(20) }}>General Programming:</DefaultText>
                    {general.map(item => renderSkillsLabel(item))}
                </View>
                <View style={[styles.mySkillsColumn, { alignItems: verticalView ? 'center' : 'flex-start' }]}>
                    <DefaultText style={{ ...sectionHeaderStyle, marginTop: normalizeMarginSize(20) }}>Frameworks:</DefaultText>
                    {frameworks.map(item=>renderSkillsLabel(item))}
                    <DefaultText style={{ ...sectionHeaderStyle, marginTop: normalizeMarginSize(20) }}>Smaller libraries:</DefaultText>
                    {smallerLibraries.map(item => renderSkillsLabel(item))}
                </View>
                <View style={[styles.mySkillsColumn, { alignItems: verticalView ? 'center' : 'flex-start' }]}>
                    <DefaultText style={{ ...sectionHeaderStyle, marginTop: normalizeMarginSize(20) }}>Technologies:</DefaultText>
                    {technologies.map(item => renderSkillsLabel(item))}
                    <DefaultText style={{ ...sectionHeaderStyle, marginTop: normalizeMarginSize(20) }}>Soft skills:</DefaultText>
                    {softSkills.map(item => renderSkillsLabel(item))}
                </View>
            </View>

            <DefaultText style={{ ...headerMainStyle, marginTop: normalizeMarginSize(50) }}>My coding history</DefaultText>
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
    sectionMainContainer: {
        paddingVertical: normalizePaddingSize(20),


    },
    textLabel: {
        marginVertical: normalizeMarginSize(10)
    },
    mySkillsMainContainer: {

        // marginTop: normalizeMarginSize(20),
    },
    mySkillsColumn: {
        flex: 1 / 3,

    },
})


export default AboutMeSection
