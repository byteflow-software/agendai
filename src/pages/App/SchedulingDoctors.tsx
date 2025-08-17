import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions,
  Platform,
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
import Input from "@/src/components/Input";
import IconSearch from "@/src/components/Icons/IconSearch";
import Specialty from "@/src/components/Specialty";
import { useAppSelector } from "@/src/store/hooks/useAppSelector";
import { IDoctor } from "@/src/store/root/interfaces";
import DoctorCard from "@/src/components/DoctorCard";
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const windowHeight = Dimensions.get("window").height;
const navbarHeight = windowHeight - (windowHeight + Constants.statusBarHeight);

type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "SchedulingDoctors"
>;

type Props = {
  navigation: ProfileScreenNavigationProp;
};

export default function SchedulingDoctors({ navigation }: Props) {
  const [search, setSearch] = useState("");

  const rootStore = useAppSelector((store) => store.root);
  const insets = useSafeAreaInsets();

  const handleFilterList = () => {
    const filteredRows = rootStore.doctors.filter((item) =>
      item.doctor.name.toLowerCase().includes(search.toLowerCase())
    );
    return filteredRows;
  };

  return (
    <View style={styles.container}>
      <Header
        logo={false}
        textLogo={false}
        perfil={false}
        userHello={false}
        backButton={true}
        navigation={navigation}
      />
      <View style={styles.searchContainer}>
        <Input
          onChangeText={(text: string) => setSearch(text)}
          value={search}
          placeholder={"Busque médicos"}
          type={"default"}
          multiline={false}
          Icon={() => <IconSearch />}
        />
      </View>
      <Specialty specialtys={rootStore.specialtys} />
      <ScrollView
        style={styles.content}
        contentContainerStyle={{
          gap: 20,
          justifyContent: "space-between",
          paddingHorizontal: 20,
          // height: "100%",
        }}
      >
        {handleFilterList().map((doctor: IDoctor, index: number) => {
          return (
            <View key={index}>
              <DoctorCard
                doctor={doctor}
                distance={false}
                actionButton={true}
                navigation={navigation}
              />
            </View>
          );
        })}
      </ScrollView>
      <View
        style={{
          backgroundColor: "white",
          height: Platform.OS == "ios" ? 0 : insets.bottom,
          width: "100%",
          borderTopWidth: 1,
          borderColor: "#EDEDED",
        }}
      ></View>
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
    gap: 15,
  },
  searchContainer: {
    // marginTop: Constants.statusBarHeight,
    paddingHorizontal: 20,
  },
  content: {
    width: "100%",
    // paddingBottom: navbarHeight + 40,
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
