import { normalizeIconSize } from "./normalize"

export const normalizeStaticIcon = (icon, colors) =>{
    return {...icon, props:{...icon.props, color:icon.props.color === undefined ? colors.font : icon.props.color, size:normalizeIconSize(icon.props.size) }}
}