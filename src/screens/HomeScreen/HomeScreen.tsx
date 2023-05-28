import {View, Text, TouchableOpacity} from 'react-native';
import {AppButton} from '../../components';
import {useNavigation, DrawerActions} from '@react-navigation/native';
import {BUTTON_TYPE} from '../../shared/constants';
import {ROOT_PAGE_URL} from '../../navigator/navigation.types';
type Props = {};
const HomeScreen = (props: Props) => {
  const navigation = useNavigation();

  return (
    <View>
      <AppButton
        type={BUTTON_TYPE.PRIMARY}
        title="Settings"
        onPress={() => {
          navigation.navigate(ROOT_PAGE_URL.Settings);
        }}
      />
    </View>
  );
};
export default HomeScreen;
