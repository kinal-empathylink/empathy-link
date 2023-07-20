"use server";

const url = process.env.NEXTAUTH_URL as string;
console.log({URL: url})

export async function LoginAction(data: {}) {
  try {
    const response = await fetch(`http://localhost:3000/api/login`, {
      body: JSON.stringify(data),
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });

    const json = await response.json()

    console.log({JSON: json})

    return json;
  } catch (err) {
    console.log(err);
  }
}
