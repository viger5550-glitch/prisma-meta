import { redirect } from "next/navigation";

/** Лендинг агентов переехал на /agents. */
export default function BusinessRoute() {
  redirect("/agents");
}
