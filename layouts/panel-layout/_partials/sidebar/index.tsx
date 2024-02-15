import { FiHome } from "react-icons/fi";

export default function Sidebar() {
  return (
    <aside className="panel-sidebar">
      <ul className="panel-items">
        <li className="sidebar-item active">
          <FiHome />
          Dashboard
        </li>
        <li className="sidebar-item">
          <FiHome />
          İçerik Editörü
        </li>
      </ul>
    </aside>
  );
}
