import { AxiosResponse } from "axios";
import { DELETE_SHIPPING, SHIPPING, UPDATE_SHIPPING } from "src/constants/api";
import { apiBase } from "../base";
import { ShippingPayload, ShippingsResponse } from "./shippings";

type Update = {
  payload: ShippingPayload;
  id: string;
};

export const shippingAPI = {
  list: (
    search: string | undefined
  ): Promise<AxiosResponse<ShippingsResponse>> =>
    apiBase.get(SHIPPING, {
      params: {
        search,
      },
    }),
  create: (
    payload: ShippingPayload
  ): Promise<AxiosResponse<ShippingsResponse>> =>
    apiBase.post(SHIPPING, payload),
  update: ({
    id,
    payload,
  }: Update): Promise<AxiosResponse<ShippingsResponse>> =>
    apiBase.put(UPDATE_SHIPPING(id), payload),
  delete: (id: string) => apiBase.delete(DELETE_SHIPPING(id)),
};
