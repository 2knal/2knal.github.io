export default function Skills() {

  const skillHeaderLiStyle = "py-1 px-2 hover:rounded-full duration-200 cursor-pointer ease-in hover:ease-out hover:bg-purple-100 lg:py-2 lg:px-6 dark:hover:bg-purple-800";

  const skillUlStyle = "h-full p-2 flex flex-col justify-around";
  const skillLiStyle = "py-1 px-2 lg:py-2 lg:px-6";

  const skillHandler = (event: React.MouseEvent<HTMLLIElement>) => {
    event.preventDefault();

    document.querySelectorAll('#skills li').forEach((elem: Element) => {
      if (elem.classList.contains('active')) {
        elem.classList.remove('active');
      }
    });
    (event.target as Element).classList.toggle('active');
    const displaySkillsID = (event.target as Element).id + '-skills';
    document.querySelectorAll('.skills').forEach((elem: Element) => {
      elem.classList.add('hidden');
    });
    document.getElementById(displaySkillsID)?.classList.toggle('hidden');
  };

  return (
    <div className="w-full h-full flex text-sm md:text-base md:gap-2 lg:text-lg">
      <div>
        <ul id="skills" className="font-clash-display h-full p-2 flex flex-col justify-around font-medium">
          <li id="languages" onClick={skillHandler} className={skillHeaderLiStyle + " active"}>Languages</li>
          <li id="frameworks" onClick={skillHandler} className={skillHeaderLiStyle}>Frameworks</li>
          <li id="tools" onClick={skillHandler} className={skillHeaderLiStyle}>Tools</li>
        </ul>
      </div>
      <div className="w-1 h-full bg-purple-100 dark:bg-purple-800"></div>
      <div id="languages-skills" className="skills grow animate-fade">
        <ul className={skillUlStyle}>
          <li className={skillLiStyle}>Python</li>
          <li className={skillLiStyle}>JavaScript</li>
          <li className={skillLiStyle}>Java</li>
        </ul>
      </div>
      <div id="frameworks-skills" className="skills hidden grow animate-fade">
        <ul className={skillUlStyle}>
          <li className={skillLiStyle}>Angular</li>
          <li className={skillLiStyle}>React</li>
          <li className={skillLiStyle}>Flask</li>
          <li className={skillLiStyle}>Express</li>
        </ul>
      </div>
      <div id="tools-skills" className="skills hidden grow animate-fade">
        <ul className={skillUlStyle}>
          <li className={skillLiStyle}>Tableau</li>
          <li className={skillLiStyle}>Elasticsearch</li>
          <li className={skillLiStyle}>Bash</li>
          <li className={skillLiStyle}>Git & GitHub</li>           
          <li className={skillLiStyle}>Docker</li>
        </ul>
      </div>
    </div>
  );
}
