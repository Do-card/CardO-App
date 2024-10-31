// MainScreen.tsx
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import WebViewComponent from '../components/WebViewComponent';

const MainScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <WebViewComponent uri="http://naver.com" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default MainScreen;
