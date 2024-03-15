import React, {useContext, useState, useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
  Image,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import ProgressCircle from 'react-native-progress-circle';
import {ProgressBar} from 'react-native-paper';
import {useSelector, useDispatch} from 'react-redux';
import moment from 'moment';
import shortid from 'shortid';
import styles from './dashboardStyle';
import {TabScreenHeader} from '../../components';
import {TaskListComponent} from '../../components/Dashboard/TaskList';
import colors from '../../constants/colors';
import fontSize from '../../constants/fontSize';
import {
  workingOnHeader,
  dashboardHeader,
  withNoDueDateHeader,
} from '../../constants/const';
import {getTasksByUser} from '../../store/actions/taskAction';
import {getHeaders} from '../../store/actions/headerAction.js';
import {getUsers} from '../../store/actions/userAction';
import {
  getWorkingTasks,
  getTasksBeforeToday,
  getTodayTasks,
  getNextWeekTasks,
  getNextMonthTasks,
  getWithNoDueTasks,
  getPercent,
} from '../../utils/helper';

export function Dashboard(props) {
  const {me, users} = useSelector(state => state.user);
  console.log('--------------', me);
  const tasks = useSelector(state => state.tasks.tasks);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        await Promise.all([
          dispatch(getHeaders(1)),
          dispatch(getTasksByUser(1)),
          dispatch(getUsers(1)),
        ]);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        console.error('Error dispatching actions:', error);
      }
    };

    fetchData();
  }, [dispatch]);

  const handleNavigation = (screen, params) => {
    props?.navigation.navigate('BottomStack', {screen: screen});
  };

  const firstCardData = [
    {
      img: require('../../assets/imgs/rocket.png'),
      count: tasks.length,
      text: 'All',
      color: colors.PRIMARY_COLOR,
    },
    {
      img: require('../../assets/imgs/chart.png'),
      count: getTasksBeforeToday(tasks).count,
      text: 'Past',
      color: colors.HIGH_COLOR,
    },
    {
      img: require('../../assets/imgs/today.png'),
      count: getTodayTasks(tasks).count,
      text: 'Today',
      color: colors.GREEN_COLOR,
    },
  ];

  const secondCardData = [
    {
      img: require('../../assets/imgs/notify.png'),
      count: getNextWeekTasks(tasks).count,
      text: 'Next Week',
      color: colors.IN_PROGRESS_COLOR,
    },
    {
      img: require('../../assets/imgs/layer.png'),
      count: getNextMonthTasks(tasks).count,
      text: 'Later',
      color: colors.LAYER_COLOR,
    },
    {
      img: require('../../assets/imgs/award.png'),
      count: getWithNoDueTasks(tasks).count,
      text: 'Without a date',
      color: colors.HIGH_COLOR,
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <TabScreenHeader
        title="Dashboard"
        isSearchBtnVisible={true}
        isMoreBtnVisible={false}
      />
      <View style={styles.contentBody}>
        <View style={styles.tasksSection}>
          <ScrollView style={[styles.tasksBody, {marginTop: -15}]}>
            <View style={styles.flexRow}>
              <View style={{flex: 1, justifyContent: 'center'}}>
                <Text
                  style={[
                    styles.headerLeftText,
                    {
                      fontSize: fontSize.headerFontSize,
                      fontWeight: 'bold',
                      color: '#000',
                    },
                  ]}>
                  {moment().format('dddd')}
                </Text>
                <Text style={styles.headerLeftText}>
                  {moment().format('MMM. Do, YYYY')}
                </Text>
              </View>
              <View style={styles.progressContainer}>
                <ProgressCircle
                  key={shortid.generate()}
                  percent={getPercent(tasks)}
                  radius={50}
                  borderWidth={8}
                  color="#05ce66"
                  shadowColor="#d9d9d9"
                  bgColor="#fff">
                  <Text style={styles.circleText}>{getPercent(tasks)}</Text>
                </ProgressCircle>
              </View>
            </View>
            <Text style={styles.progressText}>My Progress</Text>
            <View style={styles.cardContainer}>
              {firstCardData.map(data => (
                <View style={styles.singleExplore} key={shortid.generate()}>
                  <View style={styles.circle}>
                    <Image source={data.img} />
                  </View>
                  <Text style={[styles.exploreText, {color: '#000'}]}>
                    {data.count}
                  </Text>
                  <Text style={styles.subExploreText}>{data.text}</Text>
                  <ProgressBar
                    progress={0.5}
                    color={data.color}
                    style={styles.progressBar}
                  />
                </View>
              ))}
            </View>
            <View style={styles.cardContainer}>
              {secondCardData.map(data => (
                <View style={styles.singleExplore} key={shortid.generate()}>
                  <View style={styles.circle}>
                    <Image source={data.img} />
                  </View>
                  <Text style={[styles.exploreText, {color: '#000'}]}>
                    {data.count}
                  </Text>
                  <Text style={styles.subExploreText}>{data.text}</Text>
                  <ProgressBar
                    progress={0.5}
                    color={data.color}
                    style={styles.progressBar}
                  />
                </View>
              ))}
            </View>
            <View style={styles.listContainer}>
              <TaskListComponent
                title="Working on"
                headers={workingOnHeader}
                tasks={getWorkingTasks(tasks)}
                workingOn={true}
              />
            </View>
            <View style={[styles.listContainer, {marginTop: 10}]}>
              <TaskListComponent
                title="Today"
                headers={dashboardHeader}
                tasks={getTodayTasks(tasks)}
                workingOn={false}
              />
              <TouchableOpacity
                style={styles.createNewTask}
                onPress={() => handleNavigation('Create Task')}>
                <AntDesign name="plus" size={18} />
                <Text style={styles.addTaskText}>Add Task</Text>
              </TouchableOpacity>
            </View>
            <View style={[styles.listContainer, {marginTop: 10}]}>
              <TaskListComponent
                title="Next Week"
                headers={dashboardHeader}
                tasks={getNextWeekTasks(tasks)}
                workingOn={false}
              />
              <TouchableOpacity
                style={styles.createNewTask}
                onPress={() => handleNavigation('Create Task')}>
                <AntDesign name="plus" size={18} />
                <Text style={styles.addTaskText}>Add Task</Text>
              </TouchableOpacity>
            </View>
            <View style={[styles.listContainer, {marginTop: 10}]}>
              <TaskListComponent
                title="Next Month"
                headers={dashboardHeader}
                tasks={getNextMonthTasks(tasks)}
                workingOn={false}
              />
              <TouchableOpacity
                style={styles.createNewTask}
                onPress={() => handleNavigation('Create Task')}>
                <AntDesign name="plus" size={18} />
                <Text style={styles.addTaskText}>Add Task</Text>
              </TouchableOpacity>
            </View>
            <View
              style={[styles.listContainer, {marginTop: 10, marginBottom: 30}]}>
              <TaskListComponent
                title="With no due date"
                headers={withNoDueDateHeader}
                tasks={getWithNoDueTasks(tasks)}
                workingOn={false}
              />
              <TouchableOpacity
                style={styles.createNewTask}
                onPress={() => handleNavigation('Create Task')}>
                <AntDesign name="plus" size={18} />
                <Text style={styles.addTaskText}>Add Task</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
          {isLoading && (
            <View style={styles.activityIndicator}>
              <ActivityIndicator size="large" color="blue" />
            </View>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
}
