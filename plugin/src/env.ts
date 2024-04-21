type IEnvironment = {
  Api: {
    BaseUrl: string;
    Token: string;
  };
};

export const env: IEnvironment = {
  Api: {
    BaseUrl: "http://localhost:3000",
    Token: "token",
  },
};
