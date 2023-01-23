export interface PaginationProps {
  start_item: number;
  end_item: number;
  counter: number;
  setPage?: (count: number) => void;
  goToPage: (goTo: string) => void;
}
