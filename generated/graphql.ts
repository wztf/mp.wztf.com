import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Upload: { input: any; output: any; }
  _FieldSet: { input: any; output: any; }
};

export type AccountInput = {
  app: Scalars['String']['input'];
  app_secret?: InputMaybe<Scalars['String']['input']>;
  appid: Scalars['String']['input'];
  callback_url?: InputMaybe<Scalars['String']['input']>;
  encoding_aes_key?: InputMaybe<Scalars['String']['input']>;
  gh_id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  platform_type: Scalars['Int']['input'];
  token?: InputMaybe<Scalars['String']['input']>;
};

export type AccountObject = {
  app: Scalars['String']['output'];
  app_secret?: Maybe<Scalars['String']['output']>;
  appid: Scalars['String']['output'];
  callback_url?: Maybe<Scalars['String']['output']>;
  encoding_aes_key?: Maybe<Scalars['String']['output']>;
  gh_id?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  platform_type: Scalars['Int']['output'];
  token?: Maybe<Scalars['String']['output']>;
};

export type BannerInput = {
  cover_image?: InputMaybe<Scalars['String']['input']>;
  expired_at?: InputMaybe<Scalars['Int']['input']>;
  hit_count: Scalars['Int']['input'];
  is_link: Scalars['Boolean']['input'];
  is_video: Scalars['Boolean']['input'];
  is_visible: Scalars['Boolean']['input'];
  link_url?: InputMaybe<Scalars['String']['input']>;
  sort_id: Scalars['Int']['input'];
  status: Scalars['Int']['input'];
  title?: InputMaybe<Scalars['String']['input']>;
  video_url?: InputMaybe<Scalars['String']['input']>;
  view_type: Scalars['Int']['input'];
  views_count: Scalars['Int']['input'];
};

export type BannerObject = {
  cover_image?: Maybe<Scalars['String']['output']>;
  expired_at?: Maybe<Scalars['Int']['output']>;
  hit_count: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  is_link: Scalars['Boolean']['output'];
  is_video: Scalars['Boolean']['output'];
  is_visible: Scalars['Boolean']['output'];
  link_url?: Maybe<Scalars['String']['output']>;
  sort_id: Scalars['Int']['output'];
  status: Scalars['Int']['output'];
  title: Scalars['String']['output'];
  video_url?: Maybe<Scalars['String']['output']>;
  view_type: Scalars['Int']['output'];
  views_count: Scalars['Int']['output'];
};

export type CategoryInput = {
  core_id: Scalars['Int']['input'];
  description: Scalars['String']['input'];
  is_visible: Scalars['Boolean']['input'];
  keywords: Scalars['String']['input'];
  parent_id: Scalars['Int']['input'];
  slug?: InputMaybe<Scalars['String']['input']>;
  sort_id: Scalars['Int']['input'];
  thumb?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
};

export type CategoryObject = {
  children?: Maybe<Array<CategoryObject>>;
  core_id: Scalars['Int']['output'];
  description: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  is_visible: Scalars['Boolean']['output'];
  keywords: Scalars['String']['output'];
  parent_id: Scalars['Int']['output'];
  slug?: Maybe<Scalars['String']['output']>;
  sort_id: Scalars['Int']['output'];
  thumb?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
};

export type ChartInput = {
  birthday: Scalars['String']['input'];
  city: Scalars['String']['input'];
  country: Scalars['String']['input'];
  province?: InputMaybe<Scalars['Int']['input']>;
};

export type ChartObject = {
  birthday: Scalars['String']['output'];
  city: Scalars['String']['output'];
  country: Scalars['String']['output'];
  hd_authority: Scalars['String']['output'];
  hd_cross: Scalars['String']['output'];
  hd_definition: Scalars['String']['output'];
  hd_profile: Scalars['String']['output'];
  hd_profile_cht: Scalars['String']['output'];
  hd_strategy: Scalars['String']['output'];
  hd_theme: Scalars['String']['output'];
  hd_thumb: Scalars['String']['output'];
  hd_type: Scalars['String']['output'];
  province?: Maybe<Scalars['Int']['output']>;
};

export type CoreInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  display_name?: InputMaybe<Scalars['String']['input']>;
  is_visible?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  sort_id?: InputMaybe<Scalars['Int']['input']>;
  thumb?: InputMaybe<Scalars['String']['input']>;
};

export type CoreObject = {
  description?: Maybe<Scalars['String']['output']>;
  display_name?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  is_visible: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  sort_id: Scalars['Int']['output'];
  thumb?: Maybe<Scalars['String']['output']>;
};

export type FileGroupInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  group_name: Scalars['String']['input'];
  parent_id?: InputMaybe<Scalars['Int']['input']>;
  sort_id?: InputMaybe<Scalars['Int']['input']>;
};

export type FileGroupObject = {
  description?: Maybe<Scalars['String']['output']>;
  group_name: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  parent_id: Scalars['Int']['output'];
  sort_id: Scalars['Int']['output'];
};

export type MenuInput = {
  component?: InputMaybe<Scalars['String']['input']>;
  display_name: Scalars['String']['input'];
  meta?: InputMaybe<MenuMetaInput>;
  name: Scalars['String']['input'];
  parent_id: Scalars['Int']['input'];
  path?: InputMaybe<Scalars['String']['input']>;
  redirect?: InputMaybe<Scalars['String']['input']>;
  sort_id: Scalars['Int']['input'];
};

