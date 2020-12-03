// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Tweet, User, Coordinates, Place, Entity, Hashtag, Media, Size, Url, UserMention, Symbol, Poll, Option } = initSchema(schema);

export {
  Tweet,
  User,
  Coordinates,
  Place,
  Entity,
  Hashtag,
  Media,
  Size,
  Url,
  UserMention,
  Symbol,
  Poll,
  Option
};