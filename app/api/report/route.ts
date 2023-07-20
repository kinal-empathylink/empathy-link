import { NextResponse, NextRequest } from "next/server";
import dbConnect from "@/app/db/connection";
import Report from "@/app/models/Report";

dbConnect();

export async function POST(request: NextRequest) {
  try {
    // Parsear el cuerpo de la solicitud como JSON
    const json = await request.json();
    console.log({ DataRequest: json });

    // Crear un nuevo objeto de cuenta bancaria con los datos parseados
    const report = new Report(json);
    console.log({ reportCreated: report });

    if(!report.aggressor || !report.description || !report.incidentDate || !report.incidentType || !report.injuries){
      return new NextResponse(JSON.stringify({message: "Todos los parametros son requeridos"}), {
        status: 400
      });
    }

    // Guardar el objeto de cuenta bancaria en la base de datos
    const savedReport = await report.save();

    // Devolver un objeto NextResponse con los datos de la cuenta bancaria guardada y un código de estado 200
    return new NextResponse(JSON.stringify(savedReport), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.log({ err });

    // Si hay algún otro error, devolver un objeto NextResponse con un mensaje de error y un código de estado 500
    const error = {
      message: "Error al ejecutar el reporte.",
      error: err,
    };
    return new NextResponse(JSON.stringify(error), { status: 500 });
  }
}

export async function GET(request: NextRequest) {
  try {
    // Get all account types with related data
    const report = await Report.find();

    const data = report;

    if (report.length === 0) {
      return new NextResponse(JSON.stringify({ message: "No Reports Yet" }), {
        status: 200,
      });
    }

    return new NextResponse(JSON.stringify(data), { status: 200 });
  } catch (err) {
    console.error(err);
    return new NextResponse(JSON.stringify({ error: err }), { status: 500 });
  }
}
