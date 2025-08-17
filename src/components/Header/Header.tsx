import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import HelloUser from "./HelloUser";
import TextWithLogo from "./TextWithLogo";
import UserPerfil from "./UserPerfil";
import IconBackArrow from "../Icons/IconBackArrow";
import Constants from "expo-constants";

type HeaderProps = {
  logo: boolean;
  textLogo: boolean;
  perfil: boolean;
  userHello: boolean;
  backButton: boolean;
  navigation: any;
};

export default function Header({
  logo,
  textLogo,
  perfil,
  userHello,
  backButton,
  navigation,
}: HeaderProps) {
  return (
    <>
      {logo && textLogo && !perfil && !userHello && (
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <TextWithLogo label={true} />
          </View>
        </View>
      )}
      {logo && perfil && userHello && (
        <View style={styles.container}>
          <View>
            <HelloUser />
          </View>
          <View style={styles.imageContainer}>
            <TextWithLogo label={false} />
          </View>
          <View>
            <UserPerfil />
          </View>
        </View>
      )}
      {backButton && (
        <View style={styles.container}>
          <TouchableOpacity
            onPress={() => navigation.pop(1)}
            style={styles.backButton}
          >
            <IconBackArrow />
            <Text style={styles.backButtonText}>Voltar</Text>
          </TouchableOpacity>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 75,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: 20,
    // marginTop: Constants.statusBarHeight,
    paddingTop: 20,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  imageContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
    height: "100%",
  },
  image: {
    height: "100%",
    objectFit: "contain",
    width: 50,
  },
  title: {
    color: "#3097E1",
    fontSize: 16,
    fontFamily: "Outfit-Bold",
    paddingTop: 4,
  },
  backButton: {
    height: 60,
    flexDirection: "row",
    alignItems: "center",
  },
  backButtonText: {
    color: "#3097E1",
    fontSize: 14,
    fontFamily: "Outfit-Regular",
  },
});
