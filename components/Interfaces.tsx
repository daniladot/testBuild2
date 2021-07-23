export interface IInterestEventRowMobile {
  image?: string;
  title: string;
  text: string;
}

export interface IMobileInterestEventBig extends IInterestEventRowMobile{
  platform: string,
  price: string,
  genre: string,
  date:string,
  rating?: string,
  premier?: boolean
}

export interface IMobileTextCard {
  text: string
}

export interface IMobileMiniInformation {
  platform?: string,
  price?: string,
  genre?: string,
  url?: string
}
