import userService, { IUserService } from "@/api/restServices/user";
import { setHTTPClientInstance } from "./httpClient";

export interface IApiService {
  userService: IUserService;
}

export default {
  userService,
} as IApiService;

export { setHTTPClientInstance };
