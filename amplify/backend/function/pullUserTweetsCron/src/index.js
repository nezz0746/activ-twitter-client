/* Amplify Params - DO NOT EDIT
	API_ACTIVISTTWITTERCLIEN_GRAPHQLAPIENDPOINTOUTPUT
	API_ACTIVISTTWITTERCLIEN_GRAPHQLAPIIDOUTPUT
	API_ACTIVISTTWITTERCLIEN_GRAPHQLAPIKEYOUTPUT
	API_ACTIVISTTWITTERCLIEN_TWEETTABLE_ARN
	API_ACTIVISTTWITTERCLIEN_TWEETTABLE_NAME
	ENV
	REGION
Amplify Params - DO NOT EDIT */
const axios = require('axios');

exports.handler = async (event) => {
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

  // Last Tweet registered pulled
  // const since_ic = 0

  const tweets_res = await makeTweeterAxios('/statuses/user_timeline.json?screen_name=T_Bouhafs&since_id=1334464318742663200').get();

  console.log(tweets_res.data);

  return tweets_res.data;
};
