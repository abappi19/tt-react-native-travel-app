
import places from "@/assets/data/places";
import { AppTypes, ServerResponseTypes } from "@/types";
import { Utils } from "@/utils/utils";

const getPlaces = async (params: {
  limit: number;
  offset: number;
  search_query: string;
}): Promise<ServerResponseTypes.TApiResponse<AppTypes.PlaceType[]>> => {
  await Utils.sleep(2000);

  const filteredPlaces = places
    .filter((place) =>
      place.name
        .toLowerCase()
        .trim()
        .includes(params.search_query.trim().toLowerCase())
    )
    .slice(0, params.limit - params.offset);

  return {
    message: "success",
    nonce: -1,
    status: 200,
    payload: filteredPlaces,
  };
};

export const PlaceRepository = {
  getPlaces,
};
