/* eslint-disable */
import type { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date and time, represented as an ISO-8601 string */
  DateTime: string;
};

export type IArticle = {
  __typename?: 'Article';
  /** Article author. */
  author: IUser;
  authorAggregate?: Maybe<IArticleUserAuthorAggregationSelection>;
  authorConnection: IArticleAuthorConnection;
  /** Article categories. */
  categories: Array<ICategory>;
  categoriesAggregate?: Maybe<IArticleCategoryCategoriesAggregationSelection>;
  categoriesConnection: IArticleCategoriesConnection;
  /** Article content. */
  content: Scalars['String'];
  /** Article created date. */
  createdAt: Scalars['DateTime'];
  /** Article header. */
  header: Scalars['String'];
  id: Scalars['ID'];
  /** Publication status. */
  isPublished: Scalars['Boolean'];
  /** Article language. */
  language: ILanguagesEnum;
  /** Article published date. */
  publishedAt: Scalars['DateTime'];
  /** Article subheader. */
  subheader?: Maybe<Scalars['String']>;
  /** Article tags. */
  tags: Array<ITag>;
  tagsAggregate?: Maybe<IArticleTagTagsAggregationSelection>;
  tagsConnection: IArticleTagsConnection;
  /** Article updated date. */
  updatedAt: Scalars['DateTime'];
};


export type IArticleAuthorArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<IUserOptions>;
  where?: InputMaybe<IUserWhere>;
};


export type IArticleAuthorAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<IUserWhere>;
};


export type IArticleAuthorConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<IArticleAuthorConnectionSort>>;
  where?: InputMaybe<IArticleAuthorConnectionWhere>;
};


export type IArticleCategoriesArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<ICategoryOptions>;
  where?: InputMaybe<ICategoryWhere>;
};


export type IArticleCategoriesAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<ICategoryWhere>;
};


export type IArticleCategoriesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<IArticleCategoriesConnectionSort>>;
  where?: InputMaybe<IArticleCategoriesConnectionWhere>;
};


export type IArticleTagsArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<ITagOptions>;
  where?: InputMaybe<ITagWhere>;
};


export type IArticleTagsAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<ITagWhere>;
};


export type IArticleTagsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<IArticleTagsConnectionSort>>;
  where?: InputMaybe<IArticleTagsConnectionWhere>;
};

export type IArticleAggregateSelection = {
  __typename?: 'ArticleAggregateSelection';
  content: IStringAggregateSelectionNonNullable;
  count: Scalars['Int'];
  createdAt: IDateTimeAggregateSelectionNonNullable;
  header: IStringAggregateSelectionNonNullable;
  id: IIdAggregateSelectionNonNullable;
  publishedAt: IDateTimeAggregateSelectionNonNullable;
  subheader: IStringAggregateSelectionNullable;
  updatedAt: IDateTimeAggregateSelectionNonNullable;
};

export type IArticleAuthorAggregateInput = {
  AND?: InputMaybe<Array<IArticleAuthorAggregateInput>>;
  OR?: InputMaybe<Array<IArticleAuthorAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  node?: InputMaybe<IArticleAuthorNodeAggregationWhereInput>;
};

export type IArticleAuthorConnectFieldInput = {
  connect?: InputMaybe<IUserConnectInput>;
  where?: InputMaybe<IUserConnectWhere>;
};

export type IArticleAuthorConnectOrCreateFieldInput = {
  onCreate: IArticleAuthorConnectOrCreateFieldInputOnCreate;
  where: IUserConnectOrCreateWhere;
};

export type IArticleAuthorConnectOrCreateFieldInputOnCreate = {
  node: IUserOnCreateInput;
};

export type IArticleAuthorConnection = {
  __typename?: 'ArticleAuthorConnection';
  edges: Array<IArticleAuthorRelationship>;
  pageInfo: IPageInfo;
  totalCount: Scalars['Int'];
};

export type IArticleAuthorConnectionSort = {
  node?: InputMaybe<IUserSort>;
};

export type IArticleAuthorConnectionWhere = {
  AND?: InputMaybe<Array<IArticleAuthorConnectionWhere>>;
  OR?: InputMaybe<Array<IArticleAuthorConnectionWhere>>;
  node?: InputMaybe<IUserWhere>;
  node_NOT?: InputMaybe<IUserWhere>;
};

export type IArticleAuthorCreateFieldInput = {
  node: IUserCreateInput;
};

export type IArticleAuthorDeleteFieldInput = {
  delete?: InputMaybe<IUserDeleteInput>;
  where?: InputMaybe<IArticleAuthorConnectionWhere>;
};

export type IArticleAuthorDisconnectFieldInput = {
  disconnect?: InputMaybe<IUserDisconnectInput>;
  where?: InputMaybe<IArticleAuthorConnectionWhere>;
};

export type IArticleAuthorFieldInput = {
  connect?: InputMaybe<IArticleAuthorConnectFieldInput>;
  connectOrCreate?: InputMaybe<IArticleAuthorConnectOrCreateFieldInput>;
  create?: InputMaybe<IArticleAuthorCreateFieldInput>;
};

export type IArticleAuthorNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<IArticleAuthorNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<IArticleAuthorNodeAggregationWhereInput>>;
  createdAt_EQUAL?: InputMaybe<Scalars['DateTime']>;
  createdAt_GT?: InputMaybe<Scalars['DateTime']>;
  createdAt_GTE?: InputMaybe<Scalars['DateTime']>;
  createdAt_LT?: InputMaybe<Scalars['DateTime']>;
  createdAt_LTE?: InputMaybe<Scalars['DateTime']>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']>;
  createdAt_MAX_GT?: InputMaybe<Scalars['DateTime']>;
  createdAt_MAX_GTE?: InputMaybe<Scalars['DateTime']>;
  createdAt_MAX_LT?: InputMaybe<Scalars['DateTime']>;
  createdAt_MAX_LTE?: InputMaybe<Scalars['DateTime']>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']>;
  createdAt_MIN_GT?: InputMaybe<Scalars['DateTime']>;
  createdAt_MIN_GTE?: InputMaybe<Scalars['DateTime']>;
  createdAt_MIN_LT?: InputMaybe<Scalars['DateTime']>;
  createdAt_MIN_LTE?: InputMaybe<Scalars['DateTime']>;
  email_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  email_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  email_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  email_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  email_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  email_EQUAL?: InputMaybe<Scalars['String']>;
  email_GT?: InputMaybe<Scalars['Int']>;
  email_GTE?: InputMaybe<Scalars['Int']>;
  email_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  email_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  email_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  email_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  email_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  email_LT?: InputMaybe<Scalars['Int']>;
  email_LTE?: InputMaybe<Scalars['Int']>;
  email_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  email_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  email_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  email_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  email_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
  id_EQUAL?: InputMaybe<Scalars['ID']>;
  ip_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  ip_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  ip_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  ip_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  ip_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  ip_EQUAL?: InputMaybe<Scalars['String']>;
  ip_GT?: InputMaybe<Scalars['Int']>;
  ip_GTE?: InputMaybe<Scalars['Int']>;
  ip_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  ip_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  ip_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  ip_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  ip_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  ip_LT?: InputMaybe<Scalars['Int']>;
  ip_LTE?: InputMaybe<Scalars['Int']>;
  ip_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  ip_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  ip_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  ip_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  ip_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
  lastLoggedAt_EQUAL?: InputMaybe<Scalars['DateTime']>;
  lastLoggedAt_GT?: InputMaybe<Scalars['DateTime']>;
  lastLoggedAt_GTE?: InputMaybe<Scalars['DateTime']>;
  lastLoggedAt_LT?: InputMaybe<Scalars['DateTime']>;
  lastLoggedAt_LTE?: InputMaybe<Scalars['DateTime']>;
  lastLoggedAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']>;
  lastLoggedAt_MAX_GT?: InputMaybe<Scalars['DateTime']>;
  lastLoggedAt_MAX_GTE?: InputMaybe<Scalars['DateTime']>;
  lastLoggedAt_MAX_LT?: InputMaybe<Scalars['DateTime']>;
  lastLoggedAt_MAX_LTE?: InputMaybe<Scalars['DateTime']>;
  lastLoggedAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']>;
  lastLoggedAt_MIN_GT?: InputMaybe<Scalars['DateTime']>;
  lastLoggedAt_MIN_GTE?: InputMaybe<Scalars['DateTime']>;
  lastLoggedAt_MIN_LT?: InputMaybe<Scalars['DateTime']>;
  lastLoggedAt_MIN_LTE?: InputMaybe<Scalars['DateTime']>;
  phone_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  phone_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  phone_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  phone_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  phone_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  phone_EQUAL?: InputMaybe<Scalars['String']>;
  phone_GT?: InputMaybe<Scalars['Int']>;
  phone_GTE?: InputMaybe<Scalars['Int']>;
  phone_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  phone_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  phone_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  phone_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  phone_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  phone_LT?: InputMaybe<Scalars['Int']>;
  phone_LTE?: InputMaybe<Scalars['Int']>;
  phone_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  phone_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  phone_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  phone_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  phone_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
  updatedAt_EQUAL?: InputMaybe<Scalars['DateTime']>;
  updatedAt_GT?: InputMaybe<Scalars['DateTime']>;
  updatedAt_GTE?: InputMaybe<Scalars['DateTime']>;
  updatedAt_LT?: InputMaybe<Scalars['DateTime']>;
  updatedAt_LTE?: InputMaybe<Scalars['DateTime']>;
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']>;
  updatedAt_MAX_GT?: InputMaybe<Scalars['DateTime']>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars['DateTime']>;
  updatedAt_MAX_LT?: InputMaybe<Scalars['DateTime']>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars['DateTime']>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']>;
  updatedAt_MIN_GT?: InputMaybe<Scalars['DateTime']>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars['DateTime']>;
  updatedAt_MIN_LT?: InputMaybe<Scalars['DateTime']>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars['DateTime']>;
};

export type IArticleAuthorRelationship = {
  __typename?: 'ArticleAuthorRelationship';
  cursor: Scalars['String'];
  node: IUser;
};

export type IArticleAuthorUpdateConnectionInput = {
  node?: InputMaybe<IUserUpdateInput>;
};

export type IArticleAuthorUpdateFieldInput = {
  connect?: InputMaybe<IArticleAuthorConnectFieldInput>;
  connectOrCreate?: InputMaybe<IArticleAuthorConnectOrCreateFieldInput>;
  create?: InputMaybe<IArticleAuthorCreateFieldInput>;
  delete?: InputMaybe<IArticleAuthorDeleteFieldInput>;
  disconnect?: InputMaybe<IArticleAuthorDisconnectFieldInput>;
  update?: InputMaybe<IArticleAuthorUpdateConnectionInput>;
  where?: InputMaybe<IArticleAuthorConnectionWhere>;
};

export type IArticleCategoriesAggregateInput = {
  AND?: InputMaybe<Array<IArticleCategoriesAggregateInput>>;
  OR?: InputMaybe<Array<IArticleCategoriesAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  node?: InputMaybe<IArticleCategoriesNodeAggregationWhereInput>;
};

export type IArticleCategoriesConnectFieldInput = {
  connect?: InputMaybe<Array<ICategoryConnectInput>>;
  where?: InputMaybe<ICategoryConnectWhere>;
};

export type IArticleCategoriesConnectOrCreateFieldInput = {
  onCreate: IArticleCategoriesConnectOrCreateFieldInputOnCreate;
  where: ICategoryConnectOrCreateWhere;
};

export type IArticleCategoriesConnectOrCreateFieldInputOnCreate = {
  node: ICategoryOnCreateInput;
};

export type IArticleCategoriesConnection = {
  __typename?: 'ArticleCategoriesConnection';
  edges: Array<IArticleCategoriesRelationship>;
  pageInfo: IPageInfo;
  totalCount: Scalars['Int'];
};

export type IArticleCategoriesConnectionSort = {
  node?: InputMaybe<ICategorySort>;
};

export type IArticleCategoriesConnectionWhere = {
  AND?: InputMaybe<Array<IArticleCategoriesConnectionWhere>>;
  OR?: InputMaybe<Array<IArticleCategoriesConnectionWhere>>;
  node?: InputMaybe<ICategoryWhere>;
  node_NOT?: InputMaybe<ICategoryWhere>;
};

export type IArticleCategoriesCreateFieldInput = {
  node: ICategoryCreateInput;
};

export type IArticleCategoriesDeleteFieldInput = {
  delete?: InputMaybe<ICategoryDeleteInput>;
  where?: InputMaybe<IArticleCategoriesConnectionWhere>;
};

export type IArticleCategoriesDisconnectFieldInput = {
  disconnect?: InputMaybe<ICategoryDisconnectInput>;
  where?: InputMaybe<IArticleCategoriesConnectionWhere>;
};

export type IArticleCategoriesFieldInput = {
  connect?: InputMaybe<Array<IArticleCategoriesConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<IArticleCategoriesConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<IArticleCategoriesCreateFieldInput>>;
};

export type IArticleCategoriesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<IArticleCategoriesNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<IArticleCategoriesNodeAggregationWhereInput>>;
  createdAt_EQUAL?: InputMaybe<Scalars['DateTime']>;
  createdAt_GT?: InputMaybe<Scalars['DateTime']>;
  createdAt_GTE?: InputMaybe<Scalars['DateTime']>;
  createdAt_LT?: InputMaybe<Scalars['DateTime']>;
  createdAt_LTE?: InputMaybe<Scalars['DateTime']>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']>;
  createdAt_MAX_GT?: InputMaybe<Scalars['DateTime']>;
  createdAt_MAX_GTE?: InputMaybe<Scalars['DateTime']>;
  createdAt_MAX_LT?: InputMaybe<Scalars['DateTime']>;
  createdAt_MAX_LTE?: InputMaybe<Scalars['DateTime']>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']>;
  createdAt_MIN_GT?: InputMaybe<Scalars['DateTime']>;
  createdAt_MIN_GTE?: InputMaybe<Scalars['DateTime']>;
  createdAt_MIN_LT?: InputMaybe<Scalars['DateTime']>;
  createdAt_MIN_LTE?: InputMaybe<Scalars['DateTime']>;
  id_EQUAL?: InputMaybe<Scalars['ID']>;
  name_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  name_EQUAL?: InputMaybe<Scalars['String']>;
  name_GT?: InputMaybe<Scalars['Int']>;
  name_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  name_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  name_LT?: InputMaybe<Scalars['Int']>;
  name_LTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
  updatedAt_EQUAL?: InputMaybe<Scalars['DateTime']>;
  updatedAt_GT?: InputMaybe<Scalars['DateTime']>;
  updatedAt_GTE?: InputMaybe<Scalars['DateTime']>;
  updatedAt_LT?: InputMaybe<Scalars['DateTime']>;
  updatedAt_LTE?: InputMaybe<Scalars['DateTime']>;
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']>;
  updatedAt_MAX_GT?: InputMaybe<Scalars['DateTime']>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars['DateTime']>;
  updatedAt_MAX_LT?: InputMaybe<Scalars['DateTime']>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars['DateTime']>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']>;
  updatedAt_MIN_GT?: InputMaybe<Scalars['DateTime']>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars['DateTime']>;
  updatedAt_MIN_LT?: InputMaybe<Scalars['DateTime']>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars['DateTime']>;
};

export type IArticleCategoriesRelationship = {
  __typename?: 'ArticleCategoriesRelationship';
  cursor: Scalars['String'];
  node: ICategory;
};

export type IArticleCategoriesUpdateConnectionInput = {
  node?: InputMaybe<ICategoryUpdateInput>;
};

export type IArticleCategoriesUpdateFieldInput = {
  connect?: InputMaybe<Array<IArticleCategoriesConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<IArticleCategoriesConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<IArticleCategoriesCreateFieldInput>>;
  delete?: InputMaybe<Array<IArticleCategoriesDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<IArticleCategoriesDisconnectFieldInput>>;
  update?: InputMaybe<IArticleCategoriesUpdateConnectionInput>;
  where?: InputMaybe<IArticleCategoriesConnectionWhere>;
};

export type IArticleCategoryCategoriesAggregationSelection = {
  __typename?: 'ArticleCategoryCategoriesAggregationSelection';
  count: Scalars['Int'];
  node?: Maybe<IArticleCategoryCategoriesNodeAggregateSelection>;
};

export type IArticleCategoryCategoriesNodeAggregateSelection = {
  __typename?: 'ArticleCategoryCategoriesNodeAggregateSelection';
  createdAt: IDateTimeAggregateSelectionNonNullable;
  id: IIdAggregateSelectionNonNullable;
  name: IStringAggregateSelectionNonNullable;
  updatedAt: IDateTimeAggregateSelectionNonNullable;
};

export type IArticleConnectInput = {
  author?: InputMaybe<IArticleAuthorConnectFieldInput>;
  categories?: InputMaybe<Array<IArticleCategoriesConnectFieldInput>>;
  tags?: InputMaybe<Array<IArticleTagsConnectFieldInput>>;
};

export type IArticleConnectOrCreateInput = {
  author?: InputMaybe<IArticleAuthorConnectOrCreateFieldInput>;
  categories?: InputMaybe<Array<IArticleCategoriesConnectOrCreateFieldInput>>;
  tags?: InputMaybe<Array<IArticleTagsConnectOrCreateFieldInput>>;
};

export type IArticleConnectOrCreateWhere = {
  node: IArticleUniqueWhere;
};

export type IArticleConnectWhere = {
  node: IArticleWhere;
};

export type IArticleCreateInput = {
  author?: InputMaybe<IArticleAuthorFieldInput>;
  categories?: InputMaybe<IArticleCategoriesFieldInput>;
  content: Scalars['String'];
  header: Scalars['String'];
  isPublished: Scalars['Boolean'];
  language: ILanguagesEnum;
  subheader?: InputMaybe<Scalars['String']>;
  tags?: InputMaybe<IArticleTagsFieldInput>;
};

export type IArticleDeleteInput = {
  author?: InputMaybe<IArticleAuthorDeleteFieldInput>;
  categories?: InputMaybe<Array<IArticleCategoriesDeleteFieldInput>>;
  tags?: InputMaybe<Array<IArticleTagsDeleteFieldInput>>;
};

export type IArticleDisconnectInput = {
  author?: InputMaybe<IArticleAuthorDisconnectFieldInput>;
  categories?: InputMaybe<Array<IArticleCategoriesDisconnectFieldInput>>;
  tags?: InputMaybe<Array<IArticleTagsDisconnectFieldInput>>;
};

export type IArticleOnCreateInput = {
  content?: InputMaybe<Scalars['String']>;
  header?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  isPublished?: InputMaybe<Scalars['Boolean']>;
  subheader?: InputMaybe<Scalars['String']>;
};

export type IArticleOptions = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  /** Specify one or more ArticleSort objects to sort Articles by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<IArticleSort>>;
};

export type IArticleRelationInput = {
  author?: InputMaybe<IArticleAuthorCreateFieldInput>;
  categories?: InputMaybe<Array<IArticleCategoriesCreateFieldInput>>;
  tags?: InputMaybe<Array<IArticleTagsCreateFieldInput>>;
};

/** Fields to sort Articles by. The order in which sorts are applied is not guaranteed when specifying many fields in one ArticleSort object. */
export type IArticleSort = {
  content?: InputMaybe<ISortDirection>;
  createdAt?: InputMaybe<ISortDirection>;
  header?: InputMaybe<ISortDirection>;
  id?: InputMaybe<ISortDirection>;
  isPublished?: InputMaybe<ISortDirection>;
  language?: InputMaybe<ISortDirection>;
  publishedAt?: InputMaybe<ISortDirection>;
  subheader?: InputMaybe<ISortDirection>;
  updatedAt?: InputMaybe<ISortDirection>;
};

export type IArticleTagTagsAggregationSelection = {
  __typename?: 'ArticleTagTagsAggregationSelection';
  count: Scalars['Int'];
  node?: Maybe<IArticleTagTagsNodeAggregateSelection>;
};

export type IArticleTagTagsNodeAggregateSelection = {
  __typename?: 'ArticleTagTagsNodeAggregateSelection';
  createdAt: IDateTimeAggregateSelectionNonNullable;
  id: IIdAggregateSelectionNonNullable;
  name: IStringAggregateSelectionNonNullable;
  updatedAt: IDateTimeAggregateSelectionNonNullable;
};

export type IArticleTagsAggregateInput = {
  AND?: InputMaybe<Array<IArticleTagsAggregateInput>>;
  OR?: InputMaybe<Array<IArticleTagsAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  node?: InputMaybe<IArticleTagsNodeAggregationWhereInput>;
};

export type IArticleTagsConnectFieldInput = {
  connect?: InputMaybe<Array<ITagConnectInput>>;
  where?: InputMaybe<ITagConnectWhere>;
};

export type IArticleTagsConnectOrCreateFieldInput = {
  onCreate: IArticleTagsConnectOrCreateFieldInputOnCreate;
  where: ITagConnectOrCreateWhere;
};

export type IArticleTagsConnectOrCreateFieldInputOnCreate = {
  node: ITagOnCreateInput;
};

export type IArticleTagsConnection = {
  __typename?: 'ArticleTagsConnection';
  edges: Array<IArticleTagsRelationship>;
  pageInfo: IPageInfo;
  totalCount: Scalars['Int'];
};

export type IArticleTagsConnectionSort = {
  node?: InputMaybe<ITagSort>;
};

export type IArticleTagsConnectionWhere = {
  AND?: InputMaybe<Array<IArticleTagsConnectionWhere>>;
  OR?: InputMaybe<Array<IArticleTagsConnectionWhere>>;
  node?: InputMaybe<ITagWhere>;
  node_NOT?: InputMaybe<ITagWhere>;
};

export type IArticleTagsCreateFieldInput = {
  node: ITagCreateInput;
};

export type IArticleTagsDeleteFieldInput = {
  delete?: InputMaybe<ITagDeleteInput>;
  where?: InputMaybe<IArticleTagsConnectionWhere>;
};

export type IArticleTagsDisconnectFieldInput = {
  disconnect?: InputMaybe<ITagDisconnectInput>;
  where?: InputMaybe<IArticleTagsConnectionWhere>;
};

export type IArticleTagsFieldInput = {
  connect?: InputMaybe<Array<IArticleTagsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<IArticleTagsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<IArticleTagsCreateFieldInput>>;
};

export type IArticleTagsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<IArticleTagsNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<IArticleTagsNodeAggregationWhereInput>>;
  createdAt_EQUAL?: InputMaybe<Scalars['DateTime']>;
  createdAt_GT?: InputMaybe<Scalars['DateTime']>;
  createdAt_GTE?: InputMaybe<Scalars['DateTime']>;
  createdAt_LT?: InputMaybe<Scalars['DateTime']>;
  createdAt_LTE?: InputMaybe<Scalars['DateTime']>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']>;
  createdAt_MAX_GT?: InputMaybe<Scalars['DateTime']>;
  createdAt_MAX_GTE?: InputMaybe<Scalars['DateTime']>;
  createdAt_MAX_LT?: InputMaybe<Scalars['DateTime']>;
  createdAt_MAX_LTE?: InputMaybe<Scalars['DateTime']>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']>;
  createdAt_MIN_GT?: InputMaybe<Scalars['DateTime']>;
  createdAt_MIN_GTE?: InputMaybe<Scalars['DateTime']>;
  createdAt_MIN_LT?: InputMaybe<Scalars['DateTime']>;
  createdAt_MIN_LTE?: InputMaybe<Scalars['DateTime']>;
  id_EQUAL?: InputMaybe<Scalars['ID']>;
  name_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  name_EQUAL?: InputMaybe<Scalars['String']>;
  name_GT?: InputMaybe<Scalars['Int']>;
  name_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  name_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  name_LT?: InputMaybe<Scalars['Int']>;
  name_LTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
  updatedAt_EQUAL?: InputMaybe<Scalars['DateTime']>;
  updatedAt_GT?: InputMaybe<Scalars['DateTime']>;
  updatedAt_GTE?: InputMaybe<Scalars['DateTime']>;
  updatedAt_LT?: InputMaybe<Scalars['DateTime']>;
  updatedAt_LTE?: InputMaybe<Scalars['DateTime']>;
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']>;
  updatedAt_MAX_GT?: InputMaybe<Scalars['DateTime']>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars['DateTime']>;
  updatedAt_MAX_LT?: InputMaybe<Scalars['DateTime']>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars['DateTime']>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']>;
  updatedAt_MIN_GT?: InputMaybe<Scalars['DateTime']>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars['DateTime']>;
  updatedAt_MIN_LT?: InputMaybe<Scalars['DateTime']>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars['DateTime']>;
};

export type IArticleTagsRelationship = {
  __typename?: 'ArticleTagsRelationship';
  cursor: Scalars['String'];
  node: ITag;
};

export type IArticleTagsUpdateConnectionInput = {
  node?: InputMaybe<ITagUpdateInput>;
};

export type IArticleTagsUpdateFieldInput = {
  connect?: InputMaybe<Array<IArticleTagsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<IArticleTagsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<IArticleTagsCreateFieldInput>>;
  delete?: InputMaybe<Array<IArticleTagsDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<IArticleTagsDisconnectFieldInput>>;
  update?: InputMaybe<IArticleTagsUpdateConnectionInput>;
  where?: InputMaybe<IArticleTagsConnectionWhere>;
};

export type IArticleUniqueWhere = {
  id?: InputMaybe<Scalars['ID']>;
};

export type IArticleUpdateInput = {
  author?: InputMaybe<IArticleAuthorUpdateFieldInput>;
  categories?: InputMaybe<Array<IArticleCategoriesUpdateFieldInput>>;
  content?: InputMaybe<Scalars['String']>;
  header?: InputMaybe<Scalars['String']>;
  isPublished?: InputMaybe<Scalars['Boolean']>;
  language?: InputMaybe<ILanguagesEnum>;
  subheader?: InputMaybe<Scalars['String']>;
  tags?: InputMaybe<Array<IArticleTagsUpdateFieldInput>>;
};

export type IArticleUserAuthorAggregationSelection = {
  __typename?: 'ArticleUserAuthorAggregationSelection';
  count: Scalars['Int'];
  node?: Maybe<IArticleUserAuthorNodeAggregateSelection>;
};

export type IArticleUserAuthorNodeAggregateSelection = {
  __typename?: 'ArticleUserAuthorNodeAggregateSelection';
  createdAt: IDateTimeAggregateSelectionNonNullable;
  email: IStringAggregateSelectionNonNullable;
  id: IIdAggregateSelectionNonNullable;
  ip: IStringAggregateSelectionNullable;
  lastLoggedAt: IDateTimeAggregateSelectionNullable;
  phone: IStringAggregateSelectionNonNullable;
  updatedAt: IDateTimeAggregateSelectionNonNullable;
};

export type IArticleWhere = {
  AND?: InputMaybe<Array<IArticleWhere>>;
  OR?: InputMaybe<Array<IArticleWhere>>;
  author?: InputMaybe<IUserWhere>;
  authorAggregate?: InputMaybe<IArticleAuthorAggregateInput>;
  authorConnection?: InputMaybe<IArticleAuthorConnectionWhere>;
  authorConnection_NOT?: InputMaybe<IArticleAuthorConnectionWhere>;
  author_NOT?: InputMaybe<IUserWhere>;
  categoriesAggregate?: InputMaybe<IArticleCategoriesAggregateInput>;
  categoriesConnection_ALL?: InputMaybe<IArticleCategoriesConnectionWhere>;
  categoriesConnection_NONE?: InputMaybe<IArticleCategoriesConnectionWhere>;
  categoriesConnection_SINGLE?: InputMaybe<IArticleCategoriesConnectionWhere>;
  categoriesConnection_SOME?: InputMaybe<IArticleCategoriesConnectionWhere>;
  /** Return Articles where all of the related Categories match this filter */
  categories_ALL?: InputMaybe<ICategoryWhere>;
  /** Return Articles where none of the related Categories match this filter */
  categories_NONE?: InputMaybe<ICategoryWhere>;
  /** Return Articles where one of the related Categories match this filter */
  categories_SINGLE?: InputMaybe<ICategoryWhere>;
  /** Return Articles where some of the related Categories match this filter */
  categories_SOME?: InputMaybe<ICategoryWhere>;
  content?: InputMaybe<Scalars['String']>;
  content_CONTAINS?: InputMaybe<Scalars['String']>;
  content_ENDS_WITH?: InputMaybe<Scalars['String']>;
  content_IN?: InputMaybe<Array<Scalars['String']>>;
  content_NOT?: InputMaybe<Scalars['String']>;
  content_NOT_CONTAINS?: InputMaybe<Scalars['String']>;
  content_NOT_ENDS_WITH?: InputMaybe<Scalars['String']>;
  content_NOT_IN?: InputMaybe<Array<Scalars['String']>>;
  content_NOT_STARTS_WITH?: InputMaybe<Scalars['String']>;
  content_STARTS_WITH?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  createdAt_GT?: InputMaybe<Scalars['DateTime']>;
  createdAt_GTE?: InputMaybe<Scalars['DateTime']>;
  createdAt_IN?: InputMaybe<Array<Scalars['DateTime']>>;
  createdAt_LT?: InputMaybe<Scalars['DateTime']>;
  createdAt_LTE?: InputMaybe<Scalars['DateTime']>;
  createdAt_NOT?: InputMaybe<Scalars['DateTime']>;
  createdAt_NOT_IN?: InputMaybe<Array<Scalars['DateTime']>>;
  header?: InputMaybe<Scalars['String']>;
  header_CONTAINS?: InputMaybe<Scalars['String']>;
  header_ENDS_WITH?: InputMaybe<Scalars['String']>;
  header_IN?: InputMaybe<Array<Scalars['String']>>;
  header_NOT?: InputMaybe<Scalars['String']>;
  header_NOT_CONTAINS?: InputMaybe<Scalars['String']>;
  header_NOT_ENDS_WITH?: InputMaybe<Scalars['String']>;
  header_NOT_IN?: InputMaybe<Array<Scalars['String']>>;
  header_NOT_STARTS_WITH?: InputMaybe<Scalars['String']>;
  header_STARTS_WITH?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_CONTAINS?: InputMaybe<Scalars['ID']>;
  id_ENDS_WITH?: InputMaybe<Scalars['ID']>;
  id_IN?: InputMaybe<Array<Scalars['ID']>>;
  id_NOT?: InputMaybe<Scalars['ID']>;
  id_NOT_CONTAINS?: InputMaybe<Scalars['ID']>;
  id_NOT_ENDS_WITH?: InputMaybe<Scalars['ID']>;
  id_NOT_IN?: InputMaybe<Array<Scalars['ID']>>;
  id_NOT_STARTS_WITH?: InputMaybe<Scalars['ID']>;
  id_STARTS_WITH?: InputMaybe<Scalars['ID']>;
  isPublished?: InputMaybe<Scalars['Boolean']>;
  isPublished_NOT?: InputMaybe<Scalars['Boolean']>;
  language?: InputMaybe<ILanguagesEnum>;
  language_IN?: InputMaybe<Array<ILanguagesEnum>>;
  language_NOT?: InputMaybe<ILanguagesEnum>;
  language_NOT_IN?: InputMaybe<Array<ILanguagesEnum>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  publishedAt_GT?: InputMaybe<Scalars['DateTime']>;
  publishedAt_GTE?: InputMaybe<Scalars['DateTime']>;
  publishedAt_IN?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedAt_LT?: InputMaybe<Scalars['DateTime']>;
  publishedAt_LTE?: InputMaybe<Scalars['DateTime']>;
  publishedAt_NOT?: InputMaybe<Scalars['DateTime']>;
  publishedAt_NOT_IN?: InputMaybe<Array<Scalars['DateTime']>>;
  subheader?: InputMaybe<Scalars['String']>;
  subheader_CONTAINS?: InputMaybe<Scalars['String']>;
  subheader_ENDS_WITH?: InputMaybe<Scalars['String']>;
  subheader_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  subheader_NOT?: InputMaybe<Scalars['String']>;
  subheader_NOT_CONTAINS?: InputMaybe<Scalars['String']>;
  subheader_NOT_ENDS_WITH?: InputMaybe<Scalars['String']>;
  subheader_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  subheader_NOT_STARTS_WITH?: InputMaybe<Scalars['String']>;
  subheader_STARTS_WITH?: InputMaybe<Scalars['String']>;
  tagsAggregate?: InputMaybe<IArticleTagsAggregateInput>;
  tagsConnection_ALL?: InputMaybe<IArticleTagsConnectionWhere>;
  tagsConnection_NONE?: InputMaybe<IArticleTagsConnectionWhere>;
  tagsConnection_SINGLE?: InputMaybe<IArticleTagsConnectionWhere>;
  tagsConnection_SOME?: InputMaybe<IArticleTagsConnectionWhere>;
  /** Return Articles where all of the related Tags match this filter */
  tags_ALL?: InputMaybe<ITagWhere>;
  /** Return Articles where none of the related Tags match this filter */
  tags_NONE?: InputMaybe<ITagWhere>;
  /** Return Articles where one of the related Tags match this filter */
  tags_SINGLE?: InputMaybe<ITagWhere>;
  /** Return Articles where some of the related Tags match this filter */
  tags_SOME?: InputMaybe<ITagWhere>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  updatedAt_GT?: InputMaybe<Scalars['DateTime']>;
  updatedAt_GTE?: InputMaybe<Scalars['DateTime']>;
  updatedAt_IN?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedAt_LT?: InputMaybe<Scalars['DateTime']>;
  updatedAt_LTE?: InputMaybe<Scalars['DateTime']>;
  updatedAt_NOT?: InputMaybe<Scalars['DateTime']>;
  updatedAt_NOT_IN?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type ICategory = {
  __typename?: 'Category';
  /** Categorys with this tag name */
  articles: Array<IArticle>;
  articlesAggregate?: Maybe<ICategoryArticleArticlesAggregationSelection>;
  articlesConnection: ICategoryArticlesConnection;
  /** Category created date. */
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  /** Category name. */
  name: Scalars['String'];
  /** Category updated date. */
  updatedAt: Scalars['DateTime'];
};


export type ICategoryArticlesArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<IArticleOptions>;
  where?: InputMaybe<IArticleWhere>;
};


export type ICategoryArticlesAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<IArticleWhere>;
};


export type ICategoryArticlesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<ICategoryArticlesConnectionSort>>;
  where?: InputMaybe<ICategoryArticlesConnectionWhere>;
};

export type ICategoryAggregateSelection = {
  __typename?: 'CategoryAggregateSelection';
  count: Scalars['Int'];
  createdAt: IDateTimeAggregateSelectionNonNullable;
  id: IIdAggregateSelectionNonNullable;
  name: IStringAggregateSelectionNonNullable;
  updatedAt: IDateTimeAggregateSelectionNonNullable;
};

export type ICategoryArticleArticlesAggregationSelection = {
  __typename?: 'CategoryArticleArticlesAggregationSelection';
  count: Scalars['Int'];
  node?: Maybe<ICategoryArticleArticlesNodeAggregateSelection>;
};

export type ICategoryArticleArticlesNodeAggregateSelection = {
  __typename?: 'CategoryArticleArticlesNodeAggregateSelection';
  content: IStringAggregateSelectionNonNullable;
  createdAt: IDateTimeAggregateSelectionNonNullable;
  header: IStringAggregateSelectionNonNullable;
  id: IIdAggregateSelectionNonNullable;
  publishedAt: IDateTimeAggregateSelectionNonNullable;
  subheader: IStringAggregateSelectionNullable;
  updatedAt: IDateTimeAggregateSelectionNonNullable;
};

export type ICategoryArticlesAggregateInput = {
  AND?: InputMaybe<Array<ICategoryArticlesAggregateInput>>;
  OR?: InputMaybe<Array<ICategoryArticlesAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  node?: InputMaybe<ICategoryArticlesNodeAggregationWhereInput>;
};

export type ICategoryArticlesConnectFieldInput = {
  connect?: InputMaybe<Array<IArticleConnectInput>>;
  where?: InputMaybe<IArticleConnectWhere>;
};

export type ICategoryArticlesConnectOrCreateFieldInput = {
  onCreate: ICategoryArticlesConnectOrCreateFieldInputOnCreate;
  where: IArticleConnectOrCreateWhere;
};

export type ICategoryArticlesConnectOrCreateFieldInputOnCreate = {
  node: IArticleOnCreateInput;
};

export type ICategoryArticlesConnection = {
  __typename?: 'CategoryArticlesConnection';
  edges: Array<ICategoryArticlesRelationship>;
  pageInfo: IPageInfo;
  totalCount: Scalars['Int'];
};

export type ICategoryArticlesConnectionSort = {
  node?: InputMaybe<IArticleSort>;
};

export type ICategoryArticlesConnectionWhere = {
  AND?: InputMaybe<Array<ICategoryArticlesConnectionWhere>>;
  OR?: InputMaybe<Array<ICategoryArticlesConnectionWhere>>;
  node?: InputMaybe<IArticleWhere>;
  node_NOT?: InputMaybe<IArticleWhere>;
};

export type ICategoryArticlesCreateFieldInput = {
  node: IArticleCreateInput;
};

export type ICategoryArticlesDeleteFieldInput = {
  delete?: InputMaybe<IArticleDeleteInput>;
  where?: InputMaybe<ICategoryArticlesConnectionWhere>;
};

export type ICategoryArticlesDisconnectFieldInput = {
  disconnect?: InputMaybe<IArticleDisconnectInput>;
  where?: InputMaybe<ICategoryArticlesConnectionWhere>;
};

export type ICategoryArticlesFieldInput = {
  connect?: InputMaybe<Array<ICategoryArticlesConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<ICategoryArticlesConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<ICategoryArticlesCreateFieldInput>>;
};

