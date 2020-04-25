import ModalWeb from 'modal-react-native-web';
import React, { useContext } from 'react';
import { Dimensions, Modal, Platform, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { headerMainStyle, standardText } from '../constants/FontStyles';
import { linkToExpo, linkToWebsite } from '../constants/PersonalData/AppData';
import { ColorsContext } from '../helpers/ColorsContext';
import { normalizeBorderRadiusSize, normalizeHeight, normalizePaddingSize } from '../helpers/normalize';
import { openLink } from '../helpers/OpenLink';
import DefaultText from './DefaultText';
const AboutSiteModal = ({ isActive, setActive }) => {

    const getModalContent = () => {

        const { colors } = useContext(ColorsContext)

        const verticalView = Dimensions.get('window').height / Dimensions.get('window').width > 1;

        return <View style={[styles.mainModalContainer,]}>
            <TouchableOpacity style={styles.modalDismissTouchable} onPress={() => setActive(false)} activeOpacity={1}>
                <View style={[styles.modalUseableContainer,
                {
                    height: verticalView ? normalizeHeight(300) : normalizeHeight(200), width: verticalView ? '80%' : '60%',
                    backgroundColor: colors.first, borderRadius: normalizeBorderRadiusSize(30)
                }]}>
                    <TouchableOpacity style={{ flex: 1 }} activeOpacity={1}>
                        <ScrollView>
                            <View style={[styles.textContainer, { padding: normalizePaddingSize(20) }]}>
                                <DefaultText style={headerMainStyle}>About this {Platform.OS === 'web' ? "Site" : "App"}</DefaultText>
                                <DefaultText style={standardText}>It is written in React Native, with help of react-native-web and expo-web.</DefaultText>
                                <DefaultText style={standardText}>You can find detailed description about this project on Github by clicking <DefaultText style={{ color: colors.linkBlue }} onPress={() => { openLink("https://github.com/DominikHinc/Portfolio") }}>here</DefaultText></DefaultText>
                                {Platform.OS === 'web' ?
                                    <View>
                                        <DefaultText style={standardText}>You can also open this site as an application using Expo by clicking <DefaultText style={{ color: colors.linkBlue }} onPress={() => openLink(linkToExpo)}>here</DefaultText></DefaultText>
                                    </View>
                                    :
                                    <View>
                                        <DefaultText style={standardText}>This app is also available in form of website, you can get access to it by clicking <DefaultText style={{ color: colors.linkBlue }} onPress={() => openLink(linkToWebsite)}>here</DefaultText></DefaultText>
                                    </View>
                                }
                            </View>


                        </ScrollView>
                    </TouchableOpacity>
                </View>
            </TouchableOpacity>

        </View >
    }

    if (Platform.OS === 'web') {
        return <ModalWeb contentContainerStyle={styles.modal}
            visible={isActive}
            onDismiss={() => setActive(false)}
            transparent={true} >
            {getModalContent()}
        </ModalWeb>
    }
    return (
        <Modal contentContainerStyle={styles.modal}
            visible={isActive}
            onDismiss={() => setActive(false)}
            transparent={true} >
            {getModalContent()}
        </Modal>
    )
}

const styles = StyleSheet.create({
    modal: {

    },
    mainModalContainer: {

        flex: 1,
        backgroundColor: "rgba(0,0,0,0.2)",

    },
    modalDismissTouchable: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalUseableContainer: {

    }
})

export default AboutSiteModal


