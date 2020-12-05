/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTweets = /* GraphQL */ `
  query GetTweets($username: String) {
    getTweets(username: $username) {
      id
      created_at
      id_str
      text
      source
      truncated
      in_reply_to_status_id
      in_reply_to_status_id_str
      in_reply_to_user_id
      in_reply_to_user_id_str
      in_reply_to_screen_name
      userID
      user {
        id
        id_str
        name
        screen_name
        location
        url
        description
        protected
        verified
        followers_count
        friends_count
        listed_count
        favourites_count
        statuses_count
        created_at
        profile_banner_url
        profile_image_url_https
        default_profile
        default_profile_image
        withheld_in_countries
        withheld_scope
        createdAt
        updatedAt
      }
      coordinates {
        coordinates
        type
      }
      place {
        id
        url
        place_type
        name
        full_name
        country_code
        country
      }
      quoted_status_id
      quoted_status_id_str
      is_quote_status
      quote_count
      reply_count
      retweet_count
      favorite_count
      entities {
        hashtags {
          indices
          text
        }
        media {
          display_url
          expanded_url
          id
          id_str
          indices
          source_user_id
          source_user_id_str
          media_url
          media_url_https
          source_status_id
          source_status_id_str
          type
          url
        }
        urls {
          display_url
          expanded_url
          indices
          url
        }
        user_mentions {
          id
          id_str
          indices
          name
          screen_name
        }
        symbols {
          indices
          text
        }
        polls {
          end_datetime
          duration_minutes
        }
      }
      favorited
      retweeted
      possibly_sensitive
      filter_level
      lang
      last
      createdAt
      updatedAt
    }
  }
`;
export const getTweet = /* GraphQL */ `
  query GetTweet($id: ID!) {
    getTweet(id: $id) {
      id
      created_at
      id_str
      text
      source
      truncated
      in_reply_to_status_id
      in_reply_to_status_id_str
      in_reply_to_user_id
      in_reply_to_user_id_str
      in_reply_to_screen_name
      userID
      user {
        id
        id_str
        name
        screen_name
        location
        url
        description
        protected
        verified
        followers_count
        friends_count
        listed_count
        favourites_count
        statuses_count
        created_at
        profile_banner_url
        profile_image_url_https
        default_profile
        default_profile_image
        withheld_in_countries
        withheld_scope
        createdAt
        updatedAt
      }
      coordinates {
        coordinates
        type
      }
      place {
        id
        url
        place_type
        name
        full_name
        country_code
        country
      }
      quoted_status_id
      quoted_status_id_str
      is_quote_status
      quote_count
      reply_count
      retweet_count
      favorite_count
      entities {
        hashtags {
          indices
          text
        }
        media {
          display_url
          expanded_url
          id
          id_str
          indices
          source_user_id
          source_user_id_str
          media_url
          media_url_https
          source_status_id
          source_status_id_str
          type
          url
        }
        urls {
          display_url
          expanded_url
          indices
          url
        }
        user_mentions {
          id
          id_str
          indices
          name
          screen_name
        }
        symbols {
          indices
          text
        }
        polls {
          end_datetime
          duration_minutes
        }
      }
      favorited
      retweeted
      possibly_sensitive
      filter_level
      lang
      last
      createdAt
      updatedAt
    }
  }
`;
export const listTweets = /* GraphQL */ `
  query ListTweets(
    $filter: ModelTweetFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTweets(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        created_at
        id_str
        text
        source
        truncated
        in_reply_to_status_id
        in_reply_to_status_id_str
        in_reply_to_user_id
        in_reply_to_user_id_str
        in_reply_to_screen_name
        userID
        user {
          id
          id_str
          name
          screen_name
          location
          url
          description
          protected
          verified
          followers_count
          friends_count
          listed_count
          favourites_count
          statuses_count
          created_at
          profile_banner_url
          profile_image_url_https
          default_profile
          default_profile_image
          withheld_in_countries
          withheld_scope
          createdAt
          updatedAt
        }
        coordinates {
          coordinates
          type
        }
        place {
          id
          url
          place_type
          name
          full_name
          country_code
          country
        }
        quoted_status_id
        quoted_status_id_str
        is_quote_status
        quote_count
        reply_count
        retweet_count
        favorite_count
        favorited
        retweeted
        possibly_sensitive
        filter_level
        lang
        last
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      id_str
      name
      screen_name
      location
      url
      description
      protected
      verified
      followers_count
      friends_count
      listed_count
      favourites_count
      statuses_count
      created_at
      profile_banner_url
      profile_image_url_https
      default_profile
      default_profile_image
      withheld_in_countries
      withheld_scope
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        id_str
        name
        screen_name
        location
        url
        description
        protected
        verified
        followers_count
        friends_count
        listed_count
        favourites_count
        statuses_count
        created_at
        profile_banner_url
        profile_image_url_https
        default_profile
        default_profile_image
        withheld_in_countries
        withheld_scope
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const searchTweets = /* GraphQL */ `
  query SearchTweets(
    $filter: SearchableTweetFilterInput
    $sort: SearchableTweetSortInput
    $limit: Int
    $nextToken: String
    $from: Int
  ) {
    searchTweets(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
    ) {
      items {
        id
        created_at
        id_str
        text
        source
        truncated
        in_reply_to_status_id
        in_reply_to_status_id_str
        in_reply_to_user_id
        in_reply_to_user_id_str
        in_reply_to_screen_name
        userID
        user {
          id
          id_str
          name
          screen_name
          location
          url
          description
          protected
          verified
          followers_count
          friends_count
          listed_count
          favourites_count
          statuses_count
          created_at
          profile_banner_url
          profile_image_url_https
          default_profile
          default_profile_image
          withheld_in_countries
          withheld_scope
          createdAt
          updatedAt
        }
        coordinates {
          coordinates
          type
        }
        place {
          id
          url
          place_type
          name
          full_name
          country_code
          country
        }
        quoted_status_id
        quoted_status_id_str
        is_quote_status
        quote_count
        reply_count
        retweet_count
        favorite_count
        favorited
        retweeted
        possibly_sensitive
        filter_level
        lang
        last
        createdAt
        updatedAt
      }
      nextToken
      total
    }
  }
`;