export type ICategoryArticlesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<ICategoryArticlesNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<ICategoryArticlesNodeAggregationWhereInput>>;
  content_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  content_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  content_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  content_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  content_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  content_EQUAL?: InputMaybe<Scalars['String']>;
  content_GT?: InputMaybe<Scalars['Int']>;
  content_GTE?: InputMaybe<Scalars['Int']>;
  content_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  content_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  content_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  content_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  content_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  content_LT?: InputMaybe<Scalars['Int']>;
  content_LTE?: InputMaybe<Scalars['Int']>;
  content_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  content_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  content_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  content_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  content_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
  createdAt_EQUAL?: InputMaybe<Scalars['DateTime']>;
  createdAt_GT?: InputMaybe<Scalars['DateTime']>;
  createdAt_GTE?: InputMaybe<Scalars['DateTime']>;
  createdAt_LT?: InputMaybe<Scalars['DateTime']>;
  createdAt_LTE?: InputMaybe<Scalars['DateTime']>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']>;
  createdAt_MAX_GT?: InputMaybe<Scalars['DateTime']>;
  createdAt_MAX_GTE?: InputMaybe<Scalars['DateTime']>;
  createdAt_MAX_LT?: InputMaybe<Scalars['DateTime']>;
  createdAt_MAX_LTE?: InputMaybe<Scalars['DateTime']>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']>;
  createdAt_MIN_GT?: InputMaybe<Scalars['DateTime']>;
  createdAt_MIN_GTE?: InputMaybe<Scalars['DateTime']>;
  createdAt_MIN_LT?: InputMaybe<Scalars['DateTime']>;
  createdAt_MIN_LTE?: InputMaybe<Scalars['DateTime']>;
  header_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  header_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  header_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  header_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  header_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  header_EQUAL?: InputMaybe<Scalars['String']>;
  header_GT?: InputMaybe<Scalars['Int']>;
  header_GTE?: InputMaybe<Scalars['Int']>;
  header_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  header_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  header_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  header_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  header_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  header_LT?: InputMaybe<Scalars['Int']>;
  header_LTE?: InputMaybe<Scalars['Int']>;
  header_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  header_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  header_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  header_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  header_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
  id_EQUAL?: InputMaybe<Scalars['ID']>;
  publishedAt_EQUAL?: InputMaybe<Scalars['DateTime']>;
  publishedAt_GT?: InputMaybe<Scalars['DateTime']>;
  publishedAt_GTE?: InputMaybe<Scalars['DateTime']>;
  publishedAt_LT?: InputMaybe<Scalars['DateTime']>;
  publishedAt_LTE?: InputMaybe<Scalars['DateTime']>;
  publishedAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']>;
  publishedAt_MAX_GT?: InputMaybe<Scalars['DateTime']>;
  publishedAt_MAX_GTE?: InputMaybe<Scalars['DateTime']>;
  publishedAt_MAX_LT?: InputMaybe<Scalars['DateTime']>;
  publishedAt_MAX_LTE?: InputMaybe<Scalars['DateTime']>;
  publishedAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']>;
  publishedAt_MIN_GT?: InputMaybe<Scalars['DateTime']>;
  publishedAt_MIN_GTE?: InputMaybe<Scalars['DateTime']>;
  publishedAt_MIN_LT?: InputMaybe<Scalars['DateTime']>;
  publishedAt_MIN_LTE?: InputMaybe<Scalars['DateTime']>;
  subheader_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  subheader_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  subheader_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  subheader_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  subheader_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  subheader_EQUAL?: InputMaybe<Scalars['String']>;
  subheader_GT?: InputMaybe<Scalars['Int']>;
  subheader_GTE?: InputMaybe<Scalars['Int']>;
  subheader_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  subheader_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  subheader_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  subheader_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  subheader_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  subheader_LT?: InputMaybe<Scalars['Int']>;
  subheader_LTE?: InputMaybe<Scalars['Int']>;
  subheader_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  subheader_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  subheader_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  subheader_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  subheader_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
  updatedAt_EQUAL?: InputMaybe<Scalars['DateTime']>;
  updatedAt_GT?: InputMaybe<Scalars['DateTime']>;
  updatedAt_GTE?: InputMaybe<Scalars['DateTime']>;
  updatedAt_LT?: InputMaybe<Scalars['DateTime']>;
  updatedAt_LTE?: InputMaybe<Scalars['DateTime']>;
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']>;
  updatedAt_MAX_GT?: InputMaybe<Scalars['DateTime']>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars['DateTime']>;
  updatedAt_MAX_LT?: InputMaybe<Scalars['DateTime']>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars['DateTime']>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']>;
  updatedAt_MIN_GT?: InputMaybe<Scalars['DateTime']>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars['DateTime']>;
  updatedAt_MIN_LT?: InputMaybe<Scalars['DateTime']>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars['DateTime']>;
};

export type ICategoryArticlesRelationship = {
  __typename?: 'CategoryArticlesRelationship';
  cursor: Scalars['String'];
  node: IArticle;
};

export type ICategoryArticlesUpdateConnectionInput = {
  node?: InputMaybe<IArticleUpdateInput>;
};

export type ICategoryArticlesUpdateFieldInput = {
  connect?: InputMaybe<Array<ICategoryArticlesConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<ICategoryArticlesConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<ICategoryArticlesCreateFieldInput>>;
  delete?: InputMaybe<Array<ICategoryArticlesDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<ICategoryArticlesDisconnectFieldInput>>;
  update?: InputMaybe<ICategoryArticlesUpdateConnectionInput>;
  where?: InputMaybe<ICategoryArticlesConnectionWhere>;
};

export type ICategoryConnectInput = {
  articles?: InputMaybe<Array<ICategoryArticlesConnectFieldInput>>;
};

export type ICategoryConnectOrCreateInput = {
  articles?: InputMaybe<Array<ICategoryArticlesConnectOrCreateFieldInput>>;
};

export type ICategoryConnectOrCreateWhere = {
  node: ICategoryUniqueWhere;
};

export type ICategoryConnectWhere = {
  node: ICategoryWhere;
};

export type ICategoryCreateInput = {
  articles?: InputMaybe<ICategoryArticlesFieldInput>;
  name: Scalars['String'];
};

export type ICategoryDeleteInput = {
  articles?: InputMaybe<Array<ICategoryArticlesDeleteFieldInput>>;
};

export type ICategoryDisconnectInput = {
  articles?: InputMaybe<Array<ICategoryArticlesDisconnectFieldInput>>;
};

export type ICategoryOnCreateInput = {
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
};

export type ICategoryOptions = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  /** Specify one or more CategorySort objects to sort Categories by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<ICategorySort>>;
};

export type ICategoryRelationInput = {
  articles?: InputMaybe<Array<ICategoryArticlesCreateFieldInput>>;
};

/** Fields to sort Categories by. The order in which sorts are applied is not guaranteed when specifying many fields in one CategorySort object. */
export type ICategorySort = {
  createdAt?: InputMaybe<ISortDirection>;
  id?: InputMaybe<ISortDirection>;
  name?: InputMaybe<ISortDirection>;
  updatedAt?: InputMaybe<ISortDirection>;
};

export type ICategoryUniqueWhere = {
  id?: InputMaybe<Scalars['ID']>;
};

export type ICategoryUpdateInput = {
  articles?: InputMaybe<Array<ICategoryArticlesUpdateFieldInput>>;
  name?: InputMaybe<Scalars['String']>;
};

export type ICategoryWhere = {
  AND?: InputMaybe<Array<ICategoryWhere>>;
  OR?: InputMaybe<Array<ICategoryWhere>>;
  articlesAggregate?: InputMaybe<ICategoryArticlesAggregateInput>;
  articlesConnection_ALL?: InputMaybe<ICategoryArticlesConnectionWhere>;
  articlesConnection_NONE?: InputMaybe<ICategoryArticlesConnectionWhere>;
  articlesConnection_SINGLE?: InputMaybe<ICategoryArticlesConnectionWhere>;
  articlesConnection_SOME?: InputMaybe<ICategoryArticlesConnectionWhere>;
  /** Return Categories where all of the related Articles match this filter */
  articles_ALL?: InputMaybe<IArticleWhere>;
  /** Return Categories where none of the related Articles match this filter */
  articles_NONE?: InputMaybe<IArticleWhere>;
  /** Return Categories where one of the related Articles match this filter */
  articles_SINGLE?: InputMaybe<IArticleWhere>;
  /** Return Categories where some of the related Articles match this filter */
  articles_SOME?: InputMaybe<IArticleWhere>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  createdAt_GT?: InputMaybe<Scalars['DateTime']>;
  createdAt_GTE?: InputMaybe<Scalars['DateTime']>;
  createdAt_IN?: InputMaybe<Array<Scalars['DateTime']>>;
  createdAt_LT?: InputMaybe<Scalars['DateTime']>;
  createdAt_LTE?: InputMaybe<Scalars['DateTime']>;
  createdAt_NOT?: InputMaybe<Scalars['DateTime']>;
  createdAt_NOT_IN?: InputMaybe<Array<Scalars['DateTime']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_CONTAINS?: InputMaybe<Scalars['ID']>;
  id_ENDS_WITH?: InputMaybe<Scalars['ID']>;
  id_IN?: InputMaybe<Array<Scalars['ID']>>;
  id_NOT?: InputMaybe<Scalars['ID']>;
  id_NOT_CONTAINS?: InputMaybe<Scalars['ID']>;
  id_NOT_ENDS_WITH?: InputMaybe<Scalars['ID']>;
  id_NOT_IN?: InputMaybe<Array<Scalars['ID']>>;
  id_NOT_STARTS_WITH?: InputMaybe<Scalars['ID']>;
  id_STARTS_WITH?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  name_CONTAINS?: InputMaybe<Scalars['String']>;
  name_ENDS_WITH?: InputMaybe<Scalars['String']>;
  name_IN?: InputMaybe<Array<Scalars['String']>>;
  name_NOT?: InputMaybe<Scalars['String']>;
  name_NOT_CONTAINS?: InputMaybe<Scalars['String']>;
  name_NOT_ENDS_WITH?: InputMaybe<Scalars['String']>;
  name_NOT_IN?: InputMaybe<Array<Scalars['String']>>;
  name_NOT_STARTS_WITH?: InputMaybe<Scalars['String']>;
  name_STARTS_WITH?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  updatedAt_GT?: InputMaybe<Scalars['DateTime']>;
  updatedAt_GTE?: InputMaybe<Scalars['DateTime']>;
  updatedAt_IN?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedAt_LT?: InputMaybe<Scalars['DateTime']>;
  updatedAt_LTE?: InputMaybe<Scalars['DateTime']>;
  updatedAt_NOT?: InputMaybe<Scalars['DateTime']>;
  updatedAt_NOT_IN?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type ICreateArticlesMutationResponse = {
  __typename?: 'CreateArticlesMutationResponse';
  articles: Array<IArticle>;
  info: ICreateInfo;
};

export type ICreateCategoriesMutationResponse = {
  __typename?: 'CreateCategoriesMutationResponse';
  categories: Array<ICategory>;
  info: ICreateInfo;
};

export type ICreateInfo = {
  __typename?: 'CreateInfo';
  bookmark?: Maybe<Scalars['String']>;
  nodesCreated: Scalars['Int'];
  relationshipsCreated: Scalars['Int'];
};

export type ICreateTagsMutationResponse = {
  __typename?: 'CreateTagsMutationResponse';
  info: ICreateInfo;
  tags: Array<ITag>;
};

export type ICreateUsersMutationResponse = {
  __typename?: 'CreateUsersMutationResponse';
  info: ICreateInfo;
  users: Array<IUser>;
};

export type ICredentialsInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type IDateTimeAggregateSelectionNonNullable = {
  __typename?: 'DateTimeAggregateSelectionNonNullable';
  max: Scalars['DateTime'];
  min: Scalars['DateTime'];
};

export type IDateTimeAggregateSelectionNullable = {
  __typename?: 'DateTimeAggregateSelectionNullable';
  max?: Maybe<Scalars['DateTime']>;
  min?: Maybe<Scalars['DateTime']>;
};

export type IDeleteInfo = {
  __typename?: 'DeleteInfo';
  bookmark?: Maybe<Scalars['String']>;
  nodesDeleted: Scalars['Int'];
  relationshipsDeleted: Scalars['Int'];
};

export type IIdAggregateSelectionNonNullable = {
  __typename?: 'IDAggregateSelectionNonNullable';
  longest: Scalars['ID'];
  shortest: Scalars['ID'];
};

export enum ILanguagesEnum {
  English = 'English',
  Russian = 'Russian'
}

export type IMutation = {
  __typename?: 'Mutation';
  createArticles: ICreateArticlesMutationResponse;
  createCategories: ICreateCategoriesMutationResponse;
  createTags: ICreateTagsMutationResponse;
  createUsers: ICreateUsersMutationResponse;
  deleteArticles: IDeleteInfo;
  deleteCategories: IDeleteInfo;
  deleteTags: IDeleteInfo;
  deleteUsers: IDeleteInfo;
  loginUser?: Maybe<ITokens>;
  refreshTokens?: Maybe<ITokens>;
  updateArticles: IUpdateArticlesMutationResponse;
  updateCategories: IUpdateCategoriesMutationResponse;
  updateTags: IUpdateTagsMutationResponse;
  updateUsers: IUpdateUsersMutationResponse;
};


export type IMutationCreateArticlesArgs = {
  input: Array<IArticleCreateInput>;
};


export type IMutationCreateCategoriesArgs = {
  input: Array<ICategoryCreateInput>;
};


export type IMutationCreateTagsArgs = {
  input: Array<ITagCreateInput>;
};


export type IMutationCreateUsersArgs = {
  input: Array<IUserCreateInput>;
};


export type IMutationDeleteArticlesArgs = {
  delete?: InputMaybe<IArticleDeleteInput>;
  where?: InputMaybe<IArticleWhere>;
};


export type IMutationDeleteCategoriesArgs = {
  delete?: InputMaybe<ICategoryDeleteInput>;
  where?: InputMaybe<ICategoryWhere>;
};


export type IMutationDeleteTagsArgs = {
  delete?: InputMaybe<ITagDeleteInput>;
  where?: InputMaybe<ITagWhere>;
};


export type IMutationDeleteUsersArgs = {
  delete?: InputMaybe<IUserDeleteInput>;
  where?: InputMaybe<IUserWhere>;
};


export type IMutationLoginUserArgs = {
  input: ICredentialsInput;
};


export type IMutationRefreshTokensArgs = {
  refreshToken: Scalars['String'];
};


export type IMutationUpdateArticlesArgs = {
  connect?: InputMaybe<IArticleConnectInput>;
  connectOrCreate?: InputMaybe<IArticleConnectOrCreateInput>;
  create?: InputMaybe<IArticleRelationInput>;
  delete?: InputMaybe<IArticleDeleteInput>;
  disconnect?: InputMaybe<IArticleDisconnectInput>;
  update?: InputMaybe<IArticleUpdateInput>;
  where?: InputMaybe<IArticleWhere>;
};


export type IMutationUpdateCategoriesArgs = {
  connect?: InputMaybe<ICategoryConnectInput>;
  connectOrCreate?: InputMaybe<ICategoryConnectOrCreateInput>;
  create?: InputMaybe<ICategoryRelationInput>;
  delete?: InputMaybe<ICategoryDeleteInput>;
  disconnect?: InputMaybe<ICategoryDisconnectInput>;
  update?: InputMaybe<ICategoryUpdateInput>;
  where?: InputMaybe<ICategoryWhere>;
};


export type IMutationUpdateTagsArgs = {
  connect?: InputMaybe<ITagConnectInput>;
  connectOrCreate?: InputMaybe<ITagConnectOrCreateInput>;
  create?: InputMaybe<ITagRelationInput>;
  delete?: InputMaybe<ITagDeleteInput>;
  disconnect?: InputMaybe<ITagDisconnectInput>;
  update?: InputMaybe<ITagUpdateInput>;
  where?: InputMaybe<ITagWhere>;
};


export type IMutationUpdateUsersArgs = {
  connect?: InputMaybe<IUserConnectInput>;
  connectOrCreate?: InputMaybe<IUserConnectOrCreateInput>;
  create?: InputMaybe<IUserRelationInput>;
  delete?: InputMaybe<IUserDeleteInput>;
  disconnect?: InputMaybe<IUserDisconnectInput>;
  update?: InputMaybe<IUserUpdateInput>;
  where?: InputMaybe<IUserWhere>;
};

/** Pagination information (Relay) */
export type IPageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']>;
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor?: Maybe<Scalars['String']>;
};

export type IQuery = {
  __typename?: 'Query';
  articles: Array<IArticle>;
  articlesAggregate: IArticleAggregateSelection;
  categories: Array<ICategory>;
  categoriesAggregate: ICategoryAggregateSelection;
  tags: Array<ITag>;
  tagsAggregate: ITagAggregateSelection;
  users: Array<IUser>;
  usersAggregate: IUserAggregateSelection;
};


export type IQueryArticlesArgs = {
  options?: InputMaybe<IArticleOptions>;
  where?: InputMaybe<IArticleWhere>;
};


export type IQueryArticlesAggregateArgs = {
  where?: InputMaybe<IArticleWhere>;
};


export type IQueryCategoriesArgs = {
  options?: InputMaybe<ICategoryOptions>;
  where?: InputMaybe<ICategoryWhere>;
};


export type IQueryCategoriesAggregateArgs = {
  where?: InputMaybe<ICategoryWhere>;
};


export type IQueryTagsArgs = {
  options?: InputMaybe<ITagOptions>;
  where?: InputMaybe<ITagWhere>;
};


export type IQueryTagsAggregateArgs = {
  where?: InputMaybe<ITagWhere>;
};


export type IQueryUsersArgs = {
  options?: InputMaybe<IUserOptions>;
  where?: InputMaybe<IUserWhere>;
};


export type IQueryUsersAggregateArgs = {
  where?: InputMaybe<IUserWhere>;
};

export enum ISortDirection {
  /** Sort by field values in ascending order. */
  Asc = 'ASC',
  /** Sort by field values in descending order. */
  Desc = 'DESC'
}

export type IStringAggregateSelectionNonNullable = {
  __typename?: 'StringAggregateSelectionNonNullable';
  longest: Scalars['String'];
  shortest: Scalars['String'];
};

export type IStringAggregateSelectionNullable = {
  __typename?: 'StringAggregateSelectionNullable';
  longest?: Maybe<Scalars['String']>;
  shortest?: Maybe<Scalars['String']>;
};

export type ITag = {
  __typename?: 'Tag';
  /** Articles with this tag name */
  articles: Array<IArticle>;
  articlesAggregate?: Maybe<ITagArticleArticlesAggregationSelection>;
  articlesConnection: ITagArticlesConnection;
  /** Tag created date. */
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  /** Tag name. */
  name: Scalars['String'];
  /** Tag updated date. */
  updatedAt: Scalars['DateTime'];
};


export type ITagArticlesArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<IArticleOptions>;
  where?: InputMaybe<IArticleWhere>;
};


export type ITagArticlesAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<IArticleWhere>;
};


export type ITagArticlesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<ITagArticlesConnectionSort>>;
  where?: InputMaybe<ITagArticlesConnectionWhere>;
};

export type ITagAggregateSelection = {
  __typename?: 'TagAggregateSelection';
  count: Scalars['Int'];
  createdAt: IDateTimeAggregateSelectionNonNullable;
  id: IIdAggregateSelectionNonNullable;
  name: IStringAggregateSelectionNonNullable;
  updatedAt: IDateTimeAggregateSelectionNonNullable;
};

export type ITagArticleArticlesAggregationSelection = {
  __typename?: 'TagArticleArticlesAggregationSelection';
  count: Scalars['Int'];
  node?: Maybe<ITagArticleArticlesNodeAggregateSelection>;
};

