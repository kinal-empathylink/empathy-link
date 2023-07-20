import NavBar from "./components/NavBar";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <div>
        <NavBar />
        <div className="w-full pt-[80px]">
            {children}
        </div>
    </div>
  );
}