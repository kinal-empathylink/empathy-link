"use server";

const url = process.env.NEXTAUTH_URL as string;

export async function LoginAction(data: {}) {
  try {
    const response = await fetch(`${url}/api/login`, {
      body: JSON.stringify(data),
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });

    return await response.json();
  } catch (err) {
    console.log(err);
  }
}