export type ITagArticleArticlesNodeAggregateSelection = {
  __typename?: 'TagArticleArticlesNodeAggregateSelection';
  content: IStringAggregateSelectionNonNullable;
  createdAt: IDateTimeAggregateSelectionNonNullable;
  header: IStringAggregateSelectionNonNullable;
  id: IIdAggregateSelectionNonNullable;
  publishedAt: IDateTimeAggregateSelectionNonNullable;
  subheader: IStringAggregateSelectionNullable;
  updatedAt: IDateTimeAggregateSelectionNonNullable;
};

export type ITagArticlesAggregateInput = {
  AND?: InputMaybe<Array<ITagArticlesAggregateInput>>;
  OR?: InputMaybe<Array<ITagArticlesAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  node?: InputMaybe<ITagArticlesNodeAggregationWhereInput>;
};

export type ITagArticlesConnectFieldInput = {
  connect?: InputMaybe<Array<IArticleConnectInput>>;
  where?: InputMaybe<IArticleConnectWhere>;
};

export type ITagArticlesConnectOrCreateFieldInput = {
  onCreate: ITagArticlesConnectOrCreateFieldInputOnCreate;
  where: IArticleConnectOrCreateWhere;
};

export type ITagArticlesConnectOrCreateFieldInputOnCreate = {
  node: IArticleOnCreateInput;
};

export type ITagArticlesConnection = {
  __typename?: 'TagArticlesConnection';
  edges: Array<ITagArticlesRelationship>;
  pageInfo: IPageInfo;
  totalCount: Scalars['Int'];
};

export type ITagArticlesConnectionSort = {
  node?: InputMaybe<IArticleSort>;
};

export type ITagArticlesConnectionWhere = {
  AND?: InputMaybe<Array<ITagArticlesConnectionWhere>>;
  OR?: InputMaybe<Array<ITagArticlesConnectionWhere>>;
  node?: InputMaybe<IArticleWhere>;
  node_NOT?: InputMaybe<IArticleWhere>;
};

export type ITagArticlesCreateFieldInput = {
  node: IArticleCreateInput;
};

export type ITagArticlesDeleteFieldInput = {
  delete?: InputMaybe<IArticleDeleteInput>;
  where?: InputMaybe<ITagArticlesConnectionWhere>;
};

export type ITagArticlesDisconnectFieldInput = {
  disconnect?: InputMaybe<IArticleDisconnectInput>;
  where?: InputMaybe<ITagArticlesConnectionWhere>;
};

export type ITagArticlesFieldInput = {
  connect?: InputMaybe<Array<ITagArticlesConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<ITagArticlesConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<ITagArticlesCreateFieldInput>>;
};

export type ITagArticlesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<ITagArticlesNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<ITagArticlesNodeAggregationWhereInput>>;
  content_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  content_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  content_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  content_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  content_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  content_EQUAL?: InputMaybe<Scalars['String']>;
  content_GT?: InputMaybe<Scalars['Int']>;
  content_GTE?: InputMaybe<Scalars['Int']>;
  content_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  content_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  content_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  content_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  content_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  content_LT?: InputMaybe<Scalars['Int']>;
  content_LTE?: InputMaybe<Scalars['Int']>;
  content_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  content_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  content_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  content_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  content_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
  createdAt_EQUAL?: InputMaybe<Scalars['DateTime']>;
  createdAt_GT?: InputMaybe<Scalars['DateTime']>;
  createdAt_GTE?: InputMaybe<Scalars['DateTime']>;
  createdAt_LT?: InputMaybe<Scalars['DateTime']>;
  createdAt_LTE?: InputMaybe<Scalars['DateTime']>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']>;
  createdAt_MAX_GT?: InputMaybe<Scalars['DateTime']>;
  createdAt_MAX_GTE?: InputMaybe<Scalars['DateTime']>;
  createdAt_MAX_LT?: InputMaybe<Scalars['DateTime']>;
  createdAt_MAX_LTE?: InputMaybe<Scalars['DateTime']>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']>;
  createdAt_MIN_GT?: InputMaybe<Scalars['DateTime']>;
  createdAt_MIN_GTE?: InputMaybe<Scalars['DateTime']>;
  createdAt_MIN_LT?: InputMaybe<Scalars['DateTime']>;
  createdAt_MIN_LTE?: InputMaybe<Scalars['DateTime']>;
  header_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  header_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  header_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  header_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  header_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  header_EQUAL?: InputMaybe<Scalars['String']>;
  header_GT?: InputMaybe<Scalars['Int']>;
  header_GTE?: InputMaybe<Scalars['Int']>;
  header_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  header_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  header_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  header_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  header_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  header_LT?: InputMaybe<Scalars['Int']>;
  header_LTE?: InputMaybe<Scalars['Int']>;
  header_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  header_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  header_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  header_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  header_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
  id_EQUAL?: InputMaybe<Scalars['ID']>;
  publishedAt_EQUAL?: InputMaybe<Scalars['DateTime']>;
  publishedAt_GT?: InputMaybe<Scalars['DateTime']>;
  publishedAt_GTE?: InputMaybe<Scalars['DateTime']>;
  publishedAt_LT?: InputMaybe<Scalars['DateTime']>;
  publishedAt_LTE?: InputMaybe<Scalars['DateTime']>;
  publishedAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']>;
  publishedAt_MAX_GT?: InputMaybe<Scalars['DateTime']>;
  publishedAt_MAX_GTE?: InputMaybe<Scalars['DateTime']>;
  publishedAt_MAX_LT?: InputMaybe<Scalars['DateTime']>;
  publishedAt_MAX_LTE?: InputMaybe<Scalars['DateTime']>;
  publishedAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']>;
  publishedAt_MIN_GT?: InputMaybe<Scalars['DateTime']>;
  publishedAt_MIN_GTE?: InputMaybe<Scalars['DateTime']>;
  publishedAt_MIN_LT?: InputMaybe<Scalars['DateTime']>;
  publishedAt_MIN_LTE?: InputMaybe<Scalars['DateTime']>;
  subheader_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  subheader_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  subheader_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  subheader_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  subheader_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  subheader_EQUAL?: InputMaybe<Scalars['String']>;
  subheader_GT?: InputMaybe<Scalars['Int']>;
  subheader_GTE?: InputMaybe<Scalars['Int']>;
  subheader_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  subheader_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  subheader_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  subheader_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  subheader_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  subheader_LT?: InputMaybe<Scalars['Int']>;
  subheader_LTE?: InputMaybe<Scalars['Int']>;
  subheader_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  subheader_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  subheader_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  subheader_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  subheader_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
  updatedAt_EQUAL?: InputMaybe<Scalars['DateTime']>;
  updatedAt_GT?: InputMaybe<Scalars['DateTime']>;
  updatedAt_GTE?: InputMaybe<Scalars['DateTime']>;
  updatedAt_LT?: InputMaybe<Scalars['DateTime']>;
  updatedAt_LTE?: InputMaybe<Scalars['DateTime']>;
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']>;
  updatedAt_MAX_GT?: InputMaybe<Scalars['DateTime']>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars['DateTime']>;
  updatedAt_MAX_LT?: InputMaybe<Scalars['DateTime']>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars['DateTime']>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']>;
  updatedAt_MIN_GT?: InputMaybe<Scalars['DateTime']>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars['DateTime']>;
  updatedAt_MIN_LT?: InputMaybe<Scalars['DateTime']>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars['DateTime']>;
};

export type ITagArticlesRelationship = {
  __typename?: 'TagArticlesRelationship';
  cursor: Scalars['String'];
  node: IArticle;
};

export type ITagArticlesUpdateConnectionInput = {
  node?: InputMaybe<IArticleUpdateInput>;
};

export type ITagArticlesUpdateFieldInput = {
  connect?: InputMaybe<Array<ITagArticlesConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<ITagArticlesConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<ITagArticlesCreateFieldInput>>;
  delete?: InputMaybe<Array<ITagArticlesDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<ITagArticlesDisconnectFieldInput>>;
  update?: InputMaybe<ITagArticlesUpdateConnectionInput>;
  where?: InputMaybe<ITagArticlesConnectionWhere>;
};

export type ITagConnectInput = {
  articles?: InputMaybe<Array<ITagArticlesConnectFieldInput>>;
};

export type ITagConnectOrCreateInput = {
  articles?: InputMaybe<Array<ITagArticlesConnectOrCreateFieldInput>>;
};

export type ITagConnectOrCreateWhere = {
  node: ITagUniqueWhere;
};

export type ITagConnectWhere = {
  node: ITagWhere;
};

export type ITagCreateInput = {
  articles?: InputMaybe<ITagArticlesFieldInput>;
  name: Scalars['String'];
};

export type ITagDeleteInput = {
  articles?: InputMaybe<Array<ITagArticlesDeleteFieldInput>>;
};

export type ITagDisconnectInput = {
  articles?: InputMaybe<Array<ITagArticlesDisconnectFieldInput>>;
};

export type ITagOnCreateInput = {
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
};

export type ITagOptions = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  /** Specify one or more TagSort objects to sort Tags by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<ITagSort>>;
};

export type ITagRelationInput = {
  articles?: InputMaybe<Array<ITagArticlesCreateFieldInput>>;
};

/** Fields to sort Tags by. The order in which sorts are applied is not guaranteed when specifying many fields in one TagSort object. */
export type ITagSort = {
  createdAt?: InputMaybe<ISortDirection>;
  id?: InputMaybe<ISortDirection>;
  name?: InputMaybe<ISortDirection>;
  updatedAt?: InputMaybe<ISortDirection>;
};

export type ITagUniqueWhere = {
  id?: InputMaybe<Scalars['ID']>;
};

export type ITagUpdateInput = {
  articles?: InputMaybe<Array<ITagArticlesUpdateFieldInput>>;
  name?: InputMaybe<Scalars['String']>;
};

export type ITagWhere = {
  AND?: InputMaybe<Array<ITagWhere>>;
  OR?: InputMaybe<Array<ITagWhere>>;
  articlesAggregate?: InputMaybe<ITagArticlesAggregateInput>;
  articlesConnection_ALL?: InputMaybe<ITagArticlesConnectionWhere>;
  articlesConnection_NONE?: InputMaybe<ITagArticlesConnectionWhere>;
  articlesConnection_SINGLE?: InputMaybe<ITagArticlesConnectionWhere>;
  articlesConnection_SOME?: InputMaybe<ITagArticlesConnectionWhere>;
  /** Return Tags where all of the related Articles match this filter */
  articles_ALL?: InputMaybe<IArticleWhere>;
  /** Return Tags where none of the related Articles match this filter */
  articles_NONE?: InputMaybe<IArticleWhere>;
  /** Return Tags where one of the related Articles match this filter */
  articles_SINGLE?: InputMaybe<IArticleWhere>;
  /** Return Tags where some of the related Articles match this filter */
  articles_SOME?: InputMaybe<IArticleWhere>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  createdAt_GT?: InputMaybe<Scalars['DateTime']>;
  createdAt_GTE?: InputMaybe<Scalars['DateTime']>;
  createdAt_IN?: InputMaybe<Array<Scalars['DateTime']>>;
  createdAt_LT?: InputMaybe<Scalars['DateTime']>;
  createdAt_LTE?: InputMaybe<Scalars['DateTime']>;
  createdAt_NOT?: InputMaybe<Scalars['DateTime']>;
  createdAt_NOT_IN?: InputMaybe<Array<Scalars['DateTime']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_CONTAINS?: InputMaybe<Scalars['ID']>;
  id_ENDS_WITH?: InputMaybe<Scalars['ID']>;
  id_IN?: InputMaybe<Array<Scalars['ID']>>;
  id_NOT?: InputMaybe<Scalars['ID']>;
  id_NOT_CONTAINS?: InputMaybe<Scalars['ID']>;
  id_NOT_ENDS_WITH?: InputMaybe<Scalars['ID']>;
  id_NOT_IN?: InputMaybe<Array<Scalars['ID']>>;
  id_NOT_STARTS_WITH?: InputMaybe<Scalars['ID']>;
  id_STARTS_WITH?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  name_CONTAINS?: InputMaybe<Scalars['String']>;
  name_ENDS_WITH?: InputMaybe<Scalars['String']>;
  name_IN?: InputMaybe<Array<Scalars['String']>>;
  name_NOT?: InputMaybe<Scalars['String']>;
  name_NOT_CONTAINS?: InputMaybe<Scalars['String']>;
  name_NOT_ENDS_WITH?: InputMaybe<Scalars['String']>;
  name_NOT_IN?: InputMaybe<Array<Scalars['String']>>;
  name_NOT_STARTS_WITH?: InputMaybe<Scalars['String']>;
  name_STARTS_WITH?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  updatedAt_GT?: InputMaybe<Scalars['DateTime']>;
  updatedAt_GTE?: InputMaybe<Scalars['DateTime']>;
  updatedAt_IN?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedAt_LT?: InputMaybe<Scalars['DateTime']>;
  updatedAt_LTE?: InputMaybe<Scalars['DateTime']>;
  updatedAt_NOT?: InputMaybe<Scalars['DateTime']>;
  updatedAt_NOT_IN?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type ITokens = {
  __typename?: 'Tokens';
  accessToken: Scalars['String'];
  refreshToken: Scalars['String'];
};

export type IUpdateArticlesMutationResponse = {
  __typename?: 'UpdateArticlesMutationResponse';
  articles: Array<IArticle>;
  info: IUpdateInfo;
};

export type IUpdateCategoriesMutationResponse = {
  __typename?: 'UpdateCategoriesMutationResponse';
  categories: Array<ICategory>;
  info: IUpdateInfo;
};

export type IUpdateInfo = {
  __typename?: 'UpdateInfo';
  bookmark?: Maybe<Scalars['String']>;
  nodesCreated: Scalars['Int'];
  nodesDeleted: Scalars['Int'];
  relationshipsCreated: Scalars['Int'];
  relationshipsDeleted: Scalars['Int'];
};

export type IUpdateTagsMutationResponse = {
  __typename?: 'UpdateTagsMutationResponse';
  info: IUpdateInfo;
  tags: Array<ITag>;
};

export type IUpdateUsersMutationResponse = {
  __typename?: 'UpdateUsersMutationResponse';
  info: IUpdateInfo;
  users: Array<IUser>;
};

export type IUser = {
  __typename?: 'User';
  /** User created date. */
  createdAt: Scalars['DateTime'];
  /** User's email. Should be unique */
  email: Scalars['String'];
  id: Scalars['ID'];
  /** User's IP address. */
  ip?: Maybe<Scalars['String']>;
  /** User last log-in date. */
  lastLoggedAt?: Maybe<Scalars['DateTime']>;
  /** User's phone number. Should be unique */
  phone: Scalars['String'];
  /** User updated date. */
  updatedAt: Scalars['DateTime'];
  /** Has articles relationship */
  wroteArticles: Array<IArticle>;
  wroteArticlesAggregate?: Maybe<IUserArticleWroteArticlesAggregationSelection>;
  wroteArticlesConnection: IUserWroteArticlesConnection;
};


export type IUserWroteArticlesArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<IArticleOptions>;
  where?: InputMaybe<IArticleWhere>;
};


export type IUserWroteArticlesAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<IArticleWhere>;
};


export type IUserWroteArticlesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<IUserWroteArticlesConnectionSort>>;
  where?: InputMaybe<IUserWroteArticlesConnectionWhere>;
};

export type IUserAggregateSelection = {
  __typename?: 'UserAggregateSelection';
  count: Scalars['Int'];
  createdAt: IDateTimeAggregateSelectionNonNullable;
  email: IStringAggregateSelectionNonNullable;
  id: IIdAggregateSelectionNonNullable;
  ip: IStringAggregateSelectionNullable;
  lastLoggedAt: IDateTimeAggregateSelectionNullable;
  phone: IStringAggregateSelectionNonNullable;
  updatedAt: IDateTimeAggregateSelectionNonNullable;
};

export type IUserArticleWroteArticlesAggregationSelection = {
  __typename?: 'UserArticleWroteArticlesAggregationSelection';
  count: Scalars['Int'];
  node?: Maybe<IUserArticleWroteArticlesNodeAggregateSelection>;
};

export type IUserArticleWroteArticlesNodeAggregateSelection = {
  __typename?: 'UserArticleWroteArticlesNodeAggregateSelection';
  content: IStringAggregateSelectionNonNullable;
  createdAt: IDateTimeAggregateSelectionNonNullable;
  header: IStringAggregateSelectionNonNullable;
  id: IIdAggregateSelectionNonNullable;
  publishedAt: IDateTimeAggregateSelectionNonNullable;
  subheader: IStringAggregateSelectionNullable;
  updatedAt: IDateTimeAggregateSelectionNonNullable;
};

export type IUserConnectInput = {
  wroteArticles?: InputMaybe<Array<IUserWroteArticlesConnectFieldInput>>;
};

export type IUserConnectOrCreateInput = {
  wroteArticles?: InputMaybe<Array<IUserWroteArticlesConnectOrCreateFieldInput>>;
};

export type IUserConnectOrCreateWhere = {
  node: IUserUniqueWhere;
};

export type IUserConnectWhere = {
  node: IUserWhere;
};

export type IUserCreateInput = {
  email: Scalars['String'];
  ip?: InputMaybe<Scalars['String']>;
  lastLoggedAt?: InputMaybe<Scalars['DateTime']>;
  phone: Scalars['String'];
  wroteArticles?: InputMaybe<IUserWroteArticlesFieldInput>;
};

export type IUserDeleteInput = {
  wroteArticles?: InputMaybe<Array<IUserWroteArticlesDeleteFieldInput>>;
};

export type IUserDisconnectInput = {
  wroteArticles?: InputMaybe<Array<IUserWroteArticlesDisconnectFieldInput>>;
};

export type IUserOnCreateInput = {
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  ip?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
};

export type IUserOptions = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  /** Specify one or more UserSort objects to sort Users by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<IUserSort>>;
};

export type IUserRelationInput = {
  wroteArticles?: InputMaybe<Array<IUserWroteArticlesCreateFieldInput>>;
};

/** Fields to sort Users by. The order in which sorts are applied is not guaranteed when specifying many fields in one UserSort object. */
export type IUserSort = {
  createdAt?: InputMaybe<ISortDirection>;
  email?: InputMaybe<ISortDirection>;
  id?: InputMaybe<ISortDirection>;
  ip?: InputMaybe<ISortDirection>;
  lastLoggedAt?: InputMaybe<ISortDirection>;
  phone?: InputMaybe<ISortDirection>;
  updatedAt?: InputMaybe<ISortDirection>;
};

export type IUserUniqueWhere = {
  id?: InputMaybe<Scalars['ID']>;
};

export type IUserUpdateInput = {
  email?: InputMaybe<Scalars['String']>;
  ip?: InputMaybe<Scalars['String']>;
  lastLoggedAt?: InputMaybe<Scalars['DateTime']>;
  phone?: InputMaybe<Scalars['String']>;
  wroteArticles?: InputMaybe<Array<IUserWroteArticlesUpdateFieldInput>>;
};

