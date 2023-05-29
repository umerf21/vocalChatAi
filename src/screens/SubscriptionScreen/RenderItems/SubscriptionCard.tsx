import {View, Text} from 'react-native';
import {Colors, Fonts, Metrics} from '../../../theme';
import {PressableView, TextStyled} from '../../../components';
import styles from '../SubscritionScreen.styles';
interface ISubscriptionCardProps {
  item: any;
  index: number;
  selected: any;
  setselected: any;
}

const SubscriptionCard = ({
  item,
  index,
  selected,
  setselected,
}: ISubscriptionCardProps) => {
  const {duration, price} = item;

  const isSelected = selected?.duration == item?.duration ?? false;

  const selectedColor = isSelected ? Colors.secondary : Colors.dark;

  const selectedProps = isSelected && {
    borderWidth: 4,
    borderColor: Colors.primary,
    borderRadius: Metrics.ratio(5),
  };

  return (
    <PressableView
      key={index}
      style={[styles.subscriptionCard, selectedProps]}
      onPress={() => {
        setselected(item);
      }}>
      {/* <View style={isSelected && styles.subscriptionCardContainer}> */}
      <TextStyled
        color={selectedColor}
        fontFamily={Fonts.type.bold}
        fontSize={Fonts.size.size_30}>
        {duration}
      </TextStyled>
      <TextStyled color={selectedColor} fontFamily={Fonts.type.medium}>
        months
      </TextStyled>
      <TextStyled
        color={selectedColor}
        fontFamily={Fonts.type.bold}
        fontSize={Fonts.size.size_12}
        textStyle={{marginTop: 5}}>
        {`${price} aed`}
      </TextStyled>
      {/* </View> */}
      {/* <Image source={Images.images.rightArrowBar} /> */}
    </PressableView>
  );
};

export default SubscriptionCard;
