import {StyleSheet} from 'react-native';
import colors from '../../../constants/colors';
import sizes from '../../../constants/fontSize';

const styles = StyleSheet.create({
  tasksList: {
    marginBottom: 50,
    height: 300,
  },
  cellWidth: {
    width: 100,
    justifyContent: 'center',
    fontSize: sizes.normalFontSize,
  },
  cellText: {
    fontFamily: 'Poppins-Regular',
    fontSize: sizes.normalFontSize,
  },
  memberPhoto: {
    height: 40,
    width: 40,
    borderRadius: 50,
    marginLeft: -10,
  },
  scrollViewContainer: {
    borderWidth: 1,
    borderRadius: 5,
    borderRightColor: '#999',
    borderTopColor: '#999',
    borderBottomColor: '#999',
    borderLeftWidth: 5,
    borderLeftColor: colors.PRIMARY_COLOR,
    backgroundColor: '#fff',
  },
  scrollViewWithoutHeader: {
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  listTitle: {
    fontFamily: 'Poppins-Bold',
    fontSize: sizes.listHeaderFontSize,
  },
});

export default styles;
