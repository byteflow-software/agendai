import React, { useEffect, useState } from "react";
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
import Constants from "expo-constants";
import Header from "@/src/components/Header/Header";
import Title from "@/src/components/Title";
import Input from "@/src/components/Input";
import Button from "@/src/components/Button";
import IconEmail from "@/src/components/Icons/IconEmail";
import IconLock from "@/src/components/Icons/IconLock";
import TouchableLink from "@/src/components/TouchableLink";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "@/src/navigation/Screens";
import Toast from "react-native-toast-message";
import { useAppDispatch } from "@/src/store/hooks/useAppDispatch";
import {
  handleSetSchedules,
  handleSetDoctorNearby,
  handleSetDoctors,
  handleSetClinics,
  handleSetSpecialtys,
} from "@/src/store/root/actions";
import {
  IDoctorNearby,
  IScheduling,
  IDoctor,
  IClinic,
  ISpecialtys,
} from "@/src/store/root/interfaces";

const windowHeight = Dimensions.get("window").height;
const navbarHeight = windowHeight - (windowHeight + Constants.statusBarHeight);

type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Login"
>;

type Props = {
  navigation: ProfileScreenNavigationProp;
};

export default function Login({ navigation }: Props) {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const dispatch = useAppDispatch();

  const handleLoadFakeData = () => {
    const doctorsNearby: IDoctorNearby[] = [
      {
        id: 0,
        address: "Av. Campo Sales, Centro, Teresina - PI - 64000-000",
        doctor: {
          id: 0,
          name: "Dr. João da Silva",
          role: "Cardiologista",
        },
        distance: 1.2,
        imageUrl: "doctor1",
        openingDate: "Segunda - Quinta",
        openingHour: "13:00 - 19:00",
      },
      {
        id: 1,
        address: "Av. Campo Sales, Centro, Teresina - PI - 64000-000",
        doctor: {
          id: 1,
          name: "Dr. Claudia Silva",
          role: "Ortopedista",
        },
        distance: 1.4,
        imageUrl: "doctor2",
        openingDate: "Segunda - Quinta",
        openingHour: "13:00 - 19:00",
      },
      {
        id: 2,
        address: "Av. Campo Sales, Centro, Teresina - PI - 64000-000",
        doctor: {
          id: 2,
          name: "Dra. Ana Costa",
          role: "Pediatra",
        },
        distance: 2.3,
        imageUrl: "doctor3",
        openingDate: "Segunda - Quinta",
        openingHour: "13:00 - 19:00",
      },
      {
        id: 3,
        address: "Av. Campo Sales, Centro, Teresina - PI - 64000-000",
        doctor: {
          id: 6,
          name: "Dr. Lucas Ferreira",
          role: "Oftalmologista",
        },
        distance: 3.0,
        imageUrl: "doctor4",
        openingDate: "Segunda - Quinta",
        openingHour: "13:00 - 19:00",
      },
      {
        id: 4,
        address: "Av. Campo Sales, Centro, Teresina - PI - 64000-000",
        doctor: {
          id: 8,
          name: "Dr. Marcelo Sousa",
          role: "Psiquiatra",
        },
        distance: 4.7,
        imageUrl: "doctor5",
        openingDate: "Segunda - Quinta",
        openingHour: "13:00 - 19:00",
      },
    ];
    const schedules: IScheduling[] = [
      {
        id: 0,
        address: "Av. Campo Sales, Centro, Teresina - PI - 64000-000",
        status: "FINALIZADO",
        doctor: {
          id: 0,
          name: "Dr. João da Silva",
          role: "Cardiologista",
        },
        distance: 1.2,
        imageUrl: "doctor1",
        openingDate: "Seg - 12/09/2025",
        openingHour: "13:00 - Tarde",
      },
      {
        id: 1,
        address: "Av. Campo Sales, Centro, Teresina - PI - 64000-000",
        status: "AGUARDANDO CONSULTA",
        doctor: {
          id: 1,
          name: "Dr. Claudia Silva",
          role: "Ortopedista",
        },
        distance: 1.4,
        imageUrl: "doctor2",
        openingDate: "Seg - 12/09/2025",
        openingHour: "13:00 - Tarde",
      },
      {
        id: 2,
        address: "Av. Campo Sales, Centro, Teresina - PI - 64000-000",
        status: "CONSULTA EM ANDAMENTO",
        doctor: {
          id: 2,
          name: "Dra. Ana Costa",
          role: "Pediatra",
        },
        distance: 2.3,
        imageUrl: "doctor3",
        openingDate: "Seg - 12/09/2025",
        openingHour: "13:00 - Tarde",
      },
      {
        id: 3,
        address: "Av. Campo Sales, Centro, Teresina - PI - 64000-000",
        status: "AGUARDANDO CONSULTA",
        doctor: {
          id: 6,
          name: "Dr. Lucas Ferreira",
          role: "Oftalmologista",
        },
        distance: 3.0,
        imageUrl: "doctor4",
        openingDate: "Seg - 12/09/2025",
        openingHour: "13:00 - Tarde",
      },
      {
        id: 4,
        address: "Av. Campo Sales, Centro, Teresina - PI - 64000-000",
        status: "CANCELADO",
        doctor: {
          id: 8,
          name: "Dr. Marcelo Sousa",
          role: "Psiquiatra",
        },
        distance: 4.7,
        imageUrl: "doctor5",
        openingDate: "Seg - 12/09/2025",
        openingHour: "13:00 - Tarde",
      },
    ];
    const doctors: IDoctor[] = [
      {
        id: 0,
        address: "Av. Campo Sales, Centro, Teresina - PI - 64000-000",
        distance: 1.2,
        doctor: { name: "Dr. João da Silva", role: "Cardiologista" },
        openingDate: "Segunda - Quinta",
        openingHour: "13:00 - 19:00",
        availableDates: [],
        availableHours: [],
        imageUrl: "doctor1",
      },
      {
        id: 1,
        address: "Av. Campo Sales, Centro, Teresina - PI - 64000-000",
        distance: 1.4,
        doctor: { name: "Dra. Maria Oliveira", role: "Dermatologista" },
        openingDate: "Segunda - Quinta",
        openingHour: "13:00 - 19:00",
        availableDates: [],
        availableHours: [],
        imageUrl: "doctor2",
      },
      {
        id: 2,
        address: "Av. Campo Sales, Centro, Teresina - PI - 64000-000",
        distance: 2.3,
        doctor: { name: "Dr. Pedro Santos", role: "Ortopedista" },
        openingDate: "Segunda - Quinta",
        openingHour: "13:00 - 19:00",
        availableDates: [],
        availableHours: [],
        imageUrl: "doctor3",
      },
      {
        id: 3,
        address: "Av. Campo Sales, Centro, Teresina - PI - 64000-000",
        distance: 3.0,
        doctor: { name: "Dra. Ana Costa", role: "Pediatra" },
        openingDate: "Segunda - Quinta",
        openingHour: "13:00 - 19:00",
        availableDates: [],
        availableHours: [],
        imageUrl: "doctor4",
      },
      {
        id: 4,
        address: "Av. Campo Sales, Centro, Teresina - PI - 64000-000",
        distance: 4.7,
        doctor: { name: "Dr. Carlos Lima", role: "Neurologista" },
        openingDate: "Segunda - Quinta",
        openingHour: "13:00 - 19:00",
        availableDates: [],
        availableHours: [],
        imageUrl: "doctor5",
      },
      {
        id: 5,
        address: "Av. Campo Sales, Centro, Teresina - PI - 64000-000",
        distance: 1.2,
        doctor: { name: "Dra. Beatriz Almeida", role: "Endocrinologista" },
        openingDate: "Segunda - Quinta",
        openingHour: "13:00 - 19:00",
        availableDates: [],
        availableHours: [],
        imageUrl: "doctor5",
      },
      {
        id: 6,
        address: "Av. Campo Sales, Centro, Teresina - PI - 64000-000",
        distance: 1.4,
        doctor: { name: "Dr. Lucas Ferreira", role: "Oftalmologista" },
        openingDate: "Segunda - Quinta",
        openingHour: "13:00 - 19:00",
        availableDates: [],
        availableHours: [],
        imageUrl: "doctor4",
      },
      {
        id: 7,
        address: "Av. Campo Sales, Centro, Teresina - PI - 64000-000",
        distance: 2.3,
        doctor: { name: "Dra. Fernanda Rocha", role: "Ginecologista" },
        openingDate: "Segunda - Quinta",
        openingHour: "13:00 - 19:00",
        availableDates: [],
        availableHours: [],
        imageUrl: "doctor5",
      },
      {
        id: 8,
        address: "Av. Campo Sales, Centro, Teresina - PI - 64000-000",
        distance: 3.0,
        doctor: { name: "Dr. Marcelo Sousa", role: "Psiquiatra" },
        openingDate: "Segunda - Quinta",
        openingHour: "13:00 - 19:00",
        availableDates: [],
        availableHours: [],
        imageUrl: "doctor5",
      },
      {
        id: 9,
        address: "Av. Campo Sales, Centro, Teresina - PI - 64000-000",
        distance: 4.7,
        doctor: { name: "Dra. Camila Pereira", role: "Oncologista" },
        openingDate: "Segunda - Quinta",
        openingHour: "13:00 - 19:00",
        availableDates: [],
        availableHours: [],
        imageUrl: "doctor5",
      },
    ];
    const clinics: IClinic[] = [
      {
        id: 0,
        name: "Clínica CardioVida",
        specialty: "Clínica especialista em cardiologia",
        openingDate: "Segunda - Quinta",
        openingHour: "13:00 - 19:00",
        doctors: [0],
        imageUrl: "../../assets/images/clinics/clinic.png",
      },
      {
        id: 1,
        name: "Clínica Pele Saudável",
        specialty: "Clínica especialista em Dermatologia",
        openingDate: "Segunda - Quinta",
        openingHour: "13:00 - 19:00",
        doctors: [1],
        imageUrl: "../../assets/images/clinics/clinic.png",
      },
      {
        id: 2,
        name: "Clínica Ortopédica Nova Movimento",
        specialty: "Clínica especialista em Ortopedia",
        openingDate: "Segunda - Quinta",
        openingHour: "13:00 - 19:00",
        doctors: [2],
        imageUrl: "../../assets/images/clinics/clinic.png",
      },
      {
        id: 3,
        name: "Clínica Infantil Sorriso de Criança",
        specialty: "Clínica especialista em Pediatria",
        openingDate: "Segunda - Quinta",
        openingHour: "13:00 - 19:00",
        doctors: [3],
        imageUrl: "../../assets/images/clinics/clinic.png",
      },
      {
        id: 4,
        name: "Clínica NeuroCare",
        specialty: "Clínica especialista em Neurologia",
        openingDate: "Segunda - Quinta",
        openingHour: "13:00 - 19:00",
        doctors: [4],
        imageUrl: "../../assets/images/clinics/clinic.png",
      },
      {
        id: 5,
        name: "Clínica EndocrinoVita",
        specialty: "Clínica especialista em Endocrinologia",
        openingDate: "Segunda - Quinta",
        openingHour: "13:00 - 19:00",
        doctors: [5],
        imageUrl: "../../assets/images/clinics/clinic.png",
      },
      {
        id: 6,
        name: "Clínica Olhos Brilhantes",
        specialty: "Clínica especialista em Oftalmologia",
        openingDate: "Segunda - Quinta",
        openingHour: "13:00 - 19:00",
        doctors: [6],
        imageUrl: "../../assets/images/clinics/clinic.png",
      },
      {
        id: 7,
        name: "Clínica Feminina Saúde da Mulher",
        specialty: "Clínica especialista em Ginecologia",
        openingDate: "Segunda - Quinta",
        openingHour: "13:00 - 19:00",
        doctors: [7],
        imageUrl: "../../assets/images/clinics/clinic.png",
      },
      {
        id: 8,
        name: "Clínica Bem-Estar Mental",
        specialty: "Clínica especialista em Psiquiatria",
        openingDate: "Segunda - Quinta",
        openingHour: "13:00 - 19:00",
        doctors: [8],
        imageUrl: "../../assets/images/clinics/clinic.png",
      },
      {
        id: 9,
        name: "Clínica OncoEsperança",
        specialty: "Clínica especialista em Oncologia",
        openingDate: "Segunda - Quinta",
        openingHour: "13:00 - 19:00",
        doctors: [9],
        imageUrl: "../../assets/images/clinics/clinic.png",
      },
    ];
    const specialtys: ISpecialtys[] = [
      {
        active: true,
        value: "Todos",
      },
      {
        active: false,
        value: "Cardiologista",
      },
      {
        active: false,
        value: "Dermatologista",
      },
      {
        active: false,
        value: "Ortopedista",
      },
      {
        active: false,
        value: "Pediatra",
      },
      {
        active: false,
        value: "Neurologista",
      },
      {
        active: false,
        value: "Endocrinologista",
      },
      {
        active: false,
        value: "Oftalmologista",
      },
      {
        active: false,
        value: "Ginecologista",
      },
      {
        active: false,
        value: "Psiquiatra",
      },
      {
        active: false,
        value: "Oncologista",
      },
    ];
    dispatch(handleSetSchedules(schedules));
    dispatch(handleSetDoctorNearby(doctorsNearby));
    dispatch(handleSetDoctors(doctors));
    dispatch(handleSetClinics(clinics));
    dispatch(handleSetSpecialtys(specialtys));
  };

  useEffect(() => {
    handleLoadFakeData()
  }, [dispatch])

  const handleLogin = () => {
    // if (username != "email@teste.com" || password != "1234") {
    //   Toast.show({
    //     type: "error",
    //     text1: "Acesso Negado",
    //     text2: "E-mail ou senha incorretos!",
    //   });
    //   return;
    // }
    navigation.navigate("App", { screen: "Home" });
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={styles.container}>
        {/* <StatusBar style="dark" /> */}
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
            backButton={false}
            navigation={navigation}
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
            <TouchableLink label="Esqueceu a senha?" />
          </View>
          <View style={styles.buttonsContainer}>
            <Button
              label={"Entrar"}
              bgColor={"#3097E1"}
              textColor={"#fff"}
              borderColor={"#3097E1"}
              onClick={handleLogin}
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
              label={"Registrar-se"}
              bgColor={"#fff"}
              textColor={"#3097E1"}
              borderColor={"#3097E1"}
              onClick={() =>
                navigation.navigate("Register", {
                  screen: "Register",
                })
              }
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
