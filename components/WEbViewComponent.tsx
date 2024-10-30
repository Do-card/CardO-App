// WebViewComponent.tsx
import React from 'react';
import { WebView } from 'react-native-webview';

interface WebViewComponentProps {
  uri: string;
}

const WebViewComponent: React.FC<WebViewComponentProps> = ({ uri }) => {
  return <WebView source={{ uri }} style={{ flex: 1 }} />;
};

export default WebViewComponent;
