import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import shortid from 'shortid';
import styles from './verifyConfirmStyle';
import {navigateToNestedRoute} from '../../navigators/RootNavigation';
import {getScreenParent} from '../../utils/NavigationHelper';
import {verifyOTP} from '../../store/actions/userAction';

export function VerifyConfirm({navigation, route}) {
  const dispatch = useDispatch();

  const textInputRefs = useRef([]);

  const {error} = useSelector(state => state.user);

  const [isLoading, setIsLoading] = useState(false);
  const [vCodes, setVCodes] = useState([null, null, null, null, null, null]);

  const handleNavigation = (screen, params) => {
    navigateToNestedRoute(getScreenParent(screen), screen, params);
  };

  const changeCodeChange = (value, index) => {
    let newCodes = [...vCodes];
    newCodes[index] = value;
    setVCodes(newCodes);

    if (value !== null && index < vCodes.length - 1) {
      textInputRefs.current[index + 1].focus();
    }
  };

  const verify = () => {
    const otp = vCodes.join('');
    setIsLoading(true);
    dispatch(
      verifyOTP({
        otp: otp,
        phone_number: route.params.phone_number,
      }),
    )
      .then(() => {
        if (!error) {
          handleNavigation('Login');
        } else {
          Alert.alert(error);
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
        <Text style={styles.largeText}>Welcomes you on board</Text>
        <Text style={styles.middleText}>Thanks!</Text>
        <Text style={styles.smallText}>Please verify your mobile number</Text>
        <Text style={{fontFamily: 'Poppins-Regular', fontSize: 15}}>
          Enter the 6 digit code sent to you
        </Text>
        <Text style={{fontFamily: 'Poppins-Italic', fontSize: 15}}>
          at {route.params?.phone_number}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingVertical: 50,
          }}>
          {vCodes.map((code, index) => (
            <TextInput
              key={shortid.generate()}
              style={styles.box}
              value={code}
              maxLength={1}
              keyboardType="numeric"
              onChangeText={value => changeCodeChange(value, index)}
              ref={ref => (textInputRefs.current[index] = ref)}
            />
          ))}
        </View>
        <TouchableOpacity
          style={styles.loginBtnWrapper}
          onPress={() => verify()}>
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
