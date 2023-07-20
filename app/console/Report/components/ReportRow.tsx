import React, { FC } from "react";
import {BsThreeDotsVertical} from "react-icons/bs"

interface Data{
    status: string;
    grade: string;
    incidentDate: string;
    description: string;
    witnesses: string;
    incidentType: string;
    injuries: string;
    createdAt: string;
    updatedAt: string;
}


const ReportRow: FC<Data> = ({status, grade, incidentDate, description, witnesses, incidentType, injuries, createdAt, updatedAt}) => {

  return (
    <tr className="bg-white border-b">
      <th scope="row" className={`px-6 py-4 font-medium text-gray-900 ${ status == "Pendiente" ? "text-orange-500" : "text-green-400" }`}>
        Estado
      </th>
      <td className="px-6 py-4">{grade}</td>
      <td className="px-6 py-4">{incidentDate}</td>
      <td className="px-6 py-4">{description}</td>
      <td className="px-6 py-4">{witnesses}</td>
      <td className="px-6 py-4">{incidentType}</td>
      <td className="px-6 py-4">{injuries}</td>
      <td className="px-6 py-4">{createdAt}</td>
      <td className="px-6 py-4">{updatedAt}</td>
      <td className="px-6 py-4">
        <BsThreeDotsVertical className="text-center w-full"/>
      </td>
    </tr>
  );
};

export default ReportRow;
