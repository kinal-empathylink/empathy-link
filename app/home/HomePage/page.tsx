import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import "./styles.css"
import imagenMano from "../../../public/Images/hand.png"
import apreton from "../../../public/Images/apreton.png"
import estadisticas from "../../../public/Images/graficas.png"
import grupo from "../../../public/Images/grupo.png"
import reporte from "../../../public/Images/reporte.png"
import Image from 'next/image'; 


const Home = () => {
    return (
        <div>
        <nav className="bg-white border-gray-200 dark:bg-gray-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a className="flex items-center">
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-black">EmpathyLink</span>
                </a>
                <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <a href="#" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Inicio</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Sobre nosotros</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Reporte</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Iniciar Cesión</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <br />
        <br /><br />
        <div className="container1">
                <div className="titles">
                    <h1 className="title1"><b>Estas sufriendo de violencia</b></h1>
                    <h1 className="title2">En tu centro Educativo?</h1>
                    <br />
                    <label className="description">Las alertas de violencia son vitales para proteger a la población, detectar y prevenir situaciones riesgosas, garantizando seguridad y respuesta ágil</label>
                    <br />
                    <br />
                    <br />
                    <div className="contBoton">
                        <button className="rounded-full">Registrate aqui</button>
                    </div>
                    
                </div>
                
                <div className="ImageHand">
                    <Image src={imagenMano}></Image>
                </div>
        </div>
        <br /><br /><br />
        <br /><br /><br />
        <div className="container2">
            <div className="imageCardContent">
            <div className="imageCardMain">
                    <Image className="imageCard" src={apreton}></Image>
                </div>
                <br />
                <br />
                <b>35</b>
                <div>
                Empresas que se suman a la causa.
                </div>
            </div>

            <div className="imageCardContent">
                <div className="imageCardMain">
                    <Image className="imageCard" src={estadisticas}></Image>
                </div>
                <br />
                <br />
                <b>6M</b>
                <div>
                6 millones de guatemaltecos apoyando.
                </div>
            </div>
        </div>
        <div className="container2">
        <div className="imageCardContent">
        <div className="imageCardMain">
                    <Image className="imageCard" src={grupo}></Image>
                </div>
                <br />
                <br />
                <b>350+</b>
                <div>
                Más de 350 instituciones ayudadas.
                </div>
            </div>
            <div className="imageCardContent">
            <div className="imageCardMain">
                    <Image className="imageCard" src={reporte}></Image>
                </div>
                <br />
                <br />
                <b>100+</b>
                <div>
                Más de 100 peticiones diarias.
                </div>
            </div>
        </div><br /><br />
        <br /><br />
        <br />
        <div className="titlefinal">
            <h1><b>Características Que Nos Distinguen</b></h1>
        </div><br /><br />
        <div className="parrafoFinal">
        <h5>Somos una empresa que busca siempre la forma en la que se pueda anular el acoso escolar en cualquier establecimiento del pais de Guatemala, en base a formularios que llena la victima de como fue lastimado o molestado en un instintuto y en base a eso tratamos de solucionarlo lo antes posible.</h5>
        </div>
        <br />
        <br />
        <div className="finalCard">
        <div className="card mx-2 mb-2" style={{ width: '18rem', backgroundColor: '#d3f68b', borderRadius: '20px'}}>
  <div className="card-body">
    <h5 className="card-title">Anonimato y confidencialidad</h5>
    <p className="card-text">Priorizamos la protección de la identidad de quienes reportan, garantizando que puedan denuncia sin temor a represalias.</p>
  </div>
</div>
<div className="card mx-2 mb-2" style={{ width: '18rem' , borderRadius: '20px'}}>
  <div className="card-body">
    <h5 className="card-title">Equipo especializado</h5>
    <p className="card-text">Contamos con un equipo de profesionales capacitados en la gestión de situaciones de abuso y violencia en entornos escolares.
    <br />ㅤㅤㅤㅤ</p>
  </div>
</div>
<div className="card mx-2 mb-2" style={{ width: '18rem' , backgroundColor: '#d3f68b', borderRadius: '20px'}}>
  <div className="card-body">
    <h5 className="card-title">Enfoque en la prevención</h5>
    <p className="card-text">Ademas de recibir reportes nos dedicamos a sensibilizar y educar a la comunidad estudiantil sobre la importancia de prevenir el acoso y violencia en las escuelas.</p>
  </div>
</div>
        </div>
        <div className="finalCard">
        <div className="card mx-2 mb-2" style={{ width: '18rem', backgroundColor: '#ffdcbf' , borderRadius: '20px'}}>
  <div className="card-body">
    <h5 className="card-title">Acceso 24/7</h5>
    <p className="card-text">Nuestra plataforma está disponible en linea las 24 horas de la semana, para que los estudiantes puedan realizar sus reportes en cualquier momento  .</p>
  </div>
</div>
<div className="card mx-2 mb-2" style={{ width: '18rem', borderRadius: '20px' }}>
  <div className="card-body">
    <h5 className="card-title">Recursos y apoyo</h5>
    <p className="card-text">Ofrecemos una variedad de recursos de apoyo emocional para las victimas de los abusos y violencia, asi como para aquellos que reporten estas situaciones.</p>
  </div>
</div>
<div className="card mx-2 mb-2"  style={{ width: '18rem' , backgroundColor: '#ffdcbf', borderRadius: '20px'}}>
  <div className="card-body">
    <h5 className="card-title">Colaboraciones con instituciones</h5>
    <p className="card-text">Trabajmos en conjunto  instituciones educativas y autoridades pertinentes para abordar de manera efectiva los casos reportados..</p>
  </div>
</div>
        </div>
        <br /><br /><br />
        <div className="black">
            <p>hola</p>
            <br />
        </div>
        </div>
    );
};

export default Home;