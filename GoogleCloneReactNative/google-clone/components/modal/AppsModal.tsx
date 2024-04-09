import React from 'react';
import {Modal, Pressable, StyleSheet, View} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import ModalContent from './ModalContent';
import {modalItems} from '../../util/constatnts';

interface AppsModalProps {
  modalVisible: boolean;
  setModalVisible: (modalVisible: boolean) => void;
  closeModal: () => void;
}
export default function AppsModal({
  modalVisible,
  setModalVisible,
  closeModal,
}: AppsModalProps) {
  return (
    <Modal
      animationType="none"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}>
      <GestureHandlerRootView style={{flex: 1}}>
        <Pressable style={styles.modalContent} onPress={closeModal}>
          <View style={styles.modalContainer}>
            <Pressable
              style={styles.modalContent}
              onPress={event => event.stopPropagation()}>
              <View style={styles.modal}>
                <ModalContent items={modalItems} />
              </View>
            </Pressable>
          </View>
        </Pressable>
      </GestureHandlerRootView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    alignItems: 'flex-end',
    marginTop: '30%',
  },
  modal: {
    flexDirection: 'row',
    margin: 10,
    height: '40%',
    width: '60%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 15,
    borderWidth: 8,
    borderColor: '#cccccc',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  modalContent: {
    flex: 1,
  },
});
