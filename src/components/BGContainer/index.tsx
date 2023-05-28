import {StyleSheet, Text, View} from 'react-native';
import {AppStyles, Colors, Metrics} from '../../theme';
type Props = {
  children: React.ReactNode;
};
const BGContainer = (props: Props) => {
  const {children} = props;
  return (
    <View style={AppStyles.containerScreen}>
      <View style={styles.topCircle} />
      <View style={styles.bottomCircle} />
      {children}
    </View>
  );
};
export default BGContainer;
const styles = StyleSheet.create({
  topCircle: {
    position: 'absolute',
    backgroundColor: Colors.backgroundLight,
    width: Metrics.ratio(250),
    height: Metrics.ratio(250),
    borderRadius: Metrics.ratio(150),
    right: -80,
    top: -120,
  },
  bottomCircle: {
    position: 'absolute',
    backgroundColor: Colors.backgroundLight,
    width: Metrics.ratio(500),
    height: Metrics.ratio(500),
    borderRadius: Metrics.ratio(250),
    // left: 0,
    right: 0,
    bottom: -250,
  },
});
