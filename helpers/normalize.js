import { Dimensions, Platform, PixelRatio } from "react-native";
import { EXPERIMENTAL_NORMALIZATION } from "../constants/Config";





export const normalizeFontSize = (size) => {
    if (!EXPERIMENTAL_NORMALIZATION) {
        return size;
    } else {
        const verticalView = Dimensions.get('window').height / Dimensions.get('window').width > 1;
        if (!verticalView) {
            const BASE_WIDTH = 1920;
            const SCREEN_WIDTH = Dimensions.get('window').width

            const scale = SCREEN_WIDTH / BASE_WIDTH;

            const newSize = size * scale
            return Math.round(PixelRatio.roundToNearestPixel(newSize))
        } else {
            const BASE_PHONE_WIDTH = Platform.OS === 'web' ? 640 :  393;
            const SCREEN_WIDTH = Dimensions.get('window').width

            const scale = SCREEN_WIDTH / BASE_PHONE_WIDTH;
            const newSize = size * scale
            if (Platform.OS === 'android') {
                return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
            } else {
                return Math.round(PixelRatio.roundToNearestPixel(newSize))
            }
        }

    }


}

// Separating them just in case there is need to change logic for specific type.

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
