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
  _FieldSet: { input: any; output: any; }
};

export type AccountInput = {
  app: Scalars['String']['input'];
  app_secret?: InputMaybe<Scalars['String']['input']>;
  appid: Scalars['String']['input'];
  callback_url?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  platform_type: Scalars['Int']['input'];
};

export type AccountObject = {
  app: Scalars['String']['output'];
  app_secret?: Maybe<Scalars['String']['output']>;
  appid: Scalars['String']['output'];
  callback_url?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  platform_type: Scalars['Int']['output'];
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
  description?: InputMaybe<Scalars['String']['input']>;
  display_name?: InputMaybe<Scalars['String']['input']>;
  meta?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  parent_id: Scalars['Int']['input'];
  path?: InputMaybe<Scalars['String']['input']>;
  redirect?: InputMaybe<Scalars['String']['input']>;
  sort_id: Scalars['Int']['input'];
};

export type MenuObject = {
  component?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  display_name?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  meta?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  parent_id: Scalars['Int']['output'];
  path?: Maybe<Scalars['String']['output']>;
  redirect?: Maybe<Scalars['String']['output']>;
  sort_id: Scalars['Int']['output'];
};

export type Mutation = {
  code: Scalars['String']['output'];
  createAccount: Scalars['String']['output'];
  createCore: Scalars['String']['output'];
  createFileGroup: Scalars['String']['output'];
  createMenu: Scalars['String']['output'];
  createPermission: Scalars['String']['output'];
  createPermissionType: Scalars['String']['output'];
  createRole: Scalars['String']['output'];
  createSetting: Scalars['String']['output'];
  deleteAccount: Scalars['String']['output'];
  deleteCore: Scalars['String']['output'];
  deleteFileGroup: Scalars['String']['output'];
  deleteMenu: Scalars['String']['output'];
  deletePermission: Scalars['String']['output'];
  deletePermissionType: Scalars['String']['output'];
  deleteRole: Scalars['String']['output'];
  deleteSetting: Scalars['String']['output'];
  login: Scalars['String']['output'];
  logout: Scalars['String']['output'];
  resetPassword: Scalars['String']['output'];
  signup: Scalars['String']['output'];
  updateAccount: Scalars['String']['output'];
  updateCore: Scalars['String']['output'];
  updateFileGroup: Scalars['String']['output'];
  updateMenu: Scalars['String']['output'];
  updatePermission: Scalars['String']['output'];
  updatePermissionType: Scalars['String']['output'];
  updateRole: Scalars['String']['output'];
  updateSetting: Scalars['String']['output'];
};


export type MutationCodeArgs = {
  payload: Scalars['String']['input'];
};


