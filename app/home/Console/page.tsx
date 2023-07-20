import React from "react";

const Dashboard: React.FC = () => {
  // Datos estáticos de los profesores destacados
  const teachersData = [
    {
      name: "David Tun",
      location: "Quiché",
      hoursWorked: 3374,
      casesInvestigated: 210,
      casesSolved: 103,
    },
    {
      name: "Jeralmy Pennant",
      location: "Izabal",
      hoursWorked: 2250,
      casesInvestigated: 101,
      casesSolved: 65,
    },
    {
      name: "Josue Noj",
      location: "Escuintla",
      hoursWorked: 1030,
      casesInvestigated: 58,
      casesSolved: 37,
    },
  ];

  return (
    <div className="bg-blue-100 min-h-screen p-4">
      <h1 className="text-3xl font-bold text-center text-blue-900 mb-6">
        Profesores Destacados
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        {teachersData.map((teacher, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-4">
            <h3 className="text-xl font-bold text-blue-900 mb-2">
              {teacher.name}
            </h3>
            <p className="text-blue-600 mb-2">{teacher.location}</p>
            <div className="flex justify-between">
              <div>
                <p className="font-semibold">Horas trabajadas:</p>
                <p>{teacher.hoursWorked}</p>
              </div>
              <div>
                <p className="font-semibold">Casos investigados:</p>
                <p>{teacher.casesInvestigated}</p>
              </div>
              <div>
                <p className="font-semibold">Casos solucionados:</p>
                <p>{teacher.casesSolved}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <h2 className="text-2xl font-bold text-center text-blue-900 mb-4">
        Reportes de Abuso
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        {/* Primera sección de Reportes de Abuso */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">
                Tipos de Abuso
              </h3>
              <p className="flex justify-between">
                <span>Ciberacoso</span>
                <span className="font-semibold">10</span>
              </p>
              <p className="flex justify-between">
                <span>Fisico</span>
                <span className="font-semibold">25</span>
              </p>
              <p className="flex justify-between">
                <span>Sexual</span>
                <span className="font-semibold">40</span>
              </p>
              <p className="flex justify-between">
                <span>Verbal</span>
                <span className="font-semibold">30</span>
              </p>
            </div>
            <div>
              {/* Aquí puedes agregar cualquier otra estadística relacionada con los reportes */}
            </div>
          </div>
        </div>

        {/* Segunda sección duplicada de Reportes de Abuso */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">
                Medidas Preventivas
              </h3>
              <p className="flex justify-between">
                <span>Capacitaciones</span>
                <span className="font-semibold">200</span>
              </p>
              <p className="flex justify-between">
                <span>Sensibilización</span>
                <span className="font-semibold">50</span>
              </p>
              <p className="flex justify-between">
                <span>Comités</span>
                <span className="font-semibold">80</span>
              </p>
              <p className="flex justify-between">
                <span>Campañas</span>
                <span className="font-semibold">37</span>
              </p>
            </div>
            <div>
              {/* Aquí puedes agregar cualquier otra estadística relacionada con los reportes */}
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">
                Abuso en Grados
              </h3>
              <p className="flex justify-between">
                <span>1ro Básico</span>
                <span className="font-semibold">50</span>
              </p>
              <p className="flex justify-between">
                <span>2do Básico</span>
                <span className="font-semibold">160</span>
              </p>
              <p className="flex justify-between">
                <span>3ro Básico</span>
                <span className="font-semibold">90</span>
              </p>
              <p className="flex justify-between">
                <span>4to Perito</span>
                <span className="font-semibold">40</span>
              </p>
            </div>
            <div>
              {/* Aquí puedes agregar cualquier otra estadística relacionada con los reportes */}
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">
                Perpetradores
              </h3>
              <p className="flex justify-between">
                <span>Fabian Herrera</span>
                <span className="font-semibold">15</span>
              </p>
              <p className="flex justify-between">
                <span>Ian Monterroso</span>
                <span className="font-semibold">25</span>
              </p>
              <p className="flex justify-between">
                <span>Alan López</span>
                <span className="font-semibold">12</span>
              </p>
              <p className="flex justify-between">
                <span>Pedro Armas</span>
                <span className="font-semibold">60</span>
              </p>
            </div>
            <div>
              {/* Aquí puedes agregar cualquier otra estadística relacionada con los reportes */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
