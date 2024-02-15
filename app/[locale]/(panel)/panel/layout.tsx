import type { Metadata } from "next";
import { getI18n } from "@locales/server";

// Layouts
import ClientPanelLayout from "@layouts/panel-layout";

import "@styles/_panel-layout.scss";

export async function generateMetadata(): Promise<Metadata> {
  const t = (await getI18n()) as any;

  return {
    title: {
      template: "Ali Karagoz | %s",
      default: t("GLOBAL.PAGE_TITLES.HOME"), // a default is required when creating a template
    },
  };
}

export default function PanelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ClientPanelLayout>{children}</ClientPanelLayout>;
}
