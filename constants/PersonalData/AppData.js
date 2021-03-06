import { Platform } from "react-native"
// This file describes the properties of things related to the application itself.
// linkToExpo and linkToWebsite are links that appear in modal that can be opened by clicking "i" icon.


export const linkToExpo = "https://expo.io/@osobanr7/portfolio-dominik-hinc"
export const linkToWebsite = "https://dominikhinc.pl/"
export const footerText = `${Platform.OS === 'web' ? "Site" : "App"} created by Dominik Hinc`
export const alwaysDisplayHomeAndContactLabel = true;