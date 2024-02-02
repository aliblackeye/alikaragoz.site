const exampleDesc = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam`;

import "./styles.scss";

export default function PageInfo({
  title = "Title",
  description = exampleDesc,
}) {
  return (
    <div className="page-info">
      <h1>{title}</h1>
      <p>{description}</p>

      <div className="divider"></div>
    </div>
  );
}
