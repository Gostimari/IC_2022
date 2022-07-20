/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTodo = /* GraphQL */ `
  mutation CreateTodo(
    $input: CreateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    createTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const updateTodo = /* GraphQL */ `
  mutation UpdateTodo(
    $input: UpdateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    updateTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const deleteTodo = /* GraphQL */ `
  mutation DeleteTodo(
    $input: DeleteTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    deleteTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const createBoardZolertia1 = /* GraphQL */ `
  mutation CreateBoardZolertia1($input: CreateBoardZolertia1Input!) {
    createBoardZolertia1(input: $input) {
      iteracao
      Board
      Light
      Soil
      Uptime
    }
  }
`;
export const updateBoardZolertia1 = /* GraphQL */ `
  mutation UpdateBoardZolertia1($input: UpdateBoardZolertia1Input!) {
    updateBoardZolertia1(input: $input) {
      iteracao
      Board
      Light
      Soil
      Uptime
    }
  }
`;
export const deleteBoardZolertia1 = /* GraphQL */ `
  mutation DeleteBoardZolertia1($input: DeleteBoardZolertia1Input!) {
    deleteBoardZolertia1(input: $input) {
      iteracao
      Board
      Light
      Soil
      Uptime
    }
  }
`;
export const createIcapp = /* GraphQL */ `
  mutation CreateIcapp($input: CreateIcappInput!) {
    createIcapp(input: $input) {
      name
      description
    }
  }
`;
export const updateIcapp = /* GraphQL */ `
  mutation UpdateIcapp($input: UpdateIcappInput!) {
    updateIcapp(input: $input) {
      name
      description
    }
  }
`;
export const deleteIcapp = /* GraphQL */ `
  mutation DeleteIcapp($input: DeleteIcappInput!) {
    deleteIcapp(input: $input) {
      name
      description
    }
  }
`;