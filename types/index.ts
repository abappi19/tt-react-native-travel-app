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
    email: string;
    password: string;
    name: string;
    profileIcon: string;
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

  export type BookingType = {
    hotel:HotelType;
    bookingDate: string;
    expireDate:string;
    
  }

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
