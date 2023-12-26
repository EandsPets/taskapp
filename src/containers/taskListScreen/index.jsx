import React, { useState } from 'react';
import { View, FlatList, StyleSheet, Dimensions } from 'react-native';
import {
  Card,
  Title,
  Paragraph,
  FAB,
  Appbar,
} from 'react-native-paper';
import { SelectList } from 'react-native-dropdown-select-list'

const width = Dimensions.width / 2;

const TaskListScreen = ({ navigation }) => {
  const [statusFilter, setStatusFilter] = useState('All');
  const [nameFilter, setNameFilter] = useState('');
  const [menuVisible, setMenuVisible] = useState(false);

  const [selected, setSelected] = React.useState("");

  const tasks = [
    {
      title: 'Task 1',
      status: 'Completed',
      notes: 'Task details here',
    },
    {
      title: 'Task 2',
      status: 'In Progress',
      notes: 'Task details here',
    },
  ];

  const childrens = [
    {key:'1', value:'Children 1'},
    {key:'2', value:'Children 2'},
    {key:'3', value:'Children 3'},
    {key:'4', value:'Children 4'},
    {key:'5', value:'Children 5'},
    {key:'6', value:'Children 6'},
    {key:'7', value:'Children 7'},
    {key:'8', value:'Children 8'},
    {key:'9', value:'Children 9'},
]

const status = [
  {key:'1', value:'In Progress'},
  {key:'2', value:'Completed'},
  {key:'3', value:'Hold'},

]

  const handleStatusFilterPress = () => {
    setMenuVisible(true);
  };

  const handleStatusFilterSelect = (selectedStatus) => {
    setStatusFilter(selectedStatus);
    setMenuVisible(false);
  };

  const renderTaskItem = ({ item }) => (
    <Card style={styles.card}>
      <Card.Content>
        <Title>{item.title}</Title>
        <Paragraph style={{color: `${item.status}` == 'Completed' ? 'green' : 'red'}}>Status: {item.status}</Paragraph>
        <Paragraph>Notes: {item.notes}</Paragraph>
      </Card.Content>
    </Card>
  );

  return (
    <View style={styles.container}>
      <View style={styles.filterContainer}>
        <SelectList
          style={styles.filterItem}
          setSelected={(val) => setSelected(val)}
          data={childrens}
          save="children"
          label="Childrens"
        />
        <SelectList
          style={styles.filterItem}
          setSelected={(val) => setSelected(val)}
          data={status}
          label="Status"
          save="status"
        />
      </View>
      <FlatList
        data={tasks.filter(
          (task) =>
            (statusFilter === 'All' || task.status === statusFilter) &&
            (nameFilter === '' || task.title.toLowerCase().includes(nameFilter.toLowerCase()))
        )}
        renderItem={renderTaskItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  filterContainer: {
    margin: 16,
    marginBottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  filterItem: {
    flex: 1,
  },
  checkedBox: {
  },
  card: {
    margin: 16,
    marginBottom: 0,
  },
  nameFilterInput: {
    margin: 8,
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
});

export default TaskListScreen;
