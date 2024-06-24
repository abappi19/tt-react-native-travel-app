import { useMutation } from "@tanstack/react-query";
import { useQueryBookingUpdate } from "../query/booking.query";
import { AppTypes, ServerResponseTypes } from "@/types";
import { useStoreUserBookings } from "../store/user";

export const useServiceBookingUpdate = ({
  onComplete,
}: {
  onComplete: (response: ServerResponseTypes.TApiResponse<null>) => void;
}) => {
  const { isLoading, mutate } = useQueryBookingUpdate();
  const { addToBookings } = useStoreUserBookings();

  const updateBooking = (data: AppTypes.BookingType) => {
    mutate(
      {
        hotel_id: data.hotel.id,
        room_id: data.room.id,
        total_guest: data.totalGuest,
      },
      {
        onSuccess(response) {
          if (response.message === "success") addToBookings(data);
          onComplete(response);
        },
      }
    );
  };

  return {
    isLoading,
    updateBooking,
  };
};
