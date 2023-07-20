import React from "react";

const Formulario = () => {
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
            Edad*
          </label>
          <input
            id="edad"
            name="edad"
            type="number"
            min="1"
            max="20"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
          <p className="text-sm text-gray-600 mt-1">
            Porfavor introduce tu edad para que asi podamos saber el mejor
            metodo para ayudarte.
          </p>
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
          <p className="text-sm text-gray-600 mt-1">
            De ser posible introduce la fecha en la que la agresion dio lugar.
          </p>
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="descripcion"
            className="block text-blue-800 font-semibold mb-2"
          >
            Descripción*
          </label>
          <textarea
            id="descripcion"
            name="descripcion"
            rows={4}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
          <p className="text-sm text-gray-600 mt-1">
            Comparte los detalles que consideres relevantes, no te preocupes por
            la extensión.
          </p>
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
          <p className="text-sm text-gray-600 mt-1">
            Si recuerdas el nombre de algún testigo, es útil incluirlo aquí.
          </p>
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
          <p className="text-sm text-gray-600 mt-1">
            Describe el tipo de incidente que has experimentado (por ejemplo,
            acoso, discriminación, etc.).
          </p>
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
          <p className="text-sm text-gray-600 mt-1">
            Si sufriste heridas físicas o emocionales, menciona los detalles.
          </p>
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="agresor"
            className="block text-blue-800 font-semibold mb-2"
          >
            Agresor
          </label>
          <textarea
            id="agresor"
            name="agresor"
            rows={4}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
          <p className="text-sm text-gray-600 mt-1">
            Si te sientes cómodo haciéndolo, menciona detalles sobre el agresor.
          </p>
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
  );
};

export default Formulario;
