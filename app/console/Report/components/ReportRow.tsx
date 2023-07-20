"use client"

import { formatDate } from "@/app/tools/dayFormatter";
import { useRouter } from "next/navigation";
import React, { FC, useState } from "react";
import {BsThreeDotsVertical} from "react-icons/bs"
import { deleteReport } from "../action";

interface Data{
  _id: string
  grade?: string;
  incidentDate: Date;
  description: string;
  witnesses?: string;
  incidentType: string;
  injuries?: string;
  aggressor: string;
  status: string;
  createdAt: Date;
  updatedAt: Date;
}


const ReportRow: FC<Data> = ({_id, grade, incidentDate, description, witnesses, incidentType, injuries, aggressor, status, createdAt, updatedAt}) => {

  const dateTime = formatDate(incidentDate)
  const createdAtDateTime = formatDate(createdAt)
  const updatedAtDateTime = formatDate(updatedAt)

  const formatedDate = `${dateTime.formatedDate} ${dateTime.formatedTime}`
  const formatedCreatedAt = `${createdAtDateTime.formatedDate} ${createdAtDateTime.formatedTime}`
  const formatedUpdatedAt = `${updatedAtDateTime.formatedDate} ${updatedAtDateTime.formatedTime}`

  const [open, setOpen] = useState(false)
  const [moreInfo, setMoreInfo] = useState(false)

  const router = useRouter();

  return (
      <tr className="bg-white border-b">
        <td className="px-6 py-4">
          { open && <div onClick={(e) => setOpen(!open)} className="z-0 w-screen h-screen fixed -mt-52 -ml-32"/>}
          <button onClick={(e)=> setOpen(!open)} className="flex justify-center h-full w-full">
            <BsThreeDotsVertical className="text-2xl"/>
          </button>
          <div className={`z-10 fixed bg-white divide-y divide-gray-100 rounded-lg shadow w-44 ${ open ? "block" : "hidden"}`}>
              <ul className="py-2 text-sm text-gray-700">
              <li>
                  <button onClick={(e) =>{
                      e.preventDefault()
                      setOpen(!open)
                      router.push(`/console/Report/Details/${_id}`);
                  }} className="block px-4 py-2 hover:bg-gray-100 w-full text-start">Ver más</button>
                </li>
                <li>
                  <div className="block px-4 py-2 hover:bg-gray-100 ">Solucionado</div>
                </li>
              </ul>
          </div>
        </td>
        <td scope="row" className={`px-6 py-4 ${ status == "Pendiente" ? "text-orange-500" : "text-green-400" }`}>{status}</td>
        <td className="px-6 py-4">{aggressor}</td>
        <td className="px-6 py-4">{description}</td>
        <td className="px-6 py-4">{incidentType}</td>
        <td className="px-6 py-4">{injuries}</td>
        <td className="px-6 py-4">{formatedCreatedAt}</td>
        
      </tr>
      
    
  );
};

export default ReportRow;
