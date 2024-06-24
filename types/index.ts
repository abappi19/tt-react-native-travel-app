export namespace ServerResponseTypes  {
  export type TApiResponse<T> = {
    nonce: number;
    status: number;
    message: string;
    payload: T;
  };

  interface IErrorField {
    field: string;
    message: string;
  }

  export interface IErrorError {
    fields: IErrorField[];
    systems: string;
  }

  export interface IError {
    status: number;
    message: string;
    error: IErrorError;
  }

}
export namespace AppTypes {
  
  export type CountryType = {
    id: number;
    countryId: number;
    twoDigitCode: string;
    name: string;
    phoneCode: string;
    flag: string;
    description: string;
    image: any;
  };

  export type UserType = {
    name: string;
    email: string;
    password: string;
    profileIcon?: string;
  };

  export type RecommendationType = {
    id: number;
    countryId: number;
    name: string;
    rating: number;
    review: string;
    image: any;
    location: string;
  };

  export type RoomType = {
    id: number;
    hotelId: number;
    name: string;
    rating: number;
    review: string;
    image: any;
    hotel: null | HotelType;
  };

  export type BookingType = {
    hotel: HotelType;
    bookingDate: string;
    expireDate: string;
  };

  export type HotelType = {
    id: number;
    name: string;
    rating: number;
    reviews: string;
    location: {
      lat: number;
      long: number;
      name: string;
    };
    image: any;
    description: string;
    reviewList: {
      name: string;
      review: string;
    }[];
  };
}
