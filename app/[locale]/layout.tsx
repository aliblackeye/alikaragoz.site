export const metadata = {
  title: {
    template: "Ali Karagöz | %s",
    default: "Home", // a default is required when creating a template
  },
};

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
