import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';
import sizes from '../../constants/fontSize';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  flexRow: {
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: 16,
  },
  headerLeftText: {
    fontFamily: 'Poppins-Regular',
    marginRight: 5,
    fontSize: sizes.subHeaderFontSize,
  },
  cardContainer: {
    flex: 1,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  circleText: {
    fontSize: sizes.headerFontSize,
    fontFamily: 'Poppins-Regular',
    color: 'black',
  },
  progressText: {
    alignSelf: 'center',
    fontFamily: 'Poppins-Regular',
    fontSize: sizes.listHeaderFontSize,
    color: '#000',
    fontWeight: 'bold',
  },
  tasksSection: {
    paddingTop: 30,
    marginBottom: 60,
  },
  singleExplore: {
    height: 160,
    width: '31%',
    shadowColor: '#333',
    elevation: 10,
    backgroundColor: '#fff',
    marginBottom: 20,
    borderRadius: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-start',
  },
  progressContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  progressBar: {
    width: 100,
    height: 4,
    backgroundColor: '#d9d9d9',
    borderRadius: 5,
    marginTop: 5,
  },
  circle: {
    height: 50,
    width: 50,
    shadowColor: '#333',
    elevation: 10,
    backgroundColor: '#fff',
    borderRadius: 25,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  exploreText: {
    fontWeight: 'bold',
    fontSize: sizes.cardTitleFontSize,
  },
  subExploreText: {
    fontSize: sizes.normalFontSize,
  },
  listContainer: {
    backgroundColor: colors.LIST_BG_COLOR,
    paddingVertical: 20,
    paddingHorizontal: 16,
  },
  addTaskText: {
    fontFamily: 'Poppins-Bold',
    fontSize: sizes.normalFontSize,
  },
  createNewTask: {
    width: '100%',
    height: 50,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingLeft: 20,
    backgroundColor: '#fff',
    marginTop: 10,
    borderRadius: 5,
  },
});

export default styles;
