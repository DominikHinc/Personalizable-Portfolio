import { normalizeIconSize } from "./normalize"

// Creates dynamically scaled and colored Icon from provided static icon.

export const normalizeStaticIcon = (icon, colors) =>{
    return {...icon, props:{...icon.props, color:icon.props.color === undefined ? colors.font : icon.props.color, size:normalizeIconSize(icon.props.size) }}
}