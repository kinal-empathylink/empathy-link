"use client";

import React, { MouseEvent, useRef } from "react";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { AiOutlineMail } from 'react-icons/ai';
import { BiSolidLockAlt } from 'react-icons/bi';

const LoginClient = () => {
  const inputUsername = useRef("");
  const inputPassword = useRef("");

  const onSubmit = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    console.log({ user: inputUsername.current, pass: inputPassword.current });

    const result = await signIn("credentials", {
      username: inputUsername.current,
      password: inputPassword.current,
      redirect: true,
      callbackUrl: "/home",
    });

    console.log({ result: result });
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
                            Bienvenido de vuelta!!
                        </div>
                        <div  className=" text-lg max-lg:text-xl max-sm:text-sm font-extralight pt-1">
                            Welcome Back
                        </div>
                    </div>
                    <div>
                        <form className="space-y-4">
                            <div className="flex">
                                <div className="text-2xl max-sm:text-xl text-gray-300 pl-2 w-12 border border-r-0 font-extralight border-gray-200 rounded-full rounded-r-none">
                                    <div className="flex w-full h-full justify-center items-center">
                                        <AiOutlineMail/>
                                    </div>
                                </div>
                                <input
                                    type="text"
                                    name="username"
                                    id="username"
                                    onChange={(e) => (inputUsername.current = e.target.value)}
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
                                    type="password"
                                    name="username"
                                    id="username"
                                    onChange={(e) => (inputUsername.current = e.target.value)}
                                    className="focus:outline-gray-400 border border-l-0 font-extralight border-gray-200 text-sm max-sm:text-xs rounded-full rounded-l-none w-80 h-14 max-lg:w-96 max-lg:h-16 max-sm:w-56 max-sm:h-10"
                                    placeholder="Contraseña"
                                />
                            </div>
                            <button
                                type="submit"
                                onClick={(e) => onSubmit(e)}
                                className="max-lg:h-16 max-sm:h-10 h-14 w-full text-white border font-extralight bg-blue-700 text-sm max-sm:text-xs rounded-full"
                            >
                                Iniciar Sesión
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
    // <div className="bg-violet-100 dark:bg-violet-950 h-screen w-full login-bg z-0">
    //   <div className="flex flex-col items-center justify-center h-full  z-50">
    //     <div className="flex items-center justify-center mb-10 text-7xl font-bold text-gray-900 dark:text-white">
    //       Kinal EmpathyLink
    //     </div>

    //     <div className="w-full bg-white rounded-xl shadow dark:border max-w-lg dark:bg-[#190a37] dark:border-violet-900">
    //       <div className="p-12 space-y-6">
    //         <h1 className="text-2xl font-semibold leading-tight tracking-tight text-gray-900 dark:text-white">
    //           Sign in to your account
    //         </h1>
    //         <form className="space-y-6" action="#">
    //           <div>
    //             <label
    //               htmlFor="text"
    //               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
    //             >
    //               Username
    //             </label>
    //             <input
    //               type="text"
    //               name="username"
    //               id="username"
    //               onChange={(e) => (inputUsername.current = e.target.value)}
    //               className="bg-gray-50 border border-gray-300 text-gray-900 dark:text-white text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 dark:focus:border-primary-100 block w-full p-2.5 dark:bg-[#190a37]"
    //               placeholder="Your username"
    //             />
    //           </div>
    //           <div>
    //             <label
    //               htmlFor="password"
    //               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
    //             >
    //               Password
    //             </label>
    //             <input
    //               type="password"
    //               name="password"
    //               id="password"
    //               placeholder="••••••••"
    //               onChange={(e) => (inputPassword.current = e.target.value)}
    //               className="bg-gray-50 border border-gray-300 text-gray-900 dark:text-white text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 dark:focus:border-primary-100 block w-full p-2.5 dark:bg-[#190a37]"
    //             />
    //           </div>
    //           <button
    //             type="submit"
    //             onClick={(e) => onSubmit(e)}
    //             className="bg-violet-800 hover:bg-violet-600  w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
    //           >
    //             Sign in
    //           </button>
    //           <p className="text-sm font-light text-gray-500 dark:text-gray-300">
    //             Don’t have an account yet?{" "}
    //             <Link
    //               href="/auth/Signup"
    //               className="font-medium text-black hover:text-gray-600 dark:text-white dark:hover:text-gray-300 text-primary-600 hover:underline"
    //             >
    //               Sign up
    //             </Link>
    //           </p>
    //         </form>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default LoginClient;
