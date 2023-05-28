import {
  Text as TextRN,
  StyleSheet,
  StyleProp,
  TextStyle,
  TextProps,
} from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';
import {Fonts, Colors, Metrics} from '../../theme';

interface ITextStyled {
  children: React.ReactNode;
  color?: string;
  fontSize?: number;
  fontWeight?: any;
  fontStyle?: 'normal' | 'italic' | undefined;
  fontFamily?: string;
  textStyle?: StyleProp<TextStyle>;
  [rest: string]: any;
}
const TextStyled = (props: ITextStyled) => {
  const {fontStyle, color, children, fontWeight, ...rest} = props;

  return (
    <TextRN
      style={[
        {
          color: color || '#efefef',
          fontSize: props.fontSize || Fonts.size.size_16,
          fontFamily: props.fontFamily || Fonts.type.regular,
          fontStyle: fontStyle || 'normal',
          fontWeight: fontWeight || Fonts.weight.weight_400,
        },
        props.textStyle,
      ]}
      {...rest}>
      {children}
    </TextRN>
  );
};

export default TextStyled;
