import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import PortfolioNavigator from "./navigation/PortfolioNavigator"
import * as Font from 'expo-font';
import { SplashScreen } from 'expo';

export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);

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
          'verdana':require('./assets/Fonts/Verdana.ttf')
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
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
      <View style={styles.container}>
        <NavigationContainer>
          <PortfolioNavigator />
        </NavigationContainer>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
