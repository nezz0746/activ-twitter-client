import React from 'react';
import {
  Text, View, StyleSheet, Image,
} from 'react-native';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import { EvilIcons } from '@expo/vector-icons';
import Tools from '../constants/Tools';
import { Entity, Tweet, User } from '../models';
import Column from './Column';
import Colors from '../constants/Colors';

dayjs.extend(utc);

const TweetComponent = ({
  user,
  created_at,
  text,
  reply_count,
  favorite_count,
  retweet_count,
  retweeted,
  entities,
}: Tweet) => {
  const { media }: Entity = entities;
  const { name, profile_image_url_https, screen_name }: User = user;

  const imageProfileWidth = 45;

  return (
    <View style={styles.root}>
      {/* {retweeted && <EvilIcons name="retweet" size={24} color={Colors.light.grey} />} */}
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
        grow
      >
        <Text style={styles.username}>
          {name}
          <Text style={styles.screen_name}>
            @
            {screen_name}
            {' '}
            .
            {' '}
          </Text>
          <Text style={styles.screen_name}>{displayTime(created_at)}</Text>
        </Text>
        <Text>{text}</Text>
        {media?.length && (
        <Image
          style={{
            height: 250, ...Tools.borderMaker(Colors.light.grey, 1), borderRadius: 3, marginVertical: 5, ...Tools.bowShadow(), backgroundColor: 'white',
          }}
          resizeMode="contain"
          source={{ uri: media[0]?.media_url_https }}
        />
        )}
        <View style={styles.row}>
          <>
            <View style={styles.segment}>
              <EvilIcons name="retweet" size={24} color={Colors.light.grey} />
              <Text style={styles.screen_name}>{retweet_count}</Text>
            </View>
            <View style={styles.segment}>
              <EvilIcons name="comment" size={24} color={Colors.light.grey} />
              <Text style={styles.screen_name}>{reply_count}</Text>
            </View>
            <View style={styles.segment}>
              <EvilIcons name="heart" size={24} color={Colors.light.grey} />
              <Text style={styles.screen_name}>
                {favorite_count}
              </Text>
            </View>
          </>
        </View>
      </Column>
    </View>
  );
};

const displayTime = (created_at) => {
  const minutes = dayjs().diff(dayjs(created_at), 'minute');
  if (minutes < 60) {
    return `${minutes}m`;
  }
  const hours = dayjs().diff(dayjs(created_at), 'hour');
  if (hours < 24) {
    return `${hours}h`;
  }
  const days = dayjs().diff(dayjs(created_at), 'day');
  if (days < 7) {
    return `${days}j`;
  }
  return dayjs(created_at).format('DD/MM/YYYY');
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
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 5,
  },
  username: {
    fontWeight: 'bold',
  },
  screen_name: {
    color: Colors.light.grey,
    marginHorizontal: 5,
  },
});

export default TweetComponent;
