import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  Platform,
  Modal,
  TouchableOpacity,
} from "react-native";
import Constants from "expo-constants";
import { RootStackParamList } from "@/src/navigation/Screens";
import { StackNavigationProp } from "@react-navigation/stack";
import Header from "@/src/components/Header/Header";
import { RouteProp, useRoute } from "@react-navigation/native";
import DoctorCard from "@/src/components/DoctorCard";
import SchedulingStatusTag from "@/src/components/SchedulingStatusTag";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Button from "@/src/components/Button";
import Title from "@/src/components/Title";
import Toast from 'react-native-toast-message';
import { useAppDispatch } from '@/src/store/hooks/useAppDispatch';
import { handleCancelSchedule } from '@/src/store/root/actions';

type SchedulingDetailScreenRouteProp = RouteProp<
  RootStackParamList,
  "SchedulingDetail"
>;

type Props = {
  navigation: any;
  route: SchedulingDetailScreenRouteProp;
};

export default function SchedulingDetail({ navigation, route }: Props) {
  const [data, setData] = useState<any>(null);
  const dispatch = useAppDispatch();
  const [modalVisibleCancel, setModalVisibleCancel] = useState(false);
  const [modalVisibleGender, setModalVisibleGender] = useState(false);
  const { scheduling, doctor }: any = route.params;
  const insets = useSafeAreaInsets();

  useEffect(() => {
    setData(scheduling);
  }, [scheduling]);

  if (!data) return null;

  return (
    <>
      <View style={styles.container}>
        <Header
          logo={false}
          textLogo={false}
          perfil={false}
          userHello={false}
          backButton={true}
          navigation={navigation}
        />
        <ScrollView
          style={styles.content}
          contentContainerStyle={{
            gap: 10,
            paddingHorizontal: 20,
            paddingBottom: Platform.OS === "ios" ? 60 : 90,
          }}
        >
          <View style={styles.titleContainer}>
            <Title value="Dados da Consulta" />
          </View>
          <View style={styles.detailItemContainer}>
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>Data:</Text>
              <Text style={styles.detailValue}>{data?.openingDate}</Text>
            </View>
            <View style={styles.divisor} />
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>Hora:</Text>
              <Text style={styles.detailValue}>{data?.openingHour}</Text>
            </View>
            <View style={styles.divisor} />
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>Endereço:</Text>
              <Text style={styles.detailValue}>{data?.address}</Text>
            </View>
            <View style={styles.divisor} />
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>Status:</Text>
              <SchedulingStatusTag value={data?.status} />
            </View>
          </View>
          <View style={styles.divisor} />
          <View style={styles.cardContainer}>
            <DoctorCard doctor={doctor} distance={false} actionButton={false} />
          </View>
        </ScrollView>
        <View style={styles.buttonsContainer}>
          {data?.status != "CONSULTA EM ANDAMENTO" && data?.status != "FINALIZADO" && (
            <Button
              label={"Re-agendar Consulta"}
              bgColor={"#3097E1"}
              textColor={"#fff"}
              borderColor={"#3097E1"}
              onClick={() => setModalVisibleGender(true)}
            />
          )}
          {data?.status != "CANCELADO" && data?.status != "FINALIZADO" && (
            <Button
              label={"Cancelar Consulta?"}
              bgColor={"#fff"}
              textColor={"#ec4c4cff"}
              borderColor={"#ec4c4cff"}
              onClick={() => setModalVisibleCancel(true)}
            />
          )}
        </View>
        <View
          style={{
            backgroundColor: "white",
            height: Platform.OS == "ios" ? 0 : insets.bottom,
            width: "100%",
            borderTopWidth: 2,
            borderColor: "#EDEDED",
          }}
        ></View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisibleCancel}
          style={{
            backgroundColor: "#33333360",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onRequestClose={() => {
            setModalVisibleCancel(!modalVisibleCancel);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>
                Deseja cancelar essa consulta?
              </Text>
              <View style={styles.buttonRow}>
                <TouchableOpacity
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => {
                    setModalVisibleCancel(!modalVisibleCancel);
                    Toast.show({
                      type: "error",
                      text1: "Consulta Cancelada!",
                      text2: "Confira informações no e-mail!",
                    });
                    dispatch(handleCancelSchedule(scheduling.id))
                    setTimeout(() => {
                      navigation.navigate("Home");
                    }, 250);
                  }}
                >
                  <Text style={styles.textStyle}>Sim</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setModalVisibleCancel(!modalVisibleCancel)}
                >
                  <Text style={styles.textStyle}>Não</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisibleGender}
          style={{
            backgroundColor: "#33333360",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onRequestClose={() => {
            setModalVisibleGender(!modalVisibleGender);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>
                Deseja re-agendar essa consulta?
              </Text>
              <View style={styles.buttonRow}>
                <TouchableOpacity
                  style={[styles.button, styles.buttonClose]}
                  onPress={() =>
                    navigation.navigate("DoctorDetail", { doctor })
                  }
                >
                  <Text style={styles.textStyle}>Sim</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setModalVisibleGender(!modalVisibleGender)}
                >
                  <Text style={styles.textStyle}>Não</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </>
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
    paddingTop: 20,
  },
  cardContainer: {
    marginBottom: 10,
  },
  titleContainer: {
    alignItems: "center",
  },
  detailItemContainer: {
    borderRadius: 10,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#eee",
    shadowColor: "#E3E3E3",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 5,
    padding: 20,
  },
  detailItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
  },
  divisor: {
    height: 1,
    backgroundColor: "#eee",
    width: "100%",
  },
  buttonsContainer: {
    gap: 15,
    width: "100%",
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  detailLabel: {
    flex: 1,
    color: "#999",
    fontSize: 14,
    fontFamily: "Outfit-Regular",
  },
  detailValue: {
    maxWidth: 200,
    textAlign: "right",
    color: "#999",
    fontSize: 14,
    fontFamily: "Outfit-Regular",
  },
  text: {
    color: "#3097E1",
    fontSize: 16,
    fontFamily: "Outfit-Regular",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#33333360",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    width: "80%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 5,
    padding: 10,
    elevation: 2,
    flex: 1,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  buttonRow: {
    display: "flex",
    gap: 10,
    justifyContent: "space-between",
    flexDirection: "row",
    width: "100%",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
