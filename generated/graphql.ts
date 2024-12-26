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

export type FileGroupInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  group_name: Scalars['String']['input'];
  parent_id: Scalars['Int']['input'];
};

export type FileObject = {
  file_url: Scalars['String']['output'];
};

export type Mutation = {
  code: Scalars['String']['output'];
  createAccount: Scalars['String']['output'];
  createFileGroup: Scalars['String']['output'];
  createPermission: Scalars['String']['output'];
  createPermissionType: Scalars['String']['output'];
  createRole: Scalars['String']['output'];
  createSetting: Scalars['String']['output'];
  deleteAccount: Scalars['String']['output'];
  deletePermission: Scalars['String']['output'];
  deletePermissionType: Scalars['String']['output'];
  deleteRole: Scalars['String']['output'];
  login: Scalars['String']['output'];
  resetPassword: Scalars['String']['output'];
  signup: Scalars['String']['output'];
  updateAccount: Scalars['String']['output'];
  updatePermission: Scalars['String']['output'];
  updatePermissionType: Scalars['String']['output'];
  updateRole: Scalars['String']['output'];
  uploadFile: FileObject;
};


export type MutationCodeArgs = {
  payload: Scalars['String']['input'];
};


export type MutationCreateAccountArgs = {
  input: AccountInput;
};


export type MutationCreateFileGroupArgs = {
  input: FileGroupInput;
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


export type MutationDeletePermissionArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeletePermissionTypeArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeleteRoleArgs = {
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


export type MutationUploadFileArgs = {
  file: Scalars['Upload']['input'];
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

export type Query = {
  accounts: Array<AccountObject>;
  auth: Scalars['Boolean']['output'];
  canIUse: Array<Scalars['String']['output']>;
  getAccount: AccountObject;
  permissionTypes: Array<PermissionTypeObject>;
  profile: UserObject;
  roles: Array<RoleObject>;
  setting: SettingObject;
};


export type QueryCanIUseArgs = {
  url: Scalars['String']['input'];
};


export type QueryGetAccountArgs = {
  input: Scalars['String']['input'];
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
  email_port: Scalars['Int']['input'];
  email_username?: InputMaybe<Scalars['String']['input']>;
  file_group_id: Scalars['Int']['input'];
  folder: Scalars['String']['input'];
  host: Scalars['String']['input'];
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

export type UserObject = {
  email: Scalars['String']['output'];
  email_verified_at?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  is_admin: Scalars['Boolean']['output'];
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

export type UploadFileMutationVariables = Exact<{
  input: Scalars['Upload']['input'];
}>;


export type UploadFileMutation = { uploadFile: { file_url: string } };

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

export type ProfileQueryVariables = Exact<{ [key: string]: never; }>;


export type ProfileQuery = { profile: { id: number, email: string, name: string, profile_url?: string | null, status: boolean, email_verified_at?: string | null, is_admin: boolean } };

export type SettingQueryVariables = Exact<{ [key: string]: never; }>;


export type SettingQuery = { setting: { title: string, keywords?: string | null, description?: string | null, host: string, registrable: boolean } };

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


export const LoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Login"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"payload"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}]}]}}]} as unknown as DocumentNode<LoginMutation, LoginMutationVariables>;
export const SignupDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Signup"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signup"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"payload"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}]}]}}]} as unknown as DocumentNode<SignupMutation, SignupMutationVariables>;
export const CodeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Code"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"payload"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}]}]}}]} as unknown as DocumentNode<CodeMutation, CodeMutationVariables>;
export const UploadFileDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UploadFile"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Upload"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uploadFile"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"file"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"file_url"}}]}}]}}]} as unknown as DocumentNode<UploadFileMutation, UploadFileMutationVariables>;
export const ResetPasswordDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ResetPassword"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"resetPassword"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"payload"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}]}]}}]} as unknown as DocumentNode<ResetPasswordMutation, ResetPasswordMutationVariables>;
export const CreateAccountDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateAccount"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AccountInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createAccount"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}]}]}}]} as unknown as DocumentNode<CreateAccountMutation, CreateAccountMutationVariables>;
export const UpdateAccountDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateAccount"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AccountInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateAccount"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}]}]}}]} as unknown as DocumentNode<UpdateAccountMutation, UpdateAccountMutationVariables>;
export const CreateFileGroupDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateFileGroup"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"FileGroupInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createFileGroup"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}]}]}}]} as unknown as DocumentNode<CreateFileGroupMutation, CreateFileGroupMutationVariables>;
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
export const ProfileDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Profile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"profile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"profile_url"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"email_verified_at"}},{"kind":"Field","name":{"kind":"Name","value":"is_admin"}}]}}]}}]} as unknown as DocumentNode<ProfileQuery, ProfileQueryVariables>;
export const SettingDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Setting"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"setting"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"keywords"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"host"}},{"kind":"Field","name":{"kind":"Name","value":"registrable"}}]}}]}}]} as unknown as DocumentNode<SettingQuery, SettingQueryVariables>;
export const AuthDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Auth"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"auth"}}]}}]} as unknown as DocumentNode<AuthQuery, AuthQueryVariables>;
export const AccountsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Accounts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accounts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"app"}},{"kind":"Field","name":{"kind":"Name","value":"appid"}},{"kind":"Field","name":{"kind":"Name","value":"app_secret"}},{"kind":"Field","name":{"kind":"Name","value":"callback_url"}},{"kind":"Field","name":{"kind":"Name","value":"platform_type"}}]}}]}}]} as unknown as DocumentNode<AccountsQuery, AccountsQueryVariables>;
export const RolesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Roles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"roles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"display_name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"is_visible"}},{"kind":"Field","name":{"kind":"Name","value":"sort_id"}}]}}]}}]} as unknown as DocumentNode<RolesQuery, RolesQueryVariables>;
export const PermissionTypesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"PermissionTypes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"permissionTypes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"display_name"}},{"kind":"Field","name":{"kind":"Name","value":"sort_id"}},{"kind":"Field","name":{"kind":"Name","value":"permissions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"display_name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"is_visible"}},{"kind":"Field","name":{"kind":"Name","value":"sort_id"}},{"kind":"Field","name":{"kind":"Name","value":"type_id"}}]}}]}}]}}]} as unknown as DocumentNode<PermissionTypesQuery, PermissionTypesQueryVariables>;
export const CanIUseDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"CanIUse"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"canIUse"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"url"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}]}]}}]} as unknown as DocumentNode<CanIUseQuery, CanIUseQueryVariables>;