import React from 'react';
import { Appbar } from 'react-native-paper';

const CustomHeader = ({ navigation }) => (
  <Appbar.Header>
    <Appbar.Action icon="menu" onPress={() => navigation.openDrawer()} />
    <Appbar.Content title="Your App Title" />
    <Appbar.Action
      icon="plus"
      onPress={() => {
        // Add the functionality you want when the plus icon is pressed
        // For example, navigate to a screen or show a modal
        console.log('Plus icon pressed');
      }}
    />
  </Appbar.Header>
);

export default CustomHeader;
