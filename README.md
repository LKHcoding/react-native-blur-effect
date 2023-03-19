# react-native-blur-effect


<img style="width: 300px;" src="https://user-images.githubusercontent.com/55027765/226178263-54c9e292-8211-40d4-b0e1-368ee1cdbf41.jpg" />

## Install
```bash
$ yarn add react-native-blur-effect
```

## Usage
`BlurView` covers parent element area
```tsx
import BlurView from 'react-native-blur-effect';
import { View, Text } from 'react-native';

const BlurExampleComponent = () => {
  return (
    <View>
      <Text>First Text Element</Text>
      <BlurView backgroundColor="rgba(255, 255, 255, 0.1)" blurRadius={1.5} />
      <Text>Second Text Element</Text>
    </View>
  );
};
```

## Precautions
'BlurView' is using webview.  
When using 'WebView' within 'ScrollView', there is a problem of crashing if it reach to the end of the scroll.  
[react-native-webview issue link](https://github.com/react-native-webview/react-native-webview/issues/2364)

It is expected to be resolved in 'PR' below If you use 'patch-package', you can use it without crash.  
[#2874](https://github.com/react-native-webview/react-native-webview/pull/2874)

## About this library
React Native currently does not provide a way to use the Blur effect.
Here are some ways to try.

- with react-native-blur
- with expo-blur
- with imageBackground + transparent
- with react-native-svg
- with react-native-linear-gradient
- with react-native-reanimated
- with react-native-skia

Among the above items,  
can not find a case where blur effect was available  
without any problems on both aos/ios platforms.

Please share if there is a better alternative than using webview.

