// src/services/NotificationService.ts
import PushNotification from 'react-native-push-notification';
import {Linking} from 'react-native';

class NotificationService {
  constructor() {
    this.configure();
  }

  configure = () => {
    PushNotification.configure({
      onNotification: function (notification) {
        console.log('알림을 수신했습니다:', notification);
        // finish 메서드 제거

        // 알림 클릭 시 특정 URL로 이동
        if (notification.userInteraction && notification.data.url) {
          Linking.openURL(notification.data.url).catch(err =>
            console.error('Failed to open URL:', err),
          );
        }
      },
    });
  };

  // 로컬 알림 생성
  showNotification = (title: string, message: string) => {
    PushNotification.localNotification({
      channelId: 'default-channel-id', // 채널 ID가 필요합니다.
      title: title,
      message: message,
    });
  };

  // 채널 생성 (Android)
  createChannel = () => {
    PushNotification.createChannel(
      {
        channelId: 'default-channel-id', // 채널 ID
        channelName: 'Default Channel', // 채널 이름
        channelDescription: 'A default channel', // 채널 설명
        importance: 4, // 알림 중요도
        vibrate: true,
      },
      created => console.log(`채널 생성 여부: '${created}'`), // 성공 여부 로그
    );
  };
}

export default new NotificationService();
