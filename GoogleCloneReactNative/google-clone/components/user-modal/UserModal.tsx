import React, {useContext} from 'react';
import {Image, Modal, Pressable, StyleSheet, Text, View} from 'react-native';
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
  const {userPhoto, userName, userEmail} = useContext(AuthContext);

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={showUserModal}
      onRequestClose={modalClose}>
      <Pressable style={styles.userModalContainer} onPress={modalClose}>
        <View style={styles.modalContent}>
          <Image
            style={styles.userImage}
            source={
              userPhoto ? {uri: userPhoto} : require('../../assets/user.png')
            }
          />
          <Text style={styles.userText}>{userName}</Text>
          <Text style={styles.userText}>{userEmail}</Text>
          <CustomButton
            title="Sign Out"
            isActive={false}
            onPress={modalSignOut}
          />
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
  modalContent: {
    backgroundColor: '#f2f2f2',
    borderRadius: 20,
    padding: 15,
    alignItems: 'center',
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 0.3,
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 40,
    marginBottom: 5,
  },
  userText: {
    color: 'grey',
  },
});
