import { FiHome } from "react-icons/fi";
import { LuFileEdit } from "react-icons/lu";
export const MENU = [
  {
    label: "Anasayfa",
    href: "/panel/dashboard",
    icon: <FiHome />,
  },
  {
    label: "İçerik Yönetimi",
    href: "/panel/content-management",
    icon: <LuFileEdit />,
  },
];
