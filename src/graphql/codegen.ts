import { CodegenConfig } from '@graphql-codegen/cli'
 
const config: CodegenConfig = {
  schema: 'http://localhost:1337/graphql',
  documents: ['src/graphql/documents/**/*.gql'],
  generates: {
    './src/graphql/__generate__.ts': {
      plugins: ['typescript', 'typescript-operations', 'typescript-graphql-request']
    }
  },
  config: {
    maybeValue: 'T',
    avoidOptionals: true,
    immutableTypes: true
  }
}
 
export default config