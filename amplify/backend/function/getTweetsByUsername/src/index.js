const axios = require('axios');

exports.handler = async (event) => {
  const { username } = event.arguments;

  console.log(username);

  const makeTweeterAxios = (url) => axios.create({
    baseURL: `https://api.twitter.com/1.1${url}`,
    headers: {
      consumer_key: 'wHAipDUvAx1xBMxZ811GFiYbT',
      consumer_secret: 'KtA3zpB3mKTjfZkS7QfKpHCmi2qfk3qBNrn36fg1DOLjOVY0mZ',
      access_token: '1041439015893954561-zaVRuKpCx8N3IT6oieY5q5OArGA9UC',
      token_secret: 'oxJHCoMnSD0uLth48ja9RG5P1l4sNz3PHKXceZJu35GaS',
      bearer_token: 'AAAAAAAAAAAAAAAAAAAAANPpJgEAAAAAcplaq0HIdYNSBveCIiGamePYdvY%3DzOiGIW3dkxWvpitvsWDJoAtodPQlRnxRx9v4pvSUxy4vR9VbXP',
      Authorization: 'Bearer AAAAAAAAAAAAAAAAAAAAANPpJgEAAAAAcplaq0HIdYNSBveCIiGamePYdvY%3DzOiGIW3dkxWvpitvsWDJoAtodPQlRnxRx9v4pvSUxy4vR9VbXP',
    },
  });

  const tweets_res = await makeTweeterAxios(`/statuses/user_timeline.json?screen_name=${username}`).get();

  console.log(tweets_res.data);

  return tweets_res.data;
};
