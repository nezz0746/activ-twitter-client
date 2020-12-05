import React from 'react';
import { Text, View } from 'react-native';

interface Props {

}

const TweetScreen = (props: Props) => {
  console.log(props);
  return (
    <View>
      <Text>Tweet Screen</Text>
    </View>
  );
};

export default TweetScreen;
