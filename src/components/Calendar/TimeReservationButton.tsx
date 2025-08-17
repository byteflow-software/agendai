import { View, Text, StyleSheet, TouchableOpacity, Modal } from "react-native";
import React, { useState } from "react";
import IconAdd from "../Icons/IconAdd";
import Toast from "react-native-toast-message";
import { useAppDispatch } from '@/src/store/hooks/useAppDispatch';
import { handleSetNewSchedule } from '@/src/store/root/actions';

export default function TimeReservationButton({ navigation, scheduling }: any) {
  const dispatch = useAppDispatch();
  const [modalVisible, setModalVisible] = useState(false);
  const handleClickResevation = () => {
    setModalVisible(true);
  };

  const handleConfirmSchedule = () => {
    setModalVisible(!modalVisible);
    Toast.show({
      type: "success",
      text1: "Consulta Agendada",
      text2: "Confira instruções no e-mail!",
    });
    dispatch(handleSetNewSchedule(scheduling))
    setTimeout(() => {
      navigation.navigate("Home");
    }, 250);
  };
  return (
    <>
      <TouchableOpacity
        onPress={handleClickResevation}
        style={styles.container}
      >
        <Text style={styles.text}>Reservar horário</Text>
        <IconAdd />
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        style={{
          backgroundColor: "#33333360",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>
              Deseja agendar consulta para esse médico?
            </Text>
            <View style={styles.buttonRow}>
              <TouchableOpacity
                style={[styles.button, styles.buttonClose]}
                onPress={handleConfirmSchedule}
              >
                <Text style={styles.textStyle}>Sim</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Não</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#3097E115",
    paddingVertical: 15,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    borderRadius: 10,
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
