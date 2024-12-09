import React, { useState, useCallback, useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Button, Paragraph } from 'react-native-paper';
import { GiftedChat } from 'react-native-gifted-chat';

const CreativeChatPage = ({ route }) => {
  const [messages, setMessages] = useState([]);
  const [creativeInfo, setInfo] = useState([]);

  useEffect(() => {
    const { creativeData } = route.params;
    setInfo(creativeData);

    const messagesData = creativeData.evaluation.map((item) => ({
      _id: item._id,
      text: item.text,
      createdAt: new Date(item.createAt),
      user: item.user,
    }));
    setMessages(messagesData);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) => GiftedChat.append(previousMessages, messages));
  }, []);

  return (
    <View style={styles.container}>
      <Image source={{ uri: creativeInfo.mediaUrl }} style={styles.imageStyle} />
      <Paragraph style={styles.paragraph}>{creativeInfo.content || 'No description available'}</Paragraph>
      <GiftedChat
        messages={messages}
        onSend={(messages) => onSend(messages)}
        user={{
          _id: 1,
        }}
      />
      <Button
        onPress={() => {
          navigation.navigate('Home', {});
        }}
        mode="contained-tonal"
        theme={{ colors: { primary: 'green' } }}
      >
        Aprovar
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageStyle: {
    flex: 1,
    aspectRatio: 4.3,
    resizeMode: 'contain',
  },
  paragraph: {
    textAlign: 'center',
    margin: 10,
  },
});

export default CreativeChatPage;
