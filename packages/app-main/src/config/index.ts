
type ENV = 'online' | 'test' | 'preview';

let env: ENV = 'test'

export const seEnv = (netEnv: ENV = 'test') => {
  env = netEnv;
}

const appConfig = {
  test: {
    baseUrl: "http://localhost:8080/",
  }
}

export default {
  baseUrl: appConfig[env].baseUrl,
};
