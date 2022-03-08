import { useEffect } from "react";

import Cookie from "js-cookie";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { LoginPayload } from "src/api/auth/auth";
import { useLogin } from "src/services/auth";
import { setTokenType, setUser } from "src/store/user";

export const Login = () => {
  const navigate = useNavigate();
  const { mutate } = useLogin();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginPayload>();

  useEffect(() => {
    // eslint-disable-next-line array-callback-return
    Object.keys(errors).map((error) => {
      toast.error(error);
    });
  }, [errors]);

  const onSubmit = (data: LoginPayload) => {
    mutate(data, {
      onSuccess(data) {
        const currentData = data.data.data;
        const tokenData = currentData.data;
        const accessToken = tokenData.access_token;
        const expiresAt = tokenData.expires_at;
        const tokenType = tokenData.token_type;

        const user = currentData.user;
        dispatch(setUser(user));
        dispatch(setTokenType(tokenType));

        Cookie.set("access_token", accessToken, {
          expires: new Date(expiresAt),
        });
        navigate("/", {
          replace: true,
        });
      },
      onError(error) {
        const currentError: any = error;
        if (currentError.response.data.message) {
          toast.error(currentError.response.data.message);
        }
      },
    });
  };
  const emailRe =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label
            htmlFor="email"
            className="block text-lg font-semibold text-gray-500 md:text-2xl"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            {...register("email", {
              required: true,
              pattern: {
                message: "Invalid Email!",
                value: emailRe,
              },
            })}
            className="form-input mt-2 min-h-[3rem] w-full rounded-[10px] border-gray-200 bg-white focus:border-gray-200 focus:ring-gray-200 md:mt-4"
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="mt-4 block text-lg font-semibold text-gray-500 md:mt-7 md:text-2xl"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            {...register("password", {
              required: true,
            })}
            className="form-input mt-4 min-h-[3rem] w-full rounded-[10px] border-gray-200 bg-white focus:border-gray-200 focus:ring-gray-200"
          />
        </div>
        <button
          type="submit"
          className="mx-auto mt-16 block w-full rounded-full bg-blue-600/80 py-3 text-xl font-bold text-white hover:bg-blue-500 md:w-4/5 md:text-2xl"
        >
          Login
        </button>
      </form>
    </>
  );
};
