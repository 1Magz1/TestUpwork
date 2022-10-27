import httpClient from "@/api/httpClient";
import { IUserPayload, IUserResponse } from "@/types/api/user";

export interface IUserService {
  requestUserInfo: (payload: IUserPayload) => Promise<IUserResponse>;
}

const requestUserInfo = async (
  payload: IUserPayload
): Promise<IUserResponse> => {
  const res = await httpClient.$post("login", { ...payload });
  console.log(res);
  return res;
};

export default {
  requestUserInfo,
} as IUserService;
