 import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';
import {Text, SafeAreaView, StyleSheet, View, TextInput} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import Button from './app/component/button';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function App(): JSX.Element {
  const [displayText, setDisplayText] = useState<String>();
  const [inputText, setInputText] = useState<String>();

  return (
    <SafeAreaView
      style={{
        backgroundColor: Colors.white,
      }}>
      <Text style={styles.textHeader}>React Native Component Testing</Text>
      <View style={styles.sectionContainer}>
        <TextInput
          testID={'TextInputTestID'}
          onChangeText={text => setInputText(text)}
          style={styles.textInput}
        />
        <Button
          text="Yazılanı Aktar"
          actionClick={() => setDisplayText(inputText)}
        />
        <Text testID={'DisplayTextTestID'} style={styles.text}>
          {displayText}
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: '15%',
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  textInput: {
    borderWidth: 1,
    height: 45,
    width: '100%',
    marginBottom: '5%',
    borderRadius: 10,
    borderColor: 'gray',
    textAlign: 'center',
  },
  text: {
    marginTop: '5%',
  },
  textHeader: {
    alignSelf: 'center',
  },
});

export default App;
