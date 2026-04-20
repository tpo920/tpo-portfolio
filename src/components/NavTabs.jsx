import { Tabs } from '../utils/Tabs';

const NavTabs = ({ onClick = () => {} }) => {
  return (
    <div className="flex flex-col">
      {Tabs.map(({ link, name }) => (
        <a
          href={link}
          onClick={onClick}
          key={name}
          className="group px-5 py-4 text-sm transition-all duration-300 hover:scale-101 hover:bg-black-200 hover:text-blue-400 ease-linear"
        >
          <span>{name}</span>
        </a>
      ))}
    </div>
  );
};

export default NavTabs;
