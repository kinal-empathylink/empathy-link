import { redirect } from "next/navigation";
import Maintenance from "./components/Maintenance";

export default function Home() {
  return (
    // redirect("/maintenance")

    <Maintenance/>
  )
}
