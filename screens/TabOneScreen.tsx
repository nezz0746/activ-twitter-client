import * as React from 'react';
import {
  ActivityIndicator, FlatList, ScrollView, StyleSheet,
} from 'react-native';

import Amplify, { API, graphqlOperation } from 'aws-amplify';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import aws_conf from '../aws-exports.js';
import { getTweets, listTweets, searchTweets } from '../src/graphql/queries';
import { Tweet } from '../models';
import TweetComponent from '../components/Tweet';
import Colors from '../constants/Colors';
import { SearchableSortDirection, SearchableTweetSortableFields, SearchTweetsQueryVariables } from '../src/API';

Amplify.configure(aws_conf);

export default function TabOneScreen() {
  const [loading, setLoading] = React.useState(false);
  const [tweets, setTweets] = React.useState<Tweet[] | null>(null);

  React.useEffect(() => {
    fetchTweets();
  }, []);

  const fetchTweets = async () => {
    setLoading(true);
    const b: SearchTweetsQueryVariables = {
      sort: {
        field: SearchableTweetSortableFields.created_at,
        direction: SearchableSortDirection.asc,
      },
    };
    const a = await API.graphql(graphqlOperation(searchTweets, { variables: b }));
    console.log(a);
    setTweets(a.data.searchTweets.items);
    setLoading(false);
  };

  return (
    !tweets ? <View style={{ flex: 1 }}><ActivityIndicator color={Colors.light.tint} /></View>
      : (
        <FlatList
          style={styles.container}
          renderItem={({ item }) => <TweetComponent {...item} />}
          data={tweets}
          showsVerticalScrollIndicator
        />
      )
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
