// apollo-serverモジュールを読み込む
const { ApolloServer } = require('apollo-server');

const typeDefs = `
  type Query {
    totalPhotos: Int!
  }
`

const resolvers = {
  Query: {
    totalPhotos: () => 42
  }
}

// サーバーのインスタンスを生成
// その際、typeDefs(スキーマ)とリゾルバを引数に取る
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Webサーバーを起動
server.listen().then(({url}) => console.log(`GraphQL Service running on ${url}`));