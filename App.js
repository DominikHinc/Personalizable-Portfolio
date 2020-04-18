import { NavigationContainer } from '@react-navigation/native';
import { SplashScreen } from 'expo';
import * as Font from 'expo-font';
import React, { useEffect, useState } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { darkMode } from './constants/Colors';
import { ColorsContext } from './helpers/ColorsContext';
import PortfolioNavigator from "./navigation/PortfolioNavigator";





export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = useState(false);
  const [rerender, setRerender] = useState(false)
  const [colors, setColors] = useState(darkMode)
  const value = { colors, setColors }
  
  useEffect(() => {
    const dimensionsChangeListener = Dimensions.addEventListener('change', () => { setRerender(prev => !prev) })

    return () => {
      Dimensions.removeEventListener('change', dimensionsChangeListener)
    }
  }, [])

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
