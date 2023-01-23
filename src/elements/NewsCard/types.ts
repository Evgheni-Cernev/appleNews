import { CompanyNewsResponse } from "../../redux/api/apiNews/types";

export type NewsCardType = {
  news: CompanyNewsResponse;
  showLatest?: boolean;
  research?: boolean;
};
