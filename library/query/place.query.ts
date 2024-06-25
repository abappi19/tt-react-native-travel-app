import AppQueryKey from "@/constants/app-query/app-query-key.constanst";
import { AppTypes, ServerResponseTypes } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { PlaceRepository } from "../repository/place.repository";

export const useQueryPlacePaginate = (params: {
  limit: number;
  offset: number;
  search_query: string;
}) =>
  useQuery<ServerResponseTypes.TApiResponse<AppTypes.PlaceType[]>>({
    queryKey: [AppQueryKey.QUERY_PLACE_PAGINATE, params],
    queryFn: () => PlaceRepository.getPlaces(params),
    staleTime: 20000,
  });
