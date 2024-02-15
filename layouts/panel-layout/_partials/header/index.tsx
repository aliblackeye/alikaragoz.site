import { CgMenuRight, CgMenuLeft } from "react-icons/cg";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="panel-header">
      <div className="menu-trigger" 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <CgMenuLeft /> : <CgMenuRight />}
      </div>
    </header>
  );
}
