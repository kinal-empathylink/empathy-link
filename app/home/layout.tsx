import { getServerSession } from "next-auth";
import NavBar from "./components/NavBar";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const session = await getServerSession(authOptions);

  if(!session?.user){
    redirect('/auth/Login')
  }

  console.log(session)

  return (
    <div>
        <NavBar />
        <div className="w-full">
            {children}
        </div>
    </div>
  );
}