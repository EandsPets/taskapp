import React, {useContext} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image,
  TextInput,
  Alert,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './profileStyle';
import appTheme from '../../constants/colors';
import {AuthContext} from '../../context';
import {TabScreenHeader} from '../../components';
import {UserListComponent} from '../../components/User';
import {useSelector} from 'react-redux';

export function Profile({navigation}) {
  const {me, users} = useSelector(state => state.user);
  const {state, dispatch} = useContext(AuthContext);

  const handleBackButton = () => {
    navigation?.goBack();
  };

  const editPhoto = () => {
    console.log('clicked');
  };

  return (
    <SafeAreaView style={styles.container}>
      <TabScreenHeader
        leftComponent={() => (
          <View style={styles.leftHeaderWrapper}>
            <TouchableOpacity
              onPress={() => handleBackButton('Members')}
              style={styles.backButton}>
              <Ionicons name="arrow-back-outline" size={25} color="#000" />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Profile</Text>
          </View>
        )}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <View style={styles.profileDetailsSection}>
            <View style={styles.profileInfoSection}>
              <Image
                style={styles.profilePhoto}
                source={{
                  uri: me?.photo,
                }}
              />
            </View>
            <View style={styles.profileCenterSection}>
              <Text style={styles.nameText}>{me?.name}</Text>
              <Text style={styles.designationText}>{me?.designation}</Text>
              <TouchableOpacity
                style={styles.editProfileWrapper}
                onPress={editPhoto}>
                <Text style={styles.editProfileText}>Edit Photo</Text>
              </TouchableOpacity>
            </View>
          </View>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.membersWrapper}>
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
                    value={me?.name}
                  />
                </View>
              </View>
              <View style={{marginTop: 20}}>
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
                    value={me?.email}
                  />
                </View>
              </View>
              <View style={{marginTop: 20}}>
                <Text style={{fontSize: 18}}>Phone Number</Text>
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
                    value={me?.email}
                  />
                </View>
              </View>
              <View style={{marginTop: 50}} />
              <UserListComponent users={users} />
            </View>
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
