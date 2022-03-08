import { AxiosResponse } from "axios";

import { apiBase } from "src/api/base";
import { LOGIN, USER } from "src/constants/api";
import { LoginPayload, LoginResponse, User } from "./auth";

export const authAPI = {
  login: (payload: LoginPayload): Promise<AxiosResponse<LoginResponse>> =>
    apiBase.post(LOGIN, payload),
  user: (): Promise<AxiosResponse<User>> => apiBase.get(USER),
};
