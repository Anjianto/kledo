import { AxiosError } from "axios";
import Cookies from "js-cookie";
import { useMutation, useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { authAPI } from "src/api/auth";
import { APIError } from "src/api/base/base";
import { USER } from "src/constants/api";
import { RootState } from "src/store";
import { resetTokenType, resetUser, setUser } from "src/store/user";

export const useLogin = () => useMutation(authAPI.login);

export const useLogout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const resetState = () => {
    dispatch(resetUser());
    dispatch(resetTokenType());
  };

  const mutation = useMutation(authAPI.logout, {
    onSuccess() {
      Cookies.remove("access_token");
      resetState();
      navigate("/", { replace: true });
    },
    onError(error) {
      const currentError = error as AxiosError<APIError>;
      if (currentError.response?.status === 401) {
        resetState();
        navigate("/", { replace: true });
      }
    },
  });

  return mutation;
};

export const useIsAuthenticated = () => {
  const user = useSelector((state: RootState) => state.user.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useQuery(USER, () => authAPI.user(), {
    enabled: !user,
    refetchOnWindowFocus: false,
    retry: 1,
    onSuccess(data) {
      dispatch(setUser(data.data.data));
    },
    onError(error) {
      const currentError = error as AxiosError<APIError>;
      if (currentError.response?.status === 401) {
        navigate("/login", { replace: true });
      }
    },
  });

  return { user, isAuthenticated: !!user };
};
