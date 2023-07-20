"use client";

import { SignUpAction } from "@/app/api/register/Actions";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { AiOutlineInfo, AiOutlineMail, AiOutlineUser } from "react-icons/ai";
import { BiSolidLockAlt } from "react-icons/bi";

function SignUpForm() {
  
  const [password, setPassword] = useState('');

  const [data, setData] = useState({});

  const [confirmPassword, setConfirmPassword] = useState('');

  const [validPassword, setValidPassword] = useState(true);

  const [responseError, setResponseError] = useState('');

  const [defaultError, setDefaultError] = useState(true);

  const router = useRouter();

  const onClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    
    const response:any = await SignUpAction(data)
    console.log(response);

    if(response.message === "Exitoso" ){
      setResponseError("");
      router.push('/auth/Login');
    }else{
      setDefaultError(false);
      setResponseError(`${response.message}`)
    }

  };
    
  return (
    <div className="flex h-screen w-full">
        <div className="h-full w-[55%] max-lg:w-0 bg-blue-700 ">
            <div className="h-full w-full flex items-center justify-center mb-10 font-bold text-gray-900">
                  <div>
                      <div className="-ml-32 text-white">
                          <div  className="text-4xl font-extrabold">
                              Kinal Empathy Link
                          </div>
                          <div  className=" text-lg font-extralight pt-1">
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
                        <div  className=" text-2xl max-lg:text-3xl max-sm:text-lg font-extrabold">
                            Bienvenido!
                        </div>
                        <div  className=" text-lg max-lg:text-xl max-sm:text-sm font-extralight pt-1">
                            Inicia sesión para comenzar
                        </div>
                    </div>
                    {responseError !== '' ? (
                        <h1 className="text-red-600 text-sm px-2 font-medium italic">
                        {responseError}
                        </h1>
                    ) : null}
                    <div>
                        <form className='space-y-6'>
                                <div className="flex">
                                  <div className="text-2xl max-sm:text-xl text-gray-300 pl-2 w-12 border border-r-0 font-extralight border-gray-200 rounded-full rounded-r-none">
                                      <div className="flex w-full h-full justify-center items-center">
                                          <AiOutlineInfo/>
                                      </div>
                                  </div>
                                  <input
                                      type="text"
                                      name="names"
                                      id="names"
                                      onChange={(
                                        e: React.ChangeEvent<HTMLInputElement>,
                                      ) => setData({ ...data, name: e.target.value })}
                                      className="focus:outline-gray-400 border border-l-0 font-extralight border-gray-200 text-sm max-sm:text-xs rounded-full rounded-l-none w-80 h-14 max-lg:w-96 max-lg:h-16 max-sm:w-56 max-sm:h-10"
                                      placeholder="Nombre completo"
                                  />
                              </div>
                              <div className="flex">
                                  <div className="text-2xl max-sm:text-xl text-gray-300 pl-2 w-12 border border-r-0 font-extralight border-gray-200 rounded-full rounded-r-none">
                                      <div className="flex w-full h-full justify-center items-center">
                                          <AiOutlineUser/>
                                      </div>
                                  </div>
                                  <input
                                      type="text"
                                      name="username"
                                      id="username"
                                      onChange={(
                                        e: React.ChangeEvent<HTMLInputElement>,
                                      ) => setData({ ...data, username: e.target.value })}
                                      className="focus:outline-gray-400 border border-l-0 font-extralight border-gray-200 text-sm max-sm:text-xs rounded-full rounded-l-none w-80 h-14 max-lg:w-96 max-lg:h-16 max-sm:w-56 max-sm:h-10"
                                      placeholder="Nombre de Usuario"
                                  />
                              </div>
                              <div className="flex">
                                  <div className="text-2xl max-sm:text-xl text-gray-300 pl-2 w-12 border border-r-0 font-extralight border-gray-200 rounded-full rounded-r-none">
                                      <div className="flex w-full h-full justify-center items-center">
                                          <AiOutlineMail/>
                                      </div>
                                  </div>
                                  <input
                                      type="email"
                                      name="email"
                                      id="email"
                                      onChange={(
                                        e: React.ChangeEvent<HTMLInputElement>,
                                      ) => setData({ ...data, email: e.target.value })}
                                      className="focus:outline-gray-400 border border-l-0 font-extralight border-gray-200 text-sm max-sm:text-xs rounded-full rounded-l-none w-80 h-14 max-lg:w-96 max-lg:h-16 max-sm:w-56 max-sm:h-10"
                                      placeholder="Correo electrónico"
                                  />
                              </div>
                              <div className="flex">
                                  <div className="text-2xl max-sm:text-xl text-gray-300 pl-2 w-12 border border-r-0 font-extralight border-gray-200 rounded-full rounded-r-none">
                                      <div className="flex w-full h-full justify-center items-center">
                                          <BiSolidLockAlt/>
                                      </div>
                                  </div>
                                  <input
                                      type="text"
                                      name="password"
                                      id="password"
                                      onChange={(
                                        e: React.ChangeEvent<HTMLInputElement>,
                                      ) => setData({ ...data, password: e.target.value })}
                                      className="focus:outline-gray-400 border border-l-0 font-extralight border-gray-200 text-sm max-sm:text-xs rounded-full rounded-l-none w-80 h-14 max-lg:w-96 max-lg:h-16 max-sm:w-56 max-sm:h-10"
                                      placeholder="Contraseña"
                                  />
                              </div>
                              <button
                                  type="submit"
                                  className="max-lg:h-16 max-sm:h-10 h-14 w-full text-white border font-extralight bg-blue-700 text-sm max-sm:text-xs rounded-full"
                                  onClick={(e) => onClick(e)}
                              >
                                  Registrate
                              </button>
                              <p className="text-sm max-sm:text-xs pl-2 font-light text-gray-400">
                                  Ya tienes una cuenta?{" "}
                                  <Link
                                    href="/auth/Login"
                                    className="font-medium text-sm max-sm:text-xs text-black hover:text-gray-600 hover:underline"
                                    >
                                    Inicia Sesión
                                  </Link>
                              </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default SignUpForm;