import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import IGStoryCircle from 'react-native-instagram-story-circle';
// import * as contactsData from './data/contactsData.json';

const contactsData = [
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
export default function Header() {
  return (
    <>
      <View style={styles.header_container}>
        <Text style={styles.header_text}>All Chats</Text>
        <View style={styles.header_icon}>
          <FontAwesomeIcon style={styles.icon} icon={faMagnifyingGlass} />
        </View>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.story_scroll_container}>
        <View style={styles.story_icons}>
          {contactsData.map(
            ({uid, image}): JSX.Element => (
              <View key={uid} style={styles.story_container}>
                {/* <Text style={{color: '#fff'}}>{image}</Text> */}
                <IGStoryCircle
                  source={image}
                  hasStory={true}
                  onPress={() => {}}
                  size={65}
                />
              </View>
            ),
          )}
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  header_container: {
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  header_text: {
    fontSize: 20,
    fontWeight: '900',
    color: '#fff',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 5,
  },
  icon: {
    color: '#fff',
  },
  header_icon: {
    backgroundColor: '#41454A',
    padding: 6,
    borderRadius: 15,
    elevation: 4,
  },
  story_scroll_container: {
    paddingBottom: 20,
  },
  story_icons: {
    flexDirection: 'row',
    marginVertical: 15,
    marginHorizontal: 12,
  },
  story_container: {
    marginHorizontal: 4,
  },
});
