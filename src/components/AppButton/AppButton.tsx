import {View, Image, ImageSourcePropType, Text} from 'react-native';
import styles from './AppButton.styles';
import React from 'react';
import {BUTTON_TYPE} from '../../shared/constants';
import {Colors, Fonts} from '../../theme';
import PressableView from '../PressableView';
import TextStyled from '../TextStyled';
type Props = {
  title: string;
  textStyle?: any;
  icon?: ImageSourcePropType;
  iconStyle?: any;
  onPress: Function;
  type: number;
  buttonStyle?: any;
  disabled?: boolean;
};
const AppButton = (props: Props) => {
  const {
    title,
    textStyle,
    icon,
    iconStyle,
    onPress,
    type,
    buttonStyle,
    disabled,
  } = props;
  const renderTitle = () => {
    return (
      <TextStyled
        fontFamily={Fonts.type.bold}
        textStyle={[
          styles.title,
          textStyle,
          type === BUTTON_TYPE.PRIMARY && {color: Colors.dark},
        ]}>
        {title}
      </TextStyled>
    );
  };
  const renderIcon = () => {
    return icon && <Image source={icon} style={[styles.icon, iconStyle]} />;
  };
  const getButtonColor = () => {
    if (type === BUTTON_TYPE.PRIMARY) {
      return {backgroundColor: Colors.primary};
    } else if (type === BUTTON_TYPE.SECONDARY) {
      return {backgroundColor: Colors.secondary};
    } else if (type === BUTTON_TYPE.GREY) {
      return {backgroundColor: Colors.headerBG};
    } else {
      return {backgroundColor: Colors.transparent};
    }
  };
  const buttonColor = getButtonColor();
  return (
    <PressableView
      style={[buttonColor, styles.button, buttonStyle]}
      disabled={disabled ?? false}
      onPress={onPress}>
      {icon && renderIcon()}
      {title && renderTitle()}
    </PressableView>
  );
};
export default AppButton;
