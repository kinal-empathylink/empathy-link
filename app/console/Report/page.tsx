import { IReport } from "@/app/models/Report";
import { getReports } from "./action";
import { formatDate } from "@/app/tools/dayFormatter";
import ReportRow from "./components/ReportRow";

export default async function page(){
    const reports: IReport[] = await getReports();

    console.log({REPORTS: reports})

    return(
        <div className="w-full h-full">
            <div className='text-3xl text-blue-600 p-5 font-extrabold'>
                Reportes
            </div>
            <div className='p-5'>
                <div className="relative overflow-x-auto">
                    <table className="w-full text-sm text-left">
                        <thead className="text-xs">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Opciones
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Estado
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Agresor
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Descripción
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Tipo de Incidente
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Heridas
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Fecha de Reportado:
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                        {reports.map((report, key) => (
                            <ReportRow
                            key={key}
                            _id={report._id}
                            grade={report.grade}
                            incidentDate={report.incidentDate}
                            description={report.description}
                            witnesses={report.witnesses}
                            incidentType={report.incidentType}
                            injuries={report.injuries}
                            aggressor={report.aggressor}
                            status={report.status}
                            createdAt={report.createdAt}
                            updatedAt={report.updatedAt}
                            />
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}