// components/UserTask.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import {
  Card,
  Avatar,
  Title,
  ProgressBar,
} from 'react-native-paper';

const UserTask = ({ user }) => {

  return (
    <Card style={styles.card} >
      <Card.Content style={styles.content}>
        <View style={styles.leftContent}>
          <Avatar.Text size={48} label={user.name.slice(0, 1)} />
          <Title style={styles.name}>{user.name}</Title>
        </View>
        <View style={styles.rightContent}>
          <ProgressBar
            style={styles.progressBar}
            progress={user.progress}
            color={user.progress > 0.4 ? 'green' : 'red'}
          />
        </View>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    margin :16,
    marginTop: 5,
    marginBottom: 0,
    padding: 5,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  leftContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    fontSize: 18,
    marginLeft: 12,
  },
  rightContent: {
    flex: 1,
    alignItems: 'flex-end',
  },
  progressBar: {
    width: 80, // Adjust the width of the progress bar
    marginTop: 8,
  },
});

export default UserTask;
