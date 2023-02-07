import type { IProject } from "../lib/types";
import CardWrapper from "./CardWrapper";
import Project from "./Project";

export default function Projects () {

  const projects: IProject[] = [
    {
      header: 'random-proxies',
      description: 'Generate a proxy server IP on the fly, with given protocol, country and standard to facilitate web surfing or in general for scraping projects.',
      link: 'https://github.com/2knal/random_proxies',
      stack: ['requests', 'scraping', 'proxies']
    },
    {
      header: 'medium-for-all',
      description: 'Chrome extension to access private articles on medium without having to open them in incognito mode.',
      link: 'https://github.com/2knal/medium-for-all',
      stack: ['random_proxies', 'chrome-extension']
    },
    {
      header: 'BulliesEye',
      description: 'BulliesEye is a collection of multiple systems - an online admin dashboard, a couple of chrome extensions, a Telegram bot, and a Twitter scraper. All these are designed to detect and prevent Cyberbullying.',
      link: '',
      stack: ['Chatbot', 'NLP']
    },
    {
      header: 'Visualize',
      description: 'A web UI to play around with regression algorithms and visualize the training process.',
      link: 'https://visualize-regression.surge.sh/',
      stack: ['p5.js', 'TFJS']
    },
    {
      header: 'ConnectClub',
      description: 'A Social media platform for Entrepreneurs and Investors. Developed this project during my Summer Internship under ConnectClub Pvt. Ltd (2019).',
      link: 'https://connectclub.in/',
      stack: ['MERN stack', 'AWS']
    },
    {
      header: 'WheresThat',
      description: 'This is a conceptual web model for implementing pathfinding algorithms and visualizing their real life use cases.',
      link: 'https://connectclub.in/',
      stack: ['p5.js', 'A*', 'path-finding']
    },
    {
      header: 'Honesty',
      description: 'PWA cum ChatBot, that furnishes users with all the government sponsored policies, schemes and loans. Submitted this project as a part of Smart India Hackathon 2019.',
      link: 'https://github.com/2knal/Honesty',
      stack: ['Flask', 'Dialogflow', 'TextLocal', 'nltk', 'doc2vec']
    },
    {
      header: 'Korusuke Bot',
      description: 'A discord bot, made using JDA, certain APIs and Firebase for data logging.',
      link: 'https://github.com/2knal/Java-Discord-Bot',
      stack: ['Java', 'JDA', 'NewsAPI', 'TMDb', 'FireBase']
    },
    {
      header: 'NewsBuster',
      description: 'Web app powered by a Fake news classifier pretrained on LIAR Dataset. Submitted this project as a part of Enroot Mumbai Hackathon 2018.',
      link: 'https://github.com/2knal/BitsPlease-Enroot',
      stack: ['Django', 'scikit-learn', 'numpy', 'pandas']
    },
    {
      header: 'Somaiya Classroom',
      description: 'An interactive platform for both Professors and Students of K.J. Somaiya College of Engineering to share various resources. Developed this project during my Summer Internship under K. J. Somaiya College of Engineering (2018).',
      link: 'https://github.com/arghyadeep99/Project-Somaiya-Classroom',
      stack: ['Java', 'Android SDK', 'FireBase', 'Android Studio']
    }
  ];

  return (
    <div className="my-8 mx-4 grid grid-cols-2 gap-4 md:mx-6">
      {
        projects.map((project: IProject, i: number) => {
          return <CardWrapper 
            key={i}
            customClasses="col-span-2 md:col-span-1"
            child={<Project
              project={project}/>} />
        })
      }          
    </div>
  );
}
