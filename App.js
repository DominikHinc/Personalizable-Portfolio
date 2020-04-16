import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import PortfolioNavigator from "./navigation/PortfolioNavigator"
import * as Font from 'expo-font';
import { SplashScreen } from 'expo';
import { lightMode, darkMode } from './constants/Colors';
import { ColorsContext } from './helpers/ColorsContext';
import { SafeAreaProvider } from 'react-native-safe-area-context';


//This option will turn on normalization, that will scale whole application. Config for this is located in normalize.js file
export const EXPERIMENTAL_NORMALIZATION = true;


export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = useState(false);
  const [rerender, setRerender] = useState(false)
  const [colors, setColors] = useState(darkMode)
  const value = { colors, setColors }
  
  useEffect(() => {
    const dimenstionsChangeListener = Dimensions.addEventListener('change', () => { setRerender(prev => !prev) })

    return () => {
      Dimensions.removeEventListener('change', dimenstionsChangeListener)
    }
  }, [])

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHide();

        // Load fonts
        await Font.loadAsync({
          'berkshireswash': require('./assets/Fonts/berkshireswash.ttf'),
          'coiny': require('./assets/Fonts/coiny.ttf'),
          'gibson': require('./assets/Fonts/Gisbon.ttf'),
          'impact': require('./assets/Fonts/impact.ttf'),
          'sofia': require('./assets/Fonts/Sofia-Regular.ttf'),
          'sofia-med': require('./assets/Fonts/Sofia-Medium.ttf'),
          'sofia-bold': require('./assets/Fonts/Sofia-Bold.ttf'),
          'verdana': require('./assets/Fonts/Verdana.ttf')
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hide();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <View style={[styles.container]}>
          <ColorsContext.Provider value={value}>
            <NavigationContainer>
              <PortfolioNavigator />
            </NavigationContainer>
          </ColorsContext.Provider>
        </View>
      </SafeAreaProvider>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
