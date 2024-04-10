import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {ModalContentProps, ModalItem} from '../../util/types';

export default function ModalContent({items, onPress}: ModalContentProps) {
  const renderItem = ({item}: {item: ModalItem}) => (
    <View style={styles.itemContainer}>
      <Pressable
        onPress={() => {
          onPress(item.link);
        }}>
        <Image source={item.image} style={styles.itemImage} />
      </Pressable>
      <Text style={styles.itemText}>{item.text}</Text>
    </View>
  );

  return (
    <FlatList
      data={items}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      numColumns={3}
    />
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemImage: {
    width: 40,
    height: 40,
    marginBottom: 5,
  },
  itemText: {
    fontSize: 12,
  },
});
