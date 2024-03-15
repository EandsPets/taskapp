import React, {useContext, useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  ScrollView,
  Alert,
  ActivityIndicator,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Button} from 'react-native-paper';
import styles from './membersStyle';
import appTheme from '../../constants/colors';
import {TabScreenHeader} from '../../components';
import {UserListComponent} from '../../components/User';
import {searchUser, getUsers} from '../../store/actions/userAction';

export function Members(props) {
  const {me, user, users} = useSelector(state => state.user);
  const [phoneNumber, setPhoneNumber] = useState();
  const [isApiCalling, setIsApiCalling] = useState(false);
  const dispatch = useDispatch();

  const getUser = () => {
    if (!phoneNumber) {
      Alert.alert('Please enter phone number!');
      return;
    }
    setIsApiCalling(true);

    dispatch(searchUser(phoneNumber))
      .then(() => setIsApiCalling(false))
      .catch(() => setIsApiCalling(false));
  };

  const handleInvite = () => {
    if (!user?.email) {
      Alert.alert('Please select the correct user');
      return;
    }
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
                keyboardType="numeric"
                maxLength={10}
                value={phoneNumber}
                onChangeText={v => setPhoneNumber(v)}
              />
            </View>
            <Button
              mode="contained"
              onPress={() => getUser()}
              style={{width: '39%', marginLeft: 5, justifyContent: 'center'}}
              buttonColor={appTheme.PRIMARY_COLOR}>
              Search
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
                placeholder="First and Last name"
                placeholderTextColor={appTheme.INACTIVE_COLOR}
                editable={false}
                value={user?.name}
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
                value={user?.email}
              />
            </View>
          </View>
          <Button
            mode="contained"
            onPress={() => handleInvite()}
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
          <UserListComponent users={users} />
        </View>
      </ScrollView>
      {isApiCalling && (
        <View style={styles.activityIndicator}>
          <ActivityIndicator size="large" color="blue" />
        </View>
      )}
    </SafeAreaView>
  );
}
