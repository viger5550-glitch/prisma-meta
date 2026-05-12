import { redirect } from "next/navigation";

/** Короткий URL `/meta` — на главную мету (`/`). Отдельный текст манифеста: `/meta/manifesto`. */
export default function MetaIndexRedirect() {
  redirect("/");
}
