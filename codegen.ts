import { appid, token } from './config'

import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  schema: [
    {
      'http://127.0.0.1:8090/graphql': {
        headers: {
          Appid: appid,
          Authorization: `Bearer ${token}`
        }
      }
    }
  ],
  config: {
    namingConvention: {
      typeNames: 'change-case-all#pascalCase',
      enumValues: 'change-case-all#upperCase'
    }
  },
  ignoreNoDocuments: true,
  pluckConfig: {
    globalGqlIdentifierName: ['gql', 'graphql']
  },
  overwrite: true,
  debug: true,
  generates: {
    'generated/graphql.ts': {
      documents: ['graphql/*.graphql'],
      plugins: ['typescript', 'typescript-operations', 'typed-document-node'],
      config: {
        skipTypename: true, //<https://the-guild.dev/graphql/codegen/plugins/typescript/typescript-operations#skiptypename>
        withHooks: true,
        federation: true
      },
      hooks: {
        afterOneFileWrite: ['prettier --write']
      }
    },
    'generated/graphql.schema.json': {
      documents: ['graphql/*.graphql'],
      plugins: ['introspection']
    }
  }
}
export default config
