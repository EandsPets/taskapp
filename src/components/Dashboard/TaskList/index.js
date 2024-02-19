import React, {useContext} from 'react';
import {View, ScrollView, Image, TouchableWithoutFeedback} from 'react-native';
import {Text, DataTable} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import shortid from 'shortid';
import moment from 'moment';
import styles from './styles';
import {AuthContext} from '../../../context';
import colors from '../../../constants/colors';

export function TaskListComponent({
  title,
  headers,
  tasks,
  paddingTop,
  workingOn,
}) {
  const {state, dispatch} = useContext(AuthContext);

  const handleBottomModal = t_id => {
    dispatch({
      type: 'toggleBottomModal',
      payload: {bottomModal: 'TaskView'},
    });

    dispatch({
      type: 'viewTask',
      payload: {selectedTask: tasks.find(task => task.id === t_id)},
    });
  };

  const color = {
    'In-Progress': colors.IN_PROGRESS_COLOR,
    Pending: colors.PENDING_COLOR,
    Completed: colors.COMPLETED_COLOR,
    Low: colors.LOW_COLOR,
    Medium: colors.MEDIUM_COLOR,
    High: colors.HIGH_COLOR,
  };

  const renderTableCell = (header, task) => {
    const field = header.toLowerCase().replace(' ', '_');
    if (field.includes('assigned')) {
      return (
        <DataTable.Cell key={task.id} style={styles.cellWidth}>
          <Image
            key={shortid.generate()}
            style={styles.memberPhoto}
            source={{uri: task[field]?.photo}}
          />
        </DataTable.Cell>
      );
    } else if (field === 'recurring') {
      return (
        <DataTable.Cell key={task.id} style={styles.cellWidth}>
          <Ionicons name="repeat" size={20} color="green" />
        </DataTable.Cell>
      );
    } else if (field === 'updates') {
      return (
        <DataTable.Cell key={shortid.generate()} style={styles.cellWidth}>
          <TouchableWithoutFeedback onPress={() => handleBottomModal(task.id)}>
            <Feather name="edit" size={20} color="green" />
          </TouchableWithoutFeedback>
        </DataTable.Cell>
      );
    } else {
      const colorForStatus =
        field === 'status' || field === 'priority' ? color[task[field]] : null;
      const styleForTitle =
        field === 'title' ? {width: 150, justifyContent: 'start'} : null;

      return (
        <DataTable.Cell
          key={task.id}
          textStyle={styles.cellText}
          style={[
            styles.cellWidth,
            {
              backgroundColor: colorForStatus,
              fontFamily: 'Poppins-Bold',
            },
            styleForTitle,
          ]}>
          {field === 'due'
            ? moment(task['date'], 'DD/MM/YYYY').format('MMM D')
            : task[field]}
        </DataTable.Cell>
      );
    }
  };

  return (
    <View style={[styles.container, {paddingTop: paddingTop}]}>
      <Text variant="titleLarge" style={styles.listTitle}>
        {title}
      </Text>
      <ScrollView
        horizontal={true}
        style={
          workingOn
            ? styles.scrollViewWithoutHeader
            : styles.scrollViewContainer
        }>
        <DataTable>
          <DataTable.Header>
            {headers.map((h, idx) => (
              <DataTable.Title
                style={[styles.cellWidth, {width: idx === 0 ? 150 : 100}]}
                key={shortid.generate()}>
                {h}
              </DataTable.Title>
            ))}
          </DataTable.Header>
          {tasks.map(task => (
            <DataTable.Row key={shortid.generate()}>
              {headers.map((header, index) => renderTableCell(header, task))}
            </DataTable.Row>
          ))}
        </DataTable>
      </ScrollView>
    </View>
  );
}
