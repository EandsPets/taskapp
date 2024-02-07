import React from 'react';
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';

const imageWidth = Dimensions.get('window').width * 0.3;

export function EmptyListComponent() {
  return (
    <View style={styles.emptyListContainer}>
      <Image
        style={styles.image}
        source={require('../../../assets/empty_task.png')}
      />
      <Text style={[styles.emptyListText, {fontWeight: 'bold'}]}>
        Well Done!
      </Text>
      <Text style={[styles.emptyListText, {fontWeight: 'bold'}]}>
        You don't have any items here.
      </Text>
      <Text style={styles.emptyListText}>
        For items to appear in My work, you need a People Column and a Date
        Column in the relevant boards
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  emptyListContainer: {
    display: 'flex',
    justifyContent: 'center',
    height: '100%',
    alignItems: 'center',
    paddingBottom: 100,
  },
  emptyListText: {
    fontFamily: 'Poppins-Regular',
    textAlign: 'center',
    fontSize: 19,
    marginTop: 20,
  },
  image: {
    width: imageWidth,
    height: imageWidth,
    marginTop: -50,
  },
});
