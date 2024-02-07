import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';
import sizes from '../../constants/fontSize';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingBottom: 40,
  },
  backButton: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: 16,
    paddingHorizontal: 20,
  },
  backText: {
    fontSize: 17,
    marginLeft: 10,
    color: 'gray',
  },
  bodyContent: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  largeText: {
    fontFamily: 'Poppins-Regular',
    fontSize: sizes.subHeaderFontSize,
    color: 'black',
    lineHeight: 32,
    marginBottom: 50,
  },
  middleText: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: 'black',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  smallText: {
    fontSize: 14,
    color: colors.sizes,
    color: colors.fontSizeR,
    fontWeight: '500',
    marginBottom: 40,
  },
  inputRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    marginBottom: 35,
    height: 40,
  },
  textInput: {
    flex: 1,
    fontSize: 16,
    color: '#000',
    height: 45,
  },
  savePwdRow: {
    marginTop: 20,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 40,
  },
  savePwdText: {
    right: 0,
    fontFamily: 'Poppins-Italic',
  },
  loginBtnWrapper: {
    backgroundColor: '#6161ff',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    borderRadius: 7,
    marginBottom: 15,
  },
  loginBtnText: {fontWeight: 'bold', fontSize: 16, color: '#fff'},
  signUpBtnWrapper: {
    borderColor: colors.sizes,
    borderColor: colors.fontSizeR,
    borderWidth: 1,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 45,
    borderRadius: 7,
  },
  signUpBtnText: {fontWeight: 'bold', fontSize: 16, color: '#000000aa'},
});

export default styles;