export type IUserWhere = {
  AND?: InputMaybe<Array<IUserWhere>>;
  OR?: InputMaybe<Array<IUserWhere>>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  createdAt_GT?: InputMaybe<Scalars['DateTime']>;
  createdAt_GTE?: InputMaybe<Scalars['DateTime']>;
  createdAt_IN?: InputMaybe<Array<Scalars['DateTime']>>;
  createdAt_LT?: InputMaybe<Scalars['DateTime']>;
  createdAt_LTE?: InputMaybe<Scalars['DateTime']>;
  createdAt_NOT?: InputMaybe<Scalars['DateTime']>;
  createdAt_NOT_IN?: InputMaybe<Array<Scalars['DateTime']>>;
  email?: InputMaybe<Scalars['String']>;
  email_CONTAINS?: InputMaybe<Scalars['String']>;
  email_ENDS_WITH?: InputMaybe<Scalars['String']>;
  email_IN?: InputMaybe<Array<Scalars['String']>>;
  email_NOT?: InputMaybe<Scalars['String']>;
  email_NOT_CONTAINS?: InputMaybe<Scalars['String']>;
  email_NOT_ENDS_WITH?: InputMaybe<Scalars['String']>;
  email_NOT_IN?: InputMaybe<Array<Scalars['String']>>;
  email_NOT_STARTS_WITH?: InputMaybe<Scalars['String']>;
  email_STARTS_WITH?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_CONTAINS?: InputMaybe<Scalars['ID']>;
  id_ENDS_WITH?: InputMaybe<Scalars['ID']>;
  id_IN?: InputMaybe<Array<Scalars['ID']>>;
  id_NOT?: InputMaybe<Scalars['ID']>;
  id_NOT_CONTAINS?: InputMaybe<Scalars['ID']>;
  id_NOT_ENDS_WITH?: InputMaybe<Scalars['ID']>;
  id_NOT_IN?: InputMaybe<Array<Scalars['ID']>>;
  id_NOT_STARTS_WITH?: InputMaybe<Scalars['ID']>;
  id_STARTS_WITH?: InputMaybe<Scalars['ID']>;
  ip?: InputMaybe<Scalars['String']>;
  ip_CONTAINS?: InputMaybe<Scalars['String']>;
  ip_ENDS_WITH?: InputMaybe<Scalars['String']>;
  ip_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ip_NOT?: InputMaybe<Scalars['String']>;
  ip_NOT_CONTAINS?: InputMaybe<Scalars['String']>;
  ip_NOT_ENDS_WITH?: InputMaybe<Scalars['String']>;
  ip_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ip_NOT_STARTS_WITH?: InputMaybe<Scalars['String']>;
  ip_STARTS_WITH?: InputMaybe<Scalars['String']>;
  lastLoggedAt?: InputMaybe<Scalars['DateTime']>;
  lastLoggedAt_GT?: InputMaybe<Scalars['DateTime']>;
  lastLoggedAt_GTE?: InputMaybe<Scalars['DateTime']>;
  lastLoggedAt_IN?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  lastLoggedAt_LT?: InputMaybe<Scalars['DateTime']>;
  lastLoggedAt_LTE?: InputMaybe<Scalars['DateTime']>;
  lastLoggedAt_NOT?: InputMaybe<Scalars['DateTime']>;
  lastLoggedAt_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  phone?: InputMaybe<Scalars['String']>;
  phone_CONTAINS?: InputMaybe<Scalars['String']>;
  phone_ENDS_WITH?: InputMaybe<Scalars['String']>;
  phone_IN?: InputMaybe<Array<Scalars['String']>>;
  phone_NOT?: InputMaybe<Scalars['String']>;
  phone_NOT_CONTAINS?: InputMaybe<Scalars['String']>;
  phone_NOT_ENDS_WITH?: InputMaybe<Scalars['String']>;
  phone_NOT_IN?: InputMaybe<Array<Scalars['String']>>;
  phone_NOT_STARTS_WITH?: InputMaybe<Scalars['String']>;
  phone_STARTS_WITH?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  updatedAt_GT?: InputMaybe<Scalars['DateTime']>;
  updatedAt_GTE?: InputMaybe<Scalars['DateTime']>;
  updatedAt_IN?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedAt_LT?: InputMaybe<Scalars['DateTime']>;
  updatedAt_LTE?: InputMaybe<Scalars['DateTime']>;
  updatedAt_NOT?: InputMaybe<Scalars['DateTime']>;
  updatedAt_NOT_IN?: InputMaybe<Array<Scalars['DateTime']>>;
  wroteArticlesAggregate?: InputMaybe<IUserWroteArticlesAggregateInput>;
  wroteArticlesConnection_ALL?: InputMaybe<IUserWroteArticlesConnectionWhere>;
  wroteArticlesConnection_NONE?: InputMaybe<IUserWroteArticlesConnectionWhere>;
  wroteArticlesConnection_SINGLE?: InputMaybe<IUserWroteArticlesConnectionWhere>;
  wroteArticlesConnection_SOME?: InputMaybe<IUserWroteArticlesConnectionWhere>;
  /** Return Users where all of the related Articles match this filter */
  wroteArticles_ALL?: InputMaybe<IArticleWhere>;
  /** Return Users where none of the related Articles match this filter */
  wroteArticles_NONE?: InputMaybe<IArticleWhere>;
  /** Return Users where one of the related Articles match this filter */
  wroteArticles_SINGLE?: InputMaybe<IArticleWhere>;
  /** Return Users where some of the related Articles match this filter */
  wroteArticles_SOME?: InputMaybe<IArticleWhere>;
};

export type IUserWroteArticlesAggregateInput = {
  AND?: InputMaybe<Array<IUserWroteArticlesAggregateInput>>;
  OR?: InputMaybe<Array<IUserWroteArticlesAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  node?: InputMaybe<IUserWroteArticlesNodeAggregationWhereInput>;
};

export type IUserWroteArticlesConnectFieldInput = {
  connect?: InputMaybe<Array<IArticleConnectInput>>;
  where?: InputMaybe<IArticleConnectWhere>;
};

export type IUserWroteArticlesConnectOrCreateFieldInput = {
  onCreate: IUserWroteArticlesConnectOrCreateFieldInputOnCreate;
  where: IArticleConnectOrCreateWhere;
};

export type IUserWroteArticlesConnectOrCreateFieldInputOnCreate = {
  node: IArticleOnCreateInput;
};

export type IUserWroteArticlesConnection = {
  __typename?: 'UserWroteArticlesConnection';
  edges: Array<IUserWroteArticlesRelationship>;
  pageInfo: IPageInfo;
  totalCount: Scalars['Int'];
};

export type IUserWroteArticlesConnectionSort = {
  node?: InputMaybe<IArticleSort>;
};

export type IUserWroteArticlesConnectionWhere = {
  AND?: InputMaybe<Array<IUserWroteArticlesConnectionWhere>>;
  OR?: InputMaybe<Array<IUserWroteArticlesConnectionWhere>>;
  node?: InputMaybe<IArticleWhere>;
  node_NOT?: InputMaybe<IArticleWhere>;
};

export type IUserWroteArticlesCreateFieldInput = {
  node: IArticleCreateInput;
};

export type IUserWroteArticlesDeleteFieldInput = {
  delete?: InputMaybe<IArticleDeleteInput>;
  where?: InputMaybe<IUserWroteArticlesConnectionWhere>;
};

export type IUserWroteArticlesDisconnectFieldInput = {
  disconnect?: InputMaybe<IArticleDisconnectInput>;
  where?: InputMaybe<IUserWroteArticlesConnectionWhere>;
};

export type IUserWroteArticlesFieldInput = {
  connect?: InputMaybe<Array<IUserWroteArticlesConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<IUserWroteArticlesConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<IUserWroteArticlesCreateFieldInput>>;
};

export type IUserWroteArticlesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<IUserWroteArticlesNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<IUserWroteArticlesNodeAggregationWhereInput>>;
  content_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  content_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  content_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  content_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  content_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  content_EQUAL?: InputMaybe<Scalars['String']>;
  content_GT?: InputMaybe<Scalars['Int']>;
  content_GTE?: InputMaybe<Scalars['Int']>;
  content_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  content_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  content_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  content_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  content_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  content_LT?: InputMaybe<Scalars['Int']>;
  content_LTE?: InputMaybe<Scalars['Int']>;
  content_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  content_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  content_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  content_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  content_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
  createdAt_EQUAL?: InputMaybe<Scalars['DateTime']>;
  createdAt_GT?: InputMaybe<Scalars['DateTime']>;
  createdAt_GTE?: InputMaybe<Scalars['DateTime']>;
  createdAt_LT?: InputMaybe<Scalars['DateTime']>;
  createdAt_LTE?: InputMaybe<Scalars['DateTime']>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']>;
  createdAt_MAX_GT?: InputMaybe<Scalars['DateTime']>;
  createdAt_MAX_GTE?: InputMaybe<Scalars['DateTime']>;
  createdAt_MAX_LT?: InputMaybe<Scalars['DateTime']>;
  createdAt_MAX_LTE?: InputMaybe<Scalars['DateTime']>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']>;
  createdAt_MIN_GT?: InputMaybe<Scalars['DateTime']>;
  createdAt_MIN_GTE?: InputMaybe<Scalars['DateTime']>;
  createdAt_MIN_LT?: InputMaybe<Scalars['DateTime']>;
  createdAt_MIN_LTE?: InputMaybe<Scalars['DateTime']>;
  header_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  header_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  header_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  header_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  header_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  header_EQUAL?: InputMaybe<Scalars['String']>;
  header_GT?: InputMaybe<Scalars['Int']>;
  header_GTE?: InputMaybe<Scalars['Int']>;
  header_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  header_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  header_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  header_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  header_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  header_LT?: InputMaybe<Scalars['Int']>;
  header_LTE?: InputMaybe<Scalars['Int']>;
  header_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  header_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  header_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  header_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  header_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
  id_EQUAL?: InputMaybe<Scalars['ID']>;
  publishedAt_EQUAL?: InputMaybe<Scalars['DateTime']>;
  publishedAt_GT?: InputMaybe<Scalars['DateTime']>;
  publishedAt_GTE?: InputMaybe<Scalars['DateTime']>;
  publishedAt_LT?: InputMaybe<Scalars['DateTime']>;
  publishedAt_LTE?: InputMaybe<Scalars['DateTime']>;
  publishedAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']>;
  publishedAt_MAX_GT?: InputMaybe<Scalars['DateTime']>;
  publishedAt_MAX_GTE?: InputMaybe<Scalars['DateTime']>;
  publishedAt_MAX_LT?: InputMaybe<Scalars['DateTime']>;
  publishedAt_MAX_LTE?: InputMaybe<Scalars['DateTime']>;
  publishedAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']>;
  publishedAt_MIN_GT?: InputMaybe<Scalars['DateTime']>;
  publishedAt_MIN_GTE?: InputMaybe<Scalars['DateTime']>;
  publishedAt_MIN_LT?: InputMaybe<Scalars['DateTime']>;
  publishedAt_MIN_LTE?: InputMaybe<Scalars['DateTime']>;
  subheader_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  subheader_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  subheader_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  subheader_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  subheader_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  subheader_EQUAL?: InputMaybe<Scalars['String']>;
  subheader_GT?: InputMaybe<Scalars['Int']>;
  subheader_GTE?: InputMaybe<Scalars['Int']>;
  subheader_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  subheader_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  subheader_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  subheader_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  subheader_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  subheader_LT?: InputMaybe<Scalars['Int']>;
  subheader_LTE?: InputMaybe<Scalars['Int']>;
  subheader_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  subheader_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  subheader_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  subheader_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  subheader_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
  updatedAt_EQUAL?: InputMaybe<Scalars['DateTime']>;
  updatedAt_GT?: InputMaybe<Scalars['DateTime']>;
  updatedAt_GTE?: InputMaybe<Scalars['DateTime']>;
  updatedAt_LT?: InputMaybe<Scalars['DateTime']>;
  updatedAt_LTE?: InputMaybe<Scalars['DateTime']>;
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']>;
  updatedAt_MAX_GT?: InputMaybe<Scalars['DateTime']>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars['DateTime']>;
  updatedAt_MAX_LT?: InputMaybe<Scalars['DateTime']>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars['DateTime']>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']>;
  updatedAt_MIN_GT?: InputMaybe<Scalars['DateTime']>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars['DateTime']>;
  updatedAt_MIN_LT?: InputMaybe<Scalars['DateTime']>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars['DateTime']>;
};

export type IUserWroteArticlesRelationship = {
  __typename?: 'UserWroteArticlesRelationship';
  cursor: Scalars['String'];
  node: IArticle;
};

export type IUserWroteArticlesUpdateConnectionInput = {
  node?: InputMaybe<IArticleUpdateInput>;
};

export type IUserWroteArticlesUpdateFieldInput = {
  connect?: InputMaybe<Array<IUserWroteArticlesConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<IUserWroteArticlesConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<IUserWroteArticlesCreateFieldInput>>;
  delete?: InputMaybe<Array<IUserWroteArticlesDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<IUserWroteArticlesDisconnectFieldInput>>;
  update?: InputMaybe<IUserWroteArticlesUpdateConnectionInput>;
  where?: InputMaybe<IUserWroteArticlesConnectionWhere>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type IResolversTypes = {
  Article: ResolverTypeWrapper<IArticle>;
  ArticleAggregateSelection: ResolverTypeWrapper<IArticleAggregateSelection>;
  ArticleAuthorAggregateInput: IArticleAuthorAggregateInput;
  ArticleAuthorConnectFieldInput: IArticleAuthorConnectFieldInput;
  ArticleAuthorConnectOrCreateFieldInput: IArticleAuthorConnectOrCreateFieldInput;
  ArticleAuthorConnectOrCreateFieldInputOnCreate: IArticleAuthorConnectOrCreateFieldInputOnCreate;
  ArticleAuthorConnection: ResolverTypeWrapper<IArticleAuthorConnection>;
  ArticleAuthorConnectionSort: IArticleAuthorConnectionSort;
  ArticleAuthorConnectionWhere: IArticleAuthorConnectionWhere;
  ArticleAuthorCreateFieldInput: IArticleAuthorCreateFieldInput;
  ArticleAuthorDeleteFieldInput: IArticleAuthorDeleteFieldInput;
  ArticleAuthorDisconnectFieldInput: IArticleAuthorDisconnectFieldInput;
  ArticleAuthorFieldInput: IArticleAuthorFieldInput;
  ArticleAuthorNodeAggregationWhereInput: IArticleAuthorNodeAggregationWhereInput;
  ArticleAuthorRelationship: ResolverTypeWrapper<IArticleAuthorRelationship>;
  ArticleAuthorUpdateConnectionInput: IArticleAuthorUpdateConnectionInput;
  ArticleAuthorUpdateFieldInput: IArticleAuthorUpdateFieldInput;
  ArticleCategoriesAggregateInput: IArticleCategoriesAggregateInput;
  ArticleCategoriesConnectFieldInput: IArticleCategoriesConnectFieldInput;
  ArticleCategoriesConnectOrCreateFieldInput: IArticleCategoriesConnectOrCreateFieldInput;
  ArticleCategoriesConnectOrCreateFieldInputOnCreate: IArticleCategoriesConnectOrCreateFieldInputOnCreate;
  ArticleCategoriesConnection: ResolverTypeWrapper<IArticleCategoriesConnection>;
  ArticleCategoriesConnectionSort: IArticleCategoriesConnectionSort;
  ArticleCategoriesConnectionWhere: IArticleCategoriesConnectionWhere;
  ArticleCategoriesCreateFieldInput: IArticleCategoriesCreateFieldInput;
  ArticleCategoriesDeleteFieldInput: IArticleCategoriesDeleteFieldInput;
  ArticleCategoriesDisconnectFieldInput: IArticleCategoriesDisconnectFieldInput;
  ArticleCategoriesFieldInput: IArticleCategoriesFieldInput;
  ArticleCategoriesNodeAggregationWhereInput: IArticleCategoriesNodeAggregationWhereInput;
  ArticleCategoriesRelationship: ResolverTypeWrapper<IArticleCategoriesRelationship>;
  ArticleCategoriesUpdateConnectionInput: IArticleCategoriesUpdateConnectionInput;
  ArticleCategoriesUpdateFieldInput: IArticleCategoriesUpdateFieldInput;
  ArticleCategoryCategoriesAggregationSelection: ResolverTypeWrapper<IArticleCategoryCategoriesAggregationSelection>;
  ArticleCategoryCategoriesNodeAggregateSelection: ResolverTypeWrapper<IArticleCategoryCategoriesNodeAggregateSelection>;
  ArticleConnectInput: IArticleConnectInput;
  ArticleConnectOrCreateInput: IArticleConnectOrCreateInput;
  ArticleConnectOrCreateWhere: IArticleConnectOrCreateWhere;
  ArticleConnectWhere: IArticleConnectWhere;
  ArticleCreateInput: IArticleCreateInput;
  ArticleDeleteInput: IArticleDeleteInput;
  ArticleDisconnectInput: IArticleDisconnectInput;
  ArticleOnCreateInput: IArticleOnCreateInput;
  ArticleOptions: IArticleOptions;
  ArticleRelationInput: IArticleRelationInput;
  ArticleSort: IArticleSort;
  ArticleTagTagsAggregationSelection: ResolverTypeWrapper<IArticleTagTagsAggregationSelection>;
  ArticleTagTagsNodeAggregateSelection: ResolverTypeWrapper<IArticleTagTagsNodeAggregateSelection>;
  ArticleTagsAggregateInput: IArticleTagsAggregateInput;
  ArticleTagsConnectFieldInput: IArticleTagsConnectFieldInput;
  ArticleTagsConnectOrCreateFieldInput: IArticleTagsConnectOrCreateFieldInput;
  ArticleTagsConnectOrCreateFieldInputOnCreate: IArticleTagsConnectOrCreateFieldInputOnCreate;
  ArticleTagsConnection: ResolverTypeWrapper<IArticleTagsConnection>;
  ArticleTagsConnectionSort: IArticleTagsConnectionSort;
  ArticleTagsConnectionWhere: IArticleTagsConnectionWhere;
  ArticleTagsCreateFieldInput: IArticleTagsCreateFieldInput;
  ArticleTagsDeleteFieldInput: IArticleTagsDeleteFieldInput;
  ArticleTagsDisconnectFieldInput: IArticleTagsDisconnectFieldInput;
  ArticleTagsFieldInput: IArticleTagsFieldInput;
  ArticleTagsNodeAggregationWhereInput: IArticleTagsNodeAggregationWhereInput;
  ArticleTagsRelationship: ResolverTypeWrapper<IArticleTagsRelationship>;
  ArticleTagsUpdateConnectionInput: IArticleTagsUpdateConnectionInput;
  ArticleTagsUpdateFieldInput: IArticleTagsUpdateFieldInput;
  ArticleUniqueWhere: IArticleUniqueWhere;
  ArticleUpdateInput: IArticleUpdateInput;
  ArticleUserAuthorAggregationSelection: ResolverTypeWrapper<IArticleUserAuthorAggregationSelection>;
  ArticleUserAuthorNodeAggregateSelection: ResolverTypeWrapper<IArticleUserAuthorNodeAggregateSelection>;
  ArticleWhere: IArticleWhere;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Category: ResolverTypeWrapper<ICategory>;
  CategoryAggregateSelection: ResolverTypeWrapper<ICategoryAggregateSelection>;
  CategoryArticleArticlesAggregationSelection: ResolverTypeWrapper<ICategoryArticleArticlesAggregationSelection>;
  CategoryArticleArticlesNodeAggregateSelection: ResolverTypeWrapper<ICategoryArticleArticlesNodeAggregateSelection>;
  CategoryArticlesAggregateInput: ICategoryArticlesAggregateInput;
  CategoryArticlesConnectFieldInput: ICategoryArticlesConnectFieldInput;
  CategoryArticlesConnectOrCreateFieldInput: ICategoryArticlesConnectOrCreateFieldInput;
  CategoryArticlesConnectOrCreateFieldInputOnCreate: ICategoryArticlesConnectOrCreateFieldInputOnCreate;
  CategoryArticlesConnection: ResolverTypeWrapper<ICategoryArticlesConnection>;
  CategoryArticlesConnectionSort: ICategoryArticlesConnectionSort;
  CategoryArticlesConnectionWhere: ICategoryArticlesConnectionWhere;
  CategoryArticlesCreateFieldInput: ICategoryArticlesCreateFieldInput;
  CategoryArticlesDeleteFieldInput: ICategoryArticlesDeleteFieldInput;
  CategoryArticlesDisconnectFieldInput: ICategoryArticlesDisconnectFieldInput;
  CategoryArticlesFieldInput: ICategoryArticlesFieldInput;
  CategoryArticlesNodeAggregationWhereInput: ICategoryArticlesNodeAggregationWhereInput;
  CategoryArticlesRelationship: ResolverTypeWrapper<ICategoryArticlesRelationship>;
  CategoryArticlesUpdateConnectionInput: ICategoryArticlesUpdateConnectionInput;
  CategoryArticlesUpdateFieldInput: ICategoryArticlesUpdateFieldInput;
  CategoryConnectInput: ICategoryConnectInput;
  CategoryConnectOrCreateInput: ICategoryConnectOrCreateInput;
  CategoryConnectOrCreateWhere: ICategoryConnectOrCreateWhere;
  CategoryConnectWhere: ICategoryConnectWhere;
  CategoryCreateInput: ICategoryCreateInput;
  CategoryDeleteInput: ICategoryDeleteInput;
  CategoryDisconnectInput: ICategoryDisconnectInput;
  CategoryOnCreateInput: ICategoryOnCreateInput;
  CategoryOptions: ICategoryOptions;
  CategoryRelationInput: ICategoryRelationInput;
  CategorySort: ICategorySort;
  CategoryUniqueWhere: ICategoryUniqueWhere;
  CategoryUpdateInput: ICategoryUpdateInput;
  CategoryWhere: ICategoryWhere;
  CreateArticlesMutationResponse: ResolverTypeWrapper<ICreateArticlesMutationResponse>;
  CreateCategoriesMutationResponse: ResolverTypeWrapper<ICreateCategoriesMutationResponse>;
  CreateInfo: ResolverTypeWrapper<ICreateInfo>;
  CreateTagsMutationResponse: ResolverTypeWrapper<ICreateTagsMutationResponse>;
  CreateUsersMutationResponse: ResolverTypeWrapper<ICreateUsersMutationResponse>;
  CredentialsInput: ICredentialsInput;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']>;
  DateTimeAggregateSelectionNonNullable: ResolverTypeWrapper<IDateTimeAggregateSelectionNonNullable>;
  DateTimeAggregateSelectionNullable: ResolverTypeWrapper<IDateTimeAggregateSelectionNullable>;
  DeleteInfo: ResolverTypeWrapper<IDeleteInfo>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  IDAggregateSelectionNonNullable: ResolverTypeWrapper<IIdAggregateSelectionNonNullable>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  LanguagesEnum: ILanguagesEnum;
  Mutation: ResolverTypeWrapper<{}>;
  PageInfo: ResolverTypeWrapper<IPageInfo>;
  Query: ResolverTypeWrapper<{}>;
  SortDirection: ISortDirection;
  String: ResolverTypeWrapper<Scalars['String']>;
  StringAggregateSelectionNonNullable: ResolverTypeWrapper<IStringAggregateSelectionNonNullable>;
  StringAggregateSelectionNullable: ResolverTypeWrapper<IStringAggregateSelectionNullable>;
  Tag: ResolverTypeWrapper<ITag>;
  TagAggregateSelection: ResolverTypeWrapper<ITagAggregateSelection>;
  TagArticleArticlesAggregationSelection: ResolverTypeWrapper<ITagArticleArticlesAggregationSelection>;
  TagArticleArticlesNodeAggregateSelection: ResolverTypeWrapper<ITagArticleArticlesNodeAggregateSelection>;
  TagArticlesAggregateInput: ITagArticlesAggregateInput;
  TagArticlesConnectFieldInput: ITagArticlesConnectFieldInput;
  TagArticlesConnectOrCreateFieldInput: ITagArticlesConnectOrCreateFieldInput;
  TagArticlesConnectOrCreateFieldInputOnCreate: ITagArticlesConnectOrCreateFieldInputOnCreate;
  TagArticlesConnection: ResolverTypeWrapper<ITagArticlesConnection>;
  TagArticlesConnectionSort: ITagArticlesConnectionSort;
  TagArticlesConnectionWhere: ITagArticlesConnectionWhere;
  TagArticlesCreateFieldInput: ITagArticlesCreateFieldInput;
  TagArticlesDeleteFieldInput: ITagArticlesDeleteFieldInput;
  TagArticlesDisconnectFieldInput: ITagArticlesDisconnectFieldInput;
  TagArticlesFieldInput: ITagArticlesFieldInput;
  TagArticlesNodeAggregationWhereInput: ITagArticlesNodeAggregationWhereInput;
  TagArticlesRelationship: ResolverTypeWrapper<ITagArticlesRelationship>;
  TagArticlesUpdateConnectionInput: ITagArticlesUpdateConnectionInput;
  TagArticlesUpdateFieldInput: ITagArticlesUpdateFieldInput;
  TagConnectInput: ITagConnectInput;
  TagConnectOrCreateInput: ITagConnectOrCreateInput;
  TagConnectOrCreateWhere: ITagConnectOrCreateWhere;
  TagConnectWhere: ITagConnectWhere;
  TagCreateInput: ITagCreateInput;
  TagDeleteInput: ITagDeleteInput;
  TagDisconnectInput: ITagDisconnectInput;
  TagOnCreateInput: ITagOnCreateInput;
  TagOptions: ITagOptions;
  TagRelationInput: ITagRelationInput;
  TagSort: ITagSort;
  TagUniqueWhere: ITagUniqueWhere;
  TagUpdateInput: ITagUpdateInput;
  TagWhere: ITagWhere;
  Tokens: ResolverTypeWrapper<ITokens>;
  UpdateArticlesMutationResponse: ResolverTypeWrapper<IUpdateArticlesMutationResponse>;
  UpdateCategoriesMutationResponse: ResolverTypeWrapper<IUpdateCategoriesMutationResponse>;
  UpdateInfo: ResolverTypeWrapper<IUpdateInfo>;
  UpdateTagsMutationResponse: ResolverTypeWrapper<IUpdateTagsMutationResponse>;
  UpdateUsersMutationResponse: ResolverTypeWrapper<IUpdateUsersMutationResponse>;
  User: ResolverTypeWrapper<IUser>;
  UserAggregateSelection: ResolverTypeWrapper<IUserAggregateSelection>;
  UserArticleWroteArticlesAggregationSelection: ResolverTypeWrapper<IUserArticleWroteArticlesAggregationSelection>;
  UserArticleWroteArticlesNodeAggregateSelection: ResolverTypeWrapper<IUserArticleWroteArticlesNodeAggregateSelection>;
  UserConnectInput: IUserConnectInput;
  UserConnectOrCreateInput: IUserConnectOrCreateInput;
  UserConnectOrCreateWhere: IUserConnectOrCreateWhere;
  UserConnectWhere: IUserConnectWhere;
  UserCreateInput: IUserCreateInput;
  UserDeleteInput: IUserDeleteInput;
  UserDisconnectInput: IUserDisconnectInput;
  UserOnCreateInput: IUserOnCreateInput;
  UserOptions: IUserOptions;
  UserRelationInput: IUserRelationInput;
  UserSort: IUserSort;
  UserUniqueWhere: IUserUniqueWhere;
  UserUpdateInput: IUserUpdateInput;
  UserWhere: IUserWhere;
  UserWroteArticlesAggregateInput: IUserWroteArticlesAggregateInput;
  UserWroteArticlesConnectFieldInput: IUserWroteArticlesConnectFieldInput;
  UserWroteArticlesConnectOrCreateFieldInput: IUserWroteArticlesConnectOrCreateFieldInput;
  UserWroteArticlesConnectOrCreateFieldInputOnCreate: IUserWroteArticlesConnectOrCreateFieldInputOnCreate;
  UserWroteArticlesConnection: ResolverTypeWrapper<IUserWroteArticlesConnection>;
  UserWroteArticlesConnectionSort: IUserWroteArticlesConnectionSort;
  UserWroteArticlesConnectionWhere: IUserWroteArticlesConnectionWhere;
  UserWroteArticlesCreateFieldInput: IUserWroteArticlesCreateFieldInput;
  UserWroteArticlesDeleteFieldInput: IUserWroteArticlesDeleteFieldInput;
  UserWroteArticlesDisconnectFieldInput: IUserWroteArticlesDisconnectFieldInput;
  UserWroteArticlesFieldInput: IUserWroteArticlesFieldInput;
  UserWroteArticlesNodeAggregationWhereInput: IUserWroteArticlesNodeAggregationWhereInput;
  UserWroteArticlesRelationship: ResolverTypeWrapper<IUserWroteArticlesRelationship>;
  UserWroteArticlesUpdateConnectionInput: IUserWroteArticlesUpdateConnectionInput;
  UserWroteArticlesUpdateFieldInput: IUserWroteArticlesUpdateFieldInput;
};

/** Mapping between all available schema types and the resolvers parents */
export type IResolversParentTypes = {
  Article: IArticle;
  ArticleAggregateSelection: IArticleAggregateSelection;
  ArticleAuthorAggregateInput: IArticleAuthorAggregateInput;
  ArticleAuthorConnectFieldInput: IArticleAuthorConnectFieldInput;
  ArticleAuthorConnectOrCreateFieldInput: IArticleAuthorConnectOrCreateFieldInput;
  ArticleAuthorConnectOrCreateFieldInputOnCreate: IArticleAuthorConnectOrCreateFieldInputOnCreate;
  ArticleAuthorConnection: IArticleAuthorConnection;
  ArticleAuthorConnectionSort: IArticleAuthorConnectionSort;
  ArticleAuthorConnectionWhere: IArticleAuthorConnectionWhere;
  ArticleAuthorCreateFieldInput: IArticleAuthorCreateFieldInput;
  ArticleAuthorDeleteFieldInput: IArticleAuthorDeleteFieldInput;
  ArticleAuthorDisconnectFieldInput: IArticleAuthorDisconnectFieldInput;
  ArticleAuthorFieldInput: IArticleAuthorFieldInput;
  ArticleAuthorNodeAggregationWhereInput: IArticleAuthorNodeAggregationWhereInput;
  ArticleAuthorRelationship: IArticleAuthorRelationship;
  ArticleAuthorUpdateConnectionInput: IArticleAuthorUpdateConnectionInput;
  ArticleAuthorUpdateFieldInput: IArticleAuthorUpdateFieldInput;
  ArticleCategoriesAggregateInput: IArticleCategoriesAggregateInput;
  ArticleCategoriesConnectFieldInput: IArticleCategoriesConnectFieldInput;
  ArticleCategoriesConnectOrCreateFieldInput: IArticleCategoriesConnectOrCreateFieldInput;
  ArticleCategoriesConnectOrCreateFieldInputOnCreate: IArticleCategoriesConnectOrCreateFieldInputOnCreate;
  ArticleCategoriesConnection: IArticleCategoriesConnection;
  ArticleCategoriesConnectionSort: IArticleCategoriesConnectionSort;
  ArticleCategoriesConnectionWhere: IArticleCategoriesConnectionWhere;
  ArticleCategoriesCreateFieldInput: IArticleCategoriesCreateFieldInput;
  ArticleCategoriesDeleteFieldInput: IArticleCategoriesDeleteFieldInput;
  ArticleCategoriesDisconnectFieldInput: IArticleCategoriesDisconnectFieldInput;
  ArticleCategoriesFieldInput: IArticleCategoriesFieldInput;
  ArticleCategoriesNodeAggregationWhereInput: IArticleCategoriesNodeAggregationWhereInput;
  ArticleCategoriesRelationship: IArticleCategoriesRelationship;
  ArticleCategoriesUpdateConnectionInput: IArticleCategoriesUpdateConnectionInput;
  ArticleCategoriesUpdateFieldInput: IArticleCategoriesUpdateFieldInput;
  ArticleCategoryCategoriesAggregationSelection: IArticleCategoryCategoriesAggregationSelection;
  ArticleCategoryCategoriesNodeAggregateSelection: IArticleCategoryCategoriesNodeAggregateSelection;
  ArticleConnectInput: IArticleConnectInput;
  ArticleConnectOrCreateInput: IArticleConnectOrCreateInput;
  ArticleConnectOrCreateWhere: IArticleConnectOrCreateWhere;
  ArticleConnectWhere: IArticleConnectWhere;
  ArticleCreateInput: IArticleCreateInput;
  ArticleDeleteInput: IArticleDeleteInput;
  ArticleDisconnectInput: IArticleDisconnectInput;
  ArticleOnCreateInput: IArticleOnCreateInput;
  ArticleOptions: IArticleOptions;
  ArticleRelationInput: IArticleRelationInput;
  ArticleSort: IArticleSort;
  ArticleTagTagsAggregationSelection: IArticleTagTagsAggregationSelection;
  ArticleTagTagsNodeAggregateSelection: IArticleTagTagsNodeAggregateSelection;
  ArticleTagsAggregateInput: IArticleTagsAggregateInput;
  ArticleTagsConnectFieldInput: IArticleTagsConnectFieldInput;
  ArticleTagsConnectOrCreateFieldInput: IArticleTagsConnectOrCreateFieldInput;
  ArticleTagsConnectOrCreateFieldInputOnCreate: IArticleTagsConnectOrCreateFieldInputOnCreate;
  ArticleTagsConnection: IArticleTagsConnection;
  ArticleTagsConnectionSort: IArticleTagsConnectionSort;
  ArticleTagsConnectionWhere: IArticleTagsConnectionWhere;
  ArticleTagsCreateFieldInput: IArticleTagsCreateFieldInput;
  ArticleTagsDeleteFieldInput: IArticleTagsDeleteFieldInput;
  ArticleTagsDisconnectFieldInput: IArticleTagsDisconnectFieldInput;
  ArticleTagsFieldInput: IArticleTagsFieldInput;
  ArticleTagsNodeAggregationWhereInput: IArticleTagsNodeAggregationWhereInput;
  ArticleTagsRelationship: IArticleTagsRelationship;
  ArticleTagsUpdateConnectionInput: IArticleTagsUpdateConnectionInput;
  ArticleTagsUpdateFieldInput: IArticleTagsUpdateFieldInput;
  ArticleUniqueWhere: IArticleUniqueWhere;
  ArticleUpdateInput: IArticleUpdateInput;
  ArticleUserAuthorAggregationSelection: IArticleUserAuthorAggregationSelection;
  ArticleUserAuthorNodeAggregateSelection: IArticleUserAuthorNodeAggregateSelection;
  ArticleWhere: IArticleWhere;
  Boolean: Scalars['Boolean'];
  Category: ICategory;
  CategoryAggregateSelection: ICategoryAggregateSelection;
  CategoryArticleArticlesAggregationSelection: ICategoryArticleArticlesAggregationSelection;
  CategoryArticleArticlesNodeAggregateSelection: ICategoryArticleArticlesNodeAggregateSelection;
  CategoryArticlesAggregateInput: ICategoryArticlesAggregateInput;
  CategoryArticlesConnectFieldInput: ICategoryArticlesConnectFieldInput;
  CategoryArticlesConnectOrCreateFieldInput: ICategoryArticlesConnectOrCreateFieldInput;
  CategoryArticlesConnectOrCreateFieldInputOnCreate: ICategoryArticlesConnectOrCreateFieldInputOnCreate;
  CategoryArticlesConnection: ICategoryArticlesConnection;
  CategoryArticlesConnectionSort: ICategoryArticlesConnectionSort;
  CategoryArticlesConnectionWhere: ICategoryArticlesConnectionWhere;
  CategoryArticlesCreateFieldInput: ICategoryArticlesCreateFieldInput;
  CategoryArticlesDeleteFieldInput: ICategoryArticlesDeleteFieldInput;
  CategoryArticlesDisconnectFieldInput: ICategoryArticlesDisconnectFieldInput;
  CategoryArticlesFieldInput: ICategoryArticlesFieldInput;
  CategoryArticlesNodeAggregationWhereInput: ICategoryArticlesNodeAggregationWhereInput;
  CategoryArticlesRelationship: ICategoryArticlesRelationship;
  CategoryArticlesUpdateConnectionInput: ICategoryArticlesUpdateConnectionInput;
  CategoryArticlesUpdateFieldInput: ICategoryArticlesUpdateFieldInput;
  CategoryConnectInput: ICategoryConnectInput;
  CategoryConnectOrCreateInput: ICategoryConnectOrCreateInput;
  CategoryConnectOrCreateWhere: ICategoryConnectOrCreateWhere;
  CategoryConnectWhere: ICategoryConnectWhere;
  CategoryCreateInput: ICategoryCreateInput;
  CategoryDeleteInput: ICategoryDeleteInput;
  CategoryDisconnectInput: ICategoryDisconnectInput;
  CategoryOnCreateInput: ICategoryOnCreateInput;
  CategoryOptions: ICategoryOptions;
  CategoryRelationInput: ICategoryRelationInput;
  CategorySort: ICategorySort;
  CategoryUniqueWhere: ICategoryUniqueWhere;
  CategoryUpdateInput: ICategoryUpdateInput;
  CategoryWhere: ICategoryWhere;
  CreateArticlesMutationResponse: ICreateArticlesMutationResponse;
  CreateCategoriesMutationResponse: ICreateCategoriesMutationResponse;
  CreateInfo: ICreateInfo;
  CreateTagsMutationResponse: ICreateTagsMutationResponse;
  CreateUsersMutationResponse: ICreateUsersMutationResponse;
  CredentialsInput: ICredentialsInput;
  DateTime: Scalars['DateTime'];
  DateTimeAggregateSelectionNonNullable: IDateTimeAggregateSelectionNonNullable;
  DateTimeAggregateSelectionNullable: IDateTimeAggregateSelectionNullable;
  DeleteInfo: IDeleteInfo;
  Float: Scalars['Float'];
  ID: Scalars['ID'];
  IDAggregateSelectionNonNullable: IIdAggregateSelectionNonNullable;
  Int: Scalars['Int'];
  Mutation: {};
  PageInfo: IPageInfo;
  Query: {};
  String: Scalars['String'];
  StringAggregateSelectionNonNullable: IStringAggregateSelectionNonNullable;
  StringAggregateSelectionNullable: IStringAggregateSelectionNullable;
  Tag: ITag;
  TagAggregateSelection: ITagAggregateSelection;
  TagArticleArticlesAggregationSelection: ITagArticleArticlesAggregationSelection;
  TagArticleArticlesNodeAggregateSelection: ITagArticleArticlesNodeAggregateSelection;
  TagArticlesAggregateInput: ITagArticlesAggregateInput;
  TagArticlesConnectFieldInput: ITagArticlesConnectFieldInput;
  TagArticlesConnectOrCreateFieldInput: ITagArticlesConnectOrCreateFieldInput;
  TagArticlesConnectOrCreateFieldInputOnCreate: ITagArticlesConnectOrCreateFieldInputOnCreate;
  TagArticlesConnection: ITagArticlesConnection;
  TagArticlesConnectionSort: ITagArticlesConnectionSort;
  TagArticlesConnectionWhere: ITagArticlesConnectionWhere;
  TagArticlesCreateFieldInput: ITagArticlesCreateFieldInput;
  TagArticlesDeleteFieldInput: ITagArticlesDeleteFieldInput;
  TagArticlesDisconnectFieldInput: ITagArticlesDisconnectFieldInput;
  TagArticlesFieldInput: ITagArticlesFieldInput;
  TagArticlesNodeAggregationWhereInput: ITagArticlesNodeAggregationWhereInput;
  TagArticlesRelationship: ITagArticlesRelationship;
  TagArticlesUpdateConnectionInput: ITagArticlesUpdateConnectionInput;
  TagArticlesUpdateFieldInput: ITagArticlesUpdateFieldInput;
  TagConnectInput: ITagConnectInput;
  TagConnectOrCreateInput: ITagConnectOrCreateInput;
  TagConnectOrCreateWhere: ITagConnectOrCreateWhere;
  TagConnectWhere: ITagConnectWhere;
  TagCreateInput: ITagCreateInput;
  TagDeleteInput: ITagDeleteInput;
  TagDisconnectInput: ITagDisconnectInput;
  TagOnCreateInput: ITagOnCreateInput;
  TagOptions: ITagOptions;
  TagRelationInput: ITagRelationInput;
  TagSort: ITagSort;
  TagUniqueWhere: ITagUniqueWhere;
  TagUpdateInput: ITagUpdateInput;
  TagWhere: ITagWhere;
  Tokens: ITokens;
  UpdateArticlesMutationResponse: IUpdateArticlesMutationResponse;
  UpdateCategoriesMutationResponse: IUpdateCategoriesMutationResponse;
  UpdateInfo: IUpdateInfo;
  UpdateTagsMutationResponse: IUpdateTagsMutationResponse;
  UpdateUsersMutationResponse: IUpdateUsersMutationResponse;
  User: IUser;
  UserAggregateSelection: IUserAggregateSelection;
  UserArticleWroteArticlesAggregationSelection: IUserArticleWroteArticlesAggregationSelection;
  UserArticleWroteArticlesNodeAggregateSelection: IUserArticleWroteArticlesNodeAggregateSelection;
  UserConnectInput: IUserConnectInput;
  UserConnectOrCreateInput: IUserConnectOrCreateInput;
  UserConnectOrCreateWhere: IUserConnectOrCreateWhere;
  UserConnectWhere: IUserConnectWhere;
  UserCreateInput: IUserCreateInput;
  UserDeleteInput: IUserDeleteInput;
  UserDisconnectInput: IUserDisconnectInput;
  UserOnCreateInput: IUserOnCreateInput;
  UserOptions: IUserOptions;
  UserRelationInput: IUserRelationInput;
  UserSort: IUserSort;
  UserUniqueWhere: IUserUniqueWhere;
  UserUpdateInput: IUserUpdateInput;
  UserWhere: IUserWhere;
  UserWroteArticlesAggregateInput: IUserWroteArticlesAggregateInput;
  UserWroteArticlesConnectFieldInput: IUserWroteArticlesConnectFieldInput;
  UserWroteArticlesConnectOrCreateFieldInput: IUserWroteArticlesConnectOrCreateFieldInput;
  UserWroteArticlesConnectOrCreateFieldInputOnCreate: IUserWroteArticlesConnectOrCreateFieldInputOnCreate;
  UserWroteArticlesConnection: IUserWroteArticlesConnection;
  UserWroteArticlesConnectionSort: IUserWroteArticlesConnectionSort;
  UserWroteArticlesConnectionWhere: IUserWroteArticlesConnectionWhere;
  UserWroteArticlesCreateFieldInput: IUserWroteArticlesCreateFieldInput;
  UserWroteArticlesDeleteFieldInput: IUserWroteArticlesDeleteFieldInput;
  UserWroteArticlesDisconnectFieldInput: IUserWroteArticlesDisconnectFieldInput;
  UserWroteArticlesFieldInput: IUserWroteArticlesFieldInput;
  UserWroteArticlesNodeAggregationWhereInput: IUserWroteArticlesNodeAggregationWhereInput;
  UserWroteArticlesRelationship: IUserWroteArticlesRelationship;
  UserWroteArticlesUpdateConnectionInput: IUserWroteArticlesUpdateConnectionInput;
  UserWroteArticlesUpdateFieldInput: IUserWroteArticlesUpdateFieldInput;
};

export type IArticleResolvers<ContextType = any, ParentType extends IResolversParentTypes['Article'] = IResolversParentTypes['Article']> = {
  author?: Resolver<IResolversTypes['User'], ParentType, ContextType, RequireFields<IArticleAuthorArgs, 'directed'>>;
  authorAggregate?: Resolver<Maybe<IResolversTypes['ArticleUserAuthorAggregationSelection']>, ParentType, ContextType, RequireFields<IArticleAuthorAggregateArgs, 'directed'>>;
  authorConnection?: Resolver<IResolversTypes['ArticleAuthorConnection'], ParentType, ContextType, RequireFields<IArticleAuthorConnectionArgs, 'directed'>>;
  categories?: Resolver<Array<IResolversTypes['Category']>, ParentType, ContextType, RequireFields<IArticleCategoriesArgs, 'directed'>>;
  categoriesAggregate?: Resolver<Maybe<IResolversTypes['ArticleCategoryCategoriesAggregationSelection']>, ParentType, ContextType, RequireFields<IArticleCategoriesAggregateArgs, 'directed'>>;
  categoriesConnection?: Resolver<IResolversTypes['ArticleCategoriesConnection'], ParentType, ContextType, RequireFields<IArticleCategoriesConnectionArgs, 'directed'>>;
  content?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<IResolversTypes['DateTime'], ParentType, ContextType>;
  header?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<IResolversTypes['ID'], ParentType, ContextType>;
  isPublished?: Resolver<IResolversTypes['Boolean'], ParentType, ContextType>;
  language?: Resolver<IResolversTypes['LanguagesEnum'], ParentType, ContextType>;
  publishedAt?: Resolver<IResolversTypes['DateTime'], ParentType, ContextType>;
  subheader?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  tags?: Resolver<Array<IResolversTypes['Tag']>, ParentType, ContextType, RequireFields<IArticleTagsArgs, 'directed'>>;
  tagsAggregate?: Resolver<Maybe<IResolversTypes['ArticleTagTagsAggregationSelection']>, ParentType, ContextType, RequireFields<IArticleTagsAggregateArgs, 'directed'>>;
  tagsConnection?: Resolver<IResolversTypes['ArticleTagsConnection'], ParentType, ContextType, RequireFields<IArticleTagsConnectionArgs, 'directed'>>;
  updatedAt?: Resolver<IResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IArticleAggregateSelectionResolvers<ContextType = any, ParentType extends IResolversParentTypes['ArticleAggregateSelection'] = IResolversParentTypes['ArticleAggregateSelection']> = {
  content?: Resolver<IResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  count?: Resolver<IResolversTypes['Int'], ParentType, ContextType>;
  createdAt?: Resolver<IResolversTypes['DateTimeAggregateSelectionNonNullable'], ParentType, ContextType>;
  header?: Resolver<IResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  id?: Resolver<IResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  publishedAt?: Resolver<IResolversTypes['DateTimeAggregateSelectionNonNullable'], ParentType, ContextType>;
  subheader?: Resolver<IResolversTypes['StringAggregateSelectionNullable'], ParentType, ContextType>;
  updatedAt?: Resolver<IResolversTypes['DateTimeAggregateSelectionNonNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IArticleAuthorConnectionResolvers<ContextType = any, ParentType extends IResolversParentTypes['ArticleAuthorConnection'] = IResolversParentTypes['ArticleAuthorConnection']> = {
  edges?: Resolver<Array<IResolversTypes['ArticleAuthorRelationship']>, ParentType, ContextType>;
  pageInfo?: Resolver<IResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<IResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IArticleAuthorRelationshipResolvers<ContextType = any, ParentType extends IResolversParentTypes['ArticleAuthorRelationship'] = IResolversParentTypes['ArticleAuthorRelationship']> = {
  cursor?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<IResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IArticleCategoriesConnectionResolvers<ContextType = any, ParentType extends IResolversParentTypes['ArticleCategoriesConnection'] = IResolversParentTypes['ArticleCategoriesConnection']> = {
  edges?: Resolver<Array<IResolversTypes['ArticleCategoriesRelationship']>, ParentType, ContextType>;
  pageInfo?: Resolver<IResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<IResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IArticleCategoriesRelationshipResolvers<ContextType = any, ParentType extends IResolversParentTypes['ArticleCategoriesRelationship'] = IResolversParentTypes['ArticleCategoriesRelationship']> = {
  cursor?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<IResolversTypes['Category'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IArticleCategoryCategoriesAggregationSelectionResolvers<ContextType = any, ParentType extends IResolversParentTypes['ArticleCategoryCategoriesAggregationSelection'] = IResolversParentTypes['ArticleCategoryCategoriesAggregationSelection']> = {
  count?: Resolver<IResolversTypes['Int'], ParentType, ContextType>;
  node?: Resolver<Maybe<IResolversTypes['ArticleCategoryCategoriesNodeAggregateSelection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IArticleCategoryCategoriesNodeAggregateSelectionResolvers<ContextType = any, ParentType extends IResolversParentTypes['ArticleCategoryCategoriesNodeAggregateSelection'] = IResolversParentTypes['ArticleCategoryCategoriesNodeAggregateSelection']> = {
  createdAt?: Resolver<IResolversTypes['DateTimeAggregateSelectionNonNullable'], ParentType, ContextType>;
  id?: Resolver<IResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  name?: Resolver<IResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  updatedAt?: Resolver<IResolversTypes['DateTimeAggregateSelectionNonNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IArticleTagTagsAggregationSelectionResolvers<ContextType = any, ParentType extends IResolversParentTypes['ArticleTagTagsAggregationSelection'] = IResolversParentTypes['ArticleTagTagsAggregationSelection']> = {
  count?: Resolver<IResolversTypes['Int'], ParentType, ContextType>;
  node?: Resolver<Maybe<IResolversTypes['ArticleTagTagsNodeAggregateSelection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IArticleTagTagsNodeAggregateSelectionResolvers<ContextType = any, ParentType extends IResolversParentTypes['ArticleTagTagsNodeAggregateSelection'] = IResolversParentTypes['ArticleTagTagsNodeAggregateSelection']> = {
  createdAt?: Resolver<IResolversTypes['DateTimeAggregateSelectionNonNullable'], ParentType, ContextType>;
  id?: Resolver<IResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  name?: Resolver<IResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  updatedAt?: Resolver<IResolversTypes['DateTimeAggregateSelectionNonNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IArticleTagsConnectionResolvers<ContextType = any, ParentType extends IResolversParentTypes['ArticleTagsConnection'] = IResolversParentTypes['ArticleTagsConnection']> = {
  edges?: Resolver<Array<IResolversTypes['ArticleTagsRelationship']>, ParentType, ContextType>;
  pageInfo?: Resolver<IResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<IResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IArticleTagsRelationshipResolvers<ContextType = any, ParentType extends IResolversParentTypes['ArticleTagsRelationship'] = IResolversParentTypes['ArticleTagsRelationship']> = {
  cursor?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<IResolversTypes['Tag'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IArticleUserAuthorAggregationSelectionResolvers<ContextType = any, ParentType extends IResolversParentTypes['ArticleUserAuthorAggregationSelection'] = IResolversParentTypes['ArticleUserAuthorAggregationSelection']> = {
  count?: Resolver<IResolversTypes['Int'], ParentType, ContextType>;
  node?: Resolver<Maybe<IResolversTypes['ArticleUserAuthorNodeAggregateSelection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IArticleUserAuthorNodeAggregateSelectionResolvers<ContextType = any, ParentType extends IResolversParentTypes['ArticleUserAuthorNodeAggregateSelection'] = IResolversParentTypes['ArticleUserAuthorNodeAggregateSelection']> = {
  createdAt?: Resolver<IResolversTypes['DateTimeAggregateSelectionNonNullable'], ParentType, ContextType>;
  email?: Resolver<IResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  id?: Resolver<IResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  ip?: Resolver<IResolversTypes['StringAggregateSelectionNullable'], ParentType, ContextType>;
  lastLoggedAt?: Resolver<IResolversTypes['DateTimeAggregateSelectionNullable'], ParentType, ContextType>;
  phone?: Resolver<IResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  updatedAt?: Resolver<IResolversTypes['DateTimeAggregateSelectionNonNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ICategoryResolvers<ContextType = any, ParentType extends IResolversParentTypes['Category'] = IResolversParentTypes['Category']> = {
  articles?: Resolver<Array<IResolversTypes['Article']>, ParentType, ContextType, RequireFields<ICategoryArticlesArgs, 'directed'>>;
  articlesAggregate?: Resolver<Maybe<IResolversTypes['CategoryArticleArticlesAggregationSelection']>, ParentType, ContextType, RequireFields<ICategoryArticlesAggregateArgs, 'directed'>>;
  articlesConnection?: Resolver<IResolversTypes['CategoryArticlesConnection'], ParentType, ContextType, RequireFields<ICategoryArticlesConnectionArgs, 'directed'>>;
  createdAt?: Resolver<IResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<IResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<IResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ICategoryAggregateSelectionResolvers<ContextType = any, ParentType extends IResolversParentTypes['CategoryAggregateSelection'] = IResolversParentTypes['CategoryAggregateSelection']> = {
  count?: Resolver<IResolversTypes['Int'], ParentType, ContextType>;
  createdAt?: Resolver<IResolversTypes['DateTimeAggregateSelectionNonNullable'], ParentType, ContextType>;
  id?: Resolver<IResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  name?: Resolver<IResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  updatedAt?: Resolver<IResolversTypes['DateTimeAggregateSelectionNonNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ICategoryArticleArticlesAggregationSelectionResolvers<ContextType = any, ParentType extends IResolversParentTypes['CategoryArticleArticlesAggregationSelection'] = IResolversParentTypes['CategoryArticleArticlesAggregationSelection']> = {
  count?: Resolver<IResolversTypes['Int'], ParentType, ContextType>;
  node?: Resolver<Maybe<IResolversTypes['CategoryArticleArticlesNodeAggregateSelection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ICategoryArticleArticlesNodeAggregateSelectionResolvers<ContextType = any, ParentType extends IResolversParentTypes['CategoryArticleArticlesNodeAggregateSelection'] = IResolversParentTypes['CategoryArticleArticlesNodeAggregateSelection']> = {
  content?: Resolver<IResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  createdAt?: Resolver<IResolversTypes['DateTimeAggregateSelectionNonNullable'], ParentType, ContextType>;
  header?: Resolver<IResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  id?: Resolver<IResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  publishedAt?: Resolver<IResolversTypes['DateTimeAggregateSelectionNonNullable'], ParentType, ContextType>;
  subheader?: Resolver<IResolversTypes['StringAggregateSelectionNullable'], ParentType, ContextType>;
  updatedAt?: Resolver<IResolversTypes['DateTimeAggregateSelectionNonNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ICategoryArticlesConnectionResolvers<ContextType = any, ParentType extends IResolversParentTypes['CategoryArticlesConnection'] = IResolversParentTypes['CategoryArticlesConnection']> = {
  edges?: Resolver<Array<IResolversTypes['CategoryArticlesRelationship']>, ParentType, ContextType>;
  pageInfo?: Resolver<IResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<IResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ICategoryArticlesRelationshipResolvers<ContextType = any, ParentType extends IResolversParentTypes['CategoryArticlesRelationship'] = IResolversParentTypes['CategoryArticlesRelationship']> = {
  cursor?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<IResolversTypes['Article'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ICreateArticlesMutationResponseResolvers<ContextType = any, ParentType extends IResolversParentTypes['CreateArticlesMutationResponse'] = IResolversParentTypes['CreateArticlesMutationResponse']> = {
  articles?: Resolver<Array<IResolversTypes['Article']>, ParentType, ContextType>;
  info?: Resolver<IResolversTypes['CreateInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ICreateCategoriesMutationResponseResolvers<ContextType = any, ParentType extends IResolversParentTypes['CreateCategoriesMutationResponse'] = IResolversParentTypes['CreateCategoriesMutationResponse']> = {
  categories?: Resolver<Array<IResolversTypes['Category']>, ParentType, ContextType>;
  info?: Resolver<IResolversTypes['CreateInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ICreateInfoResolvers<ContextType = any, ParentType extends IResolversParentTypes['CreateInfo'] = IResolversParentTypes['CreateInfo']> = {
  bookmark?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  nodesCreated?: Resolver<IResolversTypes['Int'], ParentType, ContextType>;
  relationshipsCreated?: Resolver<IResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ICreateTagsMutationResponseResolvers<ContextType = any, ParentType extends IResolversParentTypes['CreateTagsMutationResponse'] = IResolversParentTypes['CreateTagsMutationResponse']> = {
  info?: Resolver<IResolversTypes['CreateInfo'], ParentType, ContextType>;
  tags?: Resolver<Array<IResolversTypes['Tag']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ICreateUsersMutationResponseResolvers<ContextType = any, ParentType extends IResolversParentTypes['CreateUsersMutationResponse'] = IResolversParentTypes['CreateUsersMutationResponse']> = {
  info?: Resolver<IResolversTypes['CreateInfo'], ParentType, ContextType>;
  users?: Resolver<Array<IResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface IDateTimeScalarConfig extends GraphQLScalarTypeConfig<IResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type IDateTimeAggregateSelectionNonNullableResolvers<ContextType = any, ParentType extends IResolversParentTypes['DateTimeAggregateSelectionNonNullable'] = IResolversParentTypes['DateTimeAggregateSelectionNonNullable']> = {
  max?: Resolver<IResolversTypes['DateTime'], ParentType, ContextType>;
  min?: Resolver<IResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IDateTimeAggregateSelectionNullableResolvers<ContextType = any, ParentType extends IResolversParentTypes['DateTimeAggregateSelectionNullable'] = IResolversParentTypes['DateTimeAggregateSelectionNullable']> = {
  max?: Resolver<Maybe<IResolversTypes['DateTime']>, ParentType, ContextType>;
  min?: Resolver<Maybe<IResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IDeleteInfoResolvers<ContextType = any, ParentType extends IResolversParentTypes['DeleteInfo'] = IResolversParentTypes['DeleteInfo']> = {
  bookmark?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  nodesDeleted?: Resolver<IResolversTypes['Int'], ParentType, ContextType>;
  relationshipsDeleted?: Resolver<IResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IIdAggregateSelectionNonNullableResolvers<ContextType = any, ParentType extends IResolversParentTypes['IDAggregateSelectionNonNullable'] = IResolversParentTypes['IDAggregateSelectionNonNullable']> = {
  longest?: Resolver<IResolversTypes['ID'], ParentType, ContextType>;
  shortest?: Resolver<IResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IMutationResolvers<ContextType = any, ParentType extends IResolversParentTypes['Mutation'] = IResolversParentTypes['Mutation']> = {
  createArticles?: Resolver<IResolversTypes['CreateArticlesMutationResponse'], ParentType, ContextType, RequireFields<IMutationCreateArticlesArgs, 'input'>>;
  createCategories?: Resolver<IResolversTypes['CreateCategoriesMutationResponse'], ParentType, ContextType, RequireFields<IMutationCreateCategoriesArgs, 'input'>>;
  createTags?: Resolver<IResolversTypes['CreateTagsMutationResponse'], ParentType, ContextType, RequireFields<IMutationCreateTagsArgs, 'input'>>;
  createUsers?: Resolver<IResolversTypes['CreateUsersMutationResponse'], ParentType, ContextType, RequireFields<IMutationCreateUsersArgs, 'input'>>;
  deleteArticles?: Resolver<IResolversTypes['DeleteInfo'], ParentType, ContextType, Partial<IMutationDeleteArticlesArgs>>;
  deleteCategories?: Resolver<IResolversTypes['DeleteInfo'], ParentType, ContextType, Partial<IMutationDeleteCategoriesArgs>>;
  deleteTags?: Resolver<IResolversTypes['DeleteInfo'], ParentType, ContextType, Partial<IMutationDeleteTagsArgs>>;
  deleteUsers?: Resolver<IResolversTypes['DeleteInfo'], ParentType, ContextType, Partial<IMutationDeleteUsersArgs>>;
  loginUser?: Resolver<Maybe<IResolversTypes['Tokens']>, ParentType, ContextType, RequireFields<IMutationLoginUserArgs, 'input'>>;
  refreshTokens?: Resolver<Maybe<IResolversTypes['Tokens']>, ParentType, ContextType, RequireFields<IMutationRefreshTokensArgs, 'refreshToken'>>;
  updateArticles?: Resolver<IResolversTypes['UpdateArticlesMutationResponse'], ParentType, ContextType, Partial<IMutationUpdateArticlesArgs>>;
  updateCategories?: Resolver<IResolversTypes['UpdateCategoriesMutationResponse'], ParentType, ContextType, Partial<IMutationUpdateCategoriesArgs>>;
  updateTags?: Resolver<IResolversTypes['UpdateTagsMutationResponse'], ParentType, ContextType, Partial<IMutationUpdateTagsArgs>>;
  updateUsers?: Resolver<IResolversTypes['UpdateUsersMutationResponse'], ParentType, ContextType, Partial<IMutationUpdateUsersArgs>>;
};

export type IPageInfoResolvers<ContextType = any, ParentType extends IResolversParentTypes['PageInfo'] = IResolversParentTypes['PageInfo']> = {
  endCursor?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  hasNextPage?: Resolver<IResolversTypes['Boolean'], ParentType, ContextType>;
  hasPreviousPage?: Resolver<IResolversTypes['Boolean'], ParentType, ContextType>;
  startCursor?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IQueryResolvers<ContextType = any, ParentType extends IResolversParentTypes['Query'] = IResolversParentTypes['Query']> = {
  articles?: Resolver<Array<IResolversTypes['Article']>, ParentType, ContextType, Partial<IQueryArticlesArgs>>;
  articlesAggregate?: Resolver<IResolversTypes['ArticleAggregateSelection'], ParentType, ContextType, Partial<IQueryArticlesAggregateArgs>>;
  categories?: Resolver<Array<IResolversTypes['Category']>, ParentType, ContextType, Partial<IQueryCategoriesArgs>>;
  categoriesAggregate?: Resolver<IResolversTypes['CategoryAggregateSelection'], ParentType, ContextType, Partial<IQueryCategoriesAggregateArgs>>;
  tags?: Resolver<Array<IResolversTypes['Tag']>, ParentType, ContextType, Partial<IQueryTagsArgs>>;
  tagsAggregate?: Resolver<IResolversTypes['TagAggregateSelection'], ParentType, ContextType, Partial<IQueryTagsAggregateArgs>>;
  users?: Resolver<Array<IResolversTypes['User']>, ParentType, ContextType, Partial<IQueryUsersArgs>>;
  usersAggregate?: Resolver<IResolversTypes['UserAggregateSelection'], ParentType, ContextType, Partial<IQueryUsersAggregateArgs>>;
};

export type IStringAggregateSelectionNonNullableResolvers<ContextType = any, ParentType extends IResolversParentTypes['StringAggregateSelectionNonNullable'] = IResolversParentTypes['StringAggregateSelectionNonNullable']> = {
  longest?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  shortest?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IStringAggregateSelectionNullableResolvers<ContextType = any, ParentType extends IResolversParentTypes['StringAggregateSelectionNullable'] = IResolversParentTypes['StringAggregateSelectionNullable']> = {
  longest?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  shortest?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ITagResolvers<ContextType = any, ParentType extends IResolversParentTypes['Tag'] = IResolversParentTypes['Tag']> = {
  articles?: Resolver<Array<IResolversTypes['Article']>, ParentType, ContextType, RequireFields<ITagArticlesArgs, 'directed'>>;
  articlesAggregate?: Resolver<Maybe<IResolversTypes['TagArticleArticlesAggregationSelection']>, ParentType, ContextType, RequireFields<ITagArticlesAggregateArgs, 'directed'>>;
  articlesConnection?: Resolver<IResolversTypes['TagArticlesConnection'], ParentType, ContextType, RequireFields<ITagArticlesConnectionArgs, 'directed'>>;
  createdAt?: Resolver<IResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<IResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<IResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ITagAggregateSelectionResolvers<ContextType = any, ParentType extends IResolversParentTypes['TagAggregateSelection'] = IResolversParentTypes['TagAggregateSelection']> = {
  count?: Resolver<IResolversTypes['Int'], ParentType, ContextType>;
  createdAt?: Resolver<IResolversTypes['DateTimeAggregateSelectionNonNullable'], ParentType, ContextType>;
  id?: Resolver<IResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  name?: Resolver<IResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  updatedAt?: Resolver<IResolversTypes['DateTimeAggregateSelectionNonNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ITagArticleArticlesAggregationSelectionResolvers<ContextType = any, ParentType extends IResolversParentTypes['TagArticleArticlesAggregationSelection'] = IResolversParentTypes['TagArticleArticlesAggregationSelection']> = {
  count?: Resolver<IResolversTypes['Int'], ParentType, ContextType>;
  node?: Resolver<Maybe<IResolversTypes['TagArticleArticlesNodeAggregateSelection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ITagArticleArticlesNodeAggregateSelectionResolvers<ContextType = any, ParentType extends IResolversParentTypes['TagArticleArticlesNodeAggregateSelection'] = IResolversParentTypes['TagArticleArticlesNodeAggregateSelection']> = {
  content?: Resolver<IResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  createdAt?: Resolver<IResolversTypes['DateTimeAggregateSelectionNonNullable'], ParentType, ContextType>;
  header?: Resolver<IResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  id?: Resolver<IResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  publishedAt?: Resolver<IResolversTypes['DateTimeAggregateSelectionNonNullable'], ParentType, ContextType>;
  subheader?: Resolver<IResolversTypes['StringAggregateSelectionNullable'], ParentType, ContextType>;
  updatedAt?: Resolver<IResolversTypes['DateTimeAggregateSelectionNonNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ITagArticlesConnectionResolvers<ContextType = any, ParentType extends IResolversParentTypes['TagArticlesConnection'] = IResolversParentTypes['TagArticlesConnection']> = {
  edges?: Resolver<Array<IResolversTypes['TagArticlesRelationship']>, ParentType, ContextType>;
  pageInfo?: Resolver<IResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<IResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ITagArticlesRelationshipResolvers<ContextType = any, ParentType extends IResolversParentTypes['TagArticlesRelationship'] = IResolversParentTypes['TagArticlesRelationship']> = {
  cursor?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<IResolversTypes['Article'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ITokensResolvers<ContextType = any, ParentType extends IResolversParentTypes['Tokens'] = IResolversParentTypes['Tokens']> = {
  accessToken?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  refreshToken?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IUpdateArticlesMutationResponseResolvers<ContextType = any, ParentType extends IResolversParentTypes['UpdateArticlesMutationResponse'] = IResolversParentTypes['UpdateArticlesMutationResponse']> = {
  articles?: Resolver<Array<IResolversTypes['Article']>, ParentType, ContextType>;
  info?: Resolver<IResolversTypes['UpdateInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IUpdateCategoriesMutationResponseResolvers<ContextType = any, ParentType extends IResolversParentTypes['UpdateCategoriesMutationResponse'] = IResolversParentTypes['UpdateCategoriesMutationResponse']> = {
  categories?: Resolver<Array<IResolversTypes['Category']>, ParentType, ContextType>;
  info?: Resolver<IResolversTypes['UpdateInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IUpdateInfoResolvers<ContextType = any, ParentType extends IResolversParentTypes['UpdateInfo'] = IResolversParentTypes['UpdateInfo']> = {
  bookmark?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  nodesCreated?: Resolver<IResolversTypes['Int'], ParentType, ContextType>;
  nodesDeleted?: Resolver<IResolversTypes['Int'], ParentType, ContextType>;
  relationshipsCreated?: Resolver<IResolversTypes['Int'], ParentType, ContextType>;
  relationshipsDeleted?: Resolver<IResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IUpdateTagsMutationResponseResolvers<ContextType = any, ParentType extends IResolversParentTypes['UpdateTagsMutationResponse'] = IResolversParentTypes['UpdateTagsMutationResponse']> = {
  info?: Resolver<IResolversTypes['UpdateInfo'], ParentType, ContextType>;
  tags?: Resolver<Array<IResolversTypes['Tag']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IUpdateUsersMutationResponseResolvers<ContextType = any, ParentType extends IResolversParentTypes['UpdateUsersMutationResponse'] = IResolversParentTypes['UpdateUsersMutationResponse']> = {
  info?: Resolver<IResolversTypes['UpdateInfo'], ParentType, ContextType>;
  users?: Resolver<Array<IResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IUserResolvers<ContextType = any, ParentType extends IResolversParentTypes['User'] = IResolversParentTypes['User']> = {
  createdAt?: Resolver<IResolversTypes['DateTime'], ParentType, ContextType>;
  email?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<IResolversTypes['ID'], ParentType, ContextType>;
  ip?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  lastLoggedAt?: Resolver<Maybe<IResolversTypes['DateTime']>, ParentType, ContextType>;
  phone?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<IResolversTypes['DateTime'], ParentType, ContextType>;
  wroteArticles?: Resolver<Array<IResolversTypes['Article']>, ParentType, ContextType, RequireFields<IUserWroteArticlesArgs, 'directed'>>;
  wroteArticlesAggregate?: Resolver<Maybe<IResolversTypes['UserArticleWroteArticlesAggregationSelection']>, ParentType, ContextType, RequireFields<IUserWroteArticlesAggregateArgs, 'directed'>>;
  wroteArticlesConnection?: Resolver<IResolversTypes['UserWroteArticlesConnection'], ParentType, ContextType, RequireFields<IUserWroteArticlesConnectionArgs, 'directed'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IUserAggregateSelectionResolvers<ContextType = any, ParentType extends IResolversParentTypes['UserAggregateSelection'] = IResolversParentTypes['UserAggregateSelection']> = {
  count?: Resolver<IResolversTypes['Int'], ParentType, ContextType>;
  createdAt?: Resolver<IResolversTypes['DateTimeAggregateSelectionNonNullable'], ParentType, ContextType>;
  email?: Resolver<IResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  id?: Resolver<IResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  ip?: Resolver<IResolversTypes['StringAggregateSelectionNullable'], ParentType, ContextType>;
  lastLoggedAt?: Resolver<IResolversTypes['DateTimeAggregateSelectionNullable'], ParentType, ContextType>;
  phone?: Resolver<IResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  updatedAt?: Resolver<IResolversTypes['DateTimeAggregateSelectionNonNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IUserArticleWroteArticlesAggregationSelectionResolvers<ContextType = any, ParentType extends IResolversParentTypes['UserArticleWroteArticlesAggregationSelection'] = IResolversParentTypes['UserArticleWroteArticlesAggregationSelection']> = {
  count?: Resolver<IResolversTypes['Int'], ParentType, ContextType>;
  node?: Resolver<Maybe<IResolversTypes['UserArticleWroteArticlesNodeAggregateSelection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IUserArticleWroteArticlesNodeAggregateSelectionResolvers<ContextType = any, ParentType extends IResolversParentTypes['UserArticleWroteArticlesNodeAggregateSelection'] = IResolversParentTypes['UserArticleWroteArticlesNodeAggregateSelection']> = {
  content?: Resolver<IResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  createdAt?: Resolver<IResolversTypes['DateTimeAggregateSelectionNonNullable'], ParentType, ContextType>;
  header?: Resolver<IResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  id?: Resolver<IResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  publishedAt?: Resolver<IResolversTypes['DateTimeAggregateSelectionNonNullable'], ParentType, ContextType>;
  subheader?: Resolver<IResolversTypes['StringAggregateSelectionNullable'], ParentType, ContextType>;
  updatedAt?: Resolver<IResolversTypes['DateTimeAggregateSelectionNonNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IUserWroteArticlesConnectionResolvers<ContextType = any, ParentType extends IResolversParentTypes['UserWroteArticlesConnection'] = IResolversParentTypes['UserWroteArticlesConnection']> = {
  edges?: Resolver<Array<IResolversTypes['UserWroteArticlesRelationship']>, ParentType, ContextType>;
  pageInfo?: Resolver<IResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<IResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IUserWroteArticlesRelationshipResolvers<ContextType = any, ParentType extends IResolversParentTypes['UserWroteArticlesRelationship'] = IResolversParentTypes['UserWroteArticlesRelationship']> = {
  cursor?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<IResolversTypes['Article'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IResolvers<ContextType = any> = {
  Article?: IArticleResolvers<ContextType>;
  ArticleAggregateSelection?: IArticleAggregateSelectionResolvers<ContextType>;
  ArticleAuthorConnection?: IArticleAuthorConnectionResolvers<ContextType>;
  ArticleAuthorRelationship?: IArticleAuthorRelationshipResolvers<ContextType>;
  ArticleCategoriesConnection?: IArticleCategoriesConnectionResolvers<ContextType>;
  ArticleCategoriesRelationship?: IArticleCategoriesRelationshipResolvers<ContextType>;
  ArticleCategoryCategoriesAggregationSelection?: IArticleCategoryCategoriesAggregationSelectionResolvers<ContextType>;
  ArticleCategoryCategoriesNodeAggregateSelection?: IArticleCategoryCategoriesNodeAggregateSelectionResolvers<ContextType>;
  ArticleTagTagsAggregationSelection?: IArticleTagTagsAggregationSelectionResolvers<ContextType>;
  ArticleTagTagsNodeAggregateSelection?: IArticleTagTagsNodeAggregateSelectionResolvers<ContextType>;
  ArticleTagsConnection?: IArticleTagsConnectionResolvers<ContextType>;
  ArticleTagsRelationship?: IArticleTagsRelationshipResolvers<ContextType>;
  ArticleUserAuthorAggregationSelection?: IArticleUserAuthorAggregationSelectionResolvers<ContextType>;
  ArticleUserAuthorNodeAggregateSelection?: IArticleUserAuthorNodeAggregateSelectionResolvers<ContextType>;
  Category?: ICategoryResolvers<ContextType>;
  CategoryAggregateSelection?: ICategoryAggregateSelectionResolvers<ContextType>;
  CategoryArticleArticlesAggregationSelection?: ICategoryArticleArticlesAggregationSelectionResolvers<ContextType>;
  CategoryArticleArticlesNodeAggregateSelection?: ICategoryArticleArticlesNodeAggregateSelectionResolvers<ContextType>;
  CategoryArticlesConnection?: ICategoryArticlesConnectionResolvers<ContextType>;
  CategoryArticlesRelationship?: ICategoryArticlesRelationshipResolvers<ContextType>;
  CreateArticlesMutationResponse?: ICreateArticlesMutationResponseResolvers<ContextType>;
  CreateCategoriesMutationResponse?: ICreateCategoriesMutationResponseResolvers<ContextType>;
  CreateInfo?: ICreateInfoResolvers<ContextType>;
  CreateTagsMutationResponse?: ICreateTagsMutationResponseResolvers<ContextType>;
  CreateUsersMutationResponse?: ICreateUsersMutationResponseResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
  DateTimeAggregateSelectionNonNullable?: IDateTimeAggregateSelectionNonNullableResolvers<ContextType>;
  DateTimeAggregateSelectionNullable?: IDateTimeAggregateSelectionNullableResolvers<ContextType>;
  DeleteInfo?: IDeleteInfoResolvers<ContextType>;
  IDAggregateSelectionNonNullable?: IIdAggregateSelectionNonNullableResolvers<ContextType>;
  Mutation?: IMutationResolvers<ContextType>;
  PageInfo?: IPageInfoResolvers<ContextType>;
  Query?: IQueryResolvers<ContextType>;
  StringAggregateSelectionNonNullable?: IStringAggregateSelectionNonNullableResolvers<ContextType>;
  StringAggregateSelectionNullable?: IStringAggregateSelectionNullableResolvers<ContextType>;
  Tag?: ITagResolvers<ContextType>;
  TagAggregateSelection?: ITagAggregateSelectionResolvers<ContextType>;
  TagArticleArticlesAggregationSelection?: ITagArticleArticlesAggregationSelectionResolvers<ContextType>;
  TagArticleArticlesNodeAggregateSelection?: ITagArticleArticlesNodeAggregateSelectionResolvers<ContextType>;
  TagArticlesConnection?: ITagArticlesConnectionResolvers<ContextType>;
  TagArticlesRelationship?: ITagArticlesRelationshipResolvers<ContextType>;
  Tokens?: ITokensResolvers<ContextType>;
  UpdateArticlesMutationResponse?: IUpdateArticlesMutationResponseResolvers<ContextType>;
  UpdateCategoriesMutationResponse?: IUpdateCategoriesMutationResponseResolvers<ContextType>;
  UpdateInfo?: IUpdateInfoResolvers<ContextType>;
  UpdateTagsMutationResponse?: IUpdateTagsMutationResponseResolvers<ContextType>;
  UpdateUsersMutationResponse?: IUpdateUsersMutationResponseResolvers<ContextType>;
  User?: IUserResolvers<ContextType>;
  UserAggregateSelection?: IUserAggregateSelectionResolvers<ContextType>;
  UserArticleWroteArticlesAggregationSelection?: IUserArticleWroteArticlesAggregationSelectionResolvers<ContextType>;
  UserArticleWroteArticlesNodeAggregateSelection?: IUserArticleWroteArticlesNodeAggregateSelectionResolvers<ContextType>;
  UserWroteArticlesConnection?: IUserWroteArticlesConnectionResolvers<ContextType>;
  UserWroteArticlesRelationship?: IUserWroteArticlesRelationshipResolvers<ContextType>;
};

