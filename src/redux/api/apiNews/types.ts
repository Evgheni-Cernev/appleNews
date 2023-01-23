export interface CompanyNewsResponse {
  category: string;
  datetime: number;
  headline: string;
  id: number | string;
  image: string;
  related: string;
  source: string;
  summary: string;
  bookmark?: boolean;
  url: string;
}

export interface CompanyNewsRequest {
   from: string,
   to: string,
   symbol: string,
  }
