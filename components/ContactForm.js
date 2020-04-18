import React, { useContext } from 'react'
import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity } from 'react-native'
import { ColorsContext } from '../helpers/ColorsContext'
import DefaultText from './DefaultText'
import { sectionHeaderStyle, standardTextLeft, standardBoldText } from '../constants/FontStyles'
import { normalizeMarginSize, normalizeHeight, normalizePaddingSize, normalizeFontSize, normalizeBorderRadiusSize } from '../helpers/normalize'

const ContactForm = (props) => {

    const { colors } = useContext(ColorsContext)

    const textInputSharedDynamicProperties ={
        backgroundColor: colors.third, 
        padding:normalizePaddingSize(10), 
        color:colors.font, 
        fontSize:normalizeFontSize(22), 
        borderRadius:normalizeBorderRadiusSize(15),
        height:normalizeHeight(75)
    }

    return (
        <View style={[styles.mainContainer, { backgroundColor: colors.first }]}>
            <View style={[styles.textInputSection]}>
                {/* <DefaultText style={sectionHeaderStyle}>Name:</DefaultText> */}
                <View style={[styles.textInputContainer]}>
                    <TextInput style={[styles.textInput, standardTextLeft,
                     {...textInputSharedDynamicProperties}]}
                    placeholder="Name" />
                </View>
            </View>
            <View style={[styles.textInputSection, {marginVertical:normalizeMarginSize(50)}]}>
                {/* <DefaultText style={sectionHeaderStyle}>Email Address</DefaultText> */}
                <View style={[styles.textInputContainer]}>
                    <TextInput style={[styles.textInput, standardTextLeft, 
                    {...textInputSharedDynamicProperties}]}
                    placeholder="Email Address" />
                </View>
            </View>
            <View style={[styles.textInputSection]}>
                {/* <DefaultText style={sectionHeaderStyle}>Message</DefaultText> */}
                <View style={[styles.textInputContainer]}>
                    <TextInput style={[styles.textInput, standardTextLeft, 
                    {...textInputSharedDynamicProperties,height:normalizeHeight(150)}]}
                    multiline={true} placeholder="Message" />
                </View>
            </View>
            <View style={[styles.buttonContainer, {marginTop:normalizeMarginSize(50)}]}>
                <View style={[styles.buttonOutline, {borderRadius:normalizeBorderRadiusSize(15)}]}>
                    <TouchableOpacity style={styles.buttonTouchable}>
                        <View style={[styles.buttonInside,{backgroundColor:colors.third, height:normalizeHeight(50)}]}>
                            <DefaultText style={standardBoldText}>Submit</DefaultText>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
    textInputSection: {

    },
    textInputContainer: {

    },
    textInput: {
        width: '50%',
        alignSelf: 'center',
        
    },
    buttonContainer:{
        alignItems:'center',
    },
    buttonOutline:{
        width:'25%',
        overflow:'hidden'
    },
    buttonTouchable:{

    },
    buttonInside:{
        justifyContent:'center'
    }
})


export default ContactForm
