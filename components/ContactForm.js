import React, { useContext, useState } from 'react'
import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity, Dimensions, ActivityIndicator } from 'react-native'
import { ColorsContext } from '../helpers/ColorsContext'
import DefaultText from './DefaultText'
import { sectionHeaderStyle, standardTextLeft, standardBoldText, headerMainStyle } from '../constants/FontStyles'
import { normalizeMarginSize, normalizeHeight, normalizePaddingSize, normalizeFontSize, normalizeBorderRadiusSize, normalizeWidth } from '../helpers/normalize'
import { sendEmail } from '../helpers/SendEmail'

const ContactForm = (props) => {

    const [nameTextInputValue, setNameTextInputValue] = useState("asdasdas")
    const [emailTextInputValue, setEmailTextInputValue] = useState("sadasda@adsf.as")
    const [messageTextInputValue, setMessageTextInputValue] = useState("asdas")

    const [messageSentSuccessfully, setMessageSentSuccessfully] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")

    const [nameValidated, setNameValidated] = useState(true)
    const [emailValidated, setEmailValidated] = useState(true)
    const [messageValidated, setMessageValidated] = useState(true)

    const [loading, setLoading] = useState(false)

    const { colors } = useContext(ColorsContext)

    const verticalView = Dimensions.get('window').height / Dimensions.get('window').width > 1;

    const textInputSharedDynamicProperties = {
        backgroundColor: colors.third,
        padding: normalizePaddingSize(10),
        color: colors.font,
        fontSize: normalizeFontSize(22),
        borderRadius: normalizeBorderRadiusSize(15),
        height: normalizeHeight(75),
        width: verticalView ? '80%' : '50%',
        borderColor: colors.red
    }


    const submitInputHandler = () => {
        const { nameValidation, emailValidation, messageValidation } = validateInputs()

        setMessageSentSuccessfully(false)
        setNameValidated(nameValidation)
        setEmailValidated(emailValidation)
        setMessageValidated(messageValidation)

        if (nameValidation && emailValidation && messageValidation) {
            setLoading(true)
            sendEmail(nameTextInputValue, emailTextInputValue, messageTextInputValue).then((result) => {
                setMessageSentSuccessfully(true)
                setNameTextInputValue("")
                setEmailTextInputValue("")
                setMessageTextInputValue('')
                setLoading(false)
            }).catch(err => {
                setErrorMessage(err.message)
                setLoading(false)
            })

        }
    }

    const validateInputs = () => {
        let nameValidation = true
        let emailValidation = true
        let messageValidation = true

        nameValidation = nameTextInputValue.length > 0 && !nameTextInputValue.includes("&")
        emailValidation = emailTextInputValue.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/)
        messageValidation = messageTextInputValue.length > 0 && !nameTextInputValue.includes("&")

        return { nameValidation, emailValidation, messageValidation }
    }


    return (
        <View style={[styles.mainContainer, { backgroundColor: colors.first }]}>

            {loading && <View style={[styles.titleContainer, { marginBottom: normalizeMarginSize(20) }]}>
                <ActivityIndicator size="large" color={colors.font} />
            </View>}

            {messageSentSuccessfully && <View style={[styles.titleContainer, { marginBottom: normalizeMarginSize(20) }]}>
                <DefaultText style={{ ...headerMainStyle, color: colors.green }}>Message sent successfully</DefaultText>
            </View>}

            {errorMessage !== "" && <View style={[styles.titleContainer, { marginBottom: normalizeMarginSize(20) }]}>
                <DefaultText style={{ ...headerMainStyle, color: colors.red }}>{errorMessage}</DefaultText>
            </View>}

            <View style={[styles.titleContainer, { marginBottom: normalizeMarginSize(20) }]}>
                <DefaultText style={headerMainStyle}>Let's talk</DefaultText>
            </View>
            <View style={[styles.textInputSection]}>

                <View style={[styles.textInputContainer]}>
                    <TextInput style={[styles.textInput, standardTextLeft, textInputSharedDynamicProperties,
                    { borderWidth: nameValidated ? 0 : 1 }]}
                        placeholder="Name" textContentType='name' value={nameTextInputValue} onChangeText={setNameTextInputValue} />
                </View>
            </View>
            <View style={[styles.textInputSection, { marginVertical: normalizeMarginSize(50) }]}>

                <View style={[styles.textInputContainer]}>
                    <TextInput style={[styles.textInput, standardTextLeft, textInputSharedDynamicProperties,
                    { borderWidth: emailValidated ? 0 : 1 }]}
                        placeholder="Email Address" keyboardType="email-address" textContentType='emailAddress' value={emailTextInputValue} onChangeText={setEmailTextInputValue} />
                </View>
            </View>
            <View style={[styles.textInputSection]}>

                <View style={[styles.textInputContainer]}>
                    <TextInput style={[styles.textInput, standardTextLeft, textInputSharedDynamicProperties,
                    { height: normalizeHeight(150), borderWidth: messageValidated ? 0 : 1 }]}
                        multiline={true} placeholder="Message" textAlignVertical='top' value={messageTextInputValue} onChangeText={setMessageTextInputValue} />
                </View>
            </View>
            <View style={[styles.buttonContainer, { marginTop: normalizeMarginSize(50) }]}>
                <View style={[styles.buttonOutline, { borderRadius: normalizeBorderRadiusSize(15), width: verticalView ? "40%" : '25%' }]}>
                    <TouchableOpacity style={styles.buttonTouchable} onPress={submitInputHandler}>
                        <View style={[styles.buttonInside, { backgroundColor: colors.third, height: normalizeHeight(50) }]}>
                            <DefaultText style={standardBoldText}>Send</DefaultText>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {

    },
    titleContainer: {

    },
    textInputSection: {

    },
    textInputContainer: {

    },
    textInput: {

        alignSelf: 'center',

    },
    buttonContainer: {
        alignItems: 'center',
    },
    buttonOutline: {

        overflow: 'hidden'
    },
    buttonTouchable: {

    },
    buttonInside: {
        justifyContent: 'center'
    }
})


export default ContactForm
