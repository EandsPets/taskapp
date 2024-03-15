import {StyleSheet} from 'react-native';
import appTheme from '../../constants/colors';

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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  profilePhoto: {
    height: 80,
    width: 80,
    borderRadius: 50,
  },
  profileCenterSection: {
    display: 'flex',
    alignItems: 'center',
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
});

export default styles;
