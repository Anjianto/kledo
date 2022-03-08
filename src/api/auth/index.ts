import { AxiosResponse } from "axios";

import { apiBase } from "src/api/base";
import { LOGIN, LOGOUT, USER } from "src/constants/api";
import { LoginPayload, LoginResponse, User } from "./auth";

export const authAPI = {
  login: (payload: LoginPayload): Promise<AxiosResponse<LoginResponse>> =>
    apiBase.post(LOGIN, payload),
  logout: (): Promise<AxiosResponse> => apiBase.post(LOGOUT),
  user: (): Promise<AxiosResponse<{ data: User }>> => apiBase.get(USER),
};
