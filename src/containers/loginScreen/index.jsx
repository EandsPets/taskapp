import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {TextInput, Button, Snackbar, Text} from 'react-native-paper';
import {connect} from 'react-redux';
import {login} from '../../actions/user';
import {useNavigation} from '@react-navigation/native';

const LoginScreen = ({login}) => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [snackbarVisible, setSnackbarVisible] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const handleLogin = () => {
    if (username === '' || password === '') {
      setSnackbarMessage('Please enter both username and password');
      setSnackbarVisible(true);
    } else {
      login(username, password);
      navigation.navigate('TavRouter', {screen: 'DashboardScreen'});
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        label="Username"
        value={username}
        onChangeText={text => setUsername(text)}
        style={styles.input}
      />
      <TextInput
        label="Password"
        value={password}
        onChangeText={text => setPassword(text)}
        secureTextEntry
        style={styles.input}
      />
      <Button mode="contained" onPress={handleLogin} style={styles.button}>
        Login
      </Button>

      <Snackbar
        visible={snackbarVisible}
        onDismiss={() => setSnackbarVisible(false)}
        action={{
          label: 'OK',
          onPress: () => {},
        }}>
        {snackbarMessage}
      </Snackbar>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    marginBottom: 16,
  },
  button: {
    marginTop: 16,
  },
  regitser: {
    paddingTop: 15,
    textAlign: 'center',
  },
});

const mapDispatchToProps = dispatch => ({
  login: (username, password) => dispatch(login(username, password)),
});

export default connect(null, mapDispatchToProps)(LoginScreen);
