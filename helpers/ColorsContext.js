import React from 'react';
import { lightMode } from '../constants/Colors';

export const ColorsContext = React.createContext({
    colors: lightMode,
    setColors: () => { }
})
