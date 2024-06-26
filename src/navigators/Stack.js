import React, {useState, useContext, useEffect} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
// import {useDispatch, useSelector} from 'react-redux';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
// import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  Dashboard,
  Projects,
  Login,
  SignUp,
  VerifyConfirm,
  VerifyInput,
  Profile,
  Members,
  BrainStorm,
} from '../screens';
import appTheme from '../constants/colors';
import {combineData} from '../utils/DataHelper';
import {AuthContext} from '../context';
import {CreateTask} from '../components/Task';
import {loginSuccess} from '../store/slices/userSlice';

const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();

function CustomTabBar(props) {
  const {state, dispatch} = useContext(AuthContext);
  const [data, setData] = useState({activeNavTab: 'Dashboard'});

  const handleNavigation = route => {
    setData(combineData(data, {activeNavTab: route}));
    props?.navigation.navigate(route);
  };

  const getColor = title => {
    let color;
    if (title === data?.activeNavTab) {
      color = appTheme.PRIMARY_COLOR;
    } else {
      color = appTheme.INACTIVE_COLOR;
    }
    return color;
  };

  return (
    <View style={styles.menuWrapper}>
      <View style={styles.menuContainer}>
        <TouchableOpacity onPress={() => handleNavigation('My Tasks')}>
          <FontAwesome name="tasks" size={25} color={getColor('My Tasks')} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleNavigation('Tasks')}>
          <FontAwesome name="list-alt" size={25} color={getColor('Tasks')} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleNavigation('BrainStorm')}>
          <MaterialCommunityIcons
            name="brain"
            size={30}
            color={getColor('BrainStorm')}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleNavigation('Members')}>
          <FontAwesome6
            name="people-group"
            size={25}
            color={getColor('Members')}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleNavigation('Profile')}>
          <MaterialIcons
            name="account-circle"
            size={32}
            color={getColor('Profile')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const BottomStack = () => {
  return (
    <BottomTab.Navigator tabBar={props => <CustomTabBar {...props} />}>
      <BottomTab.Screen
        name="My Tasks"
        component={Dashboard}
        options={{headerShown: false}}
      />
      <BottomTab.Screen
        name="Tasks"
        component={Projects}
        options={{headerShown: false}}
      />
      <BottomTab.Screen
        name="BrainStorm"
        component={BrainStorm}
        options={{headerShown: false}}
      />
      <BottomTab.Screen
        name="Create Task"
        component={CreateTask}
        options={{headerShown: false}}
      />
      <BottomTab.Screen
        name="Members"
        component={Members}
        options={{headerShown: false}}
      />
      <BottomTab.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      />
    </BottomTab.Navigator>
  );
};

const SingleStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="VerifyInput"
        component={VerifyInput}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="VerifyConfirm"
        component={VerifyConfirm}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

function AppStack() {
  // const dispatch = useDispatch();
  // const [userLoaded, setUserLoaded] = useState(false);
  // const {me} = useSelector(state => state.user);
  // useEffect(() => {
  //   const fetchUser = async () => {
  //     try {
  //       const meValue = await AsyncStorage.getItem('me');
  //       if (meValue) {
  //         dispatch(loginSuccess(JSON.parse(meValue)));
  //         setUserLoaded(true);
  //       }
  //     } catch (error) {
  //       console.error('Error fetching user from AsyncStorage:', error);
  //       setUserLoaded(false);
  //     }
  //   };

  //   fetchUser();
  // }, [dispatch]);

  return (
    <Stack.Navigator initialRouteName="SingleStack">
      <Stack.Screen
        name="SingleStack"
        component={SingleStack}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="BottomStack"
        component={BottomStack}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  menuWrapper: {
    backgroundColor: 'transparent',
  },
  menuContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 80,
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'row',
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: -3,
    },
    shadowColor: '#000000',
    elevation: 4,
    marginTop: 1,
    paddingHorizontal: 25,
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
  },
  plusBtnContainer: {
    height: 60,
    width: 60,
    borderRadius: 50,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default AppStack;
