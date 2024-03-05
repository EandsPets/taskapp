import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import PhoneInput from 'react-native-international-phone-number';
import styles from './verifyInputStyle';
import {navigateToNestedRoute} from '../../navigators/RootNavigation';
import {getScreenParent} from '../../utils/NavigationHelper';
import {registerUser} from '../../store/actions/userAction';

export function VerifyInput({navigation}) {
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(false);
  const [inputValue, setInputValue] = useState(false);

  const handleNavigation = (screen, params) => {
    const phoneRegex = /^\+(?:[0-9] ?){6,14}[0-9]$/;
    const phoneNumber =
      selectedCountry.callingCode + inputValue.replace(' ', '');
    const isValid = phoneRegex.test(phoneNumber);

    if (isValid) {
      navigateToNestedRoute(getScreenParent(screen), screen, {
        phone_number: selectedCountry.callingCode + ' ' + inputValue,
      });
    } else {
      Alert.alert('Please input correct phone number!');
    }
  };

  const handleSelectedCountry = country => {
    setSelectedCountry(country);
  };

  const handleInputValue = phoneNumber => {
    setInputValue(phoneNumber);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.bodyContent}>
        <Text style={styles.largeText}>Welcomes you on board</Text>
        <Text style={styles.middleText}>Let's get going!</Text>
        <Text style={styles.smallText}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
        </Text>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <Text style={{fontFamily: 'Poppins-Regular', fontSize: 15}}>
            Mobile Number
          </Text>
          <Text
            style={{
              fontFamily: 'Poppins-Regular',
              color: 'red',
              fontSize: 15,
            }}>
            *
          </Text>
        </View>
        <PhoneInput
          value={inputValue}
          defaultCountry="US"
          placeholder="Enter the mobile number"
          onChangePhoneNumber={handleInputValue}
          selectedCountry={selectedCountry}
          onChangeSelectedCountry={handleSelectedCountry}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            paddingTop: 10,
          }}>
          <Text style={{fontFamily: 'Poppins-Italic', fontSize: 12}}>
            You will receive an OTP verification
          </Text>
        </View>
        <TouchableOpacity
          style={styles.loginBtnWrapper}
          onPress={() => handleNavigation('VerifyConfirm')}>
          <Text style={styles.loginBtnText}>Next</Text>
        </TouchableOpacity>
      </ScrollView>
      {isLoading && (
        <View style={styles.activityIndicator}>
          <ActivityIndicator size="large" color="blue" />
        </View>
      )}
    </SafeAreaView>
  );
}
