import { ServerResponseTypes } from "@/types";
import { Utils } from "@/utils/utils";

const getCountries = async ({
  
}: {
  hotel_id: number;
  room_id: number;
  total_guest: number;
}): Promise<ServerResponseTypes.TApiResponse<null>> => {
  await Utils.sleep(1000);
  return {
    message: "success",
    nonce: -1,
    status: 200,
    payload: null,
  };
};

export const BookingRepository = {
  getCountries,
};