export type MenuMeta = {
  affix: Scalars['Boolean']['output'];
  hidden: Scalars['Boolean']['output'];
  icon: Scalars['String']['output'];
  keep_alive: Scalars['Boolean']['output'];
  permissions: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type MenuMetaInput = {
  affix: Scalars['Boolean']['input'];
  hidden: Scalars['Boolean']['input'];
  icon: Scalars['String']['input'];
  keep_alive: Scalars['Boolean']['input'];
  permissions: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type MenuObject = {
  children?: Maybe<Array<MenuObject>>;
  component?: Maybe<Scalars['String']['output']>;
  display_name: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  meta?: Maybe<MenuMeta>;
  name: Scalars['String']['output'];
  parent_id: Scalars['Int']['output'];
  path?: Maybe<Scalars['String']['output']>;
  redirect?: Maybe<Scalars['String']['output']>;
  sort_id: Scalars['Int']['output'];
};

export type Mutation = {
  code: Scalars['String']['output'];
  /**
   * Creates a new account with the provided parameters.
   *
   * The `app_secret` field is optional and defaults to `None` if not
   * provided. The `callback_url` field is also optional and defaults to
   * an empty string if not provided. The `platform_type` field is
   * required and must be set to one of the supported values.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context containing shared data, including the application state.
   * * `input` - The input parameters for creating a new account.
   *
   * # Returns
   *
   * Returns a `Result` containing a string with the value `"ok"` if the
   * account was created successfully, or an error if the operation fails.
   */
  createAccount: Scalars['String']['output'];
  /**
   * Creates a new banner in the database.
   *
   * This asynchronous function constructs a `Banner` object from the provided
   * `BannerInput` and stores it in the database. All fields are initialized
   * from the input, with optional fields defaulting to zero or `None` as applicable.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context, used to access application state.
   * * `input` - A `BannerInput` object containing the details of the banner to be created.
   *
   * # Returns
   *
   * A `Result` which is:
   * * `Ok(String)` - A success message if the banner is created successfully.
   * * `Err(Error)` - An error message if the banner creation fails.
   *
   * # Errors
   *
   * Returns an error if the banner creation operation fails due to database issues.
   */
  createBanner: Scalars['String']['output'];
  /**
   * Creates a new category in the database.
   *
   * This asynchronous function constructs a `Category` object from the provided
   * `CategoryInput` and stores it in the database. All fields are initialized
   * from the input, with optional fields defaulting to zero or `None` as applicable.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context, used to access the application state.
   * * `input` - A `CategoryInput` object containing the details of the category to be created.
   *
   * # Returns
   *
   * A `Result` which is:
   * * `Ok(String)` - A success message if the category is created successfully.
   * * `Err(Error)` - An error message if the category creation fails.
   *
   * # Errors
   *
   * Returns an error if the category creation operation fails due to database issues.
   */
  createCategory: Scalars['String']['output'];
  /**
   * Create a new chart with the given parameters.
   *
   * This function constructs a `ChartInput` object from the provided parameters
   * and uses the `spider` service to create a new chart. The chart details are
   * then stored in the database and returned as a `ChartObject`.
   *
   * # Errors
   *
   * Returns an error if the chart creation operation fails due to database
   * issues.
   */
  createChart: Scalars['String']['output'];
  /**
   * Creates a new core in the database.
   *
   * This method constructs a `Core` object from the provided `CoreInput` and
   * stores it in the database. If the operation succeeds, an "ok" string is returned.
   * Otherwise, an error message is returned.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context, used to access application state.
   * * `input` - A `CoreInput` object containing the details of the core to be created.
   *
   * # Errors
   *
   * Returns an error if the core creation operation fails.
   */
  createCore: Scalars['String']['output'];
  /**
   * Creates a new file group in the database.
   *
   * This asynchronous function constructs a `FileGroup` object from the provided
   * `FileGroupInput` and stores it in the database. All fields are initialized
   * from the input, with optional fields defaulting to zero or `None` as applicable.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context, used to access the application state.
   * * `input` - A `FileGroupInput` object containing the details of the file group to be created.
   *
   * # Returns
   *
   * A `Result` which is:
   * * `Ok(String)` - A success message if the file group is created successfully.
   * * `Err(Error)` - An error message if the file group creation fails.
   *
   * # Errors
   *
   * Returns an error if the file group creation operation fails due to database issues.
   */
  createFileGroup: Scalars['String']['output'];
  /**
   * Creates a new menu entry in the database.
   *
   * This method constructs a `Menu` object from the provided `MenuInput` and
   * stores it in the database. The metadata is serialized to a JSON string.
   * If the operation succeeds, an "ok" string is returned. Otherwise, an error
   * message is returned.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context, used to access application state.
   * * `input` - A `MenuInput` object containing the details of the menu to be created.
   *
   * # Errors
   *
   * Returns an error if the menu creation operation fails.
   */
  createMenu: Scalars['String']['output'];
  /**
   * Creates a new package in the database.
   *
   * # Errors
   *
   * If the database insertion fails, the error is returned as a `Box<dyn std::error::Error>`.
   *
   * # Returns
   *
   * A `Result` which is:
   * * `Ok(String)` - A success message if the package is created successfully.
   * * `Err(Error)` - An error message if the package creation fails.
   */
  createPackage: Scalars['String']['output'];
  /**
   * Creates a new permission in the database.
   *
   * # Errors
   *
   * If the database insertion fails, the error is returned as a `Box<dyn std::error::Error>`.
   *
   * # Returns
   *
   * A `Result` which is:
   * * `Ok(String)` - A success message if the permission is created successfully.
   * * `Err(Error)` - An error message if the permission creation fails.
   */
  createPermission: Scalars['String']['output'];
  /**
   * Creates a new permission type.
   *
   * # Errors
   *
   * *   If the database insertion fails, the error is returned as a `Box<dyn std::error::Error>`.
   */
  createPermissionType: Scalars['String']['output'];
  /**
   * Creates a new role in the database.
   *
   * This function constructs a `Role` object from the provided `RoleInput` and
   * stores it in the database. If the operation succeeds, an "ok" string is returned.
   * Otherwise, an error message is returned.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context, used to access application state.
   * * `input` - A `RoleInput` object containing the details of the role to be created.
   *
   * # Errors
   *
   * Returns an error if the role creation operation fails.
   */
  createRole: Scalars['String']['output'];
  /**
   * Creates a new setting in the database.
   *
   * This asynchronous function constructs a `Setting` object from the provided
   * `SettingInput` and stores it in the database. If the operation succeeds, an "ok" string is returned.
   * Otherwise, an error message is returned.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context, used to access application state.
   * * `input` - A `SettingInput` object containing the details of the setting to be created.
   *
   * # Errors
   *
   * Returns an error if the setting creation operation fails.
   */
  createSetting: Scalars['String']['output'];
  /**
   * Deletes an existing account by its unique identifier.
   *
   * This asynchronous method deletes an account from the database based
   * on the provided `id`. It first attempts to retrieve the account
   * to ensure it exists before proceeding with the deletion process.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context containing shared data, including the application state.
   * * `id` - The unique identifier of the account to be deleted.
   *
   * # Returns
   *
   * Returns a `Result` containing a string with the value `"ok"` if the
   * account was deleted successfully, or an error if the operation fails.
   *
   * # Errors
   *
   * Returns an error if the account is not found or if there is a failure
   * during the deletion process.
   */
  deleteAccount: Scalars['String']['output'];
  /**
   * Deletes an existing banner by its unique identifier.
   *
   * This asynchronous method deletes a banner from the database based
   * on the provided `id`. It first attempts to retrieve the banner
   * to ensure it exists before proceeding with the deletion process.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context containing shared data, including the application state.
   * * `id` - The unique identifier of the banner to be deleted.
   *
   * # Returns
   *
   * Returns a `Result` containing a string with the value `"ok"` if the
   * banner was deleted successfully, or an error if the operation fails.
   *
   * # Errors
   *
   * Returns an error if the banner is not found or if there is a failure
   * during the deletion process.
   */
  deleteBanner: Scalars['String']['output'];
  /**
   * Deletes an existing category by its unique identifier.
   *
   * This asynchronous method deletes a category from the database based
   * on the provided `id`. It first attempts to retrieve the category
   * to ensure it exists before proceeding with the deletion process.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context containing shared data, including the application state.
   * * `id` - The unique identifier of the category to be deleted.
   *
   * # Returns
   *
   * Returns a `Result` containing a string with the value `"ok"` if the
   * category was deleted successfully, or an error if the operation fails.
   *
   * # Errors
   *
   * Returns an error if the category is not found or if there is a failure
   * during the deletion process.
   */
  deleteCategory: Scalars['String']['output'];
  /**
   * Deletes an existing core by its unique identifier.
   *
   * This asynchronous method deletes a core from the database based
   * on the provided `id`. It first attempts to retrieve the core
   * to ensure it exists before proceeding with the deletion process.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context containing shared data, including the application state.
   * * `id` - The unique identifier of the core to be deleted.
   *
   * # Returns
   *
   * Returns a `Result` containing a string with the value `"ok"` if the
   * core was deleted successfully, or an error if the operation fails.
   *
   * # Errors
   *
   * Returns an error if the core is not found or if there is a failure
   * during the deletion process.
   */
  deleteCore: Scalars['String']['output'];
  /**
   * Deletes an existing file group by its unique identifier.
   *
   * This asynchronous method deletes a file group from the database based
   * on the provided `id`. It first attempts to retrieve the file group
   * to ensure it exists before proceeding with the deletion process.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context containing shared data, including the application state.
   * * `id` - The unique identifier of the file group to be deleted.
   *
   * # Returns
   *
   * Returns a `Result` containing a string with the value `"ok"` if the
   * file group was deleted successfully, or an error if the operation fails.
   *
   * # Errors
   *
   * Returns an error if the file group is not found or if there is a failure
   * during the deletion process.
   */
  deleteFileGroup: Scalars['String']['output'];
  /**
   * Deletes an existing menu by its unique identifier.
   *
   * This asynchronous method deletes a menu from the database based
   * on the provided `id`. It first attempts to retrieve the menu
   * to ensure it exists before proceeding with the deletion process.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context containing shared data, including the application state.
   * * `id` - The unique identifier of the menu to be deleted.
   *
   * # Returns
   *
   * Returns a `Result` containing a string with the value `"ok"` if the
   * menu was deleted successfully, or an error if the operation fails.
   *
   * # Errors
   *
   * Returns an error if the menu is not found or if there is a failure
   * during the deletion process.
   */
  deleteMenu: Scalars['String']['output'];
  /**
   * Deletes an existing package by its unique identifier.
   *
   * This asynchronous method deletes a package from the database based
   * on the provided `id`. It first attempts to retrieve the package
   * to ensure it exists before proceeding with the deletion process.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context containing shared data, including the application state.
   * * `id` - The unique identifier of the package to be deleted.
   *
   * # Returns
   *
   * Returns a `Result` containing a string with the value `"ok"` if the
   * package was deleted successfully, or an error if the operation fails.
   *
   * # Errors
   *
   * Returns an error if the package is not found or if there is a failure
   * during the deletion process.
   */
  deletePackage: Scalars['String']['output'];
  /**
   * Deletes an existing permission by its unique identifier.
   *
   * This asynchronous method deletes a permission from the database based
   * on the provided `id`. It first attempts to retrieve the permission
   * to ensure it exists before proceeding with the deletion process.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context containing shared data, including the application state.
   * * `id` - The unique identifier of the permission to be deleted.
   *
   * # Returns
   *
   * Returns a `Result` containing a string with the value `"ok"` if the
   * permission was deleted successfully, or an error if the operation fails.
   *
   * # Errors
   *
   * Returns an error if the permission is not found or if there is a failure
   * during the deletion process.
   */
  deletePermission: Scalars['String']['output'];
  /**
   * Deletes an existing permission type by its unique identifier.
   *
   * This asynchronous method deletes a permission type from the database based
   * on the provided `id`. It first attempts to retrieve the permission type
   * to ensure it exists before proceeding with the deletion process.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context containing shared data, including the application state.
   * * `id` - The unique identifier of the permission type to be deleted.
   *
   * # Returns
   *
   * Returns a `Result` containing a string with the value `"ok"` if the
   * permission type was deleted successfully, or an error if the operation fails.
   *
   * # Errors
   *
   * Returns an error if the permission type is not found or if there is a failure
   * during the deletion process.
   */
  deletePermissionType: Scalars['String']['output'];
  /**
   * Deletes an existing role by its unique identifier.
   *
   * This asynchronous method deletes a role from the database based
   * on the provided `id`. It first attempts to retrieve the role
   * to ensure it exists before proceeding with the deletion process.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context containing shared data, including the application state.
   * * `id` - The unique identifier of the role to be deleted.
   *
   * # Returns
   *
   * Returns a `Result` containing a string with the value `"ok"` if the
   * role was deleted successfully, or an error if the operation fails.
   *
   * # Errors
   *
   * Returns an error if the role is not found or if there is a failure
   * during the deletion process.
   */
  deleteRole: Scalars['String']['output'];
  /**
   * Delete a setting by id
   *
   * The `id` argument is the id of the setting to delete.
   *
   * Only the root user can delete settings.
   *
   * # Errors
   *
   * Returns an `Error` if the setting does not exist or if there is a failure
   * in the database operation.
   */
  deleteSetting: Scalars['String']['output'];
  /**
   * Authenticates a user and generates a JWT token.
   *
   * This asynchronous function processes user login by decrypting the input
   * payload, verifying the signature, and retrieving user information. If
   * the user is authenticated successfully, a JWT token is generated and
   * returned.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context containing shared data, including the
   * application state.
   * * `input` - A string containing encrypted user information.
   *
   * # Returns
   *
   * Returns a `Result` containing a JWT token as a string if the login is
   * successful, or an error if the operation fails.
   *
   * # Errors
   *
   * Returns an error if:
   * * The input cannot be decrypted.
   * * The signature is invalid.
   * * The code or app is not found in the input.
   * * The account cannot be retrieved.
   * * The Google user information cannot be obtained.
   * * The user cannot be found or stored.
   * * A token cannot be generated.
   */
  login: Scalars['String']['output'];
  /**
   * Logs out the current user from the system.
   *
   * This method takes the GraphQL context and a dummy input parameter. It uses the context to
   * obtain the current user and the application state, and then logs out the user by updating
   * the user's login log. The method returns a `Result` containing a string with the value `"ok"`
   * if the logout is successful, or an error if the operation fails.
   *
   * # Arguments
   *
   * *   `ctx` - The execution context of the GraphQL query. This object contains information
   * about the current user and the database connection.
   * *   `_input` - A dummy input parameter that is not used in the method.
   *
   * # Returns
   *
   * Returns a `Result` containing a string with the value `"ok"` if the logout is successful, or
   * an error if the operation fails.
   *
   * # Errors
   *
   * If the user is not found, or if there is a failure during the logout process, an error is
   * returned as a `Box<dyn std::error::Error>`.
   */
  logout: Scalars['String']['output'];
  resetPassword: Scalars['String']['output'];
  /**
   * Registers a new user or logs in an existing user.
   *
   * This asynchronous function handles the signup process, which involves
   * verifying the input signature, timestamp, and user credentials. If the
   * provided information is valid and the user is authenticated, a JWT token
   * is generated and returned.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context containing shared data, including the
   * application state.
   * * `input` - A string containing encrypted user information.
   *
   * # Returns
   *
   * Returns a `Result` containing a JWT token as a string if the signup or
   * login is successful, or an error if the operation fails.
   *
   * # Errors
   *
   * Returns an error if:
   * * The input cannot be decrypted.
   * * The signature is invalid.
   * * The timestamp is invalid or expired.
   * * The email or password is not found in the input.
   * * The user cannot be found or the password is incorrect.
   * * A token cannot be generated.
   */
  signin: Scalars['String']['output'];
  /**
   * Updates an existing account with the given parameters.
   *
   * This asynchronous method updates an account in the database using the
   * provided `id` and `input`. Existing account details are modified based
   * on the non-null fields in the `input`, while the `platform_type` is
   * conditionally updated if a new value is provided.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context containing shared data, including the application state.
   * * `id` - The unique identifier of the account to be updated.
   * * `input` - The input parameters containing the updated account details.
   *
   * # Returns
   *
   * Returns a `Result` containing a string with the value `"ok"` if the
   * account was updated successfully, or an error if the operation fails.
   *
   * # Errors
   *
   * Returns an error if the account is not found or if there is a failure
   * during the update process.
   */
  updateAccount: Scalars['String']['output'];
  /**
   * Updates an existing banner in the database.
   *
   * This asynchronous function fetches the current banner record by its `id` and updates
   * its fields based on the values provided in the `input`. If a field in the `input` is `None`,
   * the function retains the current value from the existing record.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context containing application data.
   * * `id` - The unique identifier of the banner to be updated.
   * * `input` - A `BannerInput` object containing the updated banner details.
   *
   * # Returns
   *
   * Returns a `Result` containing a string with the value `"ok"` if the banner is updated
   * successfully, or an error if the operation fails.
   *
   * # Errors
   *
   * Returns an error if the banner is not found, or if there is a failure during the update process.
   */
  updateBanner: Scalars['String']['output'];
  updateCategory: Scalars['String']['output'];
  /**
   * Updates an existing core in the database.
   *
   * This asynchronous function fetches the current core record by its `id` and updates
   * its fields based on the values provided in the `input`. If a field in the `input` is `None`,
   * the function retains the current value from the existing record.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context containing application data.
   * * `id` - The unique identifier of the core to be updated.
   * * `input` - A `CoreInput` object containing the updated core details.
   *
   * # Returns
   *
   * Returns a `Result` containing a string with the value `"ok"` if the core is updated
   * successfully, or an error if the operation fails.
   *
   * # Errors
   *
   * Returns an error if the core is not found, or if there is a failure during the update process.
   */
  updateCore: Scalars['String']['output'];
  /**
   * Updates a file by uploading it to the server and storing it in a specified directory.
   *
   * This asynchronous function retrieves the file upload directory from the application settings,
   * generates a unique filename with an appropriate extension, and writes the file's content to
   * the server's filesystem. The final file path is returned upon successful completion.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context containing application data.
   * * `file` - An `Upload` object representing the file to be updated.
   *
   * # Returns
   *
   * Returns a `Result` containing a string with the file path if the upload is successful,
   * or an error if the operation fails.
   *
   * # Errors
   *
   * Returns an error if there is a failure in retrieving application settings or if the file
   * cannot be written to the specified path.
   */
  updateFile: Scalars['String']['output'];
  /**
   * Updates an existing file group in the database.
   *
   * This asynchronous function retrieves the file group by its `id` and updates
   * its fields based on the values provided in the `input`. If a field in the `input`
   * is `None`, the function retains the current value from the existing record.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context containing application data.
   * * `id` - The unique identifier of the file group to be updated.
   * * `input` - A `FileGroupInput` object containing the updated file group details.
   *
   * # Returns
   *
   * Returns a `Result` containing a string with the value `"ok"` if the file group
   * is updated successfully, or an error if the operation fails.
   *
   * # Errors
   *
   * Returns an error if the file group is not found, or if there is a failure
   * during the update process.
   */
  updateFileGroup: Scalars['String']['output'];
  /**
   * Updates an existing menu in the database.
   *
   * This asynchronous method updates a menu in the database using the
   * provided `id` and `input`. Existing menu details are modified based
   * on the non-null fields in the `input`.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context containing shared data, including the application state.
   * * `id` - The unique identifier of the menu to be updated.
   * * `input` - The input parameters containing the updated menu details.
   *
   * # Returns
   *
   * Returns a `Result` containing a string with the value `"ok"` if the
   * menu was updated successfully, or an error if the operation fails.
   *
   * # Errors
   *
   * Returns an error if the menu is not found or if there is a failure
   * during the update process.
   */
  updateMenu: Scalars['String']['output'];
  /**
   * Updates an existing package in the database.
   *
   * This asynchronous function retrieves the package by its `id` and updates its fields
   * based on the values provided in the `input`. If a field in the `input` is `None`,
   * the function retains the current value from the existing record.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context containing application data.
   * * `id` - The unique identifier of the package to be updated.
   * * `input` - A `PackageInput` object containing the updated package details.
   *
   * # Returns
   *
   * Returns a `Result` containing a string with the value `"ok"` if the package is updated
   * successfully, or an error if the operation fails.
   *
   * # Errors
   *
   * Returns an error if the package is not found, or if there is a failure during the update process.
   */
  updatePackage: Scalars['String']['output'];
  /**
   * Updates an existing permission in the database.
   *
   * # Errors
   *
   * If the database update fails, the error is returned as a `Box<dyn std::error::Error>`.
   *
   * # Returns
   *
   * A `Result` which is:
   * * `Ok(String)` - A success message if the permission is updated successfully.
   * * `Err(Error)` - An error message if the permission update fails.
   */
  updatePermission: Scalars['String']['output'];
  /**
   * Updates an existing permission type in the database.
   *
   * The `id` parameter is used to identify the permission type to update.
   *
   * # Errors
   *
   * *   If the database query fails, the error is returned as a `Box<dyn std::error::Error>`.
   */
  updatePermissionType: Scalars['String']['output'];
  /**
   * Updates an existing role in the database.
   *
   * This asynchronous function fetches the current role record by its `id` and updates
   * its fields based on the values provided in the `input`. If a field in the `input` is `None`,
   * the function retains the current value from the existing record.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context containing application data.
   * * `id` - The unique identifier of the role to be updated.
   * * `input` - A `RoleInput` object containing the updated role details.
   *
   * # Returns
   *
   * Returns a `Result` containing a string with the value `"ok"` if the role is updated
   * successfully, or an error if the operation fails.
   *
   * # Errors
   *
   * Returns an error if the role is not found, or if there is a failure during the update process.
   */
  updateRole: Scalars['String']['output'];
  /**
   * Updates the menu permissions associated with a role.
   *
   * This asynchronous function takes the `id` of a role and a `RoleMenuInput` object containing the
   * IDs of the menus to be associated with the role. The function also takes the IDs of the menus
   * that are indeterminate (i.e., not selected) and the IDs of the menus that are selected.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context containing application data.
   * * `id` - The unique identifier of the role to be updated.
   * * `input` - A `RoleMenuInput` object containing the menu IDs to be associated with the role.
   *
   * # Returns
   *
   * Returns a `Result` containing a string with the value `"ok"` if the menu permissions are updated
   * successfully, or an error if the operation fails.
   *
   * # Errors
   *
   * Returns an error if the role is not found, or if there is a failure during the update process.
   */
  updateRoleMenus: Scalars['String']['output'];
  /**
   * Updates the permissions associated with a given role.
   *
   * This asynchronous function retrieves the role by its `id` and updates
   * its permissions using the provided list of permission `input`.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context containing shared data, including the application state.
   * * `id` - The unique identifier of the role to be updated.
   * * `input` - A vector of permission IDs to associate with the role.
   *
   * # Returns
   *
   * Returns a `Result` containing a string with the value `"ok"` if the permissions
   * are updated successfully, or an error if the operation fails.
   *
   * # Errors
   *
   * Returns an error if the role is not found, or if there is a failure during the update process.
   */
  updateRolePermissions: Scalars['String']['output'];
  /**
   * Updates an existing setting in the database.
   *
   * This asynchronous function retrieves a setting by its `id` and updates its fields
   * based on the provided `input`. If a field in the `input` is `None`, the function retains
   * the current value from the existing record.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context containing application data.
   * * `id` - The unique identifier of the setting to be updated.
   * * `input` - A `SettingInput` object containing the updated setting details.
   *
   * # Returns
   *
   * Returns a `Result` containing a string with the value `"ok"` if the setting is updated
   * successfully, or an error if the operation fails.
   *
   * # Errors
   *
   * Returns an error if the setting is not found or if there is a failure during the update process.
   */
  updateSetting: Scalars['String']['output'];
  /**
   * Updates the role of an existing user in the database.
   *
   * This asynchronous function fetches the user by its `user_id` and updates
   * the user's role based on the `role_id` provided in the `input`.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context containing application data and state.
   * * `input` - A `UserRoleInput` object containing the `user_id` and the new `role_id`.
   *
   * # Returns
   *
   * Returns a `Result` containing a string with the value `"ok"` if the user's role is updated
   * successfully, or an error if the operation fails.
   *
   * # Errors
   *
   * Returns an error if the user is not found, or if there is a failure during the role update process.
   */
  updateUserRole: Scalars['String']['output'];
};


export type MutationCodeArgs = {
  payload: Scalars['String']['input'];
};


export type MutationCreateAccountArgs = {
  input: AccountInput;
};


export type MutationCreateBannerArgs = {
  input: BannerInput;
};


export type MutationCreateCategoryArgs = {
  input: CategoryInput;
};


export type MutationCreateChartArgs = {
  input: ChartInput;
};


export type MutationCreateCoreArgs = {
  input: CoreInput;
};


export type MutationCreateFileGroupArgs = {
  input: FileGroupInput;
};


export type MutationCreateMenuArgs = {
  input: MenuInput;
};


export type MutationCreatePackageArgs = {
  input: PackageInput;
};


export type MutationCreatePermissionArgs = {
  input: PermissionInput;
};


export type MutationCreatePermissionTypeArgs = {
  input: PermissionTypeInput;
};


export type MutationCreateRoleArgs = {
  input: RoleInput;
};


export type MutationCreateSettingArgs = {
  input: SettingInput;
};


export type MutationDeleteAccountArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeleteBannerArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeleteCategoryArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeleteCoreArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeleteFileGroupArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeleteMenuArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeletePackageArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeletePermissionArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeletePermissionTypeArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeleteRoleArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeleteSettingArgs = {
  id: Scalars['Int']['input'];
};


export type MutationLoginArgs = {
  input: Scalars['String']['input'];
};


export type MutationLogoutArgs = {
  input: Scalars['String']['input'];
};


export type MutationResetPasswordArgs = {
  payload: Scalars['String']['input'];
};


export type MutationSigninArgs = {
  input: Scalars['String']['input'];
};


export type MutationUpdateAccountArgs = {
  id: Scalars['Int']['input'];
  input: AccountInput;
};


export type MutationUpdateBannerArgs = {
  id: Scalars['Int']['input'];
  input: BannerInput;
};


export type MutationUpdateCategoryArgs = {
  id: Scalars['Int']['input'];
  input: CategoryInput;
};


export type MutationUpdateCoreArgs = {
  id: Scalars['Int']['input'];
  input: CoreInput;
};


export type MutationUpdateFileArgs = {
  file: Scalars['Upload']['input'];
};


export type MutationUpdateFileGroupArgs = {
  id: Scalars['Int']['input'];
  input: FileGroupInput;
};


export type MutationUpdateMenuArgs = {
  id: Scalars['Int']['input'];
  input: MenuInput;
};


export type MutationUpdatePackageArgs = {
  id: Scalars['Int']['input'];
  input: PackageInput;
};


export type MutationUpdatePermissionArgs = {
  id: Scalars['Int']['input'];
  input: PermissionInput;
};


export type MutationUpdatePermissionTypeArgs = {
  id: Scalars['Int']['input'];
  input: PermissionTypeInput;
};


export type MutationUpdateRoleArgs = {
  id: Scalars['Int']['input'];
  input: RoleInput;
};


export type MutationUpdateRoleMenusArgs = {
  id: Scalars['Int']['input'];
  input: RoleMenuObject;
};


export type MutationUpdateRolePermissionsArgs = {
  id: Scalars['Int']['input'];
  input: Array<Scalars['Int']['input']>;
};


export type MutationUpdateSettingArgs = {
  id: Scalars['Int']['input'];
  input: SettingInput;
};


export type MutationUpdateUserRoleArgs = {
  input: UserRoleInput;
};

export type PackageInput = {
  avg: Scalars['Int']['input'];
  is_visible: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
  randomizable: Scalars['Boolean']['input'];
  sort_id: Scalars['Int']['input'];
  thumb?: InputMaybe<Scalars['String']['input']>;
  total: Scalars['Int']['input'];
};

export type PackageObject = {
  avg: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  is_visible: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  randomizable: Scalars['Boolean']['output'];
  sort_id: Scalars['Int']['output'];
  thumb: Scalars['String']['output'];
  total: Scalars['Int']['output'];
};

export type PageInput = {
  current_page?: InputMaybe<Scalars['Int']['input']>;
  per_page?: InputMaybe<Scalars['Int']['input']>;
};

export type PermissionInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  display_name?: InputMaybe<Scalars['String']['input']>;
  is_visible?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  sort_id?: InputMaybe<Scalars['Int']['input']>;
  type_id: Scalars['Int']['input'];
};

export type PermissionObject = {
  description?: Maybe<Scalars['String']['output']>;
  display_name?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  is_visible: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  sort_id: Scalars['Int']['output'];
  type_id?: Maybe<Scalars['Int']['output']>;
};

export type PermissionTypeInput = {
  display_name?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  sort_id?: InputMaybe<Scalars['Int']['input']>;
};

export type PermissionTypeObject = {
  display_name?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  permissions?: Maybe<Array<PermissionObject>>;
  sort_id: Scalars['Int']['output'];
};

export type PlatformTypeObject = {
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
};

export type Query = {
  /**
   * Retrieves a list of all non-deleted accounts.
   *
   * This asynchronous method fetches all accounts from the database
   * where the `deleted_at` field is `NULL`, indicating that the account
   * has not been deleted. The accounts are then converted into `AccountObject`
   * instances and returned as a vector.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context containing shared data, including the application state.
   *
   * # Returns
   *
   * Returns a `Result` containing a vector of `AccountObject`s if successful,
   * or an error if the operation fails.
   */
  accounts: Array<AccountObject>;
  /**
   * Checks if the user is authenticated and has a valid status.
   *
   * # Arguments
   *
   * * `ctx` - The context containing the user information.
   *
   * # Returns
   *
   * If the user is authenticated and has a valid status, `true` is returned.
   * If the user is not authenticated, or the status is not valid, an error is returned.
   */
  auth: Scalars['Boolean']['output'];
  /**
   * Retrieves a list of all banners from the database.
   *
   * This asynchronous function fetches all non-deleted banners, converts them
   * into `BannerObject` instances, sorts them by `sort_id` in ascending order,
   * and returns them as a vector.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context containing shared data, including the application state.
   * * `_input` - A placeholder input string, not utilized in the current implementation.
   *
   * # Returns
   *
   * Returns a `Result` containing a vector of `BannerObject`s on success,
   * or an `Error` if the operation fails.
   *
   * # Errors
   *
   * Returns an error if there is a failure in retrieving the list of banners from the database.
   */
  banners: Array<BannerObject>;
  /**
   * Checks if the user has the given permission.
   *
   * # Arguments
   *
   * * `_ctx` - The context containing the user information.
   * * `_url` - The URL to check the permission for.
   *
   * # Returns
   *
   * If the user has the permission, an empty vector is returned.
   * If the user does not have the permission, an error is returned.
   */
  canIUse: Array<Scalars['String']['output']>;
  categories: Array<CategoryObject>;
  /**
   * Retrieves a chart by its SHA256 sum from the database.
   *
   * This asynchronous function takes a SHA256 sum as a string argument and returns a `ChartObject`
   * if a matching chart is found in the database. If no matching chart is found, an error is logged
   * and a boxed `std::error::Error` is returned.
   *
   * # Arguments
   *
   * * `ctx` - The execution context of the GraphQL query. This object contains information
   * about the current user and the database connection.
   * * `input` - The SHA256 sum of the chart to be retrieved.
   *
   * # Errors
   *
   * Returns a boxed `std::error::Error` if the database query fails or if no matching chart is
   * found.
   */
  chart: ChartObject;
  /**
   * Retrieves a list of all cores from the database.
   *
   * This method uses a loader to fetch the cores from the database. If the
   * database query fails, the method logs a warning and returns an empty
   * vector of `CoreObject`s.
   *
   * The returned list of `CoreObject`s is sorted by the `sort_id` field.
   */
  cores: Array<CoreObject>;
  /**
   * Retrieves a list of all file groups from the database.
   *
   * # Returns
   */
  fileGroups: Array<FileGroupObject>;
  /**
   * Get all menus.
   *
   * This method returns all menus that the user's role has access to.
   * If the user's role is "guest", it only returns the menus that are
   * directly under the input menu.
   */
  menus: Array<MenuObject>;
  /**
   * Retrieves a list of all packages from the database.
   *
   * # Returns
   *
   * A `Result` containing a vector of `PackageObject` instances on success, or an `Error` on failure.
   *
   * The packages are ordered by `sort_id` in ascending order, and only packages that have not
   * been soft-deleted are included in the result.
   */
  packages: Array<PackageObject>;
  /**
   * Gets all permission types and their permissions.
   *
   * The permission types are sorted by their `sort_id` field.
   *
   * # Errors
   *
   * *   Fails to get list permission types.
   *
   * # Returns
   *
   * A vector of `PermissionTypeObject` instances.
   */
  permissionTypes: Array<PermissionTypeObject>;
  /**
   * Retrieves a list of all permissions from the database.
   *
   * # Returns
   *
   * A `Result` containing a vector of `PermissionObject` instances on success, or an `Error` on failure.
   *
   * The permissions are ordered by `sort_id` in ascending order, and only permissions that have not
   * been soft-deleted are included in the result.
   */
  permissions: Array<PermissionObject>;
  /**
   * This asynchronous method returns all possible platform types
   * supported by the system. The platform types are returned as a
   * vector of `PlatformTypeObject`s.
   *
   * # Arguments
   *
   * * `_ctx` - This argument is ignored and is only included for
   * consistency with the other methods.
   *
   * # Returns
   *
   * Returns a `Result` containing a vector of `PlatformTypeObject`s
   * if successful, or an error if the operation fails.
   */
  platformTypes: Array<PlatformTypeObject>;
  /**
   * Returns the current user's information.
   *
   * # Errors
   *
   * If the user is not logged in, an error is returned.
   *
   * # Returns
   *
   * The current user's information is returned as a `UserObject`.
   */
  profile: UserObject;
  /**
   * Retrieves a list of all roles from the database.
   *
   * # Returns
   *
   * A `Result` containing a vector of `RoleObject` instances on success, or an `Error` on failure.
   *
   * The roles are ordered by `sort_id` in ascending order, and only roles that have not
   * been soft-deleted are included in the result.
   */
  roles: Array<RoleObject>;
  /**
   * Gets the global setting of the application.
   *
   * This field fetches the setting from the database and caches it in Redis.
   * If the setting is not found in both cache and database, an error is returned.
   *
   * # Return
   *
   * Returns a `SettingObject` containing the setting data if successful,
   * or an error if the setting is not found or if there is a failure
   * in connecting to the database or executing the query.
   *
   * # Errors
   *
   * Returns an error if the setting is not found in both cache and database,
   * or if there is a failure in connecting to the database, executing the query,
   * or serializing/deserializing the setting data.
   */
  setting: SettingObject;
  /**
   * Gets a list of users.
   *
   * This method takes a `PageInput` structure as an optional argument and returns a vector of
   * `UserObject` objects. The `PageInput` structure contains the page number and the page size.
   * If the `PageInput` argument is not provided, the method returns the first page of users with
   * a page size of 20.
   *
   * The method returns an error if the user does not have permission to view the list of users.
   *
   * # Arguments
   *
   * *   `ctx` - The execution context of the GraphQL query. This object contains information
   * about the current user and the database connection.
   * *   `input` - An optional `PageInput` structure containing the page number and the page size.
   *
   * # Errors
   *
   * Returns an error as a `Box<dyn std::error::Error>` if the database query fails or if the
   * user does not have permission to view the list of users.
   */
  users: UserPage;
};


export type QueryBannersArgs = {
  input: Scalars['String']['input'];
};


export type QueryCanIUseArgs = {
  url: Scalars['String']['input'];
};


export type QueryCategoriesArgs = {
  input: Scalars['String']['input'];
};


export type QueryChartArgs = {
  input: Scalars['String']['input'];
};


export type QueryMenusArgs = {
  input: Scalars['String']['input'];
};


export type QueryUsersArgs = {
  input?: InputMaybe<PageInput>;
};

export type RoleInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  display_name?: InputMaybe<Scalars['String']['input']>;
  is_visible?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  sort_id?: InputMaybe<Scalars['Int']['input']>;
};

