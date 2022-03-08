import { AxiosError } from "axios";
import { useMutation, useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { authAPI } from "src/api/auth";
import { APIError } from "src/api/base/base";
import { USER } from "src/constants/api";
import { RootState } from "src/store";
import { setUser } from "src/store/user";

export const useLogin = () => useMutation(authAPI.login);

export const useIsAuthenticated = () => {
  const user = useSelector((state: RootState) => state.user.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useQuery(USER, () => authAPI.user(), {
    enabled: Object.keys(user).length < 1,
    refetchOnWindowFocus: false,
    retry: 1,
    onSuccess(data) {
      dispatch(setUser(data.data));
    },
    onError(error) {
      const currentError = error as AxiosError<APIError>;
      if (currentError.response?.status === 401) {
        navigate("/login", { replace: true });
      }
    },
  });

  return { user, isAuthenticated: Object.keys(user).length > 1 };
};
