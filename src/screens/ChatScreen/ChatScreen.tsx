import {View, Text, ScrollView, TextInput, Image, FlatList} from 'react-native';
import {AppStyles, Colors, Fonts, Images, Metrics} from '../../theme';
import {PressableView, TextStyled} from '../../components';
import {useState} from 'react';
type Props = {};
const ChatScreen = (props: Props) => {
  const chatData = [
    {
      isMine: false,
      id: Math.random() * 1000,
      message: 'anything',
    },
    {
      isMine: false,
      id: Math.random() * 1000,
      message: 'Hello!, How can i help you',
    },
    {
      isMine: true,
      id: Math.random() * 1000,
      message:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy textever since the 1500',
    },
    {
      isMine: false,
      id: Math.random() * 1000,
      message: 'dsjsajdkjksajkdsaksajkd bla bla bla',
    },
    {
      isMine: false,
      id: Math.random() * 1000,
      message: 'anything',
    },
    {
      isMine: false,
      id: Math.random() * 1000,
      message: 'Hello!, How can i help you',
    },
    {
      isMine: true,
      id: Math.random() * 1000,
      message:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy textever since the 1500',
    },
    {
      isMine: false,
      id: Math.random() * 1000,
      message: 'dsjsajdkjksajkdsaksajkd bla bla bla',
    },
  ];

  const [chatDataState, setChatDataState] = useState(chatData);
  const [message, setMessage] = useState('');

  const onSend = () => {
    const sendMessage = {
      isMine: true,
      id: Math.random() * 1000,
      message: message,
    };
    setChatDataState(prev => [sendMessage, ...prev]);
    setMessage('');
  };

  const chatBubble = ({item}: any) => {
    const {isMine, message, id} = item;

    const mineProps = {
      backgroundColor: Colors.primary,
      alignSelf: 'flex-end',
    };
    return (
      <View
        key={id}
        style={{
          padding: Metrics.baseMargin,
          backgroundColor: isMine ? Colors.primary : Colors.paleGrey,
          maxWidth: Metrics.screenWidth * 0.75,
          alignSelf: isMine ? 'flex-end' : 'flex-start',
          marginVertical: Metrics.smallMargin,
          borderTopStartRadius: Metrics.baseMargin,
          borderTopEndRadius: Metrics.baseMargin,
          borderBottomEndRadius: isMine ? 0 : Metrics.baseMargin,
          borderBottomStartRadius: !isMine ? 0 : Metrics.baseMargin,
        }}>
        <TextStyled color={Colors.dark} fontSize={Fonts.size.size_14}>
          {message}
        </TextStyled>
      </View>
    );
  };

  return (
    <View style={{backgroundColor: Colors.background, flex: 1}}>
      <View
        style={{
          backgroundColor: Colors.white,
          flex: 1,
          marginTop: Metrics.navbarHeight,
          borderTopRightRadius: Metrics.baseMargin,
          borderTopLeftRadius: Metrics.baseMargin,
        }}>
        <FlatList
          data={chatDataState}
          renderItem={chatBubble}
          style={{
            padding: Metrics.baseMargin,
          }}
          bounces={false}
          contentContainerStyle={{
            paddingBottom: Metrics.baseMargin,
          }}
          inverted
          showsVerticalScrollIndicator={false}
        />
      </View>

      <View
        style={{
          borderTopColor: Colors.paleGrey,
          borderTopWidth: 1,
          paddingHorizontal: Metrics.baseMargin,
          //   padding:
          //   flex: 1,
          flexDirection: 'row',
          backgroundColor: Colors.white,
          //   alignItems: 'center',
        }}>
        <TextInput
          style={{
            flex: 1,
            marginRight: Metrics.baseMargin,
            color: Colors.dark,
            fontFamily: Fonts.type.regular,
            maxHeight: 100,
          }}
          placeholderTextColor={Colors.greyPlaceholder}
          placeholder="Write Your Message"
          multiline
          value={message}
          onChangeText={text => setMessage(text)}
        />
        <PressableView
          onPress={onSend}
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            alignSelf: 'flex-end',
            backgroundColor: Colors.secondary,
            height: 30,
            width: 30,
            borderRadius: 30,
            padding: Metrics.smallMargin,
            marginBottom: Metrics.smallMargin,
          }}>
          <Image
            source={Images.images.rightArrowBar}
            style={{tintColor: Colors.white}}
          />
        </PressableView>
      </View>
    </View>
  );
};
export default ChatScreen;
