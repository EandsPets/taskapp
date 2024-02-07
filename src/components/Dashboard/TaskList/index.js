import React, {useContext} from 'react';
import {View, ScrollView, Image, TouchableWithoutFeedback} from 'react-native';
import {Text, DataTable} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import shortid from 'shortid';
import styles from './styles';
import {AuthContext} from '../../../context';
import colors from '../../../constants/colors';

export function TaskListComponent({title, tasks, paddingTop, workingOn}) {
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
  const header = workingOn
    ? ['Title', 'Due', 'Priority', 'Time Line', 'Actions']
    : [
        'Title',
        'Status',
        'Due',
        'Priority',
        'Assigned by',
        'Time Line',
        'Assigned to',
        'Recurring',
        'Actions',
      ];

  const color = {
    'In-Progress': colors.IN_PROGRESS_COLOR,
    'To-do': colors.PENDING_COLOR,
    Completed: colors.COMPLETED_COLOR,
    Low: colors.LOW_COLOR,
    Medium: colors.MEDIUM_COLOR,
    High: colors.HIGH_COLOR,
  };

  const renderTableCell = (value, index) => {
    if (Array.isArray(value[1])) {
      return (
        <DataTable.Cell key={index} style={styles.cellWidth}>
          {value[1]?.slice(0, 2)?.map(member => (
            <Image
              key={shortid.generate()}
              style={styles.memberPhoto}
              source={{uri: member?.photo}}
            />
          ))}
        </DataTable.Cell>
      );
    } else if (index === 7 && value[1] === true) {
      return (
        <DataTable.Cell key={index} style={styles.cellWidth}>
          <Ionicons name="repeat" size={20} color="green" />
        </DataTable.Cell>
      );
    } else {
      const colorForStatus =
        index === 1 || index === 3 ? color[value[1]] : null;
      const styleForTitle =
        index === 0 ? {width: 150, justifyContent: 'start'} : null;
      return (
        <DataTable.Cell
          key={index}
          textStyle={styles.cellText}
          style={[
            styles.cellWidth,
            {
              backgroundColor: colorForStatus,
              fontFamily: 'Poppins-Bold',
            },
            styleForTitle,
          ]}>
          {value[1]}
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
            {header.map((h, idx) => (
              <DataTable.Title
                style={[styles.cellWidth, {width: idx === 0 ? 150 : 100}]}
                key={shortid.generate()}>
                {h}
              </DataTable.Title>
            ))}
          </DataTable.Header>
          {tasks.map(task => (
            <DataTable.Row key={shortid.generate()}>
              {Object.entries(task)
                .filter(([key]) => {
                  if (workingOn) {
                    return (
                      key !== 'id' &&
                      key !== 'note' &&
                      key !== 'status' &&
                      key !== 'assigned_by' &&
                      key !== 'assigned_to' &&
                      key !== 'recurring'
                    );
                  } else {
                    return key !== 'id' && key !== 'note';
                  }
                })
                .map((value, index) => renderTableCell(value, index))}
              <DataTable.Cell key={shortid.generate()} style={styles.cellWidth}>
                <TouchableWithoutFeedback
                  onPress={() => handleBottomModal(task.id)}>
                  <Feather name="edit" size={20} color="green" />
                </TouchableWithoutFeedback>
              </DataTable.Cell>
            </DataTable.Row>
          ))}
        </DataTable>
      </ScrollView>
    </View>
  );
}
