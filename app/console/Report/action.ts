"use server"

import { IReport } from "@/app/models/Report";

export async function getReports() {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/report`, {
    method: "GET",
    cache: 'no-store',
  });

  if (!res.ok) throw new Error(res.statusText);

  const reports: IReport[] = await res.json();

  console.log(reports)

  return reports;
}

export async function deleteReport(_id: any) {
  try {
    const res = await fetch(`${process.env.NEXTAUTH_URL}/api/report/${_id}`, {
      method: 'DELETE',
      next: { revalidate: 100 },
    });

    if(res.status == 400){
      return res.status
    }

    if (!res.ok) {
      throw new Error('Something went wrong');
    }
    
  } catch (err) {
    console.log(err);
    return err;
  }
}