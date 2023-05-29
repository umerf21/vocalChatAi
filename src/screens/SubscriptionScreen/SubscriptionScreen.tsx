import {View, Text, Image, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {
  AppButton,
  BGContainer,
  PressableView,
  TextStyled,
} from '../../components';
import {AppStyles, Colors, Fonts, Images, Metrics} from '../../theme';
import styles from './SubscritionScreen.styles';
import {useState} from 'react';
import SubscriptionCard from './RenderItems/SubscriptionCard';
import {BUTTON_TYPE} from '../../shared/constants';
import {ROOT_PAGE_URL} from '../../navigator/navigation.types';
type Props = {};
const SubscriptionScreen = (props: Props) => {
  const packagesData = [
    {duration: 12, price: 499.99},
    {duration: 3, price: 49.99},
    {duration: 1, price: 14.99},
  ];

  const featuresText = [
    'Unlimited Questions and answer',
    'High word count on response',
    'No commitment, Cancel anytime',
  ];

  const nav = useNavigation();

  const [selected, setselected] = useState<{
    duration: number;
    price: number | undefined;
  }>();

  const onSelectPackage = () => {
    if (selected !== undefined) {
      nav.navigate(ROOT_PAGE_URL.Chat);
    }
  };
  const renderCheckText = (text: string) => {
    return (
      <View
        style={{flexDirection: 'row', alignItems: 'center', marginVertical: 7}}>
        <Image
          source={Images.images.google}
          style={{width: 15, height: 15, marginRight: 15}}
        />
        <TextStyled fontFamily={Fonts.type.medium}>{text}</TextStyled>
      </View>
    );
  };

  return (
    <BGContainer>
      <ScrollView>
        <View style={styles.headerText}>
          <Image
            source={Images.images.logo}
            style={{height: 100, marginBottom: 30}}
            resizeMode="contain"
          />
          <TextStyled
            fontSize={Fonts.size.size_26}
            fontFamily={Fonts.type.bold}
            color={Colors.primary}>
            Unlock Premium
          </TextStyled>
        </View>
        <View style={{marginVertical: 20}}>
          {featuresText.map(item => renderCheckText(item))}
        </View>
        <View
          style={[
            AppStyles.rowContainer,
            {justifyContent: 'space-between', marginBottom: 30},
          ]}>
          {packagesData.map((item, index) => (
            <SubscriptionCard
              selected={selected}
              setselected={setselected}
              item={item}
              index={index}
            />
          ))}
        </View>
        <AppButton
          title={
            selected !== undefined
              ? `Get ${selected.duration} months / ${selected.price} aed`
              : 'Select Package'
          }
          onPress={onSelectPackage}
          type={BUTTON_TYPE.PRIMARY}
        />
        <View
          style={[
            AppStyles.rowContainer,
            {justifyContent: 'space-between', marginTop: 30},
          ]}>
          <TextStyled
            textStyle={{textDecorationLine: 'underline'}}
            fontSize={Fonts.size.size_13}
            onPress={() => console.log('privacy Policy')}>
            Privacy Policy
          </TextStyled>
          <TextStyled
            fontFamily={Fonts.type.bold}
            onPress={() => console.log('Restore')}>
            Restore
          </TextStyled>
          <TextStyled
            textStyle={{textDecorationLine: 'underline'}}
            fontSize={Fonts.size.size_13}
            onPress={() => console.log('Terms of use')}>
            Terms of use
          </TextStyled>
        </View>
        <TextStyled
          textStyle={{marginTop: 20, textAlign: 'center'}}
          fontSize={Fonts.size.size_12}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy
        </TextStyled>
      </ScrollView>
    </BGContainer>
  );
};
export default SubscriptionScreen;
