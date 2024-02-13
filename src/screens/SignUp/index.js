import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Octicons from 'react-native-vector-icons/Octicons';
import Entypo from 'react-native-vector-icons/Entypo';
import auth from '@react-native-firebase/auth';
import firebase from '@react-native-firebase/app';
import styles from './signUpStyle';
import {navigateToNestedRoute} from '../../navigators/RootNavigation';
import {getScreenParent} from '../../utils/NavigationHelper';
// import firebase from '../../utils/config';

export function SignUp({navigation}) {
  const [userInfo, setUserInfo] = useState({
    username: '',
    phone: '',
    email: '',
    password: '',
    confirm_password: '',
  });
  const handleNavigation = (screen, params) => {
    navigateToNestedRoute(getScreenParent(screen), screen, params);
  };

  const chnageUserInfo = (value, key) => {
    const info = {
      ...userInfo,
      [key]: value,
    };

    setUserInfo(info);
  };

  const signUp = async () => {
    // navigation.navigate('SingleStack', {screen: 'SignUp'});

    const userCredential = await auth().createUserWithEmailAndPassword(
      userInfo.email,
      userInfo.password,
    );
    const user = userCredential.user;

    await createUserProfile(user.uid, userInfo.email, userInfo.phone);
  };

  const createUserProfile = async (uid, email, phone) => {
    try {
      await firebase.firestore().collection('users').doc(uid).set({
        email,
        phone,
      });
      console.log('User profile created successfully');
    } catch (error) {
      console.error('Error creating user profile:', error.message);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.bodyContent}>
        <Text style={styles.largeText}>Let's get you registered!</Text>
        <Text style={styles.middleText}>Registered</Text>
        <Text style={styles.smallText}>Login with your information</Text>
        <View style={styles.inputRow}>
          <TextInput
            placeholder="Full Name"
            placeholderTextColor="gray"
            style={styles.textInput}
            value={userInfo.username}
            onChangeText={value => chnageUserInfo(value, 'username')}
          />
        </View>
        <View style={[styles.inputRow, {marginBottom: 10}]}>
          <TextInput
            placeholder="Phone"
            placeholderTextColor="gray"
            style={styles.textInput}
            value={userInfo.phone}
            onChangeText={value => chnageUserInfo(value, 'phone')}
          />
        </View>
        <View style={[styles.inputRow, {marginBottom: 10, marginTop: 25}]}>
          <TextInput
            placeholder="Email"
            placeholderTextColor="gray"
            style={styles.textInput}
            value={userInfo.email}
            onChangeText={value => chnageUserInfo(value, 'email')}
          />
        </View>
        <View style={[styles.inputRow, {marginBottom: 10, marginTop: 25}]}>
          <TextInput
            placeholder="Password"
            placeholderTextColor="gray"
            secureTextEntry={true}
            style={styles.textInput}
            value={userInfo.password}
            onChangeText={value => chnageUserInfo(value, 'password')}
          />
          <Octicons name="eye-closed" size={20} color="gray" />
        </View>
        <View style={[styles.inputRow, {marginBottom: 10, marginTop: 25}]}>
          <TextInput
            placeholder="Confirm Password"
            placeholderTextColor="gray"
            secureTextEntry={true}
            style={styles.textInput}
            value={userInfo.confirm_password}
            onChangeText={value => chnageUserInfo(value, 'confirm_password')}
          />
          <Octicons name="eye-closed" size={20} color="gray" />
        </View>
        <TouchableOpacity
          style={styles.loginBtnWrapper}
          onPress={() => signUp()}>
          <Text style={styles.loginBtnText}>Register</Text>
        </TouchableOpacity>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            marginVertical: 25,
          }}>
          <View
            style={{
              width: '30%',
              height: 1,
              backgroundColor: 'grey',
            }}
          />
          <Text
            style={{
              fontFamily: 'Poppins-Italic',
              width: '40%',
              textAlign: 'center',
              justifyContent: 'center',
            }}>
            Or login with
          </Text>
          <View
            style={{
              width: '30%',
              height: 1,
              backgroundColor: 'grey',
            }}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            paddingBottom: 30,
          }}>
          <Entypo name="facebook-with-circle" size={80} color="#006093" />
          <Entypo name="google--with-circle" size={80} color="#dd4a5c" />
          <Entypo name="twitter-with-circle" size={80} color="#589bfc" />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            paddingBottom: 80,
          }}>
          <Text style={{fontFamily: 'Poppins-Italic'}}>
            Already have an account?{' '}
          </Text>
          <TouchableOpacity onPress={() => handleNavigation('Login')}>
            <Text style={{fontFamily: 'Poppins-Italic', color: 'red'}}>
              Login Now
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
