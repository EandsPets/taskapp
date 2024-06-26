import React, {useContext} from 'react';
import {View, ScrollView, Image, TouchableWithoutFeedback} from 'react-native';
import {DataTable} from 'react-native-paper';
import Feather from 'react-native-vector-icons/Feather';
import shortid from 'shortid';
import styles from './styles';
import appTheme from '../../constants/colors';
import {serverUrl} from '../../utils/helper';

export function UserListComponent(props) {
  const {users} = props;

  const header = ['Name', 'Status', 'Photo', 'Block Device'];
  const status = ['Diabled', 'Activated'];

  const renderTableCell = (value, index) => {
    return (
      <DataTable.Cell
        key={shortid.generate()}
        style={[
          styles.cellWidth,
          {
            fontFamily: 'Poppins-Bold',
            width: index === 0 ? 200 : 100,
          },
        ]}>
        {index === 2 ? (
          <Image
            key={shortid.generate()}
            style={styles.memberPhoto}
            source={{uri: serverUrl + value[1]}}
          />
        ) : index === 1 ? (
          status[value[1]]
        ) : (
          value[1]
        )}
      </DataTable.Cell>
    );
  };

  return (
    <View style={[styles.container]}>
      <ScrollView horizontal={true} style={styles.scrollViewContainer}>
        <DataTable>
          <DataTable.Header>
            {header.map((h, idx) => (
              <DataTable.Title
                style={[styles.cellWidth, {width: idx === 0 ? 200 : 100}]}
                key={shortid.generate()}>
                {h}
              </DataTable.Title>
            ))}
          </DataTable.Header>
          {users.map(user => (
            <DataTable.Row key={shortid.generate()}>
              {Object.entries(user)
                .filter(([key]) => key !== 'id' && key !== 'email')
                .map((value, index) => renderTableCell(value, index))}
              <DataTable.Cell key={shortid.generate()} style={styles.cellWidth}>
                <TouchableWithoutFeedback
                  onPress={() => handleBottomModal(task.id)}>
                  <Feather name="edit" size={20} color={appTheme.EDIT_COLOR} />
                </TouchableWithoutFeedback>
              </DataTable.Cell>
            </DataTable.Row>
          ))}
        </DataTable>
      </ScrollView>
    </View>
  );
}
