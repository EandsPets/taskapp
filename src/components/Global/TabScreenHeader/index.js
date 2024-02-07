import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';

import {combineData} from '../../../utils/DataHelper';
import appTheme from '../../../constants/colors';

export function TabScreenHeader({title, isSearchBtnVisible, isMoreBtnVisible}) {
  const [data, setData] = useState({isSearchFieldVisible: false});

  const toggleSearchField = () => {
    let {isSearchFieldVisible} = data;
    isSearchFieldVisible = !isSearchFieldVisible;
    setData(combineData(data, {isSearchFieldVisible}));
  };

  return (
    <View style={styles.headerContainer}>
      <Entypo name="menu" size={25} color={appTheme.INACTIVE_COLOR} />
      <Text style={styles.headerText}>{title}</Text>
      <View style={styles.headerRightContainer}>
        {isSearchBtnVisible ? (
          <View style={styles.searchContainer}>
            {data?.isSearchFieldVisible ? (
              <View style={styles.searchInputWrapper}>
                <TextInput
                  placeholder="Search"
                  style={styles.searchInputField}
                  placeholderTextColor={appTheme.INACTIVE_COLOR}
                />
                <TouchableOpacity onPress={() => toggleSearchField()}>
                  <MaterialIcons
                    name="close"
                    size={20}
                    color={appTheme.INACTIVE_COLOR}
                  />
                </TouchableOpacity>
              </View>
            ) : (
              <TouchableOpacity onPress={() => toggleSearchField()}>
                <Feather name="search" size={22} color="#000" />
              </TouchableOpacity>
            )}
          </View>
        ) : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 20,
    backgroundColor: '#fff',
  },
  headerText: {
    fontFamily: 'Poppins-Bold',
    fontSize: 24,
    color: 'black',
  },
  headerRightContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchContainer: {
    height: 50,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuOptionText: {
    fontSize: 16,
    paddingLeft: 7,
    paddingVertical: 3,
  },
  searchInputWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    width: 170,
    paddingHorizontal: 7,
    height: 50,
  },
  searchInputField: {
    fontSize: 15,
    height: 40,
  },
});
