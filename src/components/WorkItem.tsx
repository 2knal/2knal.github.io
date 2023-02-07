import type { IWork } from "../lib/types";

interface IWorkItemProps {
  workItem: IWork,
}

export default function WorkItem({ workItem }: IWorkItemProps) {

  const currentlyWorkingAt = () => {
    return workItem.period.includes('Present');
  }

  return (
    <li className="mb-10 ml-4">
    {currentlyWorkingAt()
      && <div className="absolute w-3 h-3 bg-purple-700 rounded-full mt-1.5 -left-1.5 dark:bg-cream-100 animate-ping"></div>}
    <div className="absolute w-3 h-3 bg-purple-700 rounded-full mt-1.5 -left-1.5 dark:bg-cream-100"></div>
    <time className="mb-1 text-sm font-normal leading-none">{workItem.period}</time>
    <h3 className="font-clash-display text-lg font-semibold">{workItem.title}</h3>
    <small>{workItem.tag}</small>
    <p className="mt-2 mb-4 text-base font-normal">{workItem.description}</p>
    <div>
      <ul className="flex gap-2 mt-2 lg:mt-4">
        {workItem.stack.map((s: string, i: number) => {
          return <li className="tag" key={i}><em><small>{s}</small></em></li>
        })}
      </ul>
    </div>
  </li>
  );
}
