/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import NotificationService from './service/NotificationService';
import messaging from '@react-native-firebase/messaging';

import MainScreen from "./screens/MainScreen";

function App(): React.JSX.Element {

  const getFcmToken = async () => {
    const token = await messaging().getToken();
    console.log('FCM Token:', token);
    // 서버에 이 토큰을 저장해두면 나중에 개별 기기에 푸시 알림을 보낼 수 있습니다.
  };

  useEffect(() => {
    NotificationService.createChannel();
    getFcmToken();
  }, []);

  // const isDarkMode = useColorScheme() === 'dark';

  // const requestUserPermission = async () => {
  //   const authStatus = await messaging().requestPermission();
  //   const enabled =
  //     authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
  //     authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  //   if (enabled) {
  //     console.log('알림 권한이 허용되었습니다.');
  //     getFcmToken();
  //   }
  // };

  // messaging().setBackgroundMessageHandler(async (remoteMessage) => {
  //   //  여기에 로직을 작성한다.
  //   //  remoteMessage.data로 메세지에 접근가능
  //   //  remoteMessage.from 으로 topic name 또는 message identifier
  //   //  remoteMessage.messageId 는 메시지 고유값 id
  //   //  remoteMessage.notification 메시지와 함께 보내진 추가 데이터
  //   //  remoteMessage.sentTime 보낸시간
  //   console.log('Message handled in the background!', remoteMessage);
  // });
  
  // AppRegistry.registerComponent(appName, () => App);


  // const getFcmToken = async () => {
  //   const token = await messaging().getToken();
  //   console.log('FCM Token:', token);
  //   // 서버에 이 토큰을 저장해두면 나중에 개별 기기에 푸시 알림을 보낼 수 있습니다.
  // };


  // useEffect(() => {
  //   // 푸시 알림 권한 요청
  //   requestUserPermission();

  //   // FCM 메시지 수신 대기
  //   const unsubscribe = messaging().onMessage(async (remoteMessage) => {
  //     console.log('FCM 메시지를 수신했습니다:', remoteMessage);
  //     // 여기서 로컬 알림으로 보여줄 수 있습니다.
  //   });

  //   return unsubscribe;
  // })

  // useEffect(() => {
  //   // Android 채널 생성
  //   if (Platform.OS === 'android') {
  //     NotificationService.createChannel();
  //   }
  // }, []);

  // const handlePress = () => {
  //   NotificationService.showNotification('테스트 알림', '이것은 테스트 알림 메시지입니다.');
  // };

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };
  return <MainScreen />;
}

export default App;
