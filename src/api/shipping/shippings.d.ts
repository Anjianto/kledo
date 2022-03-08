export interface ShippingPayload {
  name: string;
}

export interface ShippingsResponse {
  data: {
    id: number;
    name: string;
  }[];
}
