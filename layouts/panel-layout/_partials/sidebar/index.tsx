import { FiHome } from "react-icons/fi";

interface ISidebarProps {
  collapsed: boolean;
}
import "@styles/_sidebar.scss";
import { MENU } from "./menu";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Sidebar(props: ISidebarProps) {
  // Destructuring props
  const { collapsed } = props;

  // Variables
  const pathname = usePathname();

  return (
    <aside className={`panel-sidebar ${collapsed ? "collapsed" : ""}`}>
      <div className="sidebar-items">
        {MENU.map((item, index) => (
          <Link
            href={item.href}
            className={`sidebar-item ${item.href === pathname ? "active" : ""}`}
            key={index}
          >
            <div className="icon">{item.icon}</div>
            <span className="label">{item.label}</span>
          </Link>
        ))}
      </div>
    </aside>
  );
}
