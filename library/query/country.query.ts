import AppQueryKey from "@/constants/app-query/app-query-key.constanst";
import { AppTypes, ServerResponseTypes } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { CountryRepository } from "../repository/country.repository";

export const useQueryCountryPaginate = (params: {
  limit: number;
  offset: number;
  search_query: string;
}) =>
  useQuery<ServerResponseTypes.TApiResponse<AppTypes.CountryType[]>>({
    queryKey: [AppQueryKey.QUERY_COUNTRY_PAGINATE, params],
    queryFn: () => CountryRepository.getCountries(params),
    staleTime: 20000,
  });
