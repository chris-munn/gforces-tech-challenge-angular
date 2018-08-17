export const FOR_SALE = 'FOR_SALE';
export const NOT_FOR_SALE = 'NOT_FOR_SALE';
export class BookModel {
  kind: string;
  id: string;
  etag: string;
  selfLink: string;
  saleInfo: SaleInfoModel;
  volumeInfo: VolumeInfoModel;
}
export class VolumeInfoModel {
  title: string;
  publishedDate: string;
  publisher: string;
  description: string;
  ratingsCount: number;
  authors: string[];
  categories: string[];
}
export class SaleInfoModel {
  saleability: string;
  listPrice?: {
    amount: number;
    currencyCode: string;
  };
}
