"use client"

import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

const ReportForm = () => {

  const [data, setData] = useState({});

  const [responseError, setResponseError] = useState('');

  const router = useRouter();

  async function onSubmit(data: {}) {
    console.log(data);

     const res = await fetch("/api/report", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const obj = await res.json();
    console.log( obj)

    if (!res.ok) {
      setResponseError(obj.message);
      return
    }

    router.replace("/home");
    router.refresh();
    return
  }

  return (
    <div className="bg-blue-50 p-8 rounded-md w-full h-fit">
      <h2 className="text-3xl font-bold text-center mb-6 text-blue-800">
        Reporte de Abuso
      </h2>
      <form className="grid gap-6 grid-cols-1 sm:grid-cols-2">
        <div className="sm:col-span-1">
          <label
            htmlFor="grado"
            className="block text-blue-800 font-semibold mb-2"
          >
            Agresor *
          </label>
          <input
            id="agresor"
            name="agresor"
            type="text"
            onChange={(
              e: React.ChangeEvent<HTMLInputElement>,
            ) => setData({ ...data, aggressor: e.target.value })}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="sm:col-span-1">
          <label
            htmlFor="fechaIncidente"
            className="block text-blue-800 font-semibold mb-2"
          >
            Fecha del incidente *
          </label>
          <input
            id="fechaIncidente"
            name="fechaIncidente"
            type="date"
            onChange={(
              e: React.ChangeEvent<HTMLInputElement>,
            ) => setData({ ...data, incidentDate: e.target.value })}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="sm:col-span-1">
          <label
            htmlFor="descripcion"
            className="block text-blue-800 font-semibold mb-2"
          >
            Descripción *
          </label>
          <div>
          <textarea
            id="descripcion"
            name="descripcion"
            rows={4}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            onChange={(e)=> setData({ ...data, description: e.target.value })}
          />
          </div>
        </div>
        <div className="sm:col-span-1">
          <label
            htmlFor="testigos"
            className="block text-blue-800 font-semibold mb-2"
          >
            Testigos *
          </label>
          <textarea
            id="testigos"
            name="testigos"
            rows={4}
            onChange={(e) => setData({ ...data, witnesses: e.target.value })}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="sm:col-span-1">
          <label
            htmlFor="tipodeincidente"
            className="block text-blue-800 font-semibold mb-2"
          >
            Tipo de Incidente *
          </label>
          <textarea
            id="tipoDeIncidente"
            name="tipoDeIncidente"
            rows={4}
            onChange={(e) => setData({ ...data, incidentType: e.target.value })}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="sm:col-span-1">
          <label
            htmlFor="heridas"
            className="block text-blue-800 font-semibold mb-2"
          >
            Heridas *
          </label>
          <textarea
            id="heridas"
            name="heridas"
            rows={4}
            onChange={(e) => setData({ ...data, injuries: e.target.value })}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        {
            responseError !== "" ?
            <h1 className="text-red-600 text-center text-sm px-2 font-medium italic sm:col-span-2">
              {responseError}
            </h1>
            : 
            null
          }
        <div className="sm:col-span-2 flex justify-center gap-4">
          
          <button
            type="submit"
            className="w-32 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md focus:outline-none focus:ring focus:border-blue-300"
            onClick={(e)=>{
              e.preventDefault()
              onSubmit(data)
            }}
            style={{ backgroundColor: "#0575E6" }}
          >
            Enviar
          </button>

          <button
            type="submit"
            className="w-32 bg-red-600 hover:bg-red-500 text-white py-2 px-4 rounded-md focus:outline-none focus:ring focus:border-red-300"
            onClick={(e)=>{
              e.preventDefault()
              router.replace("/home");
              router.refresh();
            }}
            style={{ backgroundColor: "#FF413B" }}
          >
            Cancelar
          </button>

        </div>
      </form>
    </div>
  )
}

export default ReportForm