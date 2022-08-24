export interface paramsUser {
  email: string;
  password: string;
}

export const UserModel = ({email, password}: paramsUser) => {
  return {
    email,
    password,
  };
};