export type RoleMenuInput = {
  indeterminate_keys?: Maybe<Array<Scalars['Int']['output']>>;
  selected_keys?: Maybe<Array<Scalars['Int']['output']>>;
};

export type RoleMenuObject = {
  indeterminate_keys?: InputMaybe<Array<Scalars['Int']['input']>>;
  selected_keys?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type RoleObject = {
  description?: Maybe<Scalars['String']['output']>;
  display_name?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  is_visible: Scalars['Boolean']['output'];
  menu_ids?: Maybe<RoleMenuInput>;
  name: Scalars['String']['output'];
  permission_ids?: Maybe<Array<Scalars['Int']['output']>>;
  sort_id: Scalars['Int']['output'];
};

export type SettingInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  email_driver?: InputMaybe<Scalars['String']['input']>;
  email_encryption?: InputMaybe<Scalars['String']['input']>;
  email_from_address?: InputMaybe<Scalars['String']['input']>;
  email_from_name?: InputMaybe<Scalars['String']['input']>;
  email_host?: InputMaybe<Scalars['String']['input']>;
  email_password?: InputMaybe<Scalars['String']['input']>;
  email_port?: InputMaybe<Scalars['Int']['input']>;
  email_username?: InputMaybe<Scalars['String']['input']>;
  file_group_id?: InputMaybe<Scalars['Int']['input']>;
  folder?: InputMaybe<Scalars['String']['input']>;
  host?: InputMaybe<Scalars['String']['input']>;
  keywords?: InputMaybe<Scalars['String']['input']>;
  registrable: Scalars['Boolean']['input'];
  title: Scalars['String']['input'];
};

