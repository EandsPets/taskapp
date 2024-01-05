import React, {useContext, useState} from 'react';
import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './dashboardStyle';
import {AuthContext} from '../../context';
import {TabScreenHeader, EmptyListComponent} from '../../components';
import {TaskListComponent} from '../../components/Dashboard/TaskList';
import {formatCurrentDate} from '../../utils/DataHelper';

export function Dashboard() {
  const {state, dispatch} = useContext(AuthContext);
  let {tasks} = state;

  return (
    <SafeAreaView>
      <TabScreenHeader
        leftComponent={() => (
          <View style={styles.flexRow}>
            <Text style={styles.headerLeftText}>{formatCurrentDate()}</Text>
            <MaterialCommunityIcons
              name="calendar-month-outline"
              size={20}
              color="#000"
            />
          </View>
        )}
        isSearchBtnVisible={true}
        isMoreBtnVisible={false}
      />
      <View style={styles.contentBody}>
        <View style={styles.tasksSection}>
          <ScrollView style={styles.tasksBody}>
            <TaskListComponent
              title="On going"
              tasks={tasks.filter(task => task.status === 'In-Progress')}
            />
            <TaskListComponent
              title="To-do"
              tasks={tasks.filter(task => task.status === 'To-do')}
              paddingTop={30}
            />
            <TaskListComponent
              title="Completed"
              tasks={tasks.filter(task => task.status === 'Completed')}
              paddingTop={30}
            />
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
}
