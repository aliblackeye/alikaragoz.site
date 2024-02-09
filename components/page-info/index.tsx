const exampleDesc = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam`;

import Image from "next/image";
import "./styles.scss";

export default function PageInfo({
  title = "Title",
  description = exampleDesc,
}) {
  return (
    <div className="page-info">
      <h1>{title}</h1>
      <p>{description}</p>

      <div className="divider">
        <Image
          src="/images/divider.svg"
          alt="Hero"
          width={1920}
          height={1080}
        />
      </div>
    </div>
  );
}
