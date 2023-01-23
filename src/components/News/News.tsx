import { CompanyNewsResponse } from "../../redux/api/apiNews/types";
import NewsCards from "../NewsCards/NewsCards";
import { NewsCopmanyPropsType } from "./types";
import Pagination from "../Pagination/Pagination";
import { RootState } from "../../redux/store";
import { selectCopmanyNews } from "../../redux/slices/companyNewsSlice";
import useQuery from "../../hooks/useSearchQuery";
import { useSelector } from "react-redux/es/hooks/useSelector";

const NewsCopmany = ({ page, goToPage }: NewsCopmanyPropsType) => {
  const { companeNews, pages, counter } = useSelector((state: RootState) =>
    selectCopmanyNews(state, page, useQuery)
  );

  const { resultData } = useQuery(companeNews);

  return (
    <div>
      <NewsCards<CompanyNewsResponse> data={resultData} />
      <Pagination
        start_item={page}
        end_item={pages}
        counter={counter}
        goToPage={goToPage}
      />
    </div>
  );
};

export default NewsCopmany;
