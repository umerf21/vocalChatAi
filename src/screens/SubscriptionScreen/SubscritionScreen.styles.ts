import {StyleSheet} from 'react-native';
import {Colors, Metrics} from '../../theme';

export default StyleSheet.create({
  subscriptionCard: {
    // flexDirection: 'row',
    backgroundColor: Colors.white,
    height: Metrics.ratio(110),
    borderRadius: Metrics.ratio(5),
    justifyContent: 'center',
    padding: Metrics.smallMargin,
    alignItems: 'center',
    marginVertical: Metrics.smallMargin,
    width: Metrics.screenWidth / 3 - 20,
  },
  subscriptionCardContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',

    padding: Metrics.smallMargin,
    borderWidth: 2,
    width: '100%',
    borderColor: Colors.backgroundLight,
    borderRadius: Metrics.ratio(5),
  },
  headerText: {
    padding: Metrics.baseMargin,
    marginTop: Metrics.baseMargin,
    alignItems: 'center',
  },
});
