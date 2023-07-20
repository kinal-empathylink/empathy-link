import { IReport } from "@/app/models/Report";
import { getReports } from "./action";
import { formatDate } from "@/app/tools/dayFormatter";
import ReportRow from "./components/ReportRow";

export default async function page(){

    const incidentDate = new Date("2023-07-19");
    const createdAt = new Date("2023-07-19");
    const updatedAt = new Date("2023-07-19");

    const dateTime = formatDate(incidentDate)
    const createdAtDateTime = formatDate(createdAt)
    const updatedAtDateTime = formatDate(updatedAt)

    const formatedDate = `${dateTime.formatedDate} ${dateTime.formatedTime}`
    const formatedCreatedAt = `${createdAtDateTime.formatedDate} ${createdAtDateTime.formatedTime}`
    const formatedUpdatedAt = `${updatedAtDateTime.formatedDate} ${updatedAtDateTime.formatedTime}`

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
                                    Estado
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Grado
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Fecha de Agresión
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Descripcion
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Testigos
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
                                <th scope="col" className="px-6 py-3">
                                    Fecha de Actualizado: 
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Opciones
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                        {reports.map((report, key) => (
                            <ReportRow
                            key={key}
                            status={"status"}
                            grade={report.grade.toString()}
                            incidentDate={report.incidentDate.toString()}
                            description={report.description}
                            witnesses={report.witnesses}
                            incidentType={report.incidentType.toString()}
                            injuries={report.injuries.toString()}
                            createdAt={report.createdAt.toString()}
                            updatedAt={report.updatedAt.toString()}
                            />
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}