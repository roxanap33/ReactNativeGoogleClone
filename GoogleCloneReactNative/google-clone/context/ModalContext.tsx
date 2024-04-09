import {createContext, useState} from 'react';

export const ModalContext = createContext({
  modalIsVisible: false,
  showModal: () => {},
  hideModal: () => {},
});

export const ModalProvider = ({children}: any) => {
  const [modalVisible, setModalVisible] = useState(false);

  const showModal = () => {
    setModalVisible(true);
  };
  const hideModal = () => {
    setModalVisible(false);
  };

  const value = {
    modalIsVisible: modalVisible,
    showModal: showModal,
    hideModal: hideModal,
  };

  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
};
