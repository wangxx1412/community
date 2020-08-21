export interface Community {
  id: string;
  name: string;
  imgUrl: string;
  group: string;
}

export interface CommunitiesList extends Array<Community> {}

export interface Home {
  id: string;
  communityId: string;
  price: number;
  area: number;
  type: "House" | "Condo" | "Townhome";
}

export interface HomesList extends Array<Home> {}

export interface PriceRangeTypes {
  min: number | "";
  max: number | "";
}
