import React, {useContext, useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {Button, Checkbox} from 'react-native-paper';
import shortid from 'shortid';
import ProgressCircle from 'react-native-progress-circle';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from './taskViewStyle';
import {AuthContext} from '../../../context';
import appTheme from '../../../constants/colors';

export function TaskView() {
  const {state, dispatch} = useContext(AuthContext);
  const [recurring, setRecurring] = useState(null);
  const {selectedTask} = state;

  return (
    <View style={styles.container}>
      <View style={styles.topWrapper}>
        <View style={styles.taskProgressWrapper}>
          <ProgressCircle
            percent={40}
            radius={30}
            borderWidth={7}
            color="#6AC67E"
            shadowColor="#f4f4f4"
            bgColor="#fff">
            <Text style={styles.taskProgress}>{selectedTask?.progress}40%</Text>
          </ProgressCircle>
        </View>
        <Text style={styles.taskTitle}>{selectedTask?.title}</Text>
      </View>
      <Text style={styles.taskTeamText}>Assigned To</Text>
      <View style={styles.taskMembersWrapper}>
        {selectedTask?.assigned_to?.map(member => (
          <Image
            key={shortid.generate()}
            style={styles.taskMemberPhoto}
            source={{uri: member?.photo}}
          />
        ))}
      </View>
      <View style={styles.scheduleWrapper}>
        <View style={styles.scheduleRow}>
          <MaterialCommunityIcons
            name="clock"
            size={20}
            color={appTheme.INACTIVE_COLOR}
          />
          <Text style={styles.scheduleText}>1:30PM - 2:00PM</Text>
        </View>
        <View style={styles.scheduleRow}>
          <AntDesign
            name="calendar"
            size={20}
            color={appTheme.INACTIVE_COLOR}
          />
          <Text style={styles.scheduleText}>June 13 2021</Text>
        </View>
      </View>
      <View
        style={{
          justifyContent: 'space-between',
        }}>
        <Text>recurring: </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
          <Checkbox.Item
            label="Daily"
            status={recurring === 0 && 'checked'}
            onPress={() => setRecurring(0)}
          />
          <Checkbox.Item
            label="Weekly"
            status={recurring === 1 && 'checked'}
            onPress={() => setRecurring(1)}
          />
          <Checkbox.Item
            label="Monthly"
            status={recurring === 2 && 'checked'}
            onPress={() => setRecurring(2)}
          />
          <Checkbox.Item
            label="Yearly"
            status={recurring === 3 && 'checked'}
            onPress={() => setRecurring(3)}
          />
        </View>
      </View>
      <Text style={styles.longText}>{selectedTask.note}</Text>
      <TouchableOpacity style={styles.plusBtnContainer}>
        <Button
          mode="contained"
          onPress={() => console.log('Pressed')}
          style={{width: 200}}>
          Start
        </Button>
      </TouchableOpacity>
    </View>
  );
}
