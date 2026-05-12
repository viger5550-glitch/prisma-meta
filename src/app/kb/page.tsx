import { redirect } from "next/navigation";

/** Заглушка: старый `/kb` — на главную мету. */
export default function KbPage() {
  redirect("/");
}
