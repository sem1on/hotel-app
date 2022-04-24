import { HOTELS_ACTION } from "../types";

export const hotelsRequest = (params) => ({
    type: HOTELS_ACTION,
    ...params
  });