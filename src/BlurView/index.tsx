import React from 'react';
import { View } from 'react-native';
import WebView from 'react-native-webview';

type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;

export interface BlurViewProps {
  backgroundColor?: RGBA;
  blurRadius?: number;
  borderRadius?: number;
}

const BlurView = ({
  backgroundColor = 'rgba(255, 255, 255, 0)',
  blurRadius = 3.5,
  borderRadius,
  ...props
}: BlurViewProps) => (
  <View
    style={{
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'transparent',
      overflow: 'hidden',
    }}
    {...props}
  >
    <WebView
      style={{
        flex: 1,
        backgroundColor: 'transparent',
      }}
      originWhitelist={['*']}
      overScrollMode="never"
      scrollEnabled={false}
      source={{
        html: `
            <html>
              <head>
                <meta name="viewport" content="initial-scale=1.0 maximum-scale=1.0" />
                <style>
                  .blur {
                    position: absolute;
                    top: 0;
                    right:0;
                    bottom: 0;
                    left: 0;
                    
                    background: ${backgroundColor};
                    
                    -webkit-backdrop-filter: blur(${blurRadius}px);
                    backdrop-filter: blur(${blurRadius}px);
                    
                    ${typeof borderRadius === 'number' && `border-radius: ${borderRadius}px;`}
                  }
                </style>
              </head>
              <body>
                <div class="blur" />
              </body>
            </html>
          `,
      }}
    />
  </View>
);

export default BlurView;
