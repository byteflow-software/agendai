import React, { useCallback, useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions,
  Platform,
  Modal,
} from "react-native";
import Constants from "expo-constants";
import { RootStackParamList } from "@/src/navigation/Screens";
import { StackNavigationProp } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import MenuGroup from "@/src/components/Menu/MenuGroup";
import Category from "@/src/components/Category";
import IconStethoscope from "@/src/components/Icons/IconStethoscope";
import IconHospital from "@/src/components/Icons/IconHospital";
import Header from "@/src/components/Header/Header";
import { useAppDispatch } from "@/src/store/hooks/useAppDispatch";
import { handleSetMenu } from "@/src/store/root/actions";
import SchedulingCard from "@/src/components/SchedulingCard";
import Input from "@/src/components/Input";
import IconSearch from "@/src/components/Icons/IconSearch";
import { useAppSelector } from "@/src/store/hooks/useAppSelector";
import { useFocusEffect } from "@react-navigation/native";

const windowHeight = Dimensions.get("window").height;
const navbarHeight = windowHeight - (windowHeight + Constants.statusBarHeight);

type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Scheduling"
>;

type Props = {
  navigation: ProfileScreenNavigationProp;
};

export default function Scheduling({ navigation }: Props) {
  const dispatch = useAppDispatch();
  const [search, setSearch] = useState("");

  const rootStore = useAppSelector((store) => store.root);

  useFocusEffect(
    useCallback(() => {
      dispatch(handleSetMenu(2));
    }, [dispatch])
  );

  const handleFilterList = () => {
    const filteredRows = rootStore.schedules.filter((item) =>
      item.doctor.role.toLowerCase().includes(search.toLowerCase())
    );
    return filteredRows.reverse();
  };

  return (
    <View style={styles.container}>
      <Header
        logo={true}
        textLogo={false}
        perfil={true}
        userHello={true}
        backButton={false}
        navigation={navigation}
      />
      <View style={styles.searchContainer}>
        <Input
          onChangeText={(text: string) => setSearch(text)}
          value={search}
          placeholder={"Busque agendamentos"}
          type={"default"}
          multiline={false}
          Icon={() => <IconSearch />}
        />
      </View>
      <ScrollView
        style={styles.content}
        contentContainerStyle={{
          gap: 25,
          justifyContent: "space-between",
          paddingHorizontal: 20,
          paddingBottom: Platform.OS === "ios" ? 60 : 90,
        }}
      >
        {handleFilterList().map((item, index) => {
          return (
            <View key={index}>
              <SchedulingCard
                scheduling={item}
                doctor={
                  rootStore.doctors.filter((d, i) => d.id == item.doctor.id)[0]
                }
                navigation={navigation}
              />
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    gap: 20,
  },
  searchContainer: {
    // marginTop: Constants.statusBarHeight,
    paddingHorizontal: 20,
  },
  content: {
    width: "100%",
    paddingTop: 10,
    paddingBottom: navbarHeight + 60,
  },
  categoryContainer: {
    flexDirection: "row",
    gap: 20,
  },
  doctorsContainer: {
    gap: 20,
  },
  subTitle: {
    color: "#999",
    fontSize: 18,
    fontFamily: "Outfit-Medium",
  },
});
