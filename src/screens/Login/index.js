import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ActivityIndicator,
  TextInput,
  Alert,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Octicons from 'react-native-vector-icons/Octicons';
import Entypo from 'react-native-vector-icons/Entypo';
import styles from './loginStyle';
import {loginUser} from '../../store/actions/userAction';

export function Login({navigation}) {
  const dispatch = useDispatch();

  const handleNavigation = (screen, params) => {
    navigation.navigate('BottomStack', {screen: screen});
  };

  const {error} = useSelector(state => state.user);
  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
  });

  const [isLoading, setIsLoading] = useState(false);

  const changeUserInfo = (value, key) => {
    const info = {
      ...userInfo,
      [key]: value,
    };

    setUserInfo(info);
  };

  const login = () => {
    if (userInfo.email.length === 0 || userInfo.password.length === 0) {
      Alert.alert('Please enter all credentials');
      return;
    }
    setIsLoading(true);
    const {email, password} = userInfo;
    dispatch(loginUser({email, password}))
      .then(() => {
        if (!error) {
          handleNavigation('My Tasks');
        }

        if (typeof error === 'string') Alert.alert(error);
      })
      .catch(() => {})
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.bodyContent}>
        <Text style={styles.largeText}>Let's get you signed in!</Text>
        <Text style={styles.middleText}>Login</Text>
        <Text style={styles.smallText}>Login with your information</Text>
        <View
          style={[
            styles.inputRow,
            error && error['email'] && styles.errorBorder,
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
          style={{
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
            height: 30,
            marginBottom: 35,
          }}>
          <Text style={styles.savePwdText}>Forget Password?</Text>
        </View>
        <TouchableOpacity
          style={styles.loginBtnWrapper}
          onPress={() => login()}>
          <Text style={styles.loginBtnText}>Login</Text>
        </TouchableOpacity>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
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
              fontSize: 15,
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
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
          <Entypo name="facebook-with-circle" size={80} color="#006093" />
          <Entypo name="google--with-circle" size={80} color="#dd4a5c" />
          <Entypo name="twitter-with-circle" size={80} color="#589bfc" />
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <Text style={{fontFamily: 'Poppins-Italic', fontSize: 17}}>
            Already have an account?{' '}
          </Text>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('SingleStack', {screen: 'SignUp'})
            }>
            <Text
              style={{
                fontFamily: 'Poppins-Italic',
                color: 'red',
                fontSize: 17,
              }}>
              Regster Now
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      {isLoading && (
        <View style={styles.activityIndicator}>
          <ActivityIndicator size="large" color="blue" />
        </View>
      )}
    </SafeAreaView>
  );
}
