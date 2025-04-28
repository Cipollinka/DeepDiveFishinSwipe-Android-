import React, {useEffect, useRef} from 'react';
import {Linking, View} from 'react-native';
import {AppManager} from './AppManager';

export default function DeepManager() {
  useEffect(() => {
    Linking.getInitialURL().then(url => {
      if (url) {
        handleDeepLink(url);
      }
    });
    const subscription = Linking.addEventListener('url', ({url}) => {
      console.log(url);
      handleDeepLink(url);
    });
    return () => {
      subscription.remove();
    };
  }, []);

  const handleDeepLink = url => {
    const parsed = new URL(url)._url.split('approved?')[1].slice(0, -1);
    return <AppManager params={parsed} />;
  };

  return (
      <View style={{flex: 1}}>
        { }
      </View>
  );
}
