import CardWrapper from "./CardWrapper";
import About from "./About";
import Logo from "./Logo"
import Twitter from "./icons/Twitter";
import Discord from "./icons/Discord";
import Email from "./icons/Email";
import GitHub from "./icons/GitHub";
import Skills from "./Skills";
import ToggleTheme from "./ToggleTheme";
import Time from "./Time";
import Spotify from "./icons/Spotify";

export default function Landing() {
  return (
    <div className="my-8 mx-4 grid grid-cols-3 gap-4 md:mx-6 lg:grid-cols-4">
      <CardWrapper 
        customClasses="col-span-3" 
        child={<About />}/>
      <CardWrapper
        customClasses="aspect-square"
        child={<ToggleTheme />}/>
      <CardWrapper
        customClasses="col-span-2"
        child={<Skills />}/>
      <CardWrapper
        customClasses="bg-spotify-100 aspect-square dark:bg-spotify-500"
        child={<Logo link="https://open.spotify.com/user/abddan88dl8fg310rj2el63o1" child={<Spotify />} />}/>
      <CardWrapper
        customClasses="aspect-square"
        child={<Time />}/>
      <CardWrapper 
        customClasses="bg-github-100 aspect-square dark:bg-github-500"
        child={<Logo link="http://github.com/2knal" child={<GitHub />} />}/> 
      <CardWrapper 
        customClasses="bg-email-100 aspect-square dark:bg-email-500"
        child={<Logo link="mailto:2kunalsonawane@gmail.com" child={<Email />} />}/>         
      <CardWrapper 
        customClasses="bg-twitter-100 aspect-square dark:bg-twitter-500"
        child={<Logo link="https://twitter.com/2knal" child={<Twitter />} />}/>  
      <CardWrapper 
        customClasses="bg-discord-100 aspect-square dark:bg-discord-500"
        child={<Logo link="https://discordapp.com/users/xypx#2851" child={<Discord />} />}/>                 
    </div>
  );
}
