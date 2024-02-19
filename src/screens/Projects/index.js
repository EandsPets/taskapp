import React, {useState, useContext} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import {useSelector} from 'react-redux';
import shortid from 'shortid';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import ProgressCircle from 'react-native-progress-circle';
import {ProgressBar} from 'react-native-paper';
import {SelectList} from 'react-native-dropdown-select-list';
import styles from './projectsStyle';
import {TabScreenHeader} from '../../components';
import {TaskListComponent} from '../../components/Dashboard/TaskList';
import colors from '../../constants/colors';
import sizes from '../../constants/fontSize';
import {loadTasks} from '../../store/slices/taskSlice';

export function Projects(props) {
  const tasks = useSelector(state => state.tasks);

  const users = [
    {key: '1', value: 'Aishas'},
    {key: '2', value: 'Jhone'},
    {key: '3', value: 'Jain'},
  ];

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
                  Aisha's
                </Text>
                <Text style={styles.headerLeftText}>Daily Summary</Text>
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
            <SelectList
              setSelected={val => {}}
              data={users}
              defaultOption={users[0]}
              boxStyles={{marginHorizontal: 16, height: 50}}
              dropdownStyles={{marginHorizontal: 16}}
              labelStyles={{fontSize: 24}}
            />
            <View style={[styles.cardContainer, {marginTop: 30}]}>
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
                title={`Completed Tasks`}
                tasks={tasks.filter(task => task.status === 'Completed')}
                workingOn={false}
              />
            </View>
            <View
              style={[styles.listContainer, {marginTop: 10, marginBottom: 30}]}>
              <TaskListComponent
                title="Incompleted Tasks"
                tasks={tasks.filter(task => task.status !== 'Completed')}
                workingOn={false}
              />
            </View>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
}
