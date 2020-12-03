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
        _version
        _deleted
        _lastChangedAt
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
      quoted_status {
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
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      retweeted_status {
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
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      quote_count
      reply_count
      retweet_count
      favorite_count
      favorited
      retweeted
      possibly_sensitive
      filter_level
      lang
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const syncTweets = /* GraphQL */ `
  query SyncTweets(
    $filter: ModelTweetFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTweets(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
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
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
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
        _version
        _deleted
        _lastChangedAt
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
      quoted_status {
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
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      retweeted_status {
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
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      quote_count
      reply_count
      retweet_count
      favorite_count
      favorited
      retweeted
      possibly_sensitive
      filter_level
      lang
      _version
      _deleted
      _lastChangedAt
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
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncUsers = /* GraphQL */ `
  query SyncUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
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
      _version
      _deleted
      _lastChangedAt
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
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
