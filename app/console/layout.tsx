import Sidebar from "./components/Sidebar";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <section className="h-screen flex">
      <Sidebar />
      <div className="bg-gray-50 w-full">
        {children}
      </div>
    </section>
  );
}