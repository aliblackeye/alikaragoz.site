import React from "react";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function WorkItem({ project }) {
  return (
    <motion.div
      variants={{
        hidden: { y: 20, opacity: 0 },
        visible: {
          y: 0,
          opacity: 1,
        },
      }}
      className="work-item-wrapper"
    >
      <Link
        href={project.href}
        className="work-item"
        target="_blank"
      >
        <div
          className="gradient-hover 
    "
        >
          <div className="image">
            <Image
              src={project.image}
              alt="work"
              width={200}
              height={200}
            />
          </div>
          <div className="mt-2">
            <div className="title">
              <span className="text-md font-bold">{project.title}</span>
            </div>
            <div className="description">
              <span className="text-[15px] text-gray-400 font-medium">
                {project.description}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
