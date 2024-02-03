// Libs
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

// Icons
import { BsFillCaretRightFill } from "react-icons/bs";

// Styles
import WorkItem from "../../app/(root)/works/[level]/_partials/work-item";

// Interfaces
interface IWorksProps {
  title: string,
  href: string,
  workItems: any;
}

export default function Works(props: IWorksProps) {

  // Destructuring props
  const { title = "Current Work", href = "/current-work", workItems } = props;

  return (
    <div className="works-wrapper">
      <div className="works-header">
        <h1 className="works-title ">{title}</h1>
        <Link href={href} className="see-all-link">
          <span className="see-all-text">See all</span>
          <BsFillCaretRightFill size={10} color="#393f8f" />
        </Link>
      </div>
      {/* WORKS LIST */}
      <div className="works-list">
        {/* WORK ITEMS */}
        {workItems?.slice(0, 3)?.map((workItem, index) => (
          <WorkItem project={workItem} key={index} />
        ))}
      </div>
    </div>
  );
}
