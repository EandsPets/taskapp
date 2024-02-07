import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
import Entypo from 'react-native-vector-icons/Entypo';
import styles from './loginStyle';
import {navigateToNestedRoute} from '../../navigators/RootNavigation';
import {getScreenParent} from '../../utils/NavigationHelper';
import colors from '../../constants/colors';

export function Login({navigation}) {
  const handleNavigation = (screen, params) => {
    navigation.navigate('BottomStack', {screen: screen});
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.bodyContent}>
        <Text style={styles.largeText}>Let's get you signed in!</Text>
        <Text style={styles.middleText}>Login</Text>
        <Text style={styles.smallText}>Login with your information</Text>
        <View style={styles.inputRow}>
          <Ionicons name="person-outline" size={20} color="gray" />
          <TextInput
            placeholder="Email/Username"
            placeholderTextColor="gray"
            style={styles.textInput}
          />
        </View>
        <View style={[styles.inputRow, {marginBottom: 10}]}>
          <MaterialIcons name="lock-outline" size={20} color="gray" />
          <TextInput
            placeholder="Password"
            placeholderTextColor="gray"
            secureTextEntry={true}
            style={styles.textInput}
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
          onPress={() => handleNavigation('My Tasks')}>
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
          <Text style={{fontFamily: 'Poppins-Italic'}}>
            Already have an account?{' '}
          </Text>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('SingleStack', {screen: 'SignUp'})
            }>
            <Text style={{fontFamily: 'Poppins-Italic', color: 'red'}}>
              Regster Now
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
