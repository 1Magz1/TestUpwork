import httpClient from "@/api/httpClient";
import { IUserPayload, IUserResponse } from "@/types/api/user";

export interface IUserService {
  requestUserInfo: (payload: IUserPayload) => Promise<IUserResponse | null>;
}

const requestUserInfo = async (
  payload: IUserPayload
): Promise<IUserResponse | null> => {
  let res = null;
  if (payload.login === "test@test.com" && payload.password === "12345") {
    res = await httpClient.$post("/login", payload);
  } else {
    throw Error("404");
  }
  return res;
};

export default {
  requestUserInfo,
} as IUserService;