export type MutationCreateAccountArgs = {
  input: AccountInput;
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


export type MutationDeleteCoreArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeleteFileGroupArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeleteMenuArgs = {
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
  payload: Scalars['String']['input'];
};


export type MutationResetPasswordArgs = {
  payload: Scalars['String']['input'];
};


export type MutationSignupArgs = {
  payload: Scalars['String']['input'];
};


export type MutationUpdateAccountArgs = {
  id: Scalars['Int']['input'];
  input: AccountInput;
};


export type MutationUpdateCoreArgs = {
  id: Scalars['Int']['input'];
  input: CoreInput;
};


export type MutationUpdateFileGroupArgs = {
  id: Scalars['Int']['input'];
  input: FileGroupInput;
};


export type MutationUpdateMenuArgs = {
  id: Scalars['Int']['input'];
  input: MenuInput;
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


export type MutationUpdateSettingArgs = {
  id: Scalars['Int']['input'];
  input: SettingInput;
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
  accounts: Array<AccountObject>;
  auth: Scalars['Boolean']['output'];
  canIUse: Array<Scalars['String']['output']>;
  cores: Array<CoreObject>;
  fileGroups: Array<FileGroupObject>;
  menus: Array<MenuObject>;
  permissionTypes: Array<PermissionTypeObject>;
  permissions: Array<PermissionObject>;
  platformTypes: Array<PlatformTypeObject>;
  profile: UserObject;
  roles: Array<RoleObject>;
  setting: SettingObject;
  userLogs: Array<UserLogObject>;
};


export type QueryCanIUseArgs = {
  url: Scalars['String']['input'];
};


export type QueryUserLogsArgs = {
  userId?: InputMaybe<Scalars['Int']['input']>;
};

export type RoleInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  display_name?: InputMaybe<Scalars['String']['input']>;
  is_visible?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  sort_id?: InputMaybe<Scalars['Int']['input']>;
};

export type RoleObject = {
  description?: Maybe<Scalars['String']['output']>;
  display_name?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  is_visible: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
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
  keywords?: Maybe<Scalars['String']['output']>;
  registrable: Scalars['Boolean']['output'];
  title: Scalars['String']['output'];
};

export type UserLogObject = {
  city?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  ip?: Maybe<Scalars['String']['output']>;
  login_at?: Maybe<Scalars['String']['output']>;
  login_type: Scalars['Int']['output'];
  logout_at?: Maybe<Scalars['String']['output']>;
  user_id: Scalars['Int']['output'];
};

export type UserObject = {
  email: Scalars['String']['output'];
  email_verified_at?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  profile_url?: Maybe<Scalars['String']['output']>;
  status: Scalars['Boolean']['output'];
};

export type LoginMutationVariables = Exact<{
  input: Scalars['String']['input'];
}>;


export type LoginMutation = { login: string };

export type SignupMutationVariables = Exact<{
  input: Scalars['String']['input'];
}>;


export type SignupMutation = { signup: string };

export type CodeMutationVariables = Exact<{
  input: Scalars['String']['input'];
}>;


export type CodeMutation = { code: string };

export type ResetPasswordMutationVariables = Exact<{
  input: Scalars['String']['input'];
}>;


export type ResetPasswordMutation = { resetPassword: string };

export type CreateAccountMutationVariables = Exact<{
  input: AccountInput;
}>;


export type CreateAccountMutation = { createAccount: string };

export type UpdateAccountMutationVariables = Exact<{
  id: Scalars['Int']['input'];
  input: AccountInput;
}>;


export type UpdateAccountMutation = { updateAccount: string };

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

export type DeleteAccountMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type DeleteAccountMutation = { deleteAccount: string };

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

export type UpdateSettingMutationVariables = Exact<{
  id: Scalars['Int']['input'];
  input: SettingInput;
}>;


export type UpdateSettingMutation = { updateSetting: string };

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

export type ProfileQueryVariables = Exact<{ [key: string]: never; }>;


export type ProfileQuery = { profile: { id: number, email: string, name: string, profile_url?: string | null, status: boolean, email_verified_at?: string | null } };

export type SettingQueryVariables = Exact<{ [key: string]: never; }>;


export type SettingQuery = { setting: { title: string, keywords?: string | null, description?: string | null, host: string, folder: string, file_group_id: number, email_driver?: string | null, email_host?: string | null, email_port: number, email_username?: string | null, email_password?: string | null, email_encryption?: string | null, email_from_address?: string | null, email_from_name?: string | null, registrable: boolean }, fileGroups: Array<{ id: number, group_name: string, description?: string | null, parent_id: number, sort_id: number }> };

export type AuthQueryVariables = Exact<{ [key: string]: never; }>;


export type AuthQuery = { auth: boolean };

export type AccountsQueryVariables = Exact<{ [key: string]: never; }>;


export type AccountsQuery = { accounts: Array<{ id: number, name: string, app: string, appid: string, app_secret?: string | null, callback_url?: string | null, platform_type: number }> };

export type RolesQueryVariables = Exact<{ [key: string]: never; }>;


export type RolesQuery = { roles: Array<{ id: number, name: string, display_name?: string | null, description?: string | null, is_visible: boolean, sort_id: number }> };

export type PermissionTypesQueryVariables = Exact<{ [key: string]: never; }>;


export type PermissionTypesQuery = { permissionTypes: Array<{ id: number, name: string, display_name?: string | null, sort_id: number, permissions?: Array<{ id: number, name: string, display_name?: string | null, description?: string | null, is_visible: boolean, sort_id: number, type_id?: number | null }> | null }> };

export type CanIUseQueryVariables = Exact<{
  input: Scalars['String']['input'];
}>;


export type CanIUseQuery = { canIUse: Array<string> };

export type FileGroupsQueryVariables = Exact<{ [key: string]: never; }>;


export type FileGroupsQuery = { fileGroups: Array<{ id: number, group_name: string, description?: string | null, parent_id: number, sort_id: number }> };

export type CoresQueryVariables = Exact<{ [key: string]: never; }>;


export type CoresQuery = { cores: Array<{ id: number, name: string, display_name?: string | null, description?: string | null, thumb?: string | null, is_visible: boolean, sort_id: number }> };


export const LoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Login"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"payload"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}]}]}}]} as unknown as DocumentNode<LoginMutation, LoginMutationVariables>;
export const SignupDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Signup"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signup"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"payload"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}]}]}}]} as unknown as DocumentNode<SignupMutation, SignupMutationVariables>;
export const CodeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Code"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"payload"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}]}]}}]} as unknown as DocumentNode<CodeMutation, CodeMutationVariables>;
export const ResetPasswordDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ResetPassword"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"resetPassword"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"payload"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}]}]}}]} as unknown as DocumentNode<ResetPasswordMutation, ResetPasswordMutationVariables>;
export const CreateAccountDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateAccount"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AccountInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createAccount"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}]}]}}]} as unknown as DocumentNode<CreateAccountMutation, CreateAccountMutationVariables>;
export const UpdateAccountDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateAccount"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AccountInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateAccount"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}]}]}}]} as unknown as DocumentNode<UpdateAccountMutation, UpdateAccountMutationVariables>;
export const CreateFileGroupDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateFileGroup"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"FileGroupInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createFileGroup"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}]}]}}]} as unknown as DocumentNode<CreateFileGroupMutation, CreateFileGroupMutationVariables>;
export const UpdateFileGroupDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateFileGroup"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"FileGroupInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateFileGroup"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}]}]}}]} as unknown as DocumentNode<UpdateFileGroupMutation, UpdateFileGroupMutationVariables>;
export const DeleteFileGroupDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteFileGroup"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteFileGroup"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}]}}]} as unknown as DocumentNode<DeleteFileGroupMutation, DeleteFileGroupMutationVariables>;
export const CreateRoleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateRole"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"RoleInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createRole"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}]}]}}]} as unknown as DocumentNode<CreateRoleMutation, CreateRoleMutationVariables>;
export const UpdateRoleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateRole"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"RoleInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateRole"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}]}]}}]} as unknown as DocumentNode<UpdateRoleMutation, UpdateRoleMutationVariables>;
export const DeleteRoleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteRole"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteRole"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}]}}]} as unknown as DocumentNode<DeleteRoleMutation, DeleteRoleMutationVariables>;
export const DeleteAccountDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteAccount"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteAccount"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}]}}]} as unknown as DocumentNode<DeleteAccountMutation, DeleteAccountMutationVariables>;
export const CreatePermissionTypeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreatePermissionType"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PermissionTypeInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createPermissionType"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}]}]}}]} as unknown as DocumentNode<CreatePermissionTypeMutation, CreatePermissionTypeMutationVariables>;
export const UpdatePermissionTypeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdatePermissionType"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PermissionTypeInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updatePermissionType"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}]}]}}]} as unknown as DocumentNode<UpdatePermissionTypeMutation, UpdatePermissionTypeMutationVariables>;
export const DeletePermissionTypeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeletePermissionType"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deletePermissionType"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}]}}]} as unknown as DocumentNode<DeletePermissionTypeMutation, DeletePermissionTypeMutationVariables>;
export const CreatePermissionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreatePermission"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PermissionInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createPermission"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}]}]}}]} as unknown as DocumentNode<CreatePermissionMutation, CreatePermissionMutationVariables>;
export const UpdatePermissionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdatePermission"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PermissionInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updatePermission"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}]}]}}]} as unknown as DocumentNode<UpdatePermissionMutation, UpdatePermissionMutationVariables>;
export const DeletePermissionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeletePermission"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deletePermission"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}]}}]} as unknown as DocumentNode<DeletePermissionMutation, DeletePermissionMutationVariables>;
export const UpdateSettingDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateSetting"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SettingInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateSetting"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}]}]}}]} as unknown as DocumentNode<UpdateSettingMutation, UpdateSettingMutationVariables>;
export const CreateCoreDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateCore"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CoreInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createCore"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}]}]}}]} as unknown as DocumentNode<CreateCoreMutation, CreateCoreMutationVariables>;
export const UpdateCoreDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateCore"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CoreInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateCore"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}]}]}}]} as unknown as DocumentNode<UpdateCoreMutation, UpdateCoreMutationVariables>;
export const DeleteCoreDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteCore"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteCore"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}]}}]} as unknown as DocumentNode<DeleteCoreMutation, DeleteCoreMutationVariables>;
export const ProfileDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Profile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"profile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"profile_url"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"email_verified_at"}}]}}]}}]} as unknown as DocumentNode<ProfileQuery, ProfileQueryVariables>;
export const SettingDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Setting"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"setting"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"keywords"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"host"}},{"kind":"Field","name":{"kind":"Name","value":"folder"}},{"kind":"Field","name":{"kind":"Name","value":"file_group_id"}},{"kind":"Field","name":{"kind":"Name","value":"email_driver"}},{"kind":"Field","name":{"kind":"Name","value":"email_host"}},{"kind":"Field","name":{"kind":"Name","value":"email_port"}},{"kind":"Field","name":{"kind":"Name","value":"email_username"}},{"kind":"Field","name":{"kind":"Name","value":"email_password"}},{"kind":"Field","name":{"kind":"Name","value":"email_encryption"}},{"kind":"Field","name":{"kind":"Name","value":"email_from_address"}},{"kind":"Field","name":{"kind":"Name","value":"email_from_name"}},{"kind":"Field","name":{"kind":"Name","value":"registrable"}}]}},{"kind":"Field","name":{"kind":"Name","value":"fileGroups"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"group_name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"parent_id"}},{"kind":"Field","name":{"kind":"Name","value":"sort_id"}}]}}]}}]} as unknown as DocumentNode<SettingQuery, SettingQueryVariables>;
export const AuthDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Auth"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"auth"}}]}}]} as unknown as DocumentNode<AuthQuery, AuthQueryVariables>;
export const AccountsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Accounts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accounts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"app"}},{"kind":"Field","name":{"kind":"Name","value":"appid"}},{"kind":"Field","name":{"kind":"Name","value":"app_secret"}},{"kind":"Field","name":{"kind":"Name","value":"callback_url"}},{"kind":"Field","name":{"kind":"Name","value":"platform_type"}}]}}]}}]} as unknown as DocumentNode<AccountsQuery, AccountsQueryVariables>;
export const RolesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Roles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"roles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"display_name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"is_visible"}},{"kind":"Field","name":{"kind":"Name","value":"sort_id"}}]}}]}}]} as unknown as DocumentNode<RolesQuery, RolesQueryVariables>;
export const PermissionTypesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"PermissionTypes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"permissionTypes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"display_name"}},{"kind":"Field","name":{"kind":"Name","value":"sort_id"}},{"kind":"Field","name":{"kind":"Name","value":"permissions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"display_name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"is_visible"}},{"kind":"Field","name":{"kind":"Name","value":"sort_id"}},{"kind":"Field","name":{"kind":"Name","value":"type_id"}}]}}]}}]}}]} as unknown as DocumentNode<PermissionTypesQuery, PermissionTypesQueryVariables>;
export const CanIUseDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"CanIUse"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"canIUse"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"url"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}]}]}}]} as unknown as DocumentNode<CanIUseQuery, CanIUseQueryVariables>;
export const FileGroupsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FileGroups"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fileGroups"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"group_name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"parent_id"}},{"kind":"Field","name":{"kind":"Name","value":"sort_id"}}]}}]}}]} as unknown as DocumentNode<FileGroupsQuery, FileGroupsQueryVariables>;
export const CoresDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Cores"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cores"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"display_name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"thumb"}},{"kind":"Field","name":{"kind":"Name","value":"is_visible"}},{"kind":"Field","name":{"kind":"Name","value":"sort_id"}}]}}]}}]} as unknown as DocumentNode<CoresQuery, CoresQueryVariables>;