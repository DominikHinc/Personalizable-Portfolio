import React, { useContext } from 'react'
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native'
import Colors from '../constants/Colors'
import { ColorsContext } from '../helpers/ColorsContext'
import ContactForm from '../components/ContactForm'
import { useSafeArea } from 'react-native-safe-area-context'
import { normalizeMarginSize } from '../helpers/normalize'
import { TAB_BAR_HEIGHT } from '../constants/TAB_BAR'


const ContactScreen = (props) => {
    const { colors } = useContext(ColorsContext)

    const insets = useSafeArea();
    return (
        <View style={[styles.screen, { backgroundColor: colors.background }]}>
            <ScrollView style={[styles.scrollView, { marginTop: normalizeMarginSize(TAB_BAR_HEIGHT) + insets.top, backgroundColor:colors.first }]}>
                <View style={styles.contactContainer}>
                    <View style={{ width:'50%', height:Dimensions.get('window').height-normalizeMarginSize(TAB_BAR_HEIGHT) + insets.top, justifyContent:'center' }} >
                        <View>
                            <ContactForm />
                        </View>
                    </View>
                    <View style={{ width:'50%' }} />
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },

    scrollView: {
        width: '100%'
    },
    contactContainer: {
        flexDirection: 'row',
        
    }
})


export default ContactScreen
