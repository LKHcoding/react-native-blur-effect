/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import BlurView from './BlurView';
// import BlurView from '../dist/BlurView';

const Section: React.FC<{
  title: string;
}> = ({ children, title }) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}
      >
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}
      >
        {children}
      </Text>
    </View>
  );
};

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={'white'}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}
      >
        <View>
          <Header />

          <BlurView blurRadius={1} />
        </View>

        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}
        >
          <View>
            <Section title="Step One">
              Edit <Text style={styles.highlight}>App.tsx</Text> to change this screen and then
              come back to see your edits.
            </Section>
            <BlurView blurRadius={2} />
          </View>

          <View style={{ paddingBottom: 20 }}>
            <Section title="See Your Changes">
              <ReloadInstructions />
            </Section>

            <BlurView
              blurRadius={3}
              backgroundColor={'rgba(0, 0, 0, 0.1)'}
            />

            <Text style={{ marginLeft: 22, marginTop: 16, fontWeight: '700', fontSize: 20 }}>
              This text is above the blur view.
            </Text>
          </View>

          <View>
            <Section title="Debug">
              <DebugInstructions />
            </Section>
            <BlurView
              blurRadius={4}
              backgroundColor={'rgba(0, 0, 0, 0.2)'}
            />
          </View>

          <View>
            <Section title="Learn More">Read the docs to discover what to do next:</Section>

            <LearnMoreLinks />

            <BlurView blurRadius={5} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
