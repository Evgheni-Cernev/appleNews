import { BookmarksPropsType } from './types';
import { CompanyNewsResponse } from '../../redux/api/apiNews/types';
import NewsCards from '../NewsCards/NewsCards';
import Pagination from '../Pagination/Pagination';
import { RootState } from '../../redux/store';
import { selectBookmarkedCopmanyNews } from '../../redux/slices/companyNewsSlice';
import useQuery from '../../hooks/useSearchQuery';
import { useSelector } from 'react-redux/es/hooks/useSelector';

const Bookmarks = ({ page, goToPage }: BookmarksPropsType) => {
  const { bookmarkedCompaneNews, bookmarkedPages, bookmarkedCounter } =
    useSelector((state: RootState) => selectBookmarkedCopmanyNews(state, page, useQuery));

  const { resultData } = useQuery(bookmarkedCompaneNews);
  return (
    <div>
      <NewsCards<CompanyNewsResponse> data={resultData} />
      <Pagination
        start_item={page}
        end_item={bookmarkedPages}
        counter={bookmarkedCounter}
        goToPage={goToPage}
      />
    </div>
  );
};

export default Bookmarks;
