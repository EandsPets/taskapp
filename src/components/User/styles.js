import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  userList: {
    marginBottom: 50,
    height: 300,
  },
  cellWidth: {
    width: 100,
    justifyContent: 'center',
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
});

export default styles;
