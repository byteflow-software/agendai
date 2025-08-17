import React, { useEffect, useState } from "react";

import { createStackNavigator } from "@react-navigation/stack";
import {
  Home,
  Login,
  Register,
  SchedulingClinics,
  Scheduling,
  SchedulingDoctors,
  DoctorDetail,
  SchedulingDetail,
} from "../pages";
import MenuGroup from "../components/Menu/MenuGroup";
import {
  CommonActions,
  useFocusEffect,
  useNavigationState,
  useRoute,
} from "@react-navigation/native";
import Header from "../components/Header/Header";

export type RootStackParamList = {
  Login: { screen?: keyof RootStackParamList } | undefined;
  Register: { screen?: keyof RootStackParamList } | undefined;
  App: { screen?: keyof RootStackParamList } | undefined;
  Home: { screen?: keyof RootStackParamList } | undefined;
  Scheduling: { screen?: keyof RootStackParamList } | undefined;
  SchedulingDoctors: { screen?: keyof RootStackParamList } | undefined;
  SchedulingClinics: { screen?: keyof RootStackParamList } | undefined;
  DoctorDetail: { screen?: keyof RootStackParamList } | undefined;
  SchedulingDetail: { screen?: keyof RootStackParamList } | undefined;
  Profile: { name: string };
};

const Stack = createStackNavigator<RootStackParamList>();

export function App({ navigation, route }: any) {
  return (
    <>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyleInterpolator: ({ current, next, layouts }) => {
            return {
              cardStyle: {
                transform: [
                  {
                    translateX: current.progress.interpolate({
                      inputRange: [0, 1],
                      outputRange: [layouts.screen.width, 0],
                    }),
                  },
                ],
              },
            };
          },
        }}
        initialRouteName="Home"
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Scheduling" component={Scheduling} />
        <Stack.Screen name="SchedulingDoctors" component={SchedulingDoctors} />
        <Stack.Screen name="SchedulingClinics" component={SchedulingClinics} />
        <Stack.Screen name="DoctorDetail" component={DoctorDetail} />
        <Stack.Screen name="SchedulingDetail" component={SchedulingDetail} />
      </Stack.Navigator>
      <MenuGroup navigation={navigation} />
    </>
  );
}

export default function Screens() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: ({ current, next, layouts }) => {
          return {
            cardStyle: {
              transform: [
                {
                  translateX: current.progress.interpolate({
                    inputRange: [0, 1],
                    outputRange: [layouts.screen.width, 0],
                  }),
                },
              ],
            },
          };
        },
      }}
      initialRouteName="Login"
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="App" component={App} />
    </Stack.Navigator>
  );
}