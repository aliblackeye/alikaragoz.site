"use client"

// Libs
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

// Styles
import "./styles.scss";

// Interfaces
interface IWorkItemProps {
  project: any;
}

export default function WorkItem(props: IWorkItemProps) {

  // Destructuring props
  const { project } = props;

  return (
    <motion.div
      className="work-item gradient-hover"
      variants={{
        hidden: { y: 20, opacity: 0 },
        visible: {
          y: 0,
          opacity: 1,
        },
      }}
    >
      <Link href={project.href} target="_blank">
        <div className="image">
          <Image
            src={project?.image}
            alt="work"
            width={1920}
            height={1080}
          />
        </div>
        <div className="title-and-description">
          <div className="title">
            {project?.title}
          </div>
          <div className="description">
            {project?.description}
          </div>
        </div>
      </Link>
    </motion.div>

  );
}
