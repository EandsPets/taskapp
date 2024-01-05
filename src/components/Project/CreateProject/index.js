import React, {useState, useContext} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image,
  Button,
} from 'react-native';
import {Checkbox} from 'react-native-paper';
import shortid from 'shortid';
import {SelectList} from 'react-native-dropdown-select-list';
import DatePicker from 'react-native-date-picker';
import moment from 'moment';
import styles from './createProjectStyle';
import {combineData} from '../../../utils/DataHelper';
import {AuthContext} from '../../../context';

export function CreateProject() {
  const {state, dispatch} = useContext(AuthContext);
  const {members} = state;
  const [data, setData] = useState({
    newProject: {
      title: '',
      description: '',
      selectedMembers: [],
      priority: 0,
      status: null,
      due: new Date(),
      recurring: 0,
    },
  });

  const [open, setOpen] = useState(false);

  const handleSetValue = (field, value) => {
    let {newProject} = data;
    if (field === 'selectedMembers') {
      let {selectedMembers} = newProject;
      const foundIndex = selectedMembers?.findIndex(a => a?.id === value?.id);
      if (foundIndex === -1) {
        selectedMembers.push(value);
      } else {
        selectedMembers = selectedMembers.filter(a => a?.id !== value?.id);
      }
      newProject['selectedMembers'] = selectedMembers;
    } else {
      newProject[field] = value;
    }

    setData(
      combineData(data, {
        newProject,
      }),
    );
  };

  const isSelectedMember = member => {
    let value;
    let {selectedMembers} = data?.newProject;
    const foundIndex = selectedMembers?.findIndex(
      a => a?.id?.toLowerCase() == member?.id?.toLowerCase(),
    );
    if (foundIndex > -1) {
      value = true;
    }
    return value;
  };

  const priority = [
    {key: '1', value: 'High'},
    {key: '2', value: 'Medium'},
    {key: '3', value: 'Low'},
  ];

  const status = [
    {key: '1', value: 'Start'},
    {key: '2', value: 'Pending'},
    {key: '3', value: 'Hold'},
    {key: '4', value: 'Stuck'},
    {key: '5', value: 'Completed'},
  ];

  const generateText = () => {
    console.log(data.newProject.due.getDate.toString);
    return 'chose';
    return data.newProject.due
      ? data.newProject.due.toDateString
      : 'CHOOSE DATE';
  };

  return (
    <View style={styles.container}>
      <Text style={styles.boldText}>Create Task</Text>
      <TextInput
        placeholder="Title"
        placeholderTextColor="gray"
        style={styles.textInput}
        onChangeText={text => handleSetValue('title', text)}
      />
      <TextInput
        placeholder="Description"
        placeholderTextColor="gray"
        style={[styles.textInput, {height: 80, marginTop: -10}]}
        multiline
        numberOfLines={3}
        onChangeText={text => handleSetValue('description', text)}
      />
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          marginLeft: 'auto',
          marginRight: 'auto',
          marginTop: -10,
        }}>
        <SelectList
          setSelected={val => handleSetValue('priority', +val)}
          data={priority}
          defaultOption={priority[0]}
          boxStyles={{width: '60%'}}
        />
        <SelectList
          setSelected={val => handleSetValue('status', +val)}
          data={status}
          defaultOption={status[0]}
          boxStyles={{width: '60%'}}
        />
      </View>
      <View
        style={{
          width: '100%',
          justifyContent: 'start',
          marginLeft: 'auto',
          marginRight: 'auto',
          marginTop: 10,
        }}>
        <Button
          title={moment(data.newProject.due).format('DD/MM/YYYY: HH:mm')}
          onPress={() => setOpen(true)}
        />
        <DatePicker
          modal
          open={open}
          date={data.newProject.due}
          onConfirm={date => {
            setOpen(false);
            handleSetValue('due', date);
          }}
          onCancel={() => {
            setOpen(false);
          }}
          mode="datetime"
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
          <Checkbox.Item
            label="Daily"
            status={data.newProject.recurring === 0 && 'checked'}
            onPress={() => handleSetValue('recurring', 0)}
          />
          <Checkbox.Item
            label="Weekly"
            status={data.newProject.recurring === 1 && 'checked'}
            onPress={() => handleSetValue('recurring', 1)}
          />
          <Checkbox.Item
            label="Monthly"
            status={data.newProject.recurring === 2 && 'checked'}
            onPress={() => handleSetValue('recurring', 2)}
          />
          <Checkbox.Item
            label="Yearly"
            status={data.newProject.recurring === 3 && 'checked'}
            onPress={() => handleSetValue('recurring', 3)}
          />
        </View>
      </View>
      <View style={styles.teamTextWrapper}>
        <Text style={styles.teamText}>Select Members</Text>
      </View>
      <View style={styles.teamSection}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.teamWrapper}>
            {members?.map(member => (
              <TouchableOpacity
                key={shortid.generate()}
                style={[
                  styles.memberWrapper,
                  isSelectedMember(member) ? styles.activeTeamWrapper : null,
                ]}
                onPress={() => handleSetValue('selectedMembers', member)}>
                <Image
                  style={styles.memberPhoto}
                  source={{uri: member?.photo}}
                />
                <Text
                  style={[
                    styles.memberName,
                    isSelectedMember(member) ? styles.activeMemberName : null,
                  ]}
                  numberOfLines={2}
                  ellipsizeMode="tail">
                  {member?.name}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </View>
      <TouchableOpacity style={styles.btnWrapper}>
        <Text style={styles.btnText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
}
