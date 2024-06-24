import { ServerResponseTypes } from "@/types";
import { useMutation } from "@tanstack/react-query";
import { BookingRepository } from "../repository/booking.repository";

type TBookingUpdateServerResponse = ServerResponseTypes.TApiResponse<null>;

export const useQueryBookingUpdate = () =>
  useMutation<
    TBookingUpdateServerResponse,
    {
      response: {
        data: TBookingUpdateServerResponse;
      };
    },
    {
        hotel_id:number;
        room_id: number;
        total_guest: number;

    }
  >({
    mutationFn: BookingRepository.updateBooking
  })
