"use client"

import React from 'react'

const ReportForm = () => {
  return (
    <div className="bg-blue-50 p-8 rounded-md">
      <h2 className="text-3xl font-bold text-center mb-6 text-blue-800">
        Reporte de Abuso
      </h2>
      <form className="grid gap-6 grid-cols-1 sm:grid-cols-2">
        <div className="sm:col-span-1">
          <label
            htmlFor="edad"
            className="block text-blue-800 font-semibold mb-2"
          >
            Edad
          </label>
          <input
            id="edad"
            name="edad"
            type="number"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="sm:col-span-1">
          <label
            htmlFor="grado"
            className="block text-blue-800 font-semibold mb-2"
          >
            Grado
          </label>
          <select
            id="grado"
            name="grado"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            defaultValue=""
          ></select>
        </div>
        <div className="sm:col-span-1">
          <label
            htmlFor="fechaIncidente"
            className="block text-blue-800 font-semibold mb-2"
          >
            Fecha del incidente
          </label>
          <input
            id="fechaIncidente"
            name="fechaIncidente"
            type="date"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="descripcion"
            className="block text-blue-800 font-semibold mb-2"
          >
            Descripción
          </label>
          <textarea
            id="descripcion"
            name="descripcion"
            rows={4}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="testigos"
            className="block text-blue-800 font-semibold mb-2"
          >
            Testigos
          </label>
          <textarea
            id="testigos"
            name="testigos"
            rows={4}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="tipodeincidente"
            className="block text-blue-800 font-semibold mb-2"
          >
            Tipo de Incidente
          </label>
          <textarea
            id="tipoDeIncidente"
            name="tipoDeIncidente"
            rows={4}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="heridas"
            className="block text-blue-800 font-semibold mb-2"
          >
            Heridas
          </label>
          <textarea
            id="heridas"
            name="heridas"
            rows={4}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="incidentesPrevios"
            className="block text-blue-800 font-semibold mb-2"
          >
            Incidentes previos
          </label>
          <textarea
            id="incidentesPrevios"
            name="incidentesPrevios"
            rows={4}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="impactoEmocional"
            className="block text-blue-800 font-semibold mb-2"
          >
            Impacto emocional
          </label>
          <textarea
            id="impactoEmocional"
            name="impactoEmocional"
            rows={4}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="impactoAcademico"
            className="block text-blue-800 font-semibold mb-2"
          >
            Impacto académico
          </label>
          <textarea
            id="impactoAcademico"
            name="impactoAcademico"
            rows={4}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="accionesPrevias"
            className="block text-blue-800 font-semibold mb-2"
          >
            Acciones previas
          </label>
          <textarea
            id="accionesPrevias"
            name="accionesPrevias"
            rows={4}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="accionesEscuela"
            className="block text-blue-800 font-semibold mb-2"
          >
            Acciones de la escuela
          </label>
          <textarea
            id="accionesEscuela"
            name="accionesEscuela"
            rows={4}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="sm:col-span-2 flex justify-center">
          <button
            type="submit"
            className="w-32 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md focus:outline-none focus:ring focus:border-blue-300"
            style={{ backgroundColor: "#0575E6" }}
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  )
}

export default ReportForm