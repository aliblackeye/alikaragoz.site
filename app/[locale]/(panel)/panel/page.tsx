import { redirect } from "next/navigation";

export default async function PanelIndex() {
  redirect("/panel/dashboard");
}
