import {StyleSheet} from 'react-native';

import {Fonts, Metrics} from '../../theme';

export default StyleSheet.create({
  button: {
    borderRadius: Metrics.ratio(5),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    height: Metrics.ratio(50),
  },
  title: {
    // fontFamily: Fonts.type.medium,
    // fontSize: Fonts.size.size_17,
    textAlign: 'center',
  },
  icon: {
    marginRight: Metrics.ratio(20),
  },
});
