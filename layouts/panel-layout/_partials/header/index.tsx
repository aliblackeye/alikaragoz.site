import { CgMenuRight, CgMenuLeft } from "react-icons/cg";

interface IHeaderProps {
  isSidebarCollapsed: boolean;
  setIsSidebarCollapsed: (isCollapsed: boolean) => void;
}

export default function Header(props: IHeaderProps) {
  // Destructuring props
  const { isSidebarCollapsed, setIsSidebarCollapsed } = props;

  return (
    <header className="panel-header">
      <div
        className="menu-trigger"
        onClick={() => {
          setIsSidebarCollapsed(!isSidebarCollapsed);
        }}
      >
        {!isSidebarCollapsed ? (
          <CgMenuLeft size={18} />
        ) : (
          <CgMenuRight size={18} />
        )}
      </div>
    </header>
  );
}
