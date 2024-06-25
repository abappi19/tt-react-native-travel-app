import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useQueryBookingUpdate } from "../query/booking.query";
import { AppTypes, ServerResponseTypes } from "@/types";
import { useStoreUserBookings } from "../store/user";
import { useQueryCountryPaginate } from "../query/country.query";
import { useState } from "react";
import AppQueryKey from "@/constants/app-query/app-query-key.constanst";

export const useServiceCountryPaginate = () => {
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
  const { data, refetch, isLoading } = useQueryCountryPaginate(params);

  const setFilterData = (params: {
    limit?: number;
    offset?: number;
    search_query?: string;
  }) => {
    // queryClient.removeQueries([AppQueryKey.QUERY_COUNTRY_PAGINATE], {
    //   exact: false,
    // });
    setParams((o) => ({ ...o, ...params }));
  };

  return {
    countryList: data?.payload,
    refetch,
    isLoading,
    setFilterData,
  };
};
