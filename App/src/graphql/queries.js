/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTodo = /* GraphQL */ `
  query GetTodo($id: ID!) {
    getTodo(id: $id) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const listTodos = /* GraphQL */ `
  query ListTodos(
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getBoardZolertia1 = /* GraphQL */ `
  query GetBoardZolertia1($iteracao: Int!) {
    getBoardZolertia1(iteracao: $iteracao) {
      iteracao
      Board
      Light
      Soil
      Uptime
    }
  }
`;
export const listBoardZolertia1S = /* GraphQL */ `
  query ListBoardZolertia1S(
    $filter: TableBoardZolertia1FilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBoardZolertia1S(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        iteracao
        Board
        Light
        Soil
        Uptime
      }
      nextToken
    }
  }
`;
export const getIcapp = /* GraphQL */ `
  query GetIcapp($name: String!) {
    getIcapp(name: $name) {
      name
      description
    }
  }
`;
export const listIcapps = /* GraphQL */ `
  query ListIcapps(
    $filter: TableIcappFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listIcapps(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        name
        description
      }
      nextToken
    }
  }
`;
