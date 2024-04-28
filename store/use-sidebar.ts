import { create } from 'zustand';

type SidebarType = {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (isSidebarOpen: boolean) => void;
};

const useSidebar = create<SidebarType>()((set) => ({
  isSidebarOpen: true,
  setIsSidebarOpen: (isSidebarOpen) => set({ isSidebarOpen }),
}));

export default useSidebar;
