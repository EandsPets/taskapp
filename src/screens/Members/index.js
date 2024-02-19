import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  ScrollView,
  Image,
} from 'react-native';
import {useSelector} from 'react-redux';
import {Button, Checkbox} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import shortid from 'shortid';
import styles from './membersStyle';
import appTheme from '../../constants/colors';
import {TabScreenHeader} from '../../components';
import {navigateToNestedRoute} from '../../navigators/RootNavigation';
import {getScreenParent} from '../../utils/NavigationHelper';
import {UserListComponent} from '../../components/User';
import {loadMembers} from '../../store/slices/membersSlice';

export function Members(props) {
  const members = useSelector(state => state.members);

  const handleNavigation = (screen, params) => {
    navigateToNestedRoute(getScreenParent(screen), screen, params);
  };

  return (
    <SafeAreaView style={styles.container}>
      <TabScreenHeader
        title="Users"
        isSearchBtnVisible={true}
        isMoreBtnVisible={false}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.membersWrapper}>
          <Text style={{fontSize: 18}}>Please enter phone number</Text>
          <View style={{flex: 1, flexDirection: 'row', marginTop: 10}}>
            <View
              style={{
                borderWidth: 1,
                borderRadius: 10,
                width: '60%',
                borderColor: '#e6e6e6',
                paddingLeft: 10,
              }}>
              <TextInput
                placeholder="Search"
                placeholderTextColor={appTheme.INACTIVE_COLOR}
                inputMode="numeric"
                maxLength={10}
              />
            </View>
            <Button
              mode="contained"
              onPress={() => console.log('Pressed')}
              style={{width: '39%', marginLeft: 5, justifyContent: 'center'}}
              buttonColor={appTheme.PRIMARY_COLOR}>
              Find
            </Button>
          </View>
          <View
            style={{
              marginVertical: 25,
              width: '100%',
              height: 1,
              backgroundColor: appTheme.BORDER_COLOR,
            }}
          />
          <View style={{marginTop: 10}}>
            <Text style={{fontSize: 18}}>Name</Text>
            <View
              style={{
                borderWidth: 1,
                borderRadius: 10,
                borderColor: '#e6e6e6',
                paddingLeft: 10,
              }}>
              <TextInput
                placeholder="Name"
                placeholderTextColor={appTheme.INACTIVE_COLOR}
                editable={false}
              />
            </View>
          </View>
          <View style={{marginTop: 10}}>
            <Text style={{fontSize: 18}}>Email</Text>
            <View
              style={{
                borderWidth: 1,
                borderRadius: 10,
                borderColor: '#e6e6e6',
                paddingLeft: 10,
              }}>
              <TextInput
                placeholder="Email"
                placeholderTextColor={appTheme.INACTIVE_COLOR}
                editable={false}
              />
            </View>
          </View>
          <Button
            mode="contained"
            onPress={() => console.log('Pressed')}
            style={{
              height: 50,
              marginLeft: 5,
              justifyContent: 'center',
              marginTop: 25,
            }}
            buttonColor={appTheme.PRIMARY_COLOR}>
            Send Invite
          </Button>
          <View style={{marginTop: 50}} />
          <UserListComponent members={members} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
