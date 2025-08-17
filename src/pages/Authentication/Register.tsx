import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import Constants from "expo-constants";
import Header from "@/src/components/Header/Header";
import Title from "@/src/components/Title";
import Input from "@/src/components/Input";
import Button from "@/src/components/Button";
import IconEmail from "@/src/components/Icons/IconEmail";
import IconLock from "@/src/components/Icons/IconLock";
import TouchableLink from "@/src/components/TouchableLink";
import { RootStackParamList } from "@/src/navigation/Screens";
import { StackNavigationProp } from "@react-navigation/stack";

const windowHeight = Dimensions.get("window").height;
const navbarHeight = windowHeight - (windowHeight + Constants.statusBarHeight);

type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Login"
>;

type Props = {
  navigation: ProfileScreenNavigationProp;
};

export default function Register({ navigation }: Props) {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordConfirm, setPasswordConfirm] = useState<string>("");

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={styles.container}>
        <StatusBar style="dark" />
        <ScrollView
          contentContainerStyle={{
            gap: 20,
            justifyContent: "space-between",
            paddingHorizontal: 20,
            paddingTop: 0,
            paddingBottom: 30,
          }}
          style={styles.content}
        >
          <Header
            logo={true}
            textLogo={true}
            perfil={false}
            userHello={false}
            navigation={navigation}
            backButton={false}
          />
          <View style={styles.imageContainer}>
            <Image
              style={styles.doctorsImage}
              source={require("../../assets/images/doctors.png")}
            ></Image>
          </View>
          <View style={styles.titleContainer}>
            <Title value="Bem vindo de volta!" />
            <Text style={styles.subTitle}>
              Insira suas credenciais para continuar.
            </Text>
          </View>
          <View style={styles.inputsContainer}>
            <Input
              onChangeText={(text: string) => setUsername(text)}
              value={username}
              placeholder={"E-mail"}
              type={"default"}
              multiline={false}
              Icon={() => <IconEmail />}
            />
            <Input
              onChangeText={(text: string) => setPassword(text)}
              value={password}
              placeholder={"Senha"}
              type={"password"}
              multiline={false}
              Icon={() => <IconLock />}
            />
            <Input
              onChangeText={(text: string) => setPassword(text)}
              value={password}
              placeholder={"Confirme a Senha"}
              type={"password"}
              multiline={false}
              Icon={() => <IconLock />}
            />
            <TouchableLink label="Esqueceu a senha?" />
          </View>
          <View style={styles.buttonsContainer}>
            <Button
              label={"Finalizar Cadastro"}
              bgColor={"#3097E1"}
              textColor={"#fff"}
              borderColor={"#3097E1"}
              onClick={() => navigation.navigate("App", { screen: "Home" })}
            />
            <Text
              style={{
                color: "#ccc",
                fontSize: 14,
                fontFamily: "Outfit-Regular",
                width: "100%",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              Ou
            </Text>
            <Button
              label={"Entrar"}
              bgColor={"#fff"}
              textColor={"#3097E1"}
              borderColor={"#3097E1"}
              onClick={() => navigation.navigate("Login", { screen: "Login" })}
            />
          </View>
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    width: "100%",
    // marginTop: Constants.statusBarHeight,
    paddingBottom: navbarHeight + 80,
  },
  imageContainer: {
    height: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  doctorsImage: {
    height: "120%",
    objectFit: "contain",
  },
  titleContainer: {
    paddingVertical: 15,
  },
  subTitle: {
    color: "#333",
    fontSize: 16,
    fontFamily: "Outfit-Regular",
  },
  inputsContainer: {
    gap: 20,
  },
  buttonsContainer: {
    gap: 15,
  },
});
