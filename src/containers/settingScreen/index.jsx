import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Modal } from 'react-native';
import {
  Card,
  Title,
  Button,
  TextInput,
  Avatar,
  Divider,
  Paragraph,
} from 'react-native-paper';
import { SelectList } from 'react-native-dropdown-select-list';

const SettingScreen = () => {
  const [userInfo, setUserInfo] = useState({
    username: 'JohnDoe',
    email: 'john.doe@example.com',
    // Add more user info as needed
  });

  const [children, setChildren] = useState([
    { id: '1', name: 'Child 1' },
    { id: '2', name: 'Child 2' },
    { id: '3', name: 'Child 3' },
    { id: '4', name: 'Child 4' },
    { id: '11', name: 'Child 5' },
    { id: '21', name: 'Child 6' },
    { id: '31', name: 'Child 7' },
    { id: '41', name: 'Child 8' },
    { id: '43', name: 'Child 9' },
  ]);

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedChild, setSelectedChild] = useState({});
  const [selected, setSelected] = React.useState("");
  const [childName, setChildName] = useState('');

  const handleEditChild = (child) => {
    setSelectedChild(child);
    setChildName(child.name);
    setModalVisible(true);
  };

  const handleSaveChild = () => {
    if (selectedChild.id) {
      // Edit existing child
      setChildren((prevChildren) =>
        prevChildren.map((child) =>
          child.id === selectedChild.id ? { ...child, name: childName } : child
        )
      );
    } else {
      // Add new child
      const newChild = { id: String(Date.now()), name: childName };
      setChildren((prevChildren) => [...prevChildren, newChild]);
    }

    setModalVisible(false);
    setSelectedChild({});
    setChildName('');
  };

  const handleDeleteChild = (childId) => {
    setChildren((prevChildren) => prevChildren.filter((child) => child.id !== childId));
  };

  const renderChildItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleEditChild(item)}>
      <Card style={styles.card}>
        <Card.Content>
          <Title>{item.name}</Title>
        </Card.Content>
      </Card>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.userInfoContainer}>
        <View style={styles.avatarContainer}>
          <Avatar.Icon size={80} />
        </View>
        <View style={styles.userInfoTextContainer}>
          <Title style={styles.username}>{userInfo.username}</Title>
          <Text style={styles.email}>{userInfo.email}</Text>
        </View>
      </View>

      <Divider style={styles.divider} />

      <View style={styles.childrenContainer}>
        <View style={styles.addButtonContainer}>
          <Title>My Children:</Title>
          <Button mode="contained" onPress={() => setModalVisible(true)}>
            Add
          </Button>
        </View>

        <FlatList
          data={children}
          renderItem={renderChildItem}
          keyExtractor={(item) => item.id}
          style={styles.flatlist}
        />
      </View>
      {/* Child Edit Modal */}
      <Modal visible={modalVisible} animationType="slide">
        <View style={styles.modalContainer}>
          <Paragraph>Please chose your child:</Paragraph>
          <SelectList
            style={styles.filterItem}
            setSelected={(val) => setSelected(val)}
            data={children.map((child) => ({ key: child.id, value: child.name }))}
            label="Children"
            save="children"
            boxStyles={styles.filterItem}
          />
          <View style={styles.buttonContainer}>
            <Button mode="contained" onPress={handleSaveChild} style={styles.saveButton}>
              Save
            </Button>
            <Button mode="outlined" onPress={() => setModalVisible(false)} style={styles.cancelButton}>
              Cancel
            </Button>
          </View>
        </View>
      </Modal>

      {/* Add Child Button */}

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  userInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  avatarContainer: {
    marginRight: 20,
  },
  userInfoTextContainer: {
    flex: 1,
  },
  username: {
    fontSize: 20,
  },
  email: {
    color: 'gray',
  },
  divider: {
    marginVertical: 16,
  },
  childrenContainer: {
    marginBottom: 200,
  },
  buttonContainer: {
    paddingTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  addButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  flatlist: {
    marginTop: 10,
  },
  card: {
    marginVertical: 4,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    margin: 20,
  },
  input: {
    marginBottom: 10,
  },
  saveButton: {
    marginBottom: 10,
  },
  cancelButton: {
    borderWidth: 1,
    borderColor: '#ccc',
  },
  addButton: {
    marginTop: 10,
  },
});

export default SettingScreen;
