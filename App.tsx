import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import ChatPage from './Components/ChatPage';
import Footer from './Components/Footer';
import Header from './Components/Header';
import LinearGradient from 'react-native-linear-gradient';

const App = () => {
  return (
    <SafeAreaView style={styles.main}>
      <LinearGradient
        start={{x: 1, y: 0}}
        end={{x: 0, y: 1}}
        colors={['#363D43', '#191D1D']}
        style={styles.linearGradient}>
        <Header />
        <ScrollView>
          <ChatPage />
        </ScrollView>
      </LinearGradient>
      <Footer />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {flex: 1},
  linearGradient: {
    flex: 1,
  },
});

export default App;
