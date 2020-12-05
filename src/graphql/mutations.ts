/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTweet = /* GraphQL */ `
  mutation CreateTweet(
    $input: CreateTweetInput!
    $condition: ModelTweetConditionInput
  ) {
    createTweet(input: $input, condition: $condition) {
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
export const updateTweet = /* GraphQL */ `
  mutation UpdateTweet(
    $input: UpdateTweetInput!
    $condition: ModelTweetConditionInput
  ) {
    updateTweet(input: $input, condition: $condition) {
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
export const deleteTweet = /* GraphQL */ `
  mutation DeleteTweet(
    $input: DeleteTweetInput!
    $condition: ModelTweetConditionInput
  ) {
    deleteTweet(input: $input, condition: $condition) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
