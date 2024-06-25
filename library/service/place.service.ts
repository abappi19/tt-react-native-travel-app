import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useQueryBookingUpdate } from "../query/booking.query";
import { AppTypes, ServerResponseTypes } from "@/types";
import { useStoreUserBookings } from "../store/user";
import { useQueryCountryPaginate } from "../query/country.query";
import { useState } from "react";
import AppQueryKey from "@/constants/app-query/app-query-key.constanst";
import { useQueryPlacePaginate } from "../query/place.query";

export const useServicePlacePaginate = () => {
  const queryClient = useQueryClient();

  const [params, setParams] = useState<{
    limit: number;
    offset: number;
    search_query: string;
  }>({
    limit: 10,
    offset: 0,
    search_query: "",
  });
  const { data, refetch, isLoading } = useQueryPlacePaginate(params);

  const setFilterData = (params: {
    limit?: number;
    offset?: number;
    search_query?: string;
  }) => {
    // queryClient.removeQueries([AppQueryKey.QUERY_PLACE_PAGINATE], {
    //   exact: false,
    // });
    setParams((o) => ({ ...o, ...params }));
  };

  return {
    placeList: data?.payload,
    refetch,
    isLoading,
    setFilterData,
  };
};
