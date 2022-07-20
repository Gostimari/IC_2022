/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTodo = /* GraphQL */ `
  subscription OnCreateTodo {
    onCreateTodo {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateTodo = /* GraphQL */ `
  subscription OnUpdateTodo {
    onUpdateTodo {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteTodo = /* GraphQL */ `
  subscription OnDeleteTodo {
    onDeleteTodo {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const onCreateBoardZolertia1 = /* GraphQL */ `
  subscription OnCreateBoardZolertia1($iteracao: Int) {
    onCreateBoardZolertia1(iteracao: $iteracao) {
      iteracao
      Board
      Light
      Soil
      Uptime
    }
  }
`;
export const onUpdateBoardZolertia1 = /* GraphQL */ `
  subscription OnUpdateBoardZolertia1($iteracao: Int) {
    onUpdateBoardZolertia1(iteracao: $iteracao) {
      iteracao
      Board
      Light
      Soil
      Uptime
    }
  }
`;
export const onDeleteBoardZolertia1 = /* GraphQL */ `
  subscription OnDeleteBoardZolertia1($iteracao: Int) {
    onDeleteBoardZolertia1(iteracao: $iteracao) {
      iteracao
      Board
      Light
      Soil
      Uptime
    }
  }
`;
export const onCreateIcapp = /* GraphQL */ `
  subscription OnCreateIcapp($name: String) {
    onCreateIcapp(name: $name) {
      name
      description
    }
  }
`;
export const onUpdateIcapp = /* GraphQL */ `
  subscription OnUpdateIcapp($name: String) {
    onUpdateIcapp(name: $name) {
      name
      description
    }
  }
`;
export const onDeleteIcapp = /* GraphQL */ `
  subscription OnDeleteIcapp($name: String) {
    onDeleteIcapp(name: $name) {
      name
      description
    }
  }
`;
