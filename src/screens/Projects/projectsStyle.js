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
  contentTitle: {
    fontSize: 22,
    fontFamily: 'Poppins-Medium',
    fontWeight: 'bold',
    marginBottom: 30,
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
    marginBottom: 20,
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
    marginBottom: 10,
    borderRadius: 25,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  listContainer: {
    backgroundColor: colors.LIST_BG_COLOR,
    paddingVertical: 20,
    paddingHorizontal: 16,
  },
  exploreText: {
    fontWeight: 'bold',
    fontSize: sizes.cardTitleFontSize,
  },
  subExploreText: {
    fontSize: sizes.normalFontSize,
  },
});

export default styles;
