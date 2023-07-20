import { NextResponse, NextRequest } from "next/server";
import User, { IUser } from "@/app/models/User";
import dbConnect from "@/app/db/connection";
import { hashPassword } from "@/app/tools/encrypt";

dbConnect();

export async function POST(req: NextRequest) {
  try {
    const json: IUser = await req.json();

    if (!json.username || !json.email) {
      return new NextResponse(
        JSON.stringify({
          message: "Nombre de usuario y contraseña requeridos",
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    if (json.password.length < 6) {
      return new NextResponse(
        JSON.stringify({
          message: "La contraseña debe ser de al menos 6 caracteres",
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // Validating email domain
    const allowedEmailDomains = ["kinal.edu.gt", "kinal.org.gt"];
    const emailParts = json.email.split("@");
    const emailDomain = emailParts[emailParts.length - 1];

    if (!allowedEmailDomains.includes(emailDomain)) {
      return new NextResponse(
        JSON.stringify({
          message:
            "Unicamente se aceptan correos electrónicos con dominios @kinal.edu.gt y @kinal.org.gt",
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    const usernameTaken = await User.findOne({ username: json.username });

    if (usernameTaken)
      return new NextResponse(
        JSON.stringify({ message: "El nombre de usuario ya existe" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );

    const emailTaken = await User.findOne({ email: json.email });

    if (emailTaken)
      return new NextResponse(
        JSON.stringify({
          message: "Email ya en uso",
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );

    const hashedPassword = await hashPassword(json.password);

    json.password = hashedPassword as string;

    // Assigning role based on email domain
    if (emailDomain === "kinal.edu.gt") {
      json.role = "user";
    } else if (emailDomain === "kinal.org.gt") {
      json.role = "admin";
    }

    const user = new User(json);

    await user.save();

    console.log({ userSaved: user });

    return new NextResponse(JSON.stringify({ message: "Exitoso", user }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.log(err);
    return new NextResponse(JSON.stringify({ err }), { status: 500 });
  }
}
