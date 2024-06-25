import countries from "@/assets/data/countries";
import { AppTypes, ServerResponseTypes } from "@/types";
import { Utils } from "@/utils/utils";

const getCountries = async (params: {
  limit: number;
  offset: number;
  search_query: string;
}): Promise<ServerResponseTypes.TApiResponse<AppTypes.CountryType[]>> => {
  await Utils.sleep(2000);

  const filteredCountries = countries
    .filter((country) =>
      country.name
        .toLowerCase()
        .trim()
        .includes(params.search_query.trim().toLowerCase())
    )
    .slice(0, params.limit - params.offset);

  return {
    message: "success",
    nonce: -1,
    status: 200,
    payload: filteredCountries,
  };
};

export const CountryRepository = {
  getCountries,
};
