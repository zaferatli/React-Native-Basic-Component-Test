import * as React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

export interface AppProps {
  text: string;
  actionClick: () => void;
  secondText?: boolean;
}

export interface AppState {}

export default class AppComponent extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {};
  }

  public render() {
    return (
      <TouchableOpacity
        testID={'ForTestCustomButtonID'}
        onPress={this.props.actionClick}
        style={{
          height: 45,
          width: '90%',
          alignSelf: 'center',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'tomato',
          borderRadius: 10,
        }}>
        <Text style={{color: 'white'}}>{this.props.text}</Text>
        {this.props.secondText && <Text>İkinci text</Text>}
      </TouchableOpacity>
    );
  }
}
