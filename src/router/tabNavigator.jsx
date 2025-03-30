import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/homeScreen';
import MessageScreen from '../screens/messageScreen';
import ProfileScreen from '../screens/profileScreen';
import {TABNAVIGATOR} from '../utils/Routes';
import TabIcon from '../components/router/tabIcon';
import {Colors} from '../theme/Colors';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color, focused}) => (
          <TabIcon route={route} size={30} color={color} focused={focused} />
        ),
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 20,
          left: 20,
          right: 20,
          backgroundColor: Colors.WHITE,
          elevation: 5,
          borderRadius: 25,
          height: 70,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginHorizontal: 10,
        },
        tabBarItemStyle: {
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center',
        },
        tabBarIconStyle: {
          flex: 1,
          alignSelf: 'center',
          justifyContent: 'center',
        },
      })}>
      <Tab.Screen name={TABNAVIGATOR.HOME} component={HomeScreen} />
      <Tab.Screen name={TABNAVIGATOR.MESSAGE} component={MessageScreen} />
      <Tab.Screen name={TABNAVIGATOR.PROFILE} component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
