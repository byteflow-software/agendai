import { View, StyleSheet, Platform } from "react-native";
import React from "react";
import MenuButton from "./MenuButton";
import IconCalendarMenu from "../Icons/IconCalendarMenu";
import IconHome from "../Icons/IconHome";
import IconMenu from "../Icons/IconMenu";
import { useAppSelector } from "@/src/store/hooks/useAppSelector";
import { useAppDispatch } from "@/src/store/hooks/useAppDispatch";
import { handleSetMenu } from "@/src/store/root/actions";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigationState } from "@react-navigation/native";
import Toast from 'react-native-toast-message';

type MenuGroupProps = {
  navigation: any;
};

export default function MenuGroup({ navigation }: MenuGroupProps) {
  const insets = useSafeAreaInsets();
  const dispatch = useAppDispatch();
  const rootStore = useAppSelector((store) => store.root);

  const currentRouteName = useNavigationState((state) => {
    const appRoute = state.routes.find((r) => r.name === "App");
    if (appRoute && appRoute.state) {
      const nestedState = appRoute.state as any;
      const index = nestedState.index;
      return nestedState.routes[index].name;
    }
    return state.routes[state.index].name;
  });

  if (
    currentRouteName === "DoctorDetail" ||
    currentRouteName === "SchedulingDetail" ||
    currentRouteName === "SchedulingDoctors"
  ) {
    return null;
  }

  const handleClick = (menuIndex: number, routeName: string) => {
    dispatch(handleSetMenu(menuIndex));
    navigation.navigate(routeName, { screen: routeName });
  };

  return (
    <>
      <View style={[styles.container, { paddingBottom: insets.bottom + 15 }]}>
        <MenuButton
          active={rootStore.menu == 1 ? true : false}
          label={"Home"}
          Icon={() => <IconHome />}
          onClick={() => handleClick(1, "Home")}
        />
        <MenuButton
          active={rootStore.menu == 2 ? true : false}
          label={"Agendamentos"}
          Icon={() => <IconCalendarMenu />}
          onClick={() => handleClick(2, "Scheduling")}
        />
        <MenuButton
          active={rootStore.menu == 4 ? true : false}
          label={"Menu"}
          Icon={() => <IconMenu />}
          onClick={() =>
            Toast.show({
              type: "error",
              text1: "Em desenvolvimento!",
              text2: "Página ainda em desenvolvimento!",
            })
          }
        />
      </View>
      <View
        style={{
          backgroundColor: "white",
          height: Platform.OS == "ios" ? 0 : insets.bottom,
          width: "100%",
          borderTopWidth: 1,
          borderColor: "#EDEDED",
        }}
      ></View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flexDirection: "row",
    position: "absolute",
    bottom: 0,
    width: "100%",
    paddingTop: 15,
    // height: 70,
    borderTopWidth: 1,
    borderColor: "#EDEDED",
    paddingHorizontal: 0,
  },
});
