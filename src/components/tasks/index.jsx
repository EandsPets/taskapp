// components/Task.js
import React from 'react';
import { View, Text } from 'react-native';
import { Card, Title, Paragraph, Button } from 'react-native-paper';

const Task = ({ task }) => {
  const { timeStarted, user, finishedTime, status, info } = task;

  const handleAction = () => {
    // Implement the action logic here
    console.log('Task action pressed');
  };

  return (
    <Card style={{ margin: 16 }}>
      <Card.Content>
        <Title>{user}</Title>
        <Paragraph>{info}</Paragraph>
      </Card.Content>
      <Card.Actions>
        <Button onPress={handleAction}>Action</Button>
      </Card.Actions>
    </Card>
  );
};

export default Task;
