import React, {useState, useContext} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image,
  Dimensions,
  ActivityIndicator,
  Alert,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import shortid from 'shortid';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import {SelectList} from 'react-native-dropdown-select-list';
import ToggleSwitch from 'toggle-switch-react-native';
import {Calendar} from 'react-native-calendars';
import moment from 'moment';
import DatePicker from 'react-native-date-picker';
import styles from './createTaskStyle';
import {combineData} from '../../../utils/DataHelper';
import {TabScreenHeader} from '../../../components';
import appTheme from '../../../constants/colors';
import sizes from '../../../constants/fontSize';
import {createNewTask} from '../../../store/actions/taskAction';
import {priorities, days} from '../../../constants/const';
import {serverUrl} from '../../../utils/helper';

const windowWidth = Dimensions.get('window').width;

export function CreateTask(props) {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [openCalendar, setOpenCalendar] = useState(false);
  const {error} = useSelector(state => state.tasks);
  const {me, users} = useSelector(state => state.user);
  const [data, setData] = useState({
    newTask: {
      title: '',
      description: '',
      assigned_by: me.id,
      repeat_days: [],
      start_time: new Date(),
      finish_time: new Date(),
    },
  });
  const [selected, setSelected] = useState('');
  const [openStart, setOpenStart] = useState(false);
  const [openEnd, setOpenEnd] = useState(false);

  const handleSetValue = (field, value) => {
    let {newTask} = data;
    if (field === 'repeat_days') {
      let {repeat_days} = newTask;
      const foundIndex = repeat_days?.findIndex(a => a?.id === value?.id);
      if (foundIndex === -1) {
        repeat_days.push(value);
      } else {
        repeat_days = repeat_days.filter(a => a?.id !== value?.id);
      }
      newTask['repeat_days'] = repeat_days;
    } else {
      newTask[field] = value;
    }

    setData(
      combineData(data, {
        newTask,
      }),
    );
  };

  const assign = () => {
    setIsLoading(true);
    const {newTask} = data;
    const formattedDate = moment(selected).format('YYYY-MM-DD');
    const startTime = moment(newTask.start_time).format('HH:mm:ss');
    const finishTime = moment(newTask.finish_time).format('HH:mm:ss');

    const taskData = {
      ...newTask,
      start_time: `${formattedDate} ${startTime}`,
      finish_time: `${formattedDate} ${finishTime}`,
    };

    dispatch(createNewTask(taskData))
      .then(() => {})
      .catch(() => {})
      .finally(() => {
        setIsLoading(false);
      });
  };

  const isSelectedMember = id => {
    let {assigned_to} = data?.newTask;
    return assigned_to === id;
  };

  const isSelectedDay = day => {
    let value;
    let {repeat_days} = data?.newTask;
    const foundIndex = repeat_days?.findIndex(a => a?.id == day?.id);
    if (foundIndex > -1) {
      value = true;
    }
    return value;
  };

  return (
    <View style={styles.container}>
      <TabScreenHeader
        title="Create a task"
        isSearchBtnVisible={false}
        isMoreBtnVisible={false}
      />
      <ScrollView style={{paddingHorizontal: 16}}>
        <View style={styles.cardContainer}>
          <TextInput
            placeholder="Title"
            placeholderTextColor={error && error['title'] ? 'red' : 'grey'}
            style={styles.textInput}
            onChangeText={text => handleSetValue('title', text)}
          />
          <TextInput
            placeholder="Description"
            placeholderTextColor={
              error && error['description'] ? 'red' : 'grey'
            }
            style={styles.detailInput}
            onChangeText={text => handleSetValue('description', text)}
            multiline={true}
            numberOfLines={5}
            textAlignVertical="top"
          />
        </View>
        <View style={styles.imageContainer}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text style={styles.assignText}>Assign To</Text>
            <SelectList
              setSelected={val => handleSetValue('priority', val)}
              data={priorities}
              boxStyles={[
                styles.priorityContainer,
                error && error['priority'] && styles.errorBorder,
              ]}
            />
          </View>
          <ScrollView horizontal={true}>
            <View
              style={[
                styles.teamWrapper,
                error && error['assigned_to'] && styles.errorBorder,
              ]}>
              {users?.map(member => (
                <View key={shortid.generate()} style={{width: 80}}>
                  <TouchableOpacity
                    style={[
                      styles.memberWrapper,
                      isSelectedMember(member.id)
                        ? styles.activeTeamWrapper
                        : null,
                    ]}
                    onPress={() => handleSetValue('assigned_to', member.id)}>
                    <Image
                      style={styles.memberPhoto}
                      source={{uri: serverUrl + member?.photo}}
                    />
                    <Text>{member.name}</Text>
                  </TouchableOpacity>
                </View>
              ))}
            </View>
          </ScrollView>
        </View>
        <TouchableOpacity
          onPress={() => setOpenCalendar(!openCalendar)}
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginVertical: 25,
            borderWidth: 1,
            borderColor: appTheme.BORDER_COLOR,
            borderRadius: 10,
            height: 50,
            paddingHorizontal: 10,
          }}>
          <Text>{data.newTask.date ? data.newTask.date : 'Select Date'}</Text>
          <AntDesign name="calendar" size={25} />
        </TouchableOpacity>
        {openCalendar && (
          <Calendar
            onDayPress={day => {
              handleSetValue(
                'date',
                moment(day.dateString).format('DD/MM/YYYY'),
              );
              setSelected(day.dateString);
            }}
            markedDates={{
              [selected]: {
                selected: true,
                disableTouchEvent: true,
                selectedDotColor: 'orange',
              },
            }}
            style={{
              borderWidth: 0,
              borderRadius: 10,
              borderColor: 'gray',
              height: 350,
            }}
            theme={{
              backgroundColor: '#ffffff',
              calendarBackground: appTheme.CALENDAR_BODY_COLOR,
              textSectionTitleColor: '#b6c1cd',
              textSectionTitleDisabledColor: '#d9e1e8',
              selectedDayBackgroundColor: '#00adf5',
              selectedDayTextColor: '#ffffff',
              todayTextColor: '#00adf5',
              dayTextColor: '#2d4150',
              textDisabledColor: '#d9e1e8',
              dotColor: '#00adf5',
              selectedDotColor: '#ffffff',
              arrowColor: appTheme.PRIMARY_COLOR,
              disabledArrowColor: '#d9e1e8',
              monthTextColor: appTheme.PRIMARY_COLOR,
              indicatorColor: 'blue',
              textDayFontFamily: 'Poppins-Regular',
              textMonthFontFamily: 'Poppins-Regular',
              textDayHeaderFontFamily: 'Poppins-Regular',
              textDayFontWeight: '300',
              textMonthFontWeight: 'bold',
              textDayHeaderFontWeight: '300',
              textDayFontSize: 18,
              textMonthFontSize: sizes.cardTitleFontSize,
              textDayHeaderFontSize: 18,
              'stylesheet.calendar.header': {
                dayTextAtIndex0: {
                  color: 'red',
                },
                dayTextAtIndex1: {
                  color: appTheme.PRIMARY_COLOR,
                },
                dayTextAtIndex2: {
                  color: appTheme.PRIMARY_COLOR,
                },
                dayTextAtIndex3: {
                  color: appTheme.PRIMARY_COLOR,
                },
                dayTextAtIndex4: {
                  color: appTheme.PRIMARY_COLOR,
                },
                dayTextAtIndex5: {
                  color: appTheme.PRIMARY_COLOR,
                },
                dayTextAtIndex6: {
                  color: appTheme.PRIMARY_COLOR,
                },
              },
            }}
          />
        )}
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <TouchableOpacity
            style={styles.timePickerContainer}
            onPress={() => setOpenStart(true)}>
            <Text style={styles.text}>
              {data.newTask.start_time
                ? moment(data.newTask.start_time).format('HH:mm')
                : 'Start Time'}
            </Text>
            <Entypo name="back-in-time" size={25} />
            <DatePicker
              modal
              title="Start time"
              open={openStart}
              date={data.newTask.start_time}
              mode="time"
              onConfirm={date => {
                setOpenStart(false);
                handleSetValue('start_time', date);
              }}
              onCancel={() => {
                setOpenStart(false);
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.timePickerContainer}
            onPress={() => setOpenEnd(true)}>
            <Text style={styles.text}>
              {data.newTask.start_time
                ? moment(data.newTask.finish_time).format('HH:mm')
                : 'End Time'}
            </Text>
            <Entypo name="back-in-time" size={25} />
            <DatePicker
              modal
              title="End time"
              open={openEnd}
              date={data.newTask.finish_time}
              mode="time"
              onConfirm={date => {
                setOpenEnd(false);
                handleSetValue('finish_time', date);
              }}
              onCancel={() => {
                setOpenEnd(false);
              }}
            />
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={[styles.timePickerContainer, {width: '75%'}]}>
            <Text style={styles.text}>Repeat</Text>
            <Entypo name="back-in-time" size={25} />
          </View>
          <ToggleSwitch
            isOn={data.newTask.is_repeat}
            onColor={appTheme.GREEN_COLOR}
            offColor={appTheme.LIST_BG_COLOR}
            size="large"
            onToggle={isOn => handleSetValue('is_repeat', isOn)}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          {data.newTask.is_repeat &&
            days.map(day => (
              <TouchableOpacity
                key={shortid.generate()}
                style={{
                  width: (windowWidth - 62) / 7,
                  height: (windowWidth - 62) / 7,
                  borderRadius: 100,
                  borderWidth: 1,
                  borderColor: appTheme.MEDIUM_COLOR,
                  backgroundColor: isSelectedDay(day) ? '#f6c0bc' : '#FDF0E8',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                onPress={() => handleSetValue('repeat_days', day)}>
                <Text style={{fontSize: 20, color: 'black'}}>{day.value}</Text>
              </TouchableOpacity>
            ))}
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={[styles.timePickerContainer, {width: '75%'}]}>
            <Text>Multitask</Text>
          </View>
          <ToggleSwitch
            isOn={data.newTask.multi_task}
            onColor={appTheme.GREEN_COLOR}
            offColor={appTheme.LIST_BG_COLOR}
            size="large"
            onToggle={isOn => handleSetValue('multi_task', isOn)}
          />
        </View>
        <TouchableOpacity style={styles.btnWrapper} onPress={() => assign()}>
          <Text style={styles.btnText}>Assign</Text>
        </TouchableOpacity>
      </ScrollView>
      {isLoading && (
        <View style={styles.activityIndicator}>
          <ActivityIndicator size="large" color="blue" />
        </View>
      )}
    </View>
  );
}
