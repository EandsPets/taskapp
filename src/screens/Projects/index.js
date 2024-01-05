import React, {useState, useContext} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
} from 'react-native';
import shortid from 'shortid';
import {SelectList} from 'react-native-dropdown-select-list';
import styles from './projectsStyle';
import {AuthContext} from '../../context';
import {
  TabScreenHeader,
  ProjectCard,
  EmptyListComponent,
} from '../../components';
import {TaskListComponent} from '../../components/Dashboard/TaskList';

export function Projects({navigation}) {
  const tabs = ['All', 'In-Progress', 'Completed'];

  const {state, dispatch} = useContext(AuthContext);
  const {tasks, members} = state;

  const [data, setData] = useState({
    activeTab: 'All',
    tasks: tasks,
    selectedMember: 0,
  });

  const toggleTab = tab => {
    let tasksToRender = [];
    if (tab === 'All') {
      tasksToRender = tasks;
    } else {
      tasksToRender = tasks?.filter(task => task.status === tab) || [];
    }
    setData({activeTab: tab, tasks: tasksToRender});
  };

  const isActiveTab = tab => {
    const value = data?.activeTab === tab;
    return value;
  };

  const filterTasks = (val, type) => {
    let tasksToRender = [];
    if (type === 'user') {
      tasksToRender = tasks?.filter(task => task.assigned_to.id === val);
    } else {
      tasksToRender = tasks?.filter(tasks => tasks.includes(val));
    }
    setData({...data, tasks: tasksToRender});
  };

  return (
    <SafeAreaView style={styles.container}>
      <TabScreenHeader
        leftComponent={() => (
          <SelectList
            setSelected={val => filterTasks(val, 'user')}
            data={members.map(member => ({key: member.id, value: member.name}))}
          />
        )}
        isSearchBtnVisible={true}
      />
      <View style={styles.projectsBody}>
        <View style={styles.projectsTabs}>
          {tabs?.map(tab => (
            <TouchableOpacity
              style={[
                styles.projectTab,
                isActiveTab(tab) ? styles.activeProjectTab : null,
              ]}
              onPress={() => toggleTab(tab)}
              key={shortid.generate()}>
              <Text
                style={[
                  styles.projectTabText,
                  isActiveTab(tab)
                    ? styles.activeProjectTabText
                    : styles.inActiveProjectTabText,
                ]}>
                {tab}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        {tasks?.length > 0 ? (
          <TaskListComponent title={data.activeTab} tasks={data.tasks} />
        ) : (
          <EmptyListComponent />
        )}
      </View>
    </SafeAreaView>
  );
}
