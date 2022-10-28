export interface IUserPayload {
  login: string;
  password: string;
}

export interface IUserInfo {
  id: number;
  name: string;
  secondName: string;
  profession: string;
}

export interface IUserResponse {
  data: IUserInfo;
}
