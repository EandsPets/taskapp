import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
  ImageBackground,
  Modal,
  Pressable,
  Alert,
} from 'react-native';
import shortid from 'shortid';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import {useSelector, useDispatch} from 'react-redux';
import moment from 'moment';
import styles from './brainStormStyle.js';
import {TabScreenHeader} from '../../components';
import {TaskListComponent} from '../../components/Dashboard/TaskList';
import {dashboardHeader} from '../../constants/const';
import {getTodayTasks} from '../../utils/helper';
import colors from '../../constants/colors.js';
import fontSizes from '../../constants/fontSize';
import {getWorkingTasks} from '../../utils/helper';
import {createHeader, updateNote} from '../../store/actions/headerAction.js';

export function BrainStorm(props) {
  const dispatch = useDispatch();
  const tasks = useSelector(state => state.tasks.tasks);
  const headers = useSelector(state => state.headers.headers);
  const [isLoading, setIsLoading] = useState(false);
  const [activeHeader, setActiveHeader] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [headerTitle, setHeaderTitle] = useState('');
  const [error, setError] = useState(false);
  const [note, setNote] = useState(null);

  const handleNavigation = (screen, params) => {
    props?.navigation.navigate('BottomStack', {screen: screen});
  };

  const inProgressTasks = getWorkingTasks(tasks);

  const getDueTime = () => {
    const currentTime = moment();
    const duration = moment.duration(
      currentTime.diff(
        moment(inProgressTasks.tasks[0]['time_started'], 'YYYY-MM-DD'),
      ),
    );

    const hoursDifference = Math.abs(duration.hours());
    const minutesDifference = Math.abs(duration.minutes());
    const differenceFormatted = moment
      .utc()
      .hours(hoursDifference)
      .minutes(minutesDifference)
      .format('H:mm');

    return differenceFormatted;
  };

  const createHeaderTitle = () => {
    if (headerTitle.length === 0) {
      setError(true);
      return;
    }
    dispatch(createHeader(headerTitle, 1))
      .then(() => {
        setIsLoading(false);
        setModalVisible(false);
      })
      .catch(() => setIsLoading(false));
  };

  const getActiveHeader = (header_id, note) => {
    setActiveHeader(header_id);
    setNote(note);
  };

  const changeNote = val => {
    setNote(val);
    dispatch(updateNote(val, headers[activeHeader].id));
  };

  return (
    <SafeAreaView style={styles.container}>
      <TabScreenHeader
        title="Brain Storm Board"
        isSearchBtnVisible={true}
        isMoreBtnVisible={false}
      />
      <ScrollView>
        <View>
          <View style={styles.inputHeaderContainer}>
            <ScrollView horizontal style={styles.inputHeader}>
              {headers.map((h, i) => (
                <Text
                  key={shortid.generate()}
                  style={[
                    styles.brainStormText,
                    activeHeader === i && styles.brainStormTextActive,
                  ]}
                  onPress={() => getActiveHeader(i, h.content)}>
                  {h.title.length > 15 ? h.title.slice(0, 15) + '...' : h.title}
                </Text>
              ))}
            </ScrollView>
            <TouchableOpacity
              onPress={() => setModalVisible(true)}
              style={styles.addHeader}>
              <Entypo name="plus" size={30} />
            </TouchableOpacity>
          </View>
          <ImageBackground
            style={styles.backgroundImage}
            resizeMode="repeat"
            source={require('../../assets/imgs/progress_bg.png')}>
            <TextInput
              style={styles.boardInput}
              multiline={true}
              numberOfLines={20}
              textAlignVertical="top"
              onChangeText={e => changeNote(e)}
              value={
                headers.length != 0 && !note
                  ? headers[activeHeader].content
                  : note
              }
            />
          </ImageBackground>
        </View>
        {inProgressTasks.count > 0 && (
          <View style={[styles.listContainer, styles.inProgressContainer]}>
            <Text variant="titleLarge" style={styles.listTitle}>
              In Progress
            </Text>
            <View style={styles.inProgressBodyContainer}>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: 10,
                }}>
                <View style={styles.dueContainer}>
                  <View style={styles.dueTextContainer}>
                    <Text>Due: </Text>
                    <Text>
                      {moment(
                        inProgressTasks.tasks[0]['date'],
                        'DD/MM/YYYY',
                      ).format('MMM D h:mm A')}{' '}
                      -{' '}
                      {moment(new Date(), 'YYYY-MM-DD HH:mm:ss').format(
                        'h:mm A',
                      )}
                    </Text>
                  </View>
                  <AntDesign name="calendar" size={25} />
                </View>
                <View style={styles.dueButtonContainer}>
                  <Ionicons
                    name="camera-outline"
                    size={25}
                    color={colors.EDIT_COLOR}
                  />
                  <Ionicons name="repeat" size={25} color={colors.EDIT_COLOR} />
                  <Feather name="edit" size={25} color={colors.EDIT_COLOR} />
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  marginHorizontal: 20,
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: 50,
                  marginTop: 10,
                }}>
                <Text style={{fontSize: fontSizes.headerFontSize}}>
                  {getDueTime()}
                </Text>
                <Text
                  style={{
                    width: 100,
                    height: 30,
                    backgroundColor: colors.HIGH_COLOR,
                    fontSize: fontSizes.normalFontSize,
                    borderRadius: 5,
                    textAlign: 'center',
                    textAlignVertical: 'center',
                    marginHorizontal: 10,
                    color: 'white',
                  }}>
                  Stuck
                </Text>
                <Text
                  style={{
                    width: 100,
                    height: 30,
                    backgroundColor: colors.IN_PROGRESS_COLOR,
                    fontSize: fontSizes.normalFontSize,
                    borderRadius: 5,
                    textAlign: 'center',
                    textAlignVertical: 'center',
                    marginHorizontal: 10,
                  }}>
                  Hold
                </Text>
              </View>
              <Text
                style={{
                  fontSize: fontSizes.normalFontSize,
                  textAlign: 'center',
                  textAlignVertical: 'center',
                  marginHorizontal: 50,
                  marginVertical: 10,
                }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </Text>
              <Text
                style={{
                  width: '30%',
                  height: 40,
                  backgroundColor: colors.GREEN_COLOR,
                  fontSize: fontSizes.listHeaderFontSize,
                  borderRadius: 10,
                  alignSelf: 'center',
                  textAlign: 'center',
                  textAlignVertical: 'center',
                  marginHorizontal: 10,
                  color: 'white',
                  marginVertical: 5,
                  shadowColor: '#171717',
                  shadowOffset: {width: -2, height: 4},
                  shadowOpacity: 0.2,
                  shadowRadius: 3,
                  elevation: 10,
                }}>
                {inProgressTasks.tasks[0]['status']}
              </Text>
              <View
                style={{
                  height: 40,
                  flexDirection: 'row',
                  fontSize: fontSizes.listHeaderFontSize,
                  alignSelf: 'center',
                  textAlign: 'center',
                  justyfiContent: 'space-between',
                  marginHorizontal: 10,
                  marginVertical: 5,
                }}>
                <Text style={{fontFamily: 'Poppins-Regular', fontSize: 13}}>
                  Priority:{`\u0008`}
                </Text>
                <Text style={{fontFamily: 'Poppins-Bold', fontSize: 13}}>
                  {inProgressTasks.tasks[0]['priority']}
                </Text>
              </View>
            </View>
          </View>
        )}
        <View style={[styles.listContainer, {marginTop: 10}]}>
          <TaskListComponent
            title="Today"
            headers={dashboardHeader}
            tasks={getTodayTasks(tasks)}
            workingOn={false}
          />
          <TouchableOpacity
            style={styles.createNewTask}
            onPress={() => handleNavigation('Create Task')}>
            <AntDesign name="plus" size={18} />
            <Text style={styles.addTaskText}>Add Task</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <Modal
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>
              Insert Brain Storm Board title!
            </Text>
            <TextInput
              style={[styles.modalInputText, error && styles.error]}
              onChangeText={e => setHeaderTitle(e)}
            />
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={createHeaderTitle}>
              <Text style={styles.textStyle}>Create</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      {isLoading && (
        <View style={styles.activityIndicator}>
          <ActivityIndicator size="large" color="blue" />
        </View>
      )}
    </SafeAreaView>
  );
}
