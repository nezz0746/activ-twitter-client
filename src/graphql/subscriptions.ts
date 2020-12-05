/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTweet = /* GraphQL */ `
  subscription OnCreateTweet {
    onCreateTweet {
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
          options {
            position
            text
          }
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
export const onUpdateTweet = /* GraphQL */ `
  subscription OnUpdateTweet {
    onUpdateTweet {
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
          options {
            position
            text
          }
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
export const onDeleteTweet = /* GraphQL */ `
  subscription OnDeleteTweet {
    onDeleteTweet {
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
          options {
            position
            text
          }
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
