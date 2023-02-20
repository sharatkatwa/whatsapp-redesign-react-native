import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCheck} from '@fortawesome/free-solid-svg-icons';
// import * as contactsData from './data/contactsData.json';

export default function ChatPage() {
  const contactsData2 = [
    {
      uid: 1,
      image: require('./imgs/pic1.jpg'),
      name: 'Olivia Lay',
      message: 'hey! How are you doing ✨',
      messageTime: '1:40 PM',
      isOnline: false,
      sent: true,
    },
    {
      uid: 2,
      image: require('./imgs/pic2.jpg'),
      name: 'Leo Simson',
      message: 'Hello! It looks like youve been inactive for a while.',
      messageTime: '3:40 AM',
      isOnline: true,
      sent: true,
    },
    {
      uid: 3,
      image: require('./imgs/pic3.jpg'),
      name: 'Roman Slave',
      message: 'Do you need any assistance',
      messageTime: '11:40 AM',
      isOnline: false,
      sent: false,
    },
    {
      uid: 4,
      image: require('./imgs/pic4.jpg'),
      name: 'Hudson Hill',
      message: 'I can certainly help you with that.',
      messageTime: '11:10 PM',
      isOnline: false,
      sent: true,
    },
    {
      uid: 5,
      image: require('./imgs/pic5.jpg'),
      name: 'Jack Jones',
      message: 'I can certainly help you with that.',
      messageTime: '7:39 AM',
      isOnline: false,
      sent: false,
    },
    {
      uid: 6,
      image: require('./imgs/pic6.jpg'),
      name: 'anime boy',
      message: 'I can certainly help you with that.',
      messageTime: '7:39 AM',
      isOnline: false,
      sent: false,
    },
    {
      uid: 7,
      image: require('./imgs/pic7.jpg'),
      name: 'mob 100',
      message: 'I can certainly help you with that.',
      messageTime: '7:39 AM',
      isOnline: false,
      sent: true,
    },
    {
      uid: 8,
      image: require('./imgs/pic8.jpg'),
      name: 'lore pale',
      message: 'I can certainly help you with that.',
      messageTime: '7:39 AM',
      isOnline: false,
      sent: true,
    },
  ];

  // const imgComp = <Image source={require('./imgs/pic2.jpg')} />;
  return (
    <View style={styles.main_container}>
      <View style={styles.body_container}>
        {contactsData2.map(
          ({
            uid,
            image,
            name,
            message,
            messageTime,
            isOnline,
            sent,
          }): JSX.Element => (
            <View key={uid}>
              <View style={styles.messages_container}>
                <Image source={image} style={styles.profile_image} />
                <View style={styles.body_content}>
                  <View style={styles.body_text}>
                    <Text style={styles.contact_name}>{name}</Text>
                    <Text numberOfLines={1} style={styles.contact_message}>
                      {message}
                    </Text>
                  </View>
                  <View style={styles.time_and_isSent}>
                    <Text style={styles.message_time}>{messageTime}</Text>
                    {sent && (
                      <FontAwesomeIcon style={styles.icon2} icon={faCheck} />
                    )}
                  </View>
                </View>
              </View>
              <View style={styles.thin_line} />
            </View>
          ),
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main_container: {
    // backgroundColor: '#181C1F',
    marginBottom: 70,
  },

  body_container: {
    marginHorizontal: 16,
    flexDirection: 'column-reverse',
  },
  messages_container: {
    flexDirection: 'row',
    marginBottom: 10,
    alignItems: 'center',
  },

  profile_image: {
    height: 50,
    width: 50,
    borderRadius: 50 / 2,
  },
  body_content: {
    // flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
  },
  body_text: {
    marginLeft: 10,
    marginRight: 50,
  },
  contact_name: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  contact_message: {
    color: '#fff',
  },
  icon2: {
    color: '#fff',
    flex: 1,
    alignSelf: 'flex-end',
  },
  message_time: {
    color: '#fff',
  },
  time_and_isSent: {
    position: 'absolute',
    flex: 1,
    alignSelf: 'flex-end',
  },
  thin_line: {
    marginBottom: 10,
    borderBottomColor: '#4C575F',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
