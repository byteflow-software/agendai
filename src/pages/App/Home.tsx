import React, { useCallback, useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions,
} from "react-native";
import Constants from "expo-constants";
import { StatusBar } from "expo-status-bar";
import { useAppSelector } from "../../store/hooks/useAppSelector";
import { useAppDispatch } from "../../store/hooks/useAppDispatch";
import Header from "@/src/components/Header/Header";
import Input from "@/src/components/Input";
import IconSearch from "@/src/components/Icons/IconSearch";
import Category from "@/src/components/Category";
import IconStethoscope from "@/src/components/Icons/IconStethoscope";
import IconHospital from "@/src/components/Icons/IconHospital";
import { RootStackParamList } from "@/src/navigation/Screens";
import { StackNavigationProp } from "@react-navigation/stack";
import StorageUtils from "@/src/utils/StorageUtils";
import {
  handleSetClinics,
  handleSetDoctorNearby,
  handleSetDoctors,
  handleSetMenu,
  handleSetSchedules,
  handleSetSpecialtys,
} from "@/src/store/root/actions";
import {
  IClinic,
  IDoctor,
  IDoctorNearby,
  IScheduling,
  ISpecialtys,
} from "@/src/store/root/interfaces";
import DoctorCard from "@/src/components/DoctorCard";
import MenuGroup from "@/src/components/Menu/MenuGroup";
import { useFocusEffect } from "@react-navigation/native";
import Toast from 'react-native-toast-message';

const windowHeight = Dimensions.get("window").height;
const navbarHeight = windowHeight - (windowHeight + Constants.statusBarHeight);

type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Home"
>;

type Props = {
  navigation: ProfileScreenNavigationProp;
};

export default function Home({ navigation }: Props) {
  const [search, setSearch] = useState("");

  const dispatch = useAppDispatch();
  const rootStore = useAppSelector((store) => store.root);

  useFocusEffect(
    useCallback(() => {
      dispatch(handleSetMenu(1));
    }, [dispatch])
  );

  const handleFilterList = () => {
    const filteredRows = rootStore.doctorsNearby.filter((item) =>
      item.doctor.name.toLowerCase().includes(search.toLowerCase())
    );
    return filteredRows;
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
      <ScrollView
        style={styles.content}
        contentContainerStyle={{
          gap: 20,
          justifyContent: "space-between",
          padding: 20,
          paddingBottom: 90,
        }}
      >
        <Input
          onChangeText={(text: string) => setSearch(text)}
          value={search}
          placeholder={"Busque médicos ou clínicas"}
          type={"default"}
          multiline={false}
          Icon={() => <IconSearch />}
        />
        {!search && (
          <>
            <View style={styles.categoryContainer}>
              <Category
                size="normal"
                label={"Médicos"}
                onClick={() => navigation.navigate("SchedulingDoctors")}
                Icon={() => (
                  <IconStethoscope width={34} height={34} color={"#fff"} />
                )}
              />
              <Category
                size="normal"
                label={"Clínicas"}
                onClick={() =>
                  Toast.show({
                    type: "error",
                    text1: "Em desenvolvimento!",
                    text2: "Funcionalidade ainda em desenvolvimento!",
                  })
                }
                Icon={() => (
                  <IconHospital width={34} height={34} color={"#fff"} />
                )}
              />
            </View>
            <Text style={styles.subTitle}>Médicos por perto</Text>
          </>
        )}
        <View style={styles.doctorsContainer}>
          {handleFilterList().map((doctor: IDoctorNearby, index: number) => {
            return (
              <View key={index}>
                <DoctorCard
                  doctor={doctor}
                  distance={true}
                  actionButton={false}
                  clickCard={true}
                  navigation={navigation}
                />
              </View>
            );
          })}
        </View>
      </ScrollView>
      {/* <MenuGroup navigation={navigation} /> */}
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
  },
  content: {
    width: "100%",
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
