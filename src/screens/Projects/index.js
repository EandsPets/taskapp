import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  Image,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import shortid from 'shortid';
import ProgressCircle from 'react-native-progress-circle';
import {ProgressBar} from 'react-native-paper';
import {SelectList} from 'react-native-dropdown-select-list';
import styles from './projectsStyle';
import {TabScreenHeader} from '../../components';
import {TaskListComponent} from '../../components/Dashboard/TaskList';
import colors from '../../constants/colors';
import sizes from '../../constants/fontSize';
import {getUsers} from '../../store/actions/userAction';
import {completedHeader, inCompletedHeader} from '../../constants/const';
import {
  getTasksBeforeToday,
  getTodayTasks,
  getNextWeekTasks,
  getNextMonthTasks,
  getWithNoDueTasks,
  getPercent,
  getIncompleteTasksBeforeToday,
  getCompletedTasks,
} from '../../utils/helper';
import {getTasksByUser} from '../../store/actions/taskAction';

export function Projects(props) {
  const tasks = useSelector(state => state.tasks.tasks);
  const {users} = useSelector(state => state.user);
  const [isApiCalling, setIsApiCalling] = useState(false);
  const [selectedUser, setSelectedUser] = useState();

  const dispatch = useDispatch();

  useEffect(() => {
    setIsApiCalling(true);
    dispatch(getUsers(1)).then(() => {
      if (users.length > 0) {
        dispatch(getTasksByUser(users[0].id)).then(() =>
          setIsApiCalling(false),
        );
      } else {
        setIsApiCalling(false);
      }
    });
  }, [dispatch]);

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

  const changeUser = user_id => {
    const user = users.filter(user => user.id === user_id);
    setSelectedUser(user[0]);
    setIsApiCalling(true);
    dispatch(getTasksByUser(user_id)).then(() => setIsApiCalling(false));
  };

  return (
    <SafeAreaView style={styles.container}>
      <TabScreenHeader
        title="Reports"
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
                      fontSize: sizes.headerFontSize,
                      fontWeight: 'bold',
                      color: '#000',
                    },
                  ]}>
                  {selectedUser ? selectedUser.name : users[0]?.name}
                </Text>
                <Text style={styles.headerLeftText}>Daily Summary</Text>
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
            <SelectList
              setSelected={val => changeUser(val)}
              data={() => users.map(user => ({key: user.id, value: user.name}))}
              defaultOption={
                users.length > 0
                  ? {key: users[0].id, value: users[0].name}
                  : null
              }
              boxStyles={{marginHorizontal: 16, height: 50}}
              dropdownStyles={{marginHorizontal: 16}}
              labelStyles={{fontSize: 24}}
            />
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
                title={`Completed Tasks - ${getPercent(tasks)}%`}
                headers={completedHeader}
                tasks={getCompletedTasks(tasks)}
                workingOn={false}
              />
            </View>
            <View
              style={[styles.listContainer, {marginTop: 10, marginBottom: 30}]}>
              <TaskListComponent
                title="Incompleted Tasks"
                headers={inCompletedHeader}
                tasks={getIncompleteTasksBeforeToday(tasks)}
                workingOn={false}
              />
            </View>
          </ScrollView>
        </View>
      </View>
      {isApiCalling && (
        <View style={styles.activityIndicator}>
          <ActivityIndicator size="large" color="blue" />
        </View>
      )}
    </SafeAreaView>
  );
}
