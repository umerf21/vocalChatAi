import {StyleSheet, Platform} from 'react-native';

import Metrics from './Metrics';
import Colors from './Colors';
import Fonts from './Fonts';

export default StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: Metrics.bottomPadding,
  },
  containerPadding: {
    flex: 1,
    marginBottom: Metrics.bottomPadding,
    paddingHorizontal: Metrics.ratio(20),
  },
  containerScreen: {
    flex: 1,
    padding: Metrics.largeMargin,
    paddingTop: Metrics.navbarHeight,
    backgroundColor: Colors.background,
  },
  rowContainer: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
  },
  flex1: {
    flex: 1,
  },
  heading: {
    fontSize: Fonts.size.size_28,
    fontFamily: Fonts.type.bold,
    marginBottom: Metrics.ratio(30),
    color: Colors.dark,
  },
});
