export interface paramsUser {
  nameFull: string;
  email: string;
  password: string;
}

export const UserModel = ({nameFull, email, password}: paramsUser) => {
  return {
    nameFull,
    email,
    password,
  };
};
