import React, {useContext} from 'react';
import {View, ScrollView, Image, TouchableWithoutFeedback} from 'react-native';
import {Text, DataTable} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
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
    } else if (
      field.includes('elapsed') ||
      field.includes('taken') ||
      field.includes('past')
    ) {
      const currentTime = moment();
      const duration = moment.duration(
        currentTime.diff(moment(task['time_started'], 'YYYY-MM-DD')),
      );

      const hoursDifference = Math.abs(duration.hours());
      const minutesDifference = Math.abs(duration.minutes());
      const differenceFormatted = moment
        .utc()
        .hours(hoursDifference)
        .minutes(minutesDifference)
        .format('H:mm');

      return (
        <DataTable.Cell key={shortid.generate()} style={styles.cellWidth}>
          {differenceFormatted}
        </DataTable.Cell>
      );
    } else if (field === 'updates') {
      return (
        <DataTable.Cell key={shortid.generate()} style={styles.cellWidth}>
          <TouchableWithoutFeedback>
            <Image source={require('../../../assets/imgs/update.png')} />
          </TouchableWithoutFeedback>
        </DataTable.Cell>
      );
    } else if (field === 'multi_task') {
      const yesFontColor = task[field] ? {color: '#7f9f7f'} : null;
      return (
        <DataTable.Cell
          key={shortid.generate()}
          style={styles.cellWidth}
          textStyle={yesFontColor}>
          {task[field] ? 'Yes' : 'No'}
        </DataTable.Cell>
      );
    } else {
      const colorForStatus =
        field === 'status' || field === 'priority' ? color[task[field]] : null;
      const styleForTitle =
        field === 'title' ? {width: 150, justifyContent: 'start'} : null;

      const text =
        field === 'due'
          ? moment(task['date'], 'DD/MM/YYYY').format('MMM D')
          : field.includes('started') || field.includes('completed')
          ? moment(task[field], 'YYYY-MM-DD HH:mm:ss').format('h:mm A')
          : task[field];

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
          {text}
        </DataTable.Cell>
      );
    }
  };

  return (
    <View style={[styles.container, {paddingTop: paddingTop}]}>
      <Text variant="titleLarge" style={styles.listTitle}>
        {title}
      </Text>
      <View
        style={
          workingOn
            ? styles.scrollViewWithoutHeader
            : styles.scrollViewContainer
        }>
        <ScrollView horizontal={true}>
          <DataTable>
            <DataTable.Header>
              {headers.map((h, idx) => (
                <DataTable.Title
                  style={[
                    styles.cellWidth,
                    {
                      width: h === 'Title' ? 150 : 100,
                      justifyContent: h === 'Title' ? 'start' : 'center',
                    },
                  ]}
                  key={shortid.generate()}>
                  {h}
                </DataTable.Title>
              ))}
            </DataTable.Header>
            {tasks.tasks.map(task => (
              <DataTable.Row key={shortid.generate()}>
                {headers.map((header, index) => renderTableCell(header, task))}
              </DataTable.Row>
            ))}
          </DataTable>
        </ScrollView>
      </View>
    </View>
  );
}
