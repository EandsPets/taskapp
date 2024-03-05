import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
  Alert,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Octicons from 'react-native-vector-icons/Octicons';
import Entypo from 'react-native-vector-icons/Entypo';
import styles from './signUpStyle';
import {navigateToNestedRoute} from '../../navigators/RootNavigation';
import {getScreenParent} from '../../utils/NavigationHelper';
import {registerUser} from '../../store/actions/userAction';

export function SignUp({navigation}) {
  const dispatch = useDispatch();

  const [userInfo, setUserInfo] = useState({
    name: '',
    phone_number: '',
    email: '',
    password: '',
    confirm_password: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  const {error} = useSelector(state => state.user);

  const handleNavigation = (screen, params) => {
    navigateToNestedRoute(getScreenParent(screen), screen, params);
  };

  const changeUserInfo = (value, key) => {
    const info = {
      ...userInfo,
      [key]: value,
    };

    setUserInfo(info);
  };

  const signUp = () => {
    if (userInfo.password !== userInfo.confirm_password) {
      Alert.alert('Confirm Password is not matched');
      return;
    }
    setIsLoading(true);
    const {name, email, password, phone_number} = userInfo;
    dispatch(registerUser({name, email, password, phone_number}))
      .then(() => {
        if (!error) {
          handleNavigation('Login');
        }
      })
      .catch(() => {})
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.bodyContent}>
        <Text style={styles.largeText}>Let's get you registered!</Text>
        <Text style={styles.middleText}>Registered</Text>
        <Text style={styles.smallText}>Login with your information</Text>
        <View
          style={[
            styles.inputRow,
            error && error['name'] && styles.errorBorder,
          ]}>
          <TextInput
            placeholder="Full Name"
            placeholderTextColor="gray"
            style={styles.textInput}
            value={userInfo.name}
            onChangeText={value => changeUserInfo(value, 'name')}
          />
        </View>
        <View
          style={[
            styles.inputRow,
            error && error['phone_number'] && styles.errorBorder,
            {marginBottom: 10},
          ]}>
          <TextInput
            placeholder="Phone"
            placeholderTextColor="gray"
            style={styles.textInput}
            value={userInfo.phone_number}
            onChangeText={value => changeUserInfo(value, 'phone_number')}
          />
        </View>
        <View
          style={[
            styles.inputRow,
            error && error['email'] && styles.errorBorder,
            {marginBottom: 10, marginTop: 25},
          ]}>
          <TextInput
            placeholder="Email"
            placeholderTextColor="gray"
            style={styles.textInput}
            value={userInfo.email}
            onChangeText={value => changeUserInfo(value, 'email')}
          />
        </View>
        <View
          style={[
            styles.inputRow,
            error && error['password'] && styles.errorBorder,
            {marginBottom: 10, marginTop: 25},
          ]}>
          <TextInput
            placeholder="Password"
            placeholderTextColor="gray"
            secureTextEntry={true}
            style={styles.textInput}
            value={userInfo.password}
            onChangeText={value => changeUserInfo(value, 'password')}
          />
          <Octicons name="eye-closed" size={20} color="gray" />
        </View>
        <View
          style={[
            styles.inputRow,
            error && error['confirm_password'] && styles.errorBorder,
            {marginBottom: 10, marginTop: 25},
          ]}>
          <TextInput
            placeholder="Confirm Password"
            placeholderTextColor="gray"
            secureTextEntry={true}
            style={styles.textInput}
            value={userInfo.confirm_password}
            onChangeText={value => changeUserInfo(value, 'confirm_password')}
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
              fontSize: 15,
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
          <Text style={{fontFamily: 'Poppins-Italic', fontSize: 17}}>
            Already have an account?{' '}
          </Text>
          <TouchableOpacity onPress={() => handleNavigation('Login')}>
            <Text
              style={{
                fontFamily: 'Poppins-Italic',
                color: 'red',
                fontSize: 17,
              }}>
              Login Now
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      {isLoading && (
        <View style={styles.activityIndicator}>
          <ActivityIndicator size="large" color="blue" />
        </View>
      )}
    </SafeAreaView>
  );
}
