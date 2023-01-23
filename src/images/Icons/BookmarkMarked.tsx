const BookmarkMarked = ({
  className = "",
}: {
  className?: string;
}): JSX.Element => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    viewBox="0 0 41 44"
    fill="none"
    className={className}
  >
    <path d="M0 0H41V43.9286L20.3913 35.3824L0 43.9286V0Z" fill="white" />
  </svg>
);

export default BookmarkMarked;
