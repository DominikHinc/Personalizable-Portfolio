import { Dimensions, Platform, PixelRatio } from "react-native";



export const normalizeFontSize = (size) => {
    return size;
    // const verticalView = Dimensions.get('window').height / Dimensions.get('window').width > 1;
    // if (!verticalView) {
    //     const BASE_WIDTH = 1920;
    //     const SCREEN_WIDTH = Dimensions.get('window').width

    //     const scale = SCREEN_WIDTH / BASE_WIDTH;

    //     const newSize = size * scale
    //     return Math.round(PixelRatio.roundToNearestPixel(newSize))
    // } else {
    //     const BASE_PHONE_WIDTH = 393;
    //     const SCREEN_WIDTH = Dimensions.get('window').width

    //     const scale = SCREEN_WIDTH / BASE_PHONE_WIDTH;
    //     const newSize = size * scale
    //     if (Platform.OS === 'android') {
    //         return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
    //     } else {
    //         return Math.round(PixelRatio.roundToNearestPixel(newSize))
    //     }
    // }

    // const newSize = size * scale
    // if(Platform.OS ==='android'){
    //     return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
    // }else{
    //     return Math.round(PixelRatio.roundToNearestPixel(newSize))
    // }
}

//Seperating them just in case i will want to change it in some way just for specyifc component types

export const normalizeIconSize = (size) => {
    return normalizeFontSize(size);
}

export const normalizePaddingSize = (size) => {
    return normalizeFontSize(size);
}

export const normalizeMarginSize = (size) => {
    return normalizeFontSize(size);
}

export const normalizeBorderRadiusSize = (size) => {
    return normalizeFontSize(size);
}
export const normalizeWidth = (size) => {
    return normalizeFontSize(size);
}
export const normalizeHeight = (size) => {
    return normalizeFontSize(size);
}
