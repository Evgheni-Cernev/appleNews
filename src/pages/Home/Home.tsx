import { FC } from "react";
import moment from "moment";
import { useSelector } from "react-redux";
import { useGetCompanyNewsQuery } from "../../redux/api/apiNews/apiCpmpanyNews";
import { selectLastCopmanyNews } from "../../redux/slices/companyNewsSlice";
import NavMenu from "../../components/NavMenu/NavMenu";
import NewsCard from "../../elements/NewsCard/NewsCard";
import { Route, Routes } from "react-router-dom";
import { RootState } from "../../redux/store";

import Bookmarks from "../../components/Bookmarks/Bookmarks";
import NewsCopmany from "../../components/News/News";
import useGoToPage from "../../hooks/useGoToPage";

export const HomePage: FC = () => {
  const { page, goToPage } = useGoToPage();

  const { isLoading } = useGetCompanyNewsQuery({
    symbol: "AAPL",
    from: "2021-03-01",
    to: moment().format("YYYY-MM-DD"),
  });

  const data = useSelector((state: RootState) => selectLastCopmanyNews(state));

  if (isLoading) {
    return (
      <div className="bg-primary text-[white] px-[31px] py-[40px]">
        <NavMenu />
        <div className="flex">Loading ...</div>
      </div>
    );
  }

  return (
    <div className="bg-primary text-[white] px-[31px] py-[40px]">
      <NavMenu />
      <div className="flex">
        <div className="flex-[2_1_30%]">
          <div className="w-[478px] h-[628px] mr-[24px]">
            <NewsCard key={data.id} news={data} showLatest research />
          </div>
        </div>
        <div className="flex-[1_1_70%]">
          <Routes>
            <Route
              path="/appleNews/news"
              element={<NewsCopmany page={page} goToPage={goToPage} />}
            />
            <Route
              path="/appleNews/bookmarks"
              element={<Bookmarks page={page} goToPage={goToPage} />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
};
