import { AxiosError } from "axios";
import { useMutation, useQuery } from "react-query";
import { useNavigate, useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";

import { shippingAPI } from "src/api/shipping";
import { APIError } from "src/api/base/base";
import { SHIPPING } from "src/constants/api";

export const useShippings = () => {
  const [searchParams] = useSearchParams();

  return useQuery(SHIPPING, () =>
    shippingAPI.list(searchParams.get("q") || undefined)
  );
};

export const useCreateShipping = () => {
  const navigate = useNavigate();

  return useMutation(shippingAPI.create, {
    onSuccess: () => {
      navigate("/shippings");
    },
    onError(error) {
      const currentError = error as AxiosError<APIError>;
      if (currentError.response?.data.message) {
        toast.error(currentError.response.data.message);
      }
    },
  });
};

export const useUpdateShipping = () => {
  const navigate = useNavigate();
  return useMutation(shippingAPI.update, {
    onSuccess: () => {
      navigate("/shippings");
    },
    onError(error) {
      const currentError = error as AxiosError<APIError>;
      if (currentError.response?.data.message) {
        toast.error(currentError.response.data.message);
      }
    },
  });
};

export const useDeleteShipping = () => {
  const navigate = useNavigate();
  return useMutation(shippingAPI.delete, {
    onSuccess: () => {
      navigate("/shippings");
    },
    onError(error) {
      const currentError = error as AxiosError<APIError>;
      if (currentError.response?.data.message) {
        toast.error(currentError.response.data.message);
      }
    },
  });
};
