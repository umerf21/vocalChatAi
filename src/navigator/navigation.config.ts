import {DrawerNavigationOptions} from '@react-navigation/drawer';
import {StackNavigationOptions} from '@react-navigation/stack';
import {Colors} from '../theme';

export const screenoptions: StackNavigationOptions = {
  headerTitleAlign: 'center',
  headerShown: false,
  headerStyle: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  cardStyle: {backgroundColor: 'transparent'},
  animationEnabled: false,
  gestureEnabled: true,
  gestureDirection: 'horizontal',
  detachPreviousScreen: true,
};

export const DrawerScreenOptions: DrawerNavigationOptions = {
  headerTitleAlign: 'center',
  headerShown: true,
  headerTransparent: true,
  headerTitleStyle: {
    color: Colors.white,
  },
  // headerStyle: {
  //   shadowColor: '#000',
  //   shadowOffset: {
  //     width: 0,
  //     height: 3,
  //   },
  //   shadowOpacity: 0.27,
  //   shadowRadius: 4.65,
  //   elevation: 6,
  // },
};
