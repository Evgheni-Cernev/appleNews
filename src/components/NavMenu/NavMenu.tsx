import Search from "../Search/Search";
import Tabs from "../Tabs/Tabs";
import { TabsItems } from "../../constants";

const NavMenu = () => (
  <div className="flex justify-between py-[25px]">
    <Tabs items={TabsItems} />
    <Search />
  </div>
);

export default NavMenu;
