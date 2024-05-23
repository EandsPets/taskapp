import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import {useSelector, useDispatch} from 'react-redux';
import styles from './profileStyle';
import appTheme from '../../constants/colors';
import {TabScreenHeader} from '../../components';
import {UserListComponent} from '../../components/User';
import {updatePhoto} from '../../store/actions/userAction';
import {serverUrl} from '../../utils/helper';

export function Profile({navigation}) {
  const {me, users} = useSelector(state => state.user);
  const [photo, setPhoto] = useState(null);
  const [isPhotoChanged, setIsPhotoChanged] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (me) setPhoto({uri: serverUrl + me.photo});
  }, [me]);

  const createFormData = photo => {
    const data = new FormData();

    data.append('photo', {
      uri: Platform.OS === 'ios' ? photo.uri.replace('file://', '') : photo.uri,
      type: photo.type || 'image/jpeg',
      name: photo.fileName || 'photo.jpg',
    });

    return data;
  };

  const handleChoosePhoto = () => {
    const options = {
      title: 'Select Image',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    launchImageLibrary({mediaType: 'photo'}, response => {
      if (response.didCancel) {
        setIsPhotoChanged(false);
      } else if (response) {
        setPhoto(response.assets[0]);
        setIsPhotoChanged(true);
      }
    });
  };

  const handleUploadPhoto = () => {
    const data = createFormData(photo);
    data.append('user_id', me.id);
    if (!isPhotoChanged) return;
    setIsLoading(true);
    dispatch(updatePhoto(data))
      .then(() => {
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
      });
  };

  const cancelEditPhoto = () => {
    setIsPhotoChanged(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <TabScreenHeader
        title="Profile"
        isSearchBtnVisible={false}
        isMoreBtnVisible={false}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <View style={styles.profileDetailsSection}>
            <TouchableOpacity
              style={styles.profileInfoSection}
              onPress={() => handleChoosePhoto()}>
              <Image
                style={styles.profilePhoto}
                source={{
                  uri: photo?.uri,
                }}
              />
            </TouchableOpacity>
            {isPhotoChanged && (
              <View style={styles.profileCenterSection}>
                <TouchableOpacity
                  style={styles.editProfileWrapper}
                  onPress={handleUploadPhoto}>
                  <Text style={styles.editProfileText}>Upload Photo</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.editProfileWrapper, {marginLeft: 20}]}
                  onPress={cancelEditPhoto}>
                  <Text style={styles.editProfileText}>Cancel Edit</Text>
                </TouchableOpacity>
              </View>
            )}
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
                    placeholder="Phone number"
                    placeholderTextColor={appTheme.INACTIVE_COLOR}
                    editable={false}
                    value={me?.phone_number}
                  />
                </View>
              </View>
              <View style={{marginTop: 50}} />
              <UserListComponent users={users} />
            </View>
          </ScrollView>
          {isLoading && (
            <View style={styles.activityIndicator}>
              <ActivityIndicator size="large" color="blue" />
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
