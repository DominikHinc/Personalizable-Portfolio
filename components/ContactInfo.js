import React, { useContext } from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { standardLargeLeft } from '../constants/FontStyles'
import { contactData } from '../constants/PersonalData/ContactData'
import { ColorsContext } from '../helpers/ColorsContext'
import { normalizeMarginSize } from '../helpers/normalize'
import { normalizeStaticIcon } from '../helpers/normalizeStaticIcon'
import { openLink } from '../helpers/OpenLink'
import DefaultText from './DefaultText'


// Component placed at the right side of the ContactScreen
// It utilizes data from ContactData.js file

const renderContactInfo = (colors) => {
    return contactData.map(item => {
        
        let icon  = normalizeStaticIcon(item.icon, colors)
     
        return <View key={item.link} style={[styles.contactContainer, {marginVertical:normalizeMarginSize(20)}]}>
            {icon}
            <View style={[styles.linkContainer, {marginLeft:normalizeMarginSize(10)}]}>
                <TouchableOpacity onPress={()=>{item.link === undefined ? null : openLink(item.link)}} disabled={item.link === undefined}>
                    <View>
                        <DefaultText style={{...standardLargeLeft, color:item.link === undefined ? colors.font : colors.linkBlue}}>{item.title}</DefaultText>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    })
}

const ContactInfo = () => {
    const {colors} = useContext(ColorsContext)
    return (
        <View style={[styles.mainContainer]}>
            {renderContactInfo(colors)}
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {

    },
    contactContainer:{
        flexDirection:'row',
        alignItems:'center'
    }
})


export default ContactInfo
