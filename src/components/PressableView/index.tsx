import {
  View,
  Text,
  TouchableOpacity,
  Platform,
  StyleProp,
  ViewStyle,
} from 'react-native';
import React from 'react';

interface Props {
  style?: StyleProp<ViewStyle>;
  children: any;
  onPress: Function;
  isBackgroundBorderLess?: boolean;
  disableRipple?: boolean;
  debounceTime?: number;
  rippleColor?: string;
  disabled?: boolean;
  disabledOpacity?: number;
  activeOpacity?: number;
  disableDebounce?: boolean;
  isHeightLight?: boolean;
  enableClick?: boolean;
  hitSlop?: object;
}

const PressableView = (props: Props) => {
  var disableClick = false;
  const {
    style = {},
    isBackgroundBorderLess = false,
    disableRipple = false,
    debounceTime = Platform.select({android: 700, ios: 200}),
    rippleColor = '',
    disabled = false,
    disabledOpacity = 0.5,
    activeOpacity = 0.5,
    disableDebounce = false,
    isHeightLight = false,
    enableClick = true,
    onPress,
    hitSlop,
    children,
    ...rest
  } = props;

  const _onPress = () => {
    if (enableClick && onPress) {
      onPress();
    } else if (disableClick) {
    } else {
      disableClick = true;
      onPress?.();
      setTimeout(() => {
        disableClick = false;
      }, debounceTime);
    }
  };

  const opacityStyle = disabled ? {opacity: disabledOpacity} : {};

  return (
    <TouchableOpacity
      style={[style, opacityStyle]}
      disabled={disabled}
      hitSlop={hitSlop}
      {...rest}
      onPress={_onPress}
      activeOpacity={activeOpacity}>
      {children}
    </TouchableOpacity>
  );
};

export default PressableView;
