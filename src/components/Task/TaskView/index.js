import React, {useContext} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {Button} from 'react-native-paper';
import shortid from 'shortid';
import ProgressCircle from 'react-native-progress-circle';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from './taskViewStyle';
import {combineData} from '../../../utils/DataHelper';
import {AuthContext} from '../../../context';
import appTheme from '../../../constants/colors';

export function TaskView() {
  const {state, dispatch} = useContext(AuthContext);
  const {selectedTask} = state;

  return (
    <View style={styles.container}>
      <View style={styles.topWrapper}>
        <View style={styles.taskProgressWrapper}>
          <ProgressCircle
            // percent={selectedTask?.progress}
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
        <Text style={{marginBottom: 10}}>recurring: </Text>
        <View style={{backgroundColor: 'black'}}></View>
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
