import React from 'react';
import {
  Text, View, StyleSheet, Image,
} from 'react-native';
import Tools from '../constants/Tools';
import { Tweet, User } from '../models';
import Column from './Column';

interface TweetComponentProps extends Tweet {
}

const TweetComponent = ({ user = {}, text = '', ...rest }: TweetComponentProps) => {
  const { name, profile_image_url_https }: User = user;

  const imageProfileWidth = 45;

  return (
    <View style={styles.root}>
      <Column
        containerSyle={{ paddingHorizontal: 5 }}
      >
        <Image
          source={{ uri: profile_image_url_https }}
          style={{
            height: imageProfileWidth,
            width: imageProfileWidth,
            borderRadius: imageProfileWidth,
          }}
        />
      </Column>
      <Column
        bordered
        grow
      >
        <Text style={styles.username}>{name}</Text>
        <Text>{text}</Text>
        <View style={styles.row}>
          <>
            <View style={styles.segment}>
              <Text>
                Commentaires:
                {rest.reply_count}
              </Text>
            </View>
            <View style={styles.segment}>
              <Text>
                Favories:
                {rest.favorite_count}
              </Text>
            </View>
          </>
        </View>
      </Column>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    padding: 5,
    flexDirection: 'row',
    marginBottom: 10,
    borderRadius: 3,
    backgroundColor: 'white',
    ...Tools.bowShadow(),
  },
  row: {
    flexDirection: 'row',
  },
  segment: {
    flex: 1,
  },
  username: {
    fontWeight: 'bold',
  },
});

export default TweetComponent;
