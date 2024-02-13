import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import ProgressCircle from 'react-native-progress-circle';
import {ProgressBar, MD3Colors} from 'react-native-paper';
import {useSelector, useDispatch} from 'react-redux';
import moment from 'moment';
import styles from './dashboardStyle';
import {TabScreenHeader} from '../../components';
import {TaskListComponent} from '../../components/Dashboard/TaskList';
import colors from '../../constants/colors';
import fontSize from '../../constants/fontSize';
import {loadTasks} from '../../store/slices/tasksSlice';
// import {useGetTasksQuery} from '../../store/api/taskApi';

export function Dashboard(props) {
  const tasks = useSelector(state => state.tasks);
  const dispatch = useDispatch();
  // const {tasks: tasks, isFetching, isSuccess} = useGetTasksQuery();

  const handleNavigation = (screen, params) => {
    props?.navigation.navigate('BottomStack', {screen: screen});
  };

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
                  percent={60}
                  radius={50}
                  borderWidth={8}
                  color="#05ce66"
                  shadowColor="#d9d9d9"
                  bgColor="#fff">
                  <Text style={styles.circleText}>{'60%'}</Text>
                </ProgressCircle>
              </View>
            </View>
            <Text style={styles.progressText}>My Progress</Text>
            <View style={styles.cardContainer}>
              {[1, 2, 3].map(() => (
                <View style={styles.singleExplore}>
                  <View style={styles.circle}>
                    <SimpleLineIcons
                      name="settings"
                      size={22}
                      color={colors.PRIMARY_COLOR}
                    />
                  </View>
                  <Text style={[styles.exploreText, {color: '#000'}]}>35</Text>
                  <Text style={styles.subExploreText}>Next Week</Text>
                  <ProgressBar
                    progress={0.5}
                    color={colors.PRIMARY_COLOR}
                    style={styles.progressBar}
                  />
                </View>
              ))}
            </View>
            <View style={styles.cardContainer}>
              {[1, 2, 3].map(() => (
                <View style={styles.singleExplore}>
                  <View style={styles.circle}>
                    <SimpleLineIcons
                      name="settings"
                      size={22}
                      color={colors.PRIMARY_COLOR}
                    />
                  </View>
                  <Text style={[styles.exploreText, {color: '#000'}]}>35</Text>
                  <Text style={styles.subExploreText}>Next Week</Text>
                </View>
              ))}
            </View>
            <View style={styles.listContainer}>
              <TaskListComponent
                title="Working on"
                tasks={tasks}
                workingOn={true}
              />
            </View>
            <View style={[styles.listContainer, {marginTop: 10}]}>
              <TaskListComponent
                title="Today"
                tasks={tasks}
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
                tasks={tasks}
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
                tasks={tasks}
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
                tasks={tasks}
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
        </View>
      </View>
    </SafeAreaView>
  );
}
