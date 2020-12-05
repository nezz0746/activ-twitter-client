/* Amplify Params - DO NOT EDIT
	API_ACTIVISTTWITTERCLIEN_GRAPHQLAPIENDPOINTOUTPUT
	API_ACTIVISTTWITTERCLIEN_GRAPHQLAPIIDOUTPUT
	API_ACTIVISTTWITTERCLIEN_GRAPHQLAPIKEYOUTPUT
	API_ACTIVISTTWITTERCLIEN_TWEETTABLE_ARN
	API_ACTIVISTTWITTERCLIEN_TWEETTABLE_NAME
	ENV
	REGION
Amplify Params - DO NOT EDIT */
const graphql = require('graphql');
const axios = require('axios');
const pick = require('lodash.pick');

const {
  createTweet, createUser, userFields, tweetFields, listTweets, updateTweet,
} = require('./mutations.js');

const { print } = graphql;

const headers = {
  consumer_key: 'wHAipDUvAx1xBMxZ811GFiYbT',
  consumer_secret: 'KtA3zpB3mKTjfZkS7QfKpHCmi2qfk3qBNrn36fg1DOLjOVY0mZ',
  access_token: '1041439015893954561-zaVRuKpCx8N3IT6oieY5q5OArGA9UC',
  token_secret: 'oxJHCoMnSD0uLth48ja9RG5P1l4sNz3PHKXceZJu35GaS',
  bearer_token: 'AAAAAAAAAAAAAAAAAAAAANPpJgEAAAAAcplaq0HIdYNSBveCIiGamePYdvY%3DzOiGIW3dkxWvpitvsWDJoAtodPQlRnxRx9v4pvSUxy4vR9VbXP',
  Authorization: 'Bearer AAAAAAAAAAAAAAAAAAAAANPpJgEAAAAAcplaq0HIdYNSBveCIiGamePYdvY%3DzOiGIW3dkxWvpitvsWDJoAtodPQlRnxRx9v4pvSUxy4vR9VbXP',
};

const createTweetInDynamoDB = (input) => axios({
  url: process.env.API_ACTIVISTTWITTERCLIEN_GRAPHQLAPIENDPOINTOUTPUT,
  method: 'post',
  headers: {
    'x-api-key': process.env.API_ACTIVISTTWITTERCLIEN_GRAPHQLAPIKEYOUTPUT,
  },
  data: {
    query: print(createTweet),
    variables: {
      input,
    },
  },
});

const updateTweetInDynamoDB = (input) => axios({
  url: process.env.API_ACTIVISTTWITTERCLIEN_GRAPHQLAPIENDPOINTOUTPUT,
  method: 'post',
  headers: {
    'x-api-key': process.env.API_ACTIVISTTWITTERCLIEN_GRAPHQLAPIKEYOUTPUT,
  },
  data: {
    query: print(updateTweet),
    variables: {
      input,
    },
  },
});

const createUserInDynamoDB = (input) => axios({
  url: process.env.API_ACTIVISTTWITTERCLIEN_GRAPHQLAPIENDPOINTOUTPUT,
  method: 'post',
  headers: {
    'x-api-key': process.env.API_ACTIVISTTWITTERCLIEN_GRAPHQLAPIKEYOUTPUT,
  },
  data: {
    query: print(createUser),
    variables: {
      input,
    },
  },
});

const getLatestTweetInDynamoDB = (filter) => axios({
  url: process.env.API_ACTIVISTTWITTERCLIEN_GRAPHQLAPIENDPOINTOUTPUT,
  method: 'post',
  headers: {
    'x-api-key': process.env.API_ACTIVISTTWITTERCLIEN_GRAPHQLAPIKEYOUTPUT,
  },
  data: {
    query: print(listTweets),
    variables: {
      filter,
    },
  },
});

exports.handler = async (event) => {
  const makeTweeterAxios = (url) => axios.create({
    baseURL: `https://api.twitter.com/1.1${url}`,
    headers,
  });

  try {
  // Last Tweet registered pulled
  // const since_ic = 0
  // Getting moste recent tweet
    const lastestTweet = await getLatestTweetInDynamoDB({
      last: {
        eq: true,
      },
    });

    console.log(lastestTweet.data);

    const latestTweetId = lastestTweet.data.data.listTweets.items[0] ? lastestTweet.data.data.listTweets.items[0].id : null;

    console.log(lastestTweet.data.data.listTweets.items[0]);

    const additionalQueryParam = `&since_id=${latestTweetId || '0'}`;

    console.log(additionalQueryParam);

    const url = `/statuses/user_timeline.json?screen_name=T_Bouhafs${additionalQueryParam}`;

    console.log(url);

    const tweets_res = await makeTweeterAxios(url).get();

    console.log(tweets_res.data);
    if (tweets_res.data.length) {
      console.log('FIELDS : ', tweetFields.split(' ').map((fiels) => fiels.replace('\n', '')));
      tweets_res.data.forEach((tweet) => {
        console.log(pick(tweet, tweetFields.split(' ').map((fiels) => fiels.replace('\n', ''))));
      });

      const a = await Promise.all(tweets_res.data.map((tweet, index) => createTweetInDynamoDB({
        ...pick(tweet, tweetFields.split(' ').map((fiels) => fiels.replace('\n', ''))),
        userID: tweet.user.id,
        last: index === 0,
      })));

      console.log(a.map((b) => b.data.errors));
      //
      await updateTweetInDynamoDB({ id: latestTweetId, last: false });
    }

    // const user = pick(tweets_res.data[0].user, userFields.split(' '));
    // await createUserInDynamoDB(user);
  } catch (error) {
    console.log(error);
  }
  return {
    success: 1,
  };
};
