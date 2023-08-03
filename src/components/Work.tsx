import type { IWork } from "../lib/types";
import WorkItem from "./WorkItem";

export default function Work() {

  const resumeLink = 'https://drive.google.com/file/d/1dBjeZgo3ndRfP8Nd-Y6-wLv3RTaRZTpW/view?usp=sharing';
  const workItems: IWork[] = [
    {
      period: 'January 2023 - Present',
      title: 'Senior Assocate - Morgan Stanley',
      description: 'Automating workflows by creating web applications/portals. Enhancing chatbots, publishing tableau dashboards.',
      tag: 'Full-time',
      stack: ['Python', 'Angular', 'Tableau']
    },
    {
      period: 'January 2022 - January 2023',
      title: 'Technology Assocate - Morgan Stanley',
      description: 'Developed chatbots on Microsoft teams to automate incident analysis and reduce 0.5 man-hours of daily effort. Published comprehensive dashboards on Incident metrics and reporting.',
      tag: 'Full-time',
      stack: ['Python', 'Angular', 'Tableau']
    },
    {
      period: 'August 2021 - January 2022',
      title: 'Technology Analyst - Morgan Stanley',
      description: 'Underwent extensive four months of training (TAP) on CS fundamentals and Morgan Stanley business functions.',
      tag: 'Full-time',
      stack: ['C++', 'Java', 'OS', 'DBMS']
    },
    {
      period: 'February 2021 - July 2021',
      title: 'Spring Intern - Morgan Stanley',
      description: 'Developed an ETA Calculator and Incident Impact Analysis tool for jobs that are scheduled in daily batches.',
      tag: 'Internship',
      stack: ['C#', 'SQL-Server', 'Stored procedures']
    },
    {
      period: 'June 2020 - August 2020',
      title: 'QA Tester - Arconnet',
      description: 'Performed Behavior Driven Development (BDD) testing for the Privileged Access Management (PAM) software.',
      tag: 'Internship',
      stack: ['Java', 'Selenium', 'Cucumber framework']
    },
    {
      period: 'June 2019 - July 2019',
      title: 'Backend Developer - ConnectClub',
      description: 'Developed the entire REST API backend for the company website from scratch.',
      tag: 'Internship',
      stack: ['Node.js', 'Express.js', 'MongoDB', 'AWS']
    },
    {
      period: 'June 2018 - July 2018',
      title: 'Developer - K. J. Somaiya College of Engineering',
      description: 'Developed an Android app for effective interaction between Professors and Students.',
      tag: 'Internship',
      stack: ['Java', 'Android Studio']
    },
  ];

  return (
    <div className="my-8 mx-4 p-6 relative overflow-hidden bg-cream-100 rounded-2xl transform transition duration-200 hover:scale-[1.015] dark:bg-purple-700">
      <div className="mb-6">
        <a href={resumeLink} className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700" target="_blank" rel="noreferrer">Download Resume <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="ml-2 w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" /></svg></a>
      </div>
      <ol className="relative border-l-2 border-purple-100 dark:border-purple-800">                  
        {
          workItems.map((workItem: IWork, i: number) => {
            return <WorkItem 
              key={i}
              workItem={workItem} />
          })
        }
      </ol>
    </div>
  );
}
