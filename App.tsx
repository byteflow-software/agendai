import React = require('react');
import { useEffect, useCallback, useState } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import { useFonts, loadAsync } from "expo-font";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { persistor, store } from "./src/store";
import Screens from "./src/navigation/Screens";
import Toast, {
  BaseToast,
  ErrorToast,
  SuccessToast,
} from "react-native-toast-message";

SplashScreen.preventAutoHideAsync();

const toastConfig = {
  success: (props: any) => (
    <SuccessToast
      {...props}
      style={{
        width: "90%",
        marginHorizontal: 20,
        backgroundColor: "#fbfbfb",
        borderColor: "green",
      }}
      text1Style={{
        fontSize: 17,
        color: "green",
      }}
      text2Style={{
        fontSize: 15,
        color: "green",
      }}
    />
  ),
  error: (props: any) => (
    <ErrorToast
      {...props}
      style={{
        width: "90%",
        marginHorizontal: 20,
        backgroundColor: "#fbfbfb",
        borderColor: "red",
      }}
      text1Style={{
        fontSize: 17,
        color: "red",
      }}
      text2Style={{
        fontSize: 15,
        color: "#333",
      }}
    />
  ),
};

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      await loadFont();
      prepare();
    };

    async function loadFont() {
      await Font.loadAsync({
        "Outfit-Black": require("./src/assets/fonts/Outfit-Black.ttf"),
        "Outfit-Bold": require("./src/assets/fonts/Outfit-Bold.ttf"),
        "Outfit-ExtraBold": require("./src/assets/fonts/Outfit-ExtraBold.ttf"),
        "Outfit-ExtraLight": require("./src/assets/fonts/Outfit-ExtraLight.ttf"),
        "Outfit-Light": require("./src/assets/fonts/Outfit-Light.ttf"),
        "Outfit-Medium": require("./src/assets/fonts/Outfit-Medium.ttf"),
        "Outfit-Regular": require("./src/assets/fonts/Outfit-Regular.ttf"),
        "Outfit-SemiBold": require("./src/assets/fonts/Outfit-SemiBold.ttf"),
        "Outfit-Thin": require("./src/assets/fonts/Outfit-Thin.ttf"),
      });
    }

    async function prepare() {
      setAppIsReady(true);
    }

    fetchData();
  }, [appIsReady]);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      setTimeout(async () => {
        await SplashScreen.hideAsync();
      }, 1000);
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <SafeAreaProvider onLayout={onLayoutRootView}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <NavigationContainer>
            <Screens />
            <Toast config={toastConfig} />
          </NavigationContainer>
        </PersistGate>
      </Provider>
    </SafeAreaProvider>
  );
}
