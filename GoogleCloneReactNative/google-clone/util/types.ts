import {ImageStyle} from 'react-native';

interface ResultMap {
  [key: string]: string;
}
export interface SearchResult {
  resultsMap: ResultMap;
  searchTerm: string;
}

export interface ModalItem {
  id: string;
  image: any;
  text: string;
  link: string;
}

export interface AppsModalProps {
  closeModal: () => void;
  setImageIsPressed: (value: boolean) => void;
}

export interface ModalContentProps {
  items: ModalItem[];
  onPress: (link: string) => void;
}

export interface ResultListProps {
  results: SearchResult[];
  searchInput: string;
}

export interface CustomButtonProps {
  title: string;
  isActive: boolean;
  onPress?: () => void;
  signIn?: boolean;
  userOption?: () => void;
}

export interface LogoProp {
  style: ImageStyle;
  handlePress?: () => void;
}

export interface UserModalProps {
  showUserModal: boolean;
  modalSignOut: () => void;
  modalClose: () => void;
}

export interface HeaderProp {
  appsImgisVisible: boolean;
}

export interface SearchInputProp {
  searchInput: string;
  handleSearchInputChange: (searchInput: string) => void;
  handleSubmit: () => void;
}
