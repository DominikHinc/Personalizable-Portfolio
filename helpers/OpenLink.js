import { Platform } from "react-native"
import { Linking } from "expo"

export const openLink = (link) =>{
    Platform.OS === 'web' ? window.open(link) : Linking.openURL(link)
}