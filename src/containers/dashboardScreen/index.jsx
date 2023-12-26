// screens/DashboardScreen.js

import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import UserTask from '../../components/tasks/userTask';
import shortid from 'shortid';

const DashboardScreen = ({ tasks }) => {

  const users = [
    {
      name: 'John',
      progress: 0.1,
    },
    {
      name: 'John',
      progress: 0.2,
    },
    {
      name: 'John',
      progress: 0.3,
    },
    {
      name: 'John',
      progress: 0.8,
    },
    {
      name: 'John',
      progress: 1,
    },
    {
      name: 'John',
      progress: 0.4,
    },
  ];
  return (
    <FlatList
      data={users}
      keyExtractor={(item) => shortid.generate()}
      renderItem={({ item }) => (
        <UserTask user={item} />
      )}/>
  );
};

const mapStateToProps = (state) => ({
  tasks: state.tasks.tasks,
});

export default connect(mapStateToProps)(DashboardScreen);
