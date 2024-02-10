"use client";

// Locales
import { useI18n } from "@locales/client";

import Image from "next/image";
import Link from "next/link";

import "@styles/_not-found.scss";
import { photo } from "../../../../data";

export default function NotFound() {
  // Locales
  const t = useI18n() as any;

  return (
    <div className="not-found-page">
      <Image
        width={200}
        height={100}
        src={`${photo}`}
        alt="logo"
        className="logo"
      />
      <h1 className="title">404</h1>
      <p className="description text-description">
        {t("GLOBAL.NOT_FOUND.DESCRIPTION")}
      </p>
      <Link href="/">{t("GLOBAL.COMPONENTS.CTA.GO_BACK_HOME")}</Link>
    </div>
  );
}
