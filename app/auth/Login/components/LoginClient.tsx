"use client";

import React, { MouseEvent, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AiOutlineMail } from "react-icons/ai";
import { BiSolidLockAlt } from "react-icons/bi";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";

const LoginClient = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [responseError, setResponseError] = useState(false);

  const searchParams = useSearchParams()

  const search = searchParams.get('error')

  console.log(search)




  const handleSubmit = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    setLoading(true);

    const data = {
      username: username,
      password: password,
    };

    await signIn("credentials", {
      username: data.username,
      password: data.password,
      redirect: true,
      callbackUrl: "/home/",
    });

    console.log({ DATA: data });

  };

  useEffect(() => {
    if(search) {
      setResponseError(true)
    }
    
  }, [search])


  return (
    <div className="flex h-screen w-full">
      <div className="h-full w-[55%] max-lg:w-0 bg-blue-700 ">
        <div className="h-full w-full flex items-center justify-center mb-10 font-bold text-gray-900">
          <div>
            <div className="-ml-32 text-white">
              <div className="text-4xl font-extrabold">Kinal Empathy Link</div>
              <div className=" text-lg font-extralight pt-1">
                Tu voz, nuestra lucha
              </div>
              <button
                type="submit"
                className="h-8 px-5 w-40 text-white font-extralight bg-blue-500 text-xs rounded-full mt-4"
              >
                Mas información
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="h-full w-[45%] max-lg:w-full bg-white">
        <div className="h-full w-full flex items-center justify-center mb-10 font-bold text-gray-900">
          <div>
            <div className="pb-8 text-black">
              <div className=" text-2xl max-lg:text-3xl max-sm:text-lg font-extrabold">
                Bienvenido de vuelta!!
              </div>
              <div className=" text-lg max-lg:text-xl max-sm:text-sm font-extralight pt-1">
                Welcome Back
              </div>
            </div>
            <div>
              <form className="space-y-4">
                <div className="flex">
                  <div className="text-2xl max-sm:text-xl text-gray-300 pl-2 w-12 border border-r-0 font-extralight border-gray-200 rounded-full rounded-r-none">
                    <div className="flex w-full h-full justify-center items-center">
                      <AiOutlineMail />
                    </div>
                  </div>
                  <input
                    type="text"
                    name="username"
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    className="focus:outline-gray-400 border border-l-0 font-extralight border-gray-200 text-sm max-sm:text-xs rounded-full rounded-l-none w-80 h-14 max-lg:w-96 max-lg:h-16 max-sm:w-56 max-sm:h-10"
                    placeholder="Correo electrónico"
                  />
                </div>
                <div className="flex">
                  <div className="text-2xl max-sm:text-xl text-gray-300 pl-2 w-12 border border-r-0 font-extralight border-gray-200 rounded-full rounded-r-none">
                    <div className="flex w-full h-full justify-center items-center">
                      <BiSolidLockAlt />
                    </div>
                  </div>
                  <input
                    type="password"
                    name="username"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="focus:outline-gray-400 border border-l-0 font-extralight border-gray-200 text-sm max-sm:text-xs rounded-full rounded-l-none w-80 h-14 max-lg:w-96 max-lg:h-16 max-sm:w-56 max-sm:h-10"
                    placeholder="Contraseña"
                  />
                </div>

                {responseError && (
                  <h1 className="text-red-600 text-sm px-2 font-medium italic">
                    Verifica que tu usario y contraseña sean correctos
                  </h1>
                  ) }

                <button
                  type="submit"
                  onClick={(e) => handleSubmit(e)}
                  disabled={loading}
                  className="transition-all max-lg:h-16 max-sm:h-10 h-14 w-full text-white border font-extralight bg-blue-700 disabled:bg-blue-950 text-sm max-sm:text-xs rounded-full"
                >
                  {loading ? (
                    <div 
                    className="animate-bounce w-full h-full flex justify-center items-center text-2xl">
                      .
                    </div>
                  ) : (
                    <span>Iniciar Sesion</span>
                  )}
                </button>

                <p className="text-sm max-sm:text-xs pl-2 font-light text-gray-400">
                  Aun no tienes cuenta?{" "}
                  <Link
                    href="/auth/Signup"
                    className="font-medium text-sm max-sm:text-xs text-black hover:text-gray-600 hover:underline"
                  >
                    Registrate
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginClient;
