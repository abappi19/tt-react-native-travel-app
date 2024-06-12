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

  export type RecommendationType = {
    id: number;
    countryId: number;
    name: string;
    rating: number;
    review: string;
    image: any;
    location: string;
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
  };
}
