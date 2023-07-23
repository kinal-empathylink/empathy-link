import bgKinal from "@/public/Images/bgKinal.webp";
import Image from "next/image";
import image1 from "@/public/Images/Screenshot 2023-07-23 at 2.19.12 AM.png";
import Link from "next/link";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  weight: ["300", "400", "500"],
  style: "normal",
  subsets: ["latin"],
});

export default function page() {
  return (
    <div className=" bg-black">
      <section className="relative h-screen w-full">
        <span className="absolute z-40 inset-0 bg-gradient-to-b from-black/30 to-black/0" />
        <Image src={bgKinal} alt="Background" fill className="object-cover" />
        <h1 className={`absolute bottom-20 text-white px-3 text-8xl ${montserrat.className}`}>KINAL EMPATHY <span className="text-blue-950">LINK</span></h1>
      </section>
      <section className="h-screen w-full p-6 bg-gradient-to-tl from-blue-200 via-white to-white grid grid-cols-2">
        <div className="w-full h-full grid place-items-center">
          <div className="w-full flex flex-col justify-start items-start">
            <h1
              className={`text-7xl text-blue-700 ${montserrat.className} font-light`}
            >
              Sufres de violencia
            </h1>
            <h1
              className={`text-5xl text-blue-700 ${montserrat.className} font-light`}
            >
              en tu centro Educativo?
            </h1>
          </div>
        </div>
        <div className="w-full h-full py-20 flex flex-col gap-4">
          <p className="text-lg">
            Las alertas de violencia son vitales para proteger a la población,
            detectar y prevenir situaciones riesgosas, garantizando seguridad y
            respuesta ágil
          </p>
          <p className="text-lg">
            Priorizamos la protección de la identidad de quienes reportan,
            garantizando que puedan denuncia sin temor a represalias.
          </p>
          <div className="w-full relative h-[500px] rounded-lg overflow-hidden">
            <Image src={image1} alt="image_1" fill className="object-cover" />
          </div>
          <Link href={"/auth/Signup"} className="bg-blue-900 py-2 px-10 text-white rounded-lg">Registrate aqui</Link>
        </div>
      </section>
      <section className="h-screen w-full bg-gradient-to-bl from-blue-200 via-white to-white">

      </section>
    </div>
  );
}
