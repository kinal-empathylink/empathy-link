import React from "react";
import imagenMano from "@/public/Images/hand.png"
import apreton from "@/public/Images/apreton.png"
import estadisticas from "@/public/Images/graficas.png"
import grupo from "@/public/Images/grupo.png"
import reporte from "@/public/Images/reporte.png"
import Image from 'next/image'; 
import Link from "next/link";

const HomePage = () => {
  return (
    <div>
      <div className="container1 pt-20">
        <div className="pl-4 titles">
          <h1 className="max-md:text-3xl text-4xl">
            <b>Sufres de violencia</b>
          </h1>
          <h1 className="text-blue-300 max-md:text-xl text-2xl">En tu centro Educativo?</h1>
          <br />
          <label className="max-md:text-xs">
            Las alertas de violencia son vitales para proteger a la población,
            detectar y prevenir situaciones riesgosas, garantizando seguridad y
            respuesta ágil
          </label>
          <div className="w-full pt-7 max-md:hidden">
            <Link href="/auth/Singup" className="rounded-full px-4 py-3 no-underline w-full">Registrate aqui</Link>
          </div>
        </div>
        

        <div className="ImageHand max-md:hidden">
          <Image alt="" src={imagenMano} className="w-80 h-80"></Image>
        </div>
      </div>

      <div className="w-full p-7 md:hidden ml-6">
          <Link href="/auth/Signup" className="rounded-full px-4 py-3 no-underline w-full">Registrate aqui</Link>
      </div>
      <br />
      <br />
      <br />
      <br />
      <div className="container2">
        <div className="imageCardContent">
          <div className="imageCardMain">
            <Image alt="" className="imageCard" src={apreton}></Image>
          </div>
          <br />
          <br />
          <b>35</b>
          <div>Empresas que se suman a la causa.</div>
        </div>

        <div className="imageCardContent">
          <div className="imageCardMain">
            <Image alt="" className="imageCard" src={estadisticas}></Image>
          </div>
          <br />
          <br />
          <b>6M</b>
          <div>6 millones de guatemaltecos apoyando.</div>
        </div>
      </div>
      <div className="container2">
        <div className="imageCardContent">
          <div className="imageCardMain">
            <Image alt="" className="imageCard" src={grupo}></Image>
          </div>
          <br />
          <br />
          <b>350+</b>
          <div>Más de 350 instituciones ayudadas.</div>
        </div>
        <div className="imageCardContent">
          <div className="imageCardMain">
            <Image alt="" className="imageCard" src={reporte}></Image>
          </div>
          <br />
          <br />
          <b>100+</b>
          <div>Más de 100 peticiones diarias.</div>
        </div>
      </div>
      <div className="titlefinal">
        <h1 className="py-5">
          <b>Características Que Nos Distinguen</b>
        </h1>
      </div>
      <br />
      <br />
      <div className="flex text-justify px-60 max-lg:px-10">
        <h5 className="max-md:text-sm">
          Somos una empresa que busca siempre la forma en la que se pueda anular
          el acoso escolar en cualquier establecimiento del pais de Guatemala,
          en base a formularios que llena la victima de como fue lastimado o
          molestado en un instintuto y en base a eso tratamos de solucionarlo lo
          antes posible.
        </h5>
      </div>
      <form className="grid gap-6 gap-y-0 max-sm:grid-cols-1 grid-cols-2 lg:grid-cols-3">
            <div className="card-body p-4">
              <div className="bg-[#D5FF66] border border-gray-300 p-4 rounded-3xl">
                <h5 className="card-title text-center pb-6">Anonimato y confidencialidad</h5>
                <p className="card-text text-justify">
                  Priorizamos la protección de la identidad de quienes reportan,
                  garantizando que puedan denuncia sin temor a represalias.
                </p>
              </div>
            </div>
            <div className="card-body p-4">
              <div className="bg-white border border-gray-300 p-4 rounded-3xl">
                <h5 className="card-title text-center pb-6">Equipo especializado</h5>
                <p className="card-text text-justify">
                  Contamos con un equipo de profesionales capacitados en la gestión
                  de situaciones de abuso y violencia en entornos escolares.
                  <br />
                </p>
              </div>
          </div>
            <div className="card-body p-4">
              <div className="bg-[#D5FF66] border border-gray-300 p-4 rounded-3xl">
                  <h5 className="card-title text-center pb-6">Enfoque en la prevención</h5>
                  <p className="card-text text-justify">
                    Ademas de recibir reportes nos dedicamos a sensibilizar y educar a
                    la comunidad estudiantil sobre la importancia de prevenir el acoso
                    y violencia en las escuelas.
                  </p>
              </div>
            </div>
            <div className="card-body p-4">
              <div className="bg-[#FFE3A8] border border-gray-300 p-4 rounded-3xl">
                <h5 className="card-title text-center pb-6">Acceso 24/7</h5>
                <p className="card-text text-justify">
                  Nuestra plataforma está disponible en linea las 24 horas de la
                  semana, para que los estudiantes puedan realizar sus reportes en
                  cualquier momento .
                </p>
              </div>
          </div>
            <div className="card-body p-4">
              <div className="bg-white border border-gray-300 p-4 rounded-3xl">
                <h5 className="card-title text-center pb-6">Recursos y apoyo</h5>
                <p className="card-text text-justify">
                  Ofrecemos una variedad de recursos de apoyo emocional para las
                  victimas de los abusos y violencia, asi como para aquellos que
                  reporten estas situaciones.
                </p>
              </div>
            </div>
            <div className="card-body p-4">
              <div className="bg-[#FFE3A8] border border-gray-300 p-4 rounded-3xl">
                <h5 className="card-title text-center pb-6">Colaboraciones con instituciones</h5>
                <p className="card-text text-justify">
                  Trabajmos en conjunto instituciones educativas y autoridades
                  pertinentes para abordar de manera efectiva los casos reportados..
                </p>
              </div>
            </div>
      </form>
      <br />
      <br />
      <br />
      <div className="black">
        <p>hola</p>
        <br />
      </div>
    </div>
  )
}

export default HomePage