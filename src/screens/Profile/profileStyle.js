import {StyleSheet, Dimensions} from 'react-native';
import appTheme from '../../constants/colors';
const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  headerTitle: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  leftHeaderWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileDetailsSection: {
    paddingTop: 40,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    borderBottomStartRadius: 30,
    borderBottomEndRadius: 30,
    paddingBottom: 30,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.5,
    shadowRadius: 1,
    elevation: 1,
  },
  profileInfoSection: {
    display: 'flex',
    width: 150,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  profilePhoto: {
    height: 150,
    width: 150,
    borderRadius: 80,
    borderWidth: 1,
    borderColor: 'red',
  },
  profileCenterSection: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  nameText: {fontWeight: 'bold', fontSize: 16, marginBottom: 5},
  designationText: {
    fontSize: 12,
    color: appTheme.INACTIVE_COLOR,
    marginBottom: 20,
  },
  editProfileWrapper: {
    backgroundColor: appTheme.PRIMARY_COLOR,
    paddingHorizontal: 25,
    borderRadius: 5,
    paddingVertical: 10,
    marginTop: 20,
  },
  editProfileText: {
    color: '#fff',
  },
  membersWrapper: {
    paddingHorizontal: 16,
    paddingTop: 30,
  },
  exploreContent: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  activityIndicator: {
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.1)',
    width: width,
    height: height,
    zIndex: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
