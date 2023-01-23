import Tab from '../../elements/Tab/Tab';

const Tabs = ({ items }: { items: string[] }) => {
  return (
    <div>
      {items.map((item) => (
        <Tab key={item} link={`/appleNews/${item.toLowerCase()}`} label={item} />
      ))}
    </div>
  );
};

export default Tabs;
