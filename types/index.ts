export namespace AppTypes {
  export type CountryType = {
    id: number;
    countryId: number;
    twoDigitCode: string;
    name: string;
    phoneCode: string;
    flag: string;
    statesList: null;
    image: any;
  };

  export type RecommendationType = {
    id: number;
    countryId: number;
    name: string;
    rating: number;
    review: string;
    image: any;
  };
}
