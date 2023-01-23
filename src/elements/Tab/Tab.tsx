import { ITabProps } from "./types";
import { Link } from "react-router-dom";

const Tab = ({ link, label }: ITabProps) => (
  <Link className="text-[28px] leading-8 mr-[20px] last:mr-0" to={link}>
    {label}
  </Link>
);

export default Tab;
