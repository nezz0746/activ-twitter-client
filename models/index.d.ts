import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";



export declare class Coordinates {
  readonly coordinates?: (number | null)[];
  readonly type?: string;
  constructor(init: ModelInit<Coordinates>);
}

export declare class Place {
  readonly id?: string;
  readonly url?: string;
  readonly place_type?: string;
  readonly name?: string;
  readonly full_name?: string;
  readonly country_code?: string;
  readonly country?: string;
  constructor(init: ModelInit<Place>);
}

export declare class Entity {
  readonly hashtags?: (Hashtag | null)[];
  readonly media?: (Media | null)[];
  readonly urls?: (Url | null)[];
  readonly user_mentions?: (UserMention | null)[];
  readonly symbols?: (Symbol | null)[];
  readonly polls?: (Poll | null)[];
  constructor(init: ModelInit<Entity>);
}

export declare class Hashtag {
  readonly indices?: (number | null)[];
  readonly text?: string;
  constructor(init: ModelInit<Hashtag>);
}

export declare class Media {
  readonly display_url?: string;
  readonly expanded_url?: string;
  readonly id?: number;
  readonly id_str?: (string | null)[];
  readonly indices?: (number | null)[];
  readonly media_url?: string;
  readonly media_url_https?: string;
  readonly sizes?: Size;
  readonly source_status_id?: number;
  readonly source_status_id_str?: number;
  readonly type?: string;
  readonly url?: string;
  constructor(init: ModelInit<Media>);
}

export declare class Size {
  readonly w?: number;
  readonly h?: number;
  readonly resize?: string;
  constructor(init: ModelInit<Size>);
}

export declare class Url {
  readonly display_url?: string;
  readonly expanded_url?: string;
  readonly indices?: (number | null)[];
  readonly url?: string;
  constructor(init: ModelInit<Url>);
}

export declare class UserMention {
  readonly id?: number;
  readonly id_str?: string;
  readonly indices?: (number | null)[];
  readonly name?: string;
  readonly screen_name?: string;
  constructor(init: ModelInit<UserMention>);
}

export declare class Symbol {
  readonly indices?: (number | null)[];
  readonly text?: string;
  constructor(init: ModelInit<Symbol>);
}

export declare class Poll {
  readonly options?: (Option | null)[];
  readonly end_datetime?: string;
  readonly duration_minutes?: string;
  constructor(init: ModelInit<Poll>);
}

export declare class Option {
  readonly position?: number;
  readonly text?: string;
  constructor(init: ModelInit<Option>);
}

export declare class Tweet {
  readonly id: string;
  readonly created_at?: string;
  readonly id_str?: string;
  readonly text?: string;
  readonly source?: string;
  readonly truncated?: boolean;
  readonly in_reply_to_status_id?: string;
  readonly in_reply_to_status_id_str?: string;
  readonly in_reply_to_user_id?: string;
  readonly in_reply_to_user_id_str?: string;
  readonly in_reply_to_screen_name?: string;
  readonly userID: string;
  readonly user?: User;
  readonly coordinates?: Coordinates;
  readonly place?: Place;
  readonly quoted_status_id?: string;
  readonly quoted_status_id_str?: string;
  readonly is_quote_status?: boolean;
  readonly quote_count?: number;
  readonly reply_count?: number;
  readonly retweet_count?: number;
  readonly favorite_count?: number;
  readonly entities?: Entity;
  readonly favorited?: boolean;
  readonly retweeted?: boolean;
  readonly possibly_sensitive?: boolean;
  readonly filter_level?: string;
  readonly lang?: string;
  readonly last?: boolean;
  constructor(init: ModelInit<Tweet>);
  static copyOf(source: Tweet, mutator: (draft: MutableModel<Tweet>) => MutableModel<Tweet> | void): Tweet;
}

export declare class User {
  readonly id: string;
  readonly id_str?: string;
  readonly name?: string;
  readonly screen_name?: string;
  readonly location?: string;
  readonly url?: string;
  readonly description?: string;
  readonly protected?: boolean;
  readonly verified?: boolean;
  readonly followers_count?: number;
  readonly friends_count?: number;
  readonly listed_count?: number;
  readonly favourites_count?: number;
  readonly statuses_count?: number;
  readonly created_at?: string;
  readonly profile_banner_url?: string;
  readonly profile_image_url_https?: string;
  readonly default_profile?: boolean;
  readonly default_profile_image?: boolean;
  readonly withheld_in_countries?: (string | null)[];
  readonly withheld_scope?: string;
  constructor(init: ModelInit<User>);
  static copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}