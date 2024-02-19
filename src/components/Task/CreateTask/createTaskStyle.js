import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../../constants/colors';
import sizes from '../../../constants/fontSize';
const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    backgroundColor: '#fff',
  },
  cardContainer: {
    width: '100%',
    shadowColor: '#333',
    elevation: 5,
    backgroundColor: '#fff',
    marginBottom: 20,
    borderRadius: 10,
    display: 'flex',
    alignSelf: 'flex-start',
    marginTop: 25,
    marginLeft: 2,
    marginRight: 2,
    padding: 16,
  },
  textInput: {
    height: 50,
    borderColor: colors.HIGH_COLOR,
    borderBottomWidth: 2,
    fontFamily: 'Poppins-Bold',
    color: 'black',
    fontSize: sizes.listHeaderFontSize,
    paddingVertical: 5,
  },
  detailInput: {
    fontFamily: 'Poppins-Regular',
    fontSize: sizes.normalFontSize,
    paddingVertical: 10,
  },
  imageContainer: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: colors.BORDER_COLOR,
    padding: 16,
  },
  assignText: {
    fontFamily: 'Poppins-Bold',
    fontSize: sizes.listHeaderFontSize,
    color: 'black',
  },
  timePickerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 25,
    borderWidth: 1,
    borderColor: colors.BORDER_COLOR,
    borderRadius: 10,
    width: '49%',
    height: 50,
    paddingHorizontal: 10,
  },
  text: {
    fontFamily: 'Poppins-Regular',
    fontSize: sizes.normalFontSize,
    // color: colors.``
  },
  btnWrapper: {
    height: 50,
    backgroundColor: colors.PRIMARY_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    borderRadius: 5,
  },
  btnText: {
    fontFamily: 'Poppins-Bold',
    color: '#fff',
    fontSize: 20,
  },
  teamWrapper: {
    display: 'flex',
    height: 110,
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingVertical: 16,
  },
  activeTeamWrapper: {
    backgroundColor: colors.PRIMARY_COLOR,
    width: 70,
  },
  memberWrapper: {
    width: 80,
    display: 'flex',
    alignItems: 'center',
    marginBottom: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  memberPhoto: {height: 60, width: 60, borderRadius: 50},
  memberName: {width: 60, textAlign: 'center', color: '#000', fontSize: 13},
  activeMemberName: {color: '#fff'},
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
  errorBorder: {
    borderWidth: 1,
    borderColor: 'red',
  },
  priorityContainer: {
    width: 200,
    backgroundColor: colors.LIST_BG_COLOR,
    borderWidth: 0,
  },
});

export default styles;
