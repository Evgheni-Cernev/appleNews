import { api, tagTypes } from "../../api";
import { setCompanyNews } from "../../slices/companyNewsSlice";
import { CompanyNewsResponse, CompanyNewsRequest } from "./types";

const baseUrl = process.env.REACT_APP_BASE_URL;
const token = process.env.REACT_APP_ACCESS_TOKEN;

export const comapneNewsApi = api.injectEndpoints({
  endpoints: (build) => ({
    getCompanyNews: build.query<CompanyNewsResponse[], CompanyNewsRequest>({
      query: (req) => {
        return ({
            url: baseUrl + '/company-news',
            method: "GET",
            params: { symbol: req.symbol, from: req.from, to: req.to,   token },
            onSuccess: async (dispatch, data) => {
              const response = data as CompanyNewsResponse[];
              dispatch(setCompanyNews(response));
            },
          })
      },
      providesTags: [tagTypes.companyNews],
    }),
  }),
});

export const {
  useGetCompanyNewsQuery,
} = comapneNewsApi;
