import React, {useContext} from 'react';
import {View, Text, TouchableWithoutFeedback, Image} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {ProgressBar} from 'react-native-paper';
import shortid from 'shortid';
import styles from './taskInfoStyle';
import appTheme from '../../../constants/colors';
import {AuthContext} from '../../../context';

export function TaskInfo({task}) {
  const {state, dispatch} = useContext(AuthContext);

  const handleBottomModal = () => {
    dispatch({
      type: 'toggleBottomModal',
      payload: {bottomModal: 'TaskView'},
    });

    dispatch({
      type: 'viewTask',
      payload: {selectedTask: task},
    });
  };

  return (
    <TouchableWithoutFeedback onPress={() => handleBottomModal()}>
      <View style={styles.container}>
        <Text style={styles.taskTitle} numberOfLines={1} ellipsizeMode="tail">
          {task?.title}
        </Text>
        <Text style={styles.taskTitle} numberOfLines={1} ellipsizeMode="tail">
          {task?.title}
        </Text>
        <View style={styles.teamWrapper}>
          {task?.members?.slice(0, 2)?.map(member => (
            <Image
              key={shortid.generate()}
              style={styles.memberPhoto}
              source={{uri: member?.photo}}
            />
          ))}
        </View>
        <MaterialIcons
          name="keyboard-arrow-right"
          size={25}
          color={appTheme.INACTIVE_COLOR}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}
