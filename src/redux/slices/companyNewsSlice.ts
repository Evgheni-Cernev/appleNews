import { createSlice, current, PayloadAction } from "@reduxjs/toolkit";
import { CompanyNewsResponse } from "../api/apiNews/types";

import { PaginationStep } from "../../constants";
import { paginate } from "../utils";
import { RootState } from "../store";
import indexOf from "lodash/indexOf";
import findIndex from "lodash/findIndex";
import sortBy from "lodash/sortBy";
import { setLocalstorageData } from "../../utils/localstorage";

interface State {
  company_news: CompanyNewsResponse[];
}

const initialState: State = { company_news: [] };

export const companeNewsSlice = createSlice({
  name: "companeNews",
  initialState: initialState,
  reducers: {
    setCompanyNews: (
      state,
      { payload: data }: PayloadAction<CompanyNewsResponse[]>
    ) => {
      state.company_news = data.reduce((acc: CompanyNewsResponse[], cv) => {
        if (!cv.image) return acc;
        const localStorageData =
          window.localStorage.getItem("bookmark") ?? "[]";
        const isExist = indexOf(JSON.parse(localStorageData), cv.id) !== -1;
        acc.push({
          ...cv,
          bookmark: isExist,
        });
        return acc;
      }, []);
      return state;
    },
    setBookmark: (
      state,
      {
        payload: { newsId, isBookmarked },
      }: PayloadAction<{ newsId: number; isBookmarked: boolean }>
    ) => {
      const localStorageData = window.localStorage.getItem("bookmark") ?? "[]";
      const isExist = indexOf(JSON.parse(localStorageData), newsId) === -1;
      if (isExist) {
        setLocalstorageData("bookmark", [
          ...JSON.parse(localStorageData),
          newsId,
        ]);
      } else {
        setLocalstorageData(
          "bookmark",
          JSON.parse(localStorageData).filter(
            (id: string) => Number(id) !== newsId
          )
        );
      }
      var foundIndex = findIndex(
        current(state.company_news),
        (news) => news.id === newsId
      );
      state.company_news[foundIndex] = {
        ...state.company_news[foundIndex],
        bookmark: isBookmarked,
      };
    },
  },
});

export const { setCompanyNews, setBookmark } = companeNewsSlice.actions;

export const selectCopmanyNews = (state: RootState, page: number,  filter: (data: CompanyNewsResponse[]) => {
  query:string,
  resultData: CompanyNewsResponse[],
}) => {
  const data = state.companyNews.company_news;
  const {resultData} = filter(data);
  return {
    companeNews: paginate(resultData, PaginationStep, page),
    counter: resultData.length,
    pages: Math.round(resultData.length / PaginationStep),
  };
};

export const selectLastCopmanyNews = (state: RootState) => {
  const data = state.companyNews.company_news;
  return sortBy(data, [
    (item) => {
      return item.datetime;
    },
  ])[0];
};

export const selectBookmarkedCopmanyNews = (state: RootState, page: number, filter: (data: CompanyNewsResponse[]) => {
  query:string,
  resultData: CompanyNewsResponse[],
}) => {
  const data = state.companyNews.company_news.filter(news => news.bookmark);
  const {resultData} = filter(data);
  return {
    bookmarkedCompaneNews: paginate(resultData, PaginationStep, page),
    bookmarkedCounter: resultData.length,
    bookmarkedPages: Math.round(resultData.length / PaginationStep),
  };
};
