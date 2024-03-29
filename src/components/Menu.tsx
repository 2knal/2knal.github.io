interface IMenuProps {
  onMenuOptionSelect: (option: string) => void
}

export default function Menu({ onMenuOptionSelect }: IMenuProps) {

  const liStyle = 'p-2 rounded-full duration-200 cursor-pointer ease-in hover:ease-out hover:bg-purple-100 dark:hover:bg-purple-800';

  const handleOptionSelect = (event: React.MouseEvent<HTMLLIElement>) => {
    const selectedOption = (event.target as Element).id;
    onMenuOptionSelect(selectedOption);
    handleActiveTab(selectedOption);
  };

  const handleActiveTab = (id: string) => {
    document.querySelectorAll('.menu li').forEach((li: Element) => {
      if (li.classList.contains('active')) {
        li.classList.remove('active');
      }
    });

    document.getElementById(id)?.classList.add('active');
  };

  return (
    <nav>
      <ul className="menu bg-cream-100 font-clash-display font-medium flex justify-center items-center w-72 xs:w-80 gap-1 xs:gap-3 h-12 m-auto mt-5 rounded-full dark:bg-purple-700">
        <li onClick={handleOptionSelect} id="home" className={liStyle + " active"}>Home</li>
        <li onClick={handleOptionSelect} id="work" className={liStyle}>Work</li>
        <li onClick={handleOptionSelect} id="projects" className={liStyle}>Projects</li>
        <li id="old-site" className={liStyle}><a href="http://2knal.github.io/old" target="_blank" rel="noreferrer">v0.0</a></li>
      </ul>
    </nav>
  );
}
