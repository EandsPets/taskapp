import {StyleSheet} from 'react-native';
import appTheme from '../../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    display: 'flex',
    alignItems: 'center',
  },
  boldText: {
    fontWeight: 'bold',
    fontSize: 18,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 10,
  },
  textInput: {
    height: 40,
    width: '100%',
    borderRadius: 5,
    borderColor: appTheme.INACTIVE_COLOR,
    borderWidth: 1,
    marginBottom: 20,
    fontSize: 16,
    paddingVertical: 5,
    paddingHorizontal: 7,
  },
  teamTextWrapper: {width: '100%', marginBottom: 10, marginTop: 10},
  teamText: {
    fontSize: 16,
    color: 'gray',
    paddingLeft: 7,
  },
  btnWrapper: {
    marginTop: 'auto',
    height: 45,
    backgroundColor: appTheme.PRIMARY_COLOR,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    borderRadius: 5,
  },
  btnText: {
    color: '#fff',
    fontSize: 16,
  },
  teamSection: {height: 150, width: '100%'},
  teamWrapper: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  activeTeamWrapper: {
    backgroundColor: appTheme.INACTIVE_COLOR,
  },
  memberWrapper: {
    width: '23%',
    display: 'flex',
    alignItems: 'center',
    marginBottom: 10,
    paddingVertical: 5,
    borderRadius: 5,
    marginHorizontal: 2.5,
  },
  memberPhoto: {height: 40, width: 40, borderRadius: 50},
  memberName: {width: 60, textAlign: 'center', color: '#000', fontSize: 13},
  activeMemberName: {color: '#fff'},
});

export default styles;