export type SettingObject = {
  description?: Maybe<Scalars['String']['output']>;
  email_driver?: Maybe<Scalars['String']['output']>;
  email_encryption?: Maybe<Scalars['String']['output']>;
  email_from_address?: Maybe<Scalars['String']['output']>;
  email_from_name?: Maybe<Scalars['String']['output']>;
  email_host?: Maybe<Scalars['String']['output']>;
  email_password?: Maybe<Scalars['String']['output']>;
  email_port: Scalars['Int']['output'];
  email_username?: Maybe<Scalars['String']['output']>;
  file_group_id: Scalars['Int']['output'];
  folder: Scalars['String']['output'];
  host: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  keywords?: Maybe<Scalars['String']['output']>;
  registrable: Scalars['Boolean']['output'];
  title: Scalars['String']['output'];
};

export type UserObject = {
  email: Scalars['String']['output'];
  email_verified_at?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  permissions?: Maybe<Array<Scalars['String']['output']>>;
  profile_url?: Maybe<Scalars['String']['output']>;
  role?: Maybe<RoleObject>;
  status: Scalars['Boolean']['output'];
};

/** [Page Object](https://async-graphql.github.io/async-graphql/zh-CN/define_simple_object.html?highlight=ComplexObject#%E6%B3%9B%E5%9E%8B) */
export type UserPage = {
  currentPage: Scalars['Int']['output'];
  data: Array<UserObject>;
  lastPage: Scalars['Int']['output'];
  perPage: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type UserRoleInput = {
  role_id: Scalars['Int']['input'];
  user_id: Scalars['Int']['input'];
};

export type CreateRoleMutationVariables = Exact<{
  input: RoleInput;
}>;


export type CreateRoleMutation = { createRole: string };

export type UpdateRoleMutationVariables = Exact<{
  id: Scalars['Int']['input'];
  input: RoleInput;
}>;


export type UpdateRoleMutation = { updateRole: string };

export type DeleteRoleMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type DeleteRoleMutation = { deleteRole: string };

export type UpdateRolePermissionsMutationVariables = Exact<{
  id: Scalars['Int']['input'];
  input: Array<Scalars['Int']['input']> | Scalars['Int']['input'];
}>;


export type UpdateRolePermissionsMutation = { updateRolePermissions: string };

export type UpdateRoleMenusMutationVariables = Exact<{
  id: Scalars['Int']['input'];
  input: RoleMenuObject;
}>;


export type UpdateRoleMenusMutation = { updateRoleMenus: string };

export type CreateCoreMutationVariables = Exact<{
  input: CoreInput;
}>;


export type CreateCoreMutation = { createCore: string };

export type UpdateCoreMutationVariables = Exact<{
  id: Scalars['Int']['input'];
  input: CoreInput;
}>;


export type UpdateCoreMutation = { updateCore: string };

export type DeleteCoreMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type DeleteCoreMutation = { deleteCore: string };

export type CreatePermissionTypeMutationVariables = Exact<{
  input: PermissionTypeInput;
}>;


export type CreatePermissionTypeMutation = { createPermissionType: string };

export type UpdatePermissionTypeMutationVariables = Exact<{
  id: Scalars['Int']['input'];
  input: PermissionTypeInput;
}>;


export type UpdatePermissionTypeMutation = { updatePermissionType: string };

export type DeletePermissionTypeMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type DeletePermissionTypeMutation = { deletePermissionType: string };

export type CreateAccountMutationVariables = Exact<{
  input: AccountInput;
}>;


export type CreateAccountMutation = { createAccount: string };

export type UpdateAccountMutationVariables = Exact<{
  id: Scalars['Int']['input'];
  input: AccountInput;
}>;


export type UpdateAccountMutation = { updateAccount: string };

export type DeleteAccountMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type DeleteAccountMutation = { deleteAccount: string };

export type CreatePermissionMutationVariables = Exact<{
  input: PermissionInput;
}>;


export type CreatePermissionMutation = { createPermission: string };

export type UpdatePermissionMutationVariables = Exact<{
  id: Scalars['Int']['input'];
  input: PermissionInput;
}>;


export type UpdatePermissionMutation = { updatePermission: string };

export type DeletePermissionMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type DeletePermissionMutation = { deletePermission: string };

export type CreateSettingMutationVariables = Exact<{
  input: SettingInput;
}>;


export type CreateSettingMutation = { createSetting: string };

export type UpdateSettingMutationVariables = Exact<{
  id: Scalars['Int']['input'];
  input: SettingInput;
}>;


export type UpdateSettingMutation = { updateSetting: string };

export type DeleteSettingMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type DeleteSettingMutation = { deleteSetting: string };

export type CreateFileGroupMutationVariables = Exact<{
  input: FileGroupInput;
}>;


export type CreateFileGroupMutation = { createFileGroup: string };

export type UpdateFileGroupMutationVariables = Exact<{
  id: Scalars['Int']['input'];
  input: FileGroupInput;
}>;


export type UpdateFileGroupMutation = { updateFileGroup: string };

export type DeleteFileGroupMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type DeleteFileGroupMutation = { deleteFileGroup: string };

export type UpdateFileMutationVariables = Exact<{
  file: Scalars['Upload']['input'];
}>;


export type UpdateFileMutation = { updateFile: string };

export type CodeMutationVariables = Exact<{
  input: Scalars['String']['input'];
}>;


export type CodeMutation = { code: string };

export type CreateMenuMutationVariables = Exact<{
  input: MenuInput;
}>;


export type CreateMenuMutation = { createMenu: string };

export type UpdateMenuMutationVariables = Exact<{
  id: Scalars['Int']['input'];
  input: MenuInput;
}>;


export type UpdateMenuMutation = { updateMenu: string };

export type DeleteMenuMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type DeleteMenuMutation = { deleteMenu: string };

export type SigninMutationVariables = Exact<{
  input: Scalars['String']['input'];
}>;


export type SigninMutation = { signin: string };

export type ResetPasswordMutationVariables = Exact<{
  input: Scalars['String']['input'];
}>;


export type ResetPasswordMutation = { resetPassword: string };

export type LoginMutationVariables = Exact<{
  input: Scalars['String']['input'];
}>;


export type LoginMutation = { login: string };

export type LogoutMutationVariables = Exact<{
  input: Scalars['String']['input'];
}>;


export type LogoutMutation = { logout: string };

export type CreateCategoryMutationVariables = Exact<{
  input: CategoryInput;
}>;


export type CreateCategoryMutation = { createCategory: string };

export type UpdateCategoryMutationVariables = Exact<{
  id: Scalars['Int']['input'];
  input: CategoryInput;
}>;


export type UpdateCategoryMutation = { updateCategory: string };

export type DeleteCategoryMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type DeleteCategoryMutation = { deleteCategory: string };

export type CreateBannerMutationVariables = Exact<{
  input: BannerInput;
}>;


export type CreateBannerMutation = { createBanner: string };

export type UpdateBannerMutationVariables = Exact<{
  id: Scalars['Int']['input'];
  input: BannerInput;
}>;


export type UpdateBannerMutation = { updateBanner: string };

export type DeleteBannerMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type DeleteBannerMutation = { deleteBanner: string };

export type CreatePackageMutationVariables = Exact<{
  input: PackageInput;
}>;


export type CreatePackageMutation = { createPackage: string };

export type UpdatePackageMutationVariables = Exact<{
  id: Scalars['Int']['input'];
  input: PackageInput;
}>;


export type UpdatePackageMutation = { updatePackage: string };

export type DeletePackageMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type DeletePackageMutation = { deletePackage: string };

export type CreateChartMutationVariables = Exact<{
  input: ChartInput;
}>;


export type CreateChartMutation = { createChart: string };

export type RolesQueryVariables = Exact<{
  input: Scalars['String']['input'];
}>;


export type RolesQuery = { roles: Array<{ id: number, name: string, display_name?: string | null, description?: string | null, is_visible: boolean, sort_id: number, permission_ids?: Array<number> | null, menu_ids?: { selected_keys?: Array<number> | null, indeterminate_keys?: Array<number> | null } | null }>, permissionTypes: Array<{ id: number, name: string, display_name?: string | null, sort_id: number, permissions?: Array<{ id: number, name: string, display_name?: string | null, description?: string | null, is_visible: boolean, sort_id: number, type_id?: number | null }> | null }>, menus: Array<{ id: number, name: string, display_name: string, path?: string | null, component?: string | null, redirect?: string | null, parent_id: number, sort_id: number, meta?: { hidden: boolean, icon: string, title: string, affix: boolean, permissions: string, keep_alive: boolean } | null, children?: Array<{ id: number, name: string, display_name: string, path?: string | null, component?: string | null, redirect?: string | null, parent_id: number, sort_id: number, meta?: { hidden: boolean, icon: string, title: string, affix: boolean, permissions: string, keep_alive: boolean } | null, children?: Array<{ id: number, name: string, display_name: string, path?: string | null, component?: string | null, redirect?: string | null, parent_id: number, sort_id: number, meta?: { hidden: boolean, icon: string, title: string, affix: boolean, permissions: string, keep_alive: boolean } | null, children?: Array<{ id: number, name: string, display_name: string, path?: string | null, component?: string | null, redirect?: string | null, parent_id: number, sort_id: number }> | null }> | null }> | null }> };

export type CoresQueryVariables = Exact<{ [key: string]: never; }>;


export type CoresQuery = { cores: Array<{ id: number, name: string, display_name?: string | null, description?: string | null, thumb?: string | null, is_visible: boolean, sort_id: number }> };

export type PermissionTypesQueryVariables = Exact<{ [key: string]: never; }>;


export type PermissionTypesQuery = { permissionTypes: Array<{ id: number, name: string, display_name?: string | null, sort_id: number, permissions?: Array<{ id: number, name: string, display_name?: string | null, description?: string | null, is_visible: boolean, sort_id: number, type_id?: number | null }> | null }> };

export type AccountsQueryVariables = Exact<{ [key: string]: never; }>;


export type AccountsQuery = { accounts: Array<{ id: number, name: string, app: string, appid: string, app_secret?: string | null, callback_url?: string | null, platform_type: number }>, platformTypes: Array<{ id: number, name: string }> };

export type SettingQueryVariables = Exact<{ [key: string]: never; }>;


export type SettingQuery = { setting: { id: number, title: string, keywords?: string | null, description?: string | null, host: string, folder: string, file_group_id: number, email_driver?: string | null, email_host?: string | null, email_port: number, email_username?: string | null, email_password?: string | null, email_encryption?: string | null, email_from_address?: string | null, email_from_name?: string | null, registrable: boolean }, fileGroups: Array<{ id: number, group_name: string, description?: string | null, parent_id: number, sort_id: number }> };

export type FileGroupsQueryVariables = Exact<{ [key: string]: never; }>;


export type FileGroupsQuery = { fileGroups: Array<{ id: number, group_name: string, description?: string | null, parent_id: number, sort_id: number }> };

export type CanIUseQueryVariables = Exact<{
  url: Scalars['String']['input'];
}>;


export type CanIUseQuery = { canIUse: Array<string> };

export type AuthQueryVariables = Exact<{ [key: string]: never; }>;


export type AuthQuery = { auth: boolean };

export type ProfileQueryVariables = Exact<{ [key: string]: never; }>;


export type ProfileQuery = { profile: { id: number, email: string, name: string, profile_url?: string | null, status: boolean, email_verified_at?: string | null, permissions?: Array<string> | null, role?: { id: number, name: string, display_name?: string | null } | null } };

export type MenusQueryVariables = Exact<{
  input: Scalars['String']['input'];
}>;


export type MenusQuery = { menus: Array<{ id: number, name: string, display_name: string, path?: string | null, component?: string | null, redirect?: string | null, parent_id: number, sort_id: number, meta?: { hidden: boolean, icon: string, title: string, affix: boolean, permissions: string, keep_alive: boolean } | null, children?: Array<{ id: number, name: string, display_name: string, path?: string | null, component?: string | null, redirect?: string | null, parent_id: number, sort_id: number, meta?: { hidden: boolean, icon: string, title: string, affix: boolean, permissions: string, keep_alive: boolean } | null, children?: Array<{ id: number, name: string, display_name: string, path?: string | null, component?: string | null, redirect?: string | null, parent_id: number, sort_id: number, meta?: { hidden: boolean, icon: string, title: string, affix: boolean, permissions: string, keep_alive: boolean } | null, children?: Array<{ id: number, name: string, display_name: string, path?: string | null, component?: string | null, redirect?: string | null, parent_id: number, sort_id: number }> | null }> | null }> | null }> };

export type CategoriesQueryVariables = Exact<{
  input: Scalars['String']['input'];
}>;


export type CategoriesQuery = { categories: Array<{ id: number, title: string, keywords: string, description: string, thumb?: string | null, parent_id: number, is_visible: boolean, sort_id: number, slug?: string | null, core_id: number, children?: Array<{ id: number, title: string, keywords: string, description: string, thumb?: string | null, parent_id: number, is_visible: boolean, sort_id: number, slug?: string | null, children?: Array<{ id: number, title: string, keywords: string, description: string, thumb?: string | null, parent_id: number, is_visible: boolean, sort_id: number, slug?: string | null }> | null }> | null }> };

export type BannersQueryVariables = Exact<{
  input: Scalars['String']['input'];
}>;


export type BannersQuery = { banners: Array<{ id: number, status: number, is_visible: boolean, expired_at?: number | null, is_link: boolean, link_url?: string | null, is_video: boolean, video_url?: string | null, cover_image?: string | null, sort_id: number, hit_count: number, views_count: number, title: string, view_type: number }> };

export type PackagesQueryVariables = Exact<{ [key: string]: never; }>;


export type PackagesQuery = { packages: Array<{ id: number, name: string, thumb: string, is_visible: boolean, sort_id: number, randomizable: boolean, total: number, avg: number }> };

export type ChartQueryVariables = Exact<{
  input: Scalars['String']['input'];
}>;


export type ChartQuery = { chart: { birthday: string, country: string, city: string, province?: number | null, hd_authority: string, hd_cross: string, hd_definition: string, hd_profile: string, hd_profile_cht: string, hd_strategy: string, hd_theme: string, hd_type: string, hd_thumb: string } };


export const CreateRoleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateRole"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"RoleInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createRole"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}]}]}}]} as unknown as DocumentNode<CreateRoleMutation, CreateRoleMutationVariables>;
export const UpdateRoleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateRole"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"RoleInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateRole"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}]}]}}]} as unknown as DocumentNode<UpdateRoleMutation, UpdateRoleMutationVariables>;
export const DeleteRoleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteRole"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteRole"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}]}}]} as unknown as DocumentNode<DeleteRoleMutation, DeleteRoleMutationVariables>;
export const UpdateRolePermissionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateRolePermissions"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateRolePermissions"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}]}]}}]} as unknown as DocumentNode<UpdateRolePermissionsMutation, UpdateRolePermissionsMutationVariables>;
export const UpdateRoleMenusDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateRoleMenus"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"RoleMenuObject"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateRoleMenus"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}]}]}}]} as unknown as DocumentNode<UpdateRoleMenusMutation, UpdateRoleMenusMutationVariables>;
export const CreateCoreDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateCore"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CoreInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createCore"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}]}]}}]} as unknown as DocumentNode<CreateCoreMutation, CreateCoreMutationVariables>;
export const UpdateCoreDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateCore"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CoreInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateCore"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}]}]}}]} as unknown as DocumentNode<UpdateCoreMutation, UpdateCoreMutationVariables>;
export const DeleteCoreDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteCore"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteCore"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}]}}]} as unknown as DocumentNode<DeleteCoreMutation, DeleteCoreMutationVariables>;
export const CreatePermissionTypeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreatePermissionType"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PermissionTypeInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createPermissionType"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}]}]}}]} as unknown as DocumentNode<CreatePermissionTypeMutation, CreatePermissionTypeMutationVariables>;
export const UpdatePermissionTypeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdatePermissionType"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PermissionTypeInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updatePermissionType"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}]}]}}]} as unknown as DocumentNode<UpdatePermissionTypeMutation, UpdatePermissionTypeMutationVariables>;
export const DeletePermissionTypeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeletePermissionType"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deletePermissionType"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}]}}]} as unknown as DocumentNode<DeletePermissionTypeMutation, DeletePermissionTypeMutationVariables>;
export const CreateAccountDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateAccount"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AccountInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createAccount"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}]}]}}]} as unknown as DocumentNode<CreateAccountMutation, CreateAccountMutationVariables>;
export const UpdateAccountDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateAccount"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AccountInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateAccount"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}]}]}}]} as unknown as DocumentNode<UpdateAccountMutation, UpdateAccountMutationVariables>;
export const DeleteAccountDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteAccount"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteAccount"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}]}}]} as unknown as DocumentNode<DeleteAccountMutation, DeleteAccountMutationVariables>;
export const CreatePermissionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreatePermission"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PermissionInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createPermission"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}]}]}}]} as unknown as DocumentNode<CreatePermissionMutation, CreatePermissionMutationVariables>;
export const UpdatePermissionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdatePermission"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PermissionInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updatePermission"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}]}]}}]} as unknown as DocumentNode<UpdatePermissionMutation, UpdatePermissionMutationVariables>;
export const DeletePermissionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeletePermission"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deletePermission"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}]}}]} as unknown as DocumentNode<DeletePermissionMutation, DeletePermissionMutationVariables>;
export const CreateSettingDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateSetting"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SettingInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createSetting"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}]}]}}]} as unknown as DocumentNode<CreateSettingMutation, CreateSettingMutationVariables>;
export const UpdateSettingDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateSetting"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SettingInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateSetting"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}]}]}}]} as unknown as DocumentNode<UpdateSettingMutation, UpdateSettingMutationVariables>;
export const DeleteSettingDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteSetting"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteSetting"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}]}}]} as unknown as DocumentNode<DeleteSettingMutation, DeleteSettingMutationVariables>;
export const CreateFileGroupDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateFileGroup"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"FileGroupInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createFileGroup"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}]}]}}]} as unknown as DocumentNode<CreateFileGroupMutation, CreateFileGroupMutationVariables>;
export const UpdateFileGroupDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateFileGroup"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"FileGroupInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateFileGroup"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}]}]}}]} as unknown as DocumentNode<UpdateFileGroupMutation, UpdateFileGroupMutationVariables>;
export const DeleteFileGroupDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteFileGroup"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteFileGroup"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}]}}]} as unknown as DocumentNode<DeleteFileGroupMutation, DeleteFileGroupMutationVariables>;
export const UpdateFileDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateFile"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"file"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Upload"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateFile"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"file"},"value":{"kind":"Variable","name":{"kind":"Name","value":"file"}}}]}]}}]} as unknown as DocumentNode<UpdateFileMutation, UpdateFileMutationVariables>;
export const CodeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Code"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"payload"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}]}]}}]} as unknown as DocumentNode<CodeMutation, CodeMutationVariables>;
export const CreateMenuDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateMenu"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MenuInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createMenu"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}]}]}}]} as unknown as DocumentNode<CreateMenuMutation, CreateMenuMutationVariables>;
export const UpdateMenuDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateMenu"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MenuInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateMenu"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}]}]}}]} as unknown as DocumentNode<UpdateMenuMutation, UpdateMenuMutationVariables>;
export const DeleteMenuDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteMenu"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteMenu"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}]}}]} as unknown as DocumentNode<DeleteMenuMutation, DeleteMenuMutationVariables>;
export const SigninDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Signin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}]}]}}]} as unknown as DocumentNode<SigninMutation, SigninMutationVariables>;
export const ResetPasswordDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ResetPassword"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"resetPassword"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"payload"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}]}]}}]} as unknown as DocumentNode<ResetPasswordMutation, ResetPasswordMutationVariables>;
export const LoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Login"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}]}]}}]} as unknown as DocumentNode<LoginMutation, LoginMutationVariables>;
export const LogoutDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Logout"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"logout"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}]}]}}]} as unknown as DocumentNode<LogoutMutation, LogoutMutationVariables>;
export const CreateCategoryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateCategory"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CategoryInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createCategory"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}]}]}}]} as unknown as DocumentNode<CreateCategoryMutation, CreateCategoryMutationVariables>;
export const UpdateCategoryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateCategory"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CategoryInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateCategory"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}]}]}}]} as unknown as DocumentNode<UpdateCategoryMutation, UpdateCategoryMutationVariables>;
export const DeleteCategoryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteCategory"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteCategory"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}]}}]} as unknown as DocumentNode<DeleteCategoryMutation, DeleteCategoryMutationVariables>;
export const CreateBannerDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateBanner"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"BannerInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createBanner"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}]}]}}]} as unknown as DocumentNode<CreateBannerMutation, CreateBannerMutationVariables>;
export const UpdateBannerDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateBanner"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"BannerInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateBanner"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}]}]}}]} as unknown as DocumentNode<UpdateBannerMutation, UpdateBannerMutationVariables>;
export const DeleteBannerDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteBanner"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteBanner"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}]}}]} as unknown as DocumentNode<DeleteBannerMutation, DeleteBannerMutationVariables>;
export const CreatePackageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreatePackage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PackageInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createPackage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}]}]}}]} as unknown as DocumentNode<CreatePackageMutation, CreatePackageMutationVariables>;
export const UpdatePackageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdatePackage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PackageInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updatePackage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}]}]}}]} as unknown as DocumentNode<UpdatePackageMutation, UpdatePackageMutationVariables>;
export const DeletePackageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeletePackage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deletePackage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}]}}]} as unknown as DocumentNode<DeletePackageMutation, DeletePackageMutationVariables>;
export const CreateChartDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateChart"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ChartInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createChart"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}]}]}}]} as unknown as DocumentNode<CreateChartMutation, CreateChartMutationVariables>;
export const RolesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Roles"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"roles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"display_name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"is_visible"}},{"kind":"Field","name":{"kind":"Name","value":"sort_id"}},{"kind":"Field","name":{"kind":"Name","value":"permission_ids"}},{"kind":"Field","name":{"kind":"Name","value":"menu_ids"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"selected_keys"}},{"kind":"Field","name":{"kind":"Name","value":"indeterminate_keys"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"permissionTypes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"display_name"}},{"kind":"Field","name":{"kind":"Name","value":"sort_id"}},{"kind":"Field","name":{"kind":"Name","value":"permissions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"display_name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"is_visible"}},{"kind":"Field","name":{"kind":"Name","value":"sort_id"}},{"kind":"Field","name":{"kind":"Name","value":"type_id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"menus"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"display_name"}},{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"component"}},{"kind":"Field","name":{"kind":"Name","value":"redirect"}},{"kind":"Field","name":{"kind":"Name","value":"parent_id"}},{"kind":"Field","name":{"kind":"Name","value":"sort_id"}},{"kind":"Field","name":{"kind":"Name","value":"meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hidden"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"affix"}},{"kind":"Field","name":{"kind":"Name","value":"permissions"}},{"kind":"Field","name":{"kind":"Name","value":"keep_alive"}}]}},{"kind":"Field","name":{"kind":"Name","value":"children"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"display_name"}},{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"component"}},{"kind":"Field","name":{"kind":"Name","value":"redirect"}},{"kind":"Field","name":{"kind":"Name","value":"parent_id"}},{"kind":"Field","name":{"kind":"Name","value":"sort_id"}},{"kind":"Field","name":{"kind":"Name","value":"meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hidden"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"affix"}},{"kind":"Field","name":{"kind":"Name","value":"permissions"}},{"kind":"Field","name":{"kind":"Name","value":"keep_alive"}}]}},{"kind":"Field","name":{"kind":"Name","value":"children"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"display_name"}},{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"component"}},{"kind":"Field","name":{"kind":"Name","value":"redirect"}},{"kind":"Field","name":{"kind":"Name","value":"parent_id"}},{"kind":"Field","name":{"kind":"Name","value":"sort_id"}},{"kind":"Field","name":{"kind":"Name","value":"meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hidden"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"affix"}},{"kind":"Field","name":{"kind":"Name","value":"permissions"}},{"kind":"Field","name":{"kind":"Name","value":"keep_alive"}}]}},{"kind":"Field","name":{"kind":"Name","value":"children"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"display_name"}},{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"component"}},{"kind":"Field","name":{"kind":"Name","value":"redirect"}},{"kind":"Field","name":{"kind":"Name","value":"parent_id"}},{"kind":"Field","name":{"kind":"Name","value":"sort_id"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<RolesQuery, RolesQueryVariables>;
export const CoresDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Cores"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cores"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"display_name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"thumb"}},{"kind":"Field","name":{"kind":"Name","value":"is_visible"}},{"kind":"Field","name":{"kind":"Name","value":"sort_id"}}]}}]}}]} as unknown as DocumentNode<CoresQuery, CoresQueryVariables>;
export const PermissionTypesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"PermissionTypes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"permissionTypes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"display_name"}},{"kind":"Field","name":{"kind":"Name","value":"sort_id"}},{"kind":"Field","name":{"kind":"Name","value":"permissions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"display_name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"is_visible"}},{"kind":"Field","name":{"kind":"Name","value":"sort_id"}},{"kind":"Field","name":{"kind":"Name","value":"type_id"}}]}}]}}]}}]} as unknown as DocumentNode<PermissionTypesQuery, PermissionTypesQueryVariables>;
export const AccountsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Accounts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accounts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"app"}},{"kind":"Field","name":{"kind":"Name","value":"appid"}},{"kind":"Field","name":{"kind":"Name","value":"app_secret"}},{"kind":"Field","name":{"kind":"Name","value":"callback_url"}},{"kind":"Field","name":{"kind":"Name","value":"platform_type"}}]}},{"kind":"Field","name":{"kind":"Name","value":"platformTypes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<AccountsQuery, AccountsQueryVariables>;
export const SettingDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Setting"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"setting"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"keywords"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"host"}},{"kind":"Field","name":{"kind":"Name","value":"folder"}},{"kind":"Field","name":{"kind":"Name","value":"file_group_id"}},{"kind":"Field","name":{"kind":"Name","value":"email_driver"}},{"kind":"Field","name":{"kind":"Name","value":"email_host"}},{"kind":"Field","name":{"kind":"Name","value":"email_port"}},{"kind":"Field","name":{"kind":"Name","value":"email_username"}},{"kind":"Field","name":{"kind":"Name","value":"email_password"}},{"kind":"Field","name":{"kind":"Name","value":"email_encryption"}},{"kind":"Field","name":{"kind":"Name","value":"email_from_address"}},{"kind":"Field","name":{"kind":"Name","value":"email_from_name"}},{"kind":"Field","name":{"kind":"Name","value":"registrable"}}]}},{"kind":"Field","name":{"kind":"Name","value":"fileGroups"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"group_name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"parent_id"}},{"kind":"Field","name":{"kind":"Name","value":"sort_id"}}]}}]}}]} as unknown as DocumentNode<SettingQuery, SettingQueryVariables>;
export const FileGroupsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FileGroups"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fileGroups"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"group_name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"parent_id"}},{"kind":"Field","name":{"kind":"Name","value":"sort_id"}}]}}]}}]} as unknown as DocumentNode<FileGroupsQuery, FileGroupsQueryVariables>;
export const CanIUseDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"CanIUse"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"url"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"canIUse"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"url"},"value":{"kind":"Variable","name":{"kind":"Name","value":"url"}}}]}]}}]} as unknown as DocumentNode<CanIUseQuery, CanIUseQueryVariables>;
export const AuthDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Auth"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"auth"}}]}}]} as unknown as DocumentNode<AuthQuery, AuthQueryVariables>;
export const ProfileDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Profile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"profile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"profile_url"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"email_verified_at"}},{"kind":"Field","name":{"kind":"Name","value":"permissions"}},{"kind":"Field","name":{"kind":"Name","value":"role"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"display_name"}}]}}]}}]}}]} as unknown as DocumentNode<ProfileQuery, ProfileQueryVariables>;
export const MenusDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Menus"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"menus"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"display_name"}},{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"component"}},{"kind":"Field","name":{"kind":"Name","value":"redirect"}},{"kind":"Field","name":{"kind":"Name","value":"parent_id"}},{"kind":"Field","name":{"kind":"Name","value":"sort_id"}},{"kind":"Field","name":{"kind":"Name","value":"meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hidden"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"affix"}},{"kind":"Field","name":{"kind":"Name","value":"permissions"}},{"kind":"Field","name":{"kind":"Name","value":"keep_alive"}}]}},{"kind":"Field","name":{"kind":"Name","value":"children"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"display_name"}},{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"component"}},{"kind":"Field","name":{"kind":"Name","value":"redirect"}},{"kind":"Field","name":{"kind":"Name","value":"parent_id"}},{"kind":"Field","name":{"kind":"Name","value":"sort_id"}},{"kind":"Field","name":{"kind":"Name","value":"meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hidden"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"affix"}},{"kind":"Field","name":{"kind":"Name","value":"permissions"}},{"kind":"Field","name":{"kind":"Name","value":"keep_alive"}}]}},{"kind":"Field","name":{"kind":"Name","value":"children"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"display_name"}},{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"component"}},{"kind":"Field","name":{"kind":"Name","value":"redirect"}},{"kind":"Field","name":{"kind":"Name","value":"parent_id"}},{"kind":"Field","name":{"kind":"Name","value":"sort_id"}},{"kind":"Field","name":{"kind":"Name","value":"meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hidden"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"affix"}},{"kind":"Field","name":{"kind":"Name","value":"permissions"}},{"kind":"Field","name":{"kind":"Name","value":"keep_alive"}}]}},{"kind":"Field","name":{"kind":"Name","value":"children"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"display_name"}},{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"component"}},{"kind":"Field","name":{"kind":"Name","value":"redirect"}},{"kind":"Field","name":{"kind":"Name","value":"parent_id"}},{"kind":"Field","name":{"kind":"Name","value":"sort_id"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<MenusQuery, MenusQueryVariables>;
export const CategoriesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Categories"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"categories"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"keywords"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"thumb"}},{"kind":"Field","name":{"kind":"Name","value":"parent_id"}},{"kind":"Field","name":{"kind":"Name","value":"is_visible"}},{"kind":"Field","name":{"kind":"Name","value":"sort_id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"core_id"}},{"kind":"Field","name":{"kind":"Name","value":"children"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"keywords"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"thumb"}},{"kind":"Field","name":{"kind":"Name","value":"parent_id"}},{"kind":"Field","name":{"kind":"Name","value":"is_visible"}},{"kind":"Field","name":{"kind":"Name","value":"sort_id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"children"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"keywords"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"thumb"}},{"kind":"Field","name":{"kind":"Name","value":"parent_id"}},{"kind":"Field","name":{"kind":"Name","value":"is_visible"}},{"kind":"Field","name":{"kind":"Name","value":"sort_id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}}]}}]}}]} as unknown as DocumentNode<CategoriesQuery, CategoriesQueryVariables>;
export const BannersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Banners"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"banners"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"is_visible"}},{"kind":"Field","name":{"kind":"Name","value":"expired_at"}},{"kind":"Field","name":{"kind":"Name","value":"is_link"}},{"kind":"Field","name":{"kind":"Name","value":"link_url"}},{"kind":"Field","name":{"kind":"Name","value":"is_video"}},{"kind":"Field","name":{"kind":"Name","value":"video_url"}},{"kind":"Field","name":{"kind":"Name","value":"cover_image"}},{"kind":"Field","name":{"kind":"Name","value":"sort_id"}},{"kind":"Field","name":{"kind":"Name","value":"hit_count"}},{"kind":"Field","name":{"kind":"Name","value":"views_count"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"view_type"}}]}}]}}]} as unknown as DocumentNode<BannersQuery, BannersQueryVariables>;
export const PackagesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Packages"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"packages"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"thumb"}},{"kind":"Field","name":{"kind":"Name","value":"is_visible"}},{"kind":"Field","name":{"kind":"Name","value":"sort_id"}},{"kind":"Field","name":{"kind":"Name","value":"randomizable"}},{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"avg"}}]}}]}}]} as unknown as DocumentNode<PackagesQuery, PackagesQueryVariables>;
export const ChartDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Chart"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"chart"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"birthday"}},{"kind":"Field","name":{"kind":"Name","value":"country"}},{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"province"}},{"kind":"Field","name":{"kind":"Name","value":"hd_authority"}},{"kind":"Field","name":{"kind":"Name","value":"hd_cross"}},{"kind":"Field","name":{"kind":"Name","value":"hd_definition"}},{"kind":"Field","name":{"kind":"Name","value":"hd_profile"}},{"kind":"Field","name":{"kind":"Name","value":"hd_profile_cht"}},{"kind":"Field","name":{"kind":"Name","value":"hd_strategy"}},{"kind":"Field","name":{"kind":"Name","value":"hd_theme"}},{"kind":"Field","name":{"kind":"Name","value":"hd_type"}},{"kind":"Field","name":{"kind":"Name","value":"hd_thumb"}}]}}]}}]} as unknown as DocumentNode<ChartQuery, ChartQueryVariables>;