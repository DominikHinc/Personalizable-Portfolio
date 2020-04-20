import React, { useContext } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { contactData } from '../constants/PersonalData/ContactData'
import DefaultText from './DefaultText'
import { ColorsContext } from '../helpers/ColorsContext'
import { standardBoldText, standardTextLeft, standardLargeLeft } from '../constants/FontStyles'
import { normalizeMarginSize } from '../helpers/normalize'
import { LIGHT_MODE } from '../constants/Colors'
import { openLink } from '../helpers/OpenLink'


const renderContactInfo = (colors) => {
    return contactData.map(item => {
        
        let icon  = {...item.icon, props:{...item.icon.props, color:item.icon.props.color === undefined ? colors.font : item.icon.props.color }}
     
        return <View key={item.link} style={[styles.contactContainer, {marginVertical:normalizeMarginSize(20)}]}>
            {icon}
            <View style={[styles.linkContainer, {marginLeft:normalizeMarginSize(10)}]}>
                <TouchableOpacity onPress={()=>{openLink(item.link)}}>
                    <View>
                        <DefaultText style={{...standardLargeLeft, color:colors.linkBlue}}>{item.title}</DefaultText>
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
