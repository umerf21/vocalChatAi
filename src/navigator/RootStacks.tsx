import {createStackNavigator} from '@react-navigation/stack';
import {View, Text} from 'react-native';
import {screenoptions} from './navigation.config';
import {ROOT_PAGE_URL} from './navigation.types';
import {HomeScreen, SettingsScreen} from '../screens';
import DrawerNavigator from './DrawerNavigator/DrawerNavigator';
type Props = {};
const RootStacks = (props: Props) => {
  const Stack = createStackNavigator();
  const inititalRoute = ROOT_PAGE_URL.Menu;
  return (
    <Stack.Navigator screenOptions={screenoptions}>
      <Stack.Screen name={ROOT_PAGE_URL.Menu} component={DrawerNavigator} />
      {/* <Stack.Screen name={ROOT_PAGE_URL.Settings} component={SettingsScreen} /> */}
    </Stack.Navigator>
  );
};
export default RootStacks;
