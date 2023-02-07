import type { IProject } from "../lib/types";

interface IProjectProps {
  project: IProject
}

export default function Project({ project }: IProjectProps) {
  return (
    <div className="px-4 py-6">
      <div className="w-full flex justify-between text-xl">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 00-1.883 2.542l.857 6a2.25 2.25 0 002.227 1.932H19.05a2.25 2.25 0 002.227-1.932l.857-6a2.25 2.25 0 00-1.883-2.542m-16.5 0V6A2.25 2.25 0 016 3.75h3.879a1.5 1.5 0 011.06.44l2.122 2.12a1.5 1.5 0 001.06.44H18A2.25 2.25 0 0120.25 9v.776" />
        </svg>
        <a href={project.link} target="_blank" rel="noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
          </svg>
        </a>
      </div>
      <h1 className="mt-6 font-clash-display font-semibold text-2xl">{project.header}</h1>
      <p className="mt-4 lg:mt-10">{project.description}</p>
      <div>
        <ul className="flex gap-2 mt-2 lg:mt-4">
          {project.stack.map((s: string, i: number) => {
            return <li className="tag" key={i}><small>{s}</small></li>
          })}
        </ul>
      </div>
    </div>
  );
}
