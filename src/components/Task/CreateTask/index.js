import React, {useState, useContext} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';
import {useSelector} from 'react-redux';
import shortid from 'shortid';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import {SelectList} from 'react-native-dropdown-select-list';
import ToggleSwitch from 'toggle-switch-react-native';
import {Calendar} from 'react-native-calendars';
import styles from './createTaskStyle';
import {combineData} from '../../../utils/DataHelper';
import {TabScreenHeader} from '../../../components';
import appTheme from '../../../constants/colors';
import sizes from '../../../constants/fontSize';
import {loadTasks} from '../../store/slices/tasksSlice';
const windowWidth = Dimensions.get('window').width;

export function CreateTask(props) {
  const members = useSelector(state => state.members);
  const [data, setData] = useState({
    newTask: {title: '', description: '', selectedMembers: []},
  });
  const [selected, setSelected] = useState('');

  const priorities = [
    {key: '1', value: 'High'},
    {key: '2', value: 'Medium'},
    {key: '3', value: 'Low'},
  ];

  const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

  const handleSetValue = (field, value) => {
    let {newTask} = data;
    if (field === 'selectedMembers') {
      let {selectedMembers} = newTask;
      const foundIndex = selectedMembers?.findIndex(a => a?.id === value?.id);
      if (foundIndex === -1) {
        selectedMembers.push(value);
      } else {
        selectedMembers = selectedMembers.filter(a => a?.id !== value?.id);
      }
      newTask['selectedMembers'] = selectedMembers;
    } else {
      newTask[field] = value;
    }

    setData(
      combineData(data, {
        newTask,
      }),
    );
  };

  const isSelectedMember = member => {
    let value;
    let {selectedMembers} = data?.newTask;
    const foundIndex = selectedMembers?.findIndex(
      a => a?.id?.toLowerCase() == member?.id?.toLowerCase(),
    );
    if (foundIndex > -1) {
      value = true;
    }
    return value;
  };

  return (
    <View style={styles.container}>
      <TabScreenHeader
        title="Create a task"
        isSearchBtnVisible={true}
        isMoreBtnVisible={false}
      />
      <ScrollView style={{paddingHorizontal: 16}}>
        <View style={styles.cardContainer}>
          <TextInput
            placeholder="Title"
            placeholderTextColor="gray"
            style={styles.textInput}
            onChangeText={text => handleSetValue('title', text)}
          />
          <TextInput
            placeholder="Description"
            placeholderTextColor="gray"
            style={styles.detailInput}
            onChangeText={text => handleSetValue('title', text)}
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
              setSelected={val => {}}
              data={priorities}
              defaultOption={priorities[0]}
              boxStyles={{
                width: 200,
                backgroundColor: appTheme.LIST_BG_COLOR,
                borderWidth: 0,
              }}
            />
          </View>
          <ScrollView horizontal={true}>
            <View style={styles.teamWrapper}>
              {members?.map(member => (
                <View key={shortid.generate()} style={{width: 80}}>
                  <TouchableOpacity
                    style={[
                      styles.memberWrapper,
                      isSelectedMember(member)
                        ? styles.activeTeamWrapper
                        : null,
                    ]}
                    onPress={() => handleSetValue('selectedMembers', member)}>
                    <Image
                      style={styles.memberPhoto}
                      source={{uri: member?.photo}}
                    />
                  </TouchableOpacity>
                </View>
              ))}
            </View>
          </ScrollView>
        </View>
        <View
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
          <Text>Date</Text>
          <AntDesign name="calendar" size={25} />
        </View>
        <Calendar
          onDayPress={day => {
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
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <TouchableOpacity style={styles.timePickerContainer}>
            <Text style={styles.text}>Start Time</Text>
            <Entypo name="back-in-time" size={25} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.timePickerContainer}>
            <Text style={styles.text}>Finish Time</Text>
            <Entypo name="back-in-time" size={25} />
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={[styles.timePickerContainer, {width: '75%'}]}>
            <Text style={styles.text}>Repeat</Text>
            <Entypo name="back-in-time" size={25} />
          </View>
          <ToggleSwitch
            isOn={true}
            onColor={appTheme.GREEN_COLOR}
            offColor={appTheme.LIST_BG_COLOR}
            size="large"
            onToggle={isOn => console.log('changed to : ', isOn)}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          {days.map(day => (
            <TouchableOpacity
              key={shortid.generate()}
              style={{
                width: (windowWidth - 62) / 7,
                height: (windowWidth - 62) / 7,
                borderRadius: 100,
                borderWidth: 1,
                borderColor: appTheme.MEDIUM_COLOR,
                backgroundColor: '#FDF0E8',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{fontSize: 20, color: 'black'}}>{day}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={[styles.timePickerContainer, {width: '75%'}]}>
            <Text>Multitask</Text>
          </View>
          <ToggleSwitch
            isOn={true}
            onColor={appTheme.GREEN_COLOR}
            offColor={appTheme.LIST_BG_COLOR}
            size="large"
            onToggle={isOn => console.log('changed to : ', isOn)}
          />
        </View>
        <TouchableOpacity style={styles.btnWrapper}>
          <Text style={styles.btnText}>Assign</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
