import React, {useContext} from 'react';
import {Image, Modal, Pressable, StyleSheet, View} from 'react-native';
import CustomButton from '../ui/CustomButton';
import {AuthContext} from '../../context/AuthContext';

interface UserModalProps {
  showUserModal: boolean;
  modalSignOut: () => void;
  modalClose: () => void;
}

export default function UserModal({
  modalSignOut,
  showUserModal,
  modalClose,
}: UserModalProps) {
  const {userPhoto} = useContext(AuthContext);

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={showUserModal}
      onRequestClose={modalClose}>
      <Pressable style={styles.modalContent} onPress={modalClose}>
        <View style={styles.userModalContainer}>
          <View style={styles.modalView}>
            <Image
              style={styles.userImage}
              source={
                userPhoto ? {uri: userPhoto} : require('../../assets/user.png')
              }
            />
            <CustomButton
              title="Sign Out"
              isActive={false}
              onPress={modalSignOut}
            />
          </View>
        </View>
      </Pressable>
    </Modal>
  );
}

const styles = StyleSheet.create({
  userModalContainer: {
    flex: 1,
    alignItems: 'flex-end',
    marginTop: '32%',
    margin: 10,
  },
  modalView: {
    backgroundColor: '#f2f2f2',
    borderRadius: 20,
    padding: 25,
    alignItems: 'center',
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 0.3,
  },
  modalContent: {
    flex: 1,
  },
  userImage: {
    width: 40,
    height: 40,
    borderRadius: 40,
    marginBottom: 5,
  },
});
