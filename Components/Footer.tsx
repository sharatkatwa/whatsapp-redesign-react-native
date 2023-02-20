import {StyleSheet, View} from 'react-native';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faCommentDots,
  faGear,
  faAddressCard,
  faCircleUser,
} from '@fortawesome/free-solid-svg-icons';
import LinearGradient from 'react-native-linear-gradient';

export default function footer() {
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 0, y: 1}}
      colors={['#FFFFFF00', '#101315']}
      style={styles.gradient_footer}>
      <View style={styles.footer_container}>
        <FontAwesomeIcon style={styles.footer_icon1} icon={faCommentDots} />
        <FontAwesomeIcon style={styles.footer_icon2} icon={faGear} />
        <FontAwesomeIcon style={styles.footer_icon3} icon={faAddressCard} />
        <FontAwesomeIcon style={styles.footer_icon4} icon={faCircleUser} />
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient_footer: {
    position: 'absolute',
    paddingTop: 40,
    bottom: 0,
    left: 0,
    right: 0,
  },
  footer_container: {
    // position: fixed,

    backgroundColor: '#2D3035',
    padding: 20,
    marginHorizontal: 20,
    marginVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'space-around',
    borderRadius: 18,
    elevation: 4,
  },

  footer_icon1: {
    color: '#52565D',
  },
  footer_icon2: {
    color: '#52565D',
  },
  footer_icon3: {
    color: '#52565D',
  },
  footer_icon4: {
    color: '#52565D',
  },
});
