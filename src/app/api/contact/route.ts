// import { dbConnect } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";
import { sendMail } from "./mailService";
// import mongoose from "mongoose";
// import ServiceRequestSchema from "@/app/servicios/serviceRequest/model";

// const con = await dbConnect();
export async function GET() {
//   const userRequestContent = await ServiceRequestSchema.find({});
  return new NextResponse("test");
//   return new NextResponse(userRequestContent);
}

export async function POST(request: NextRequest) {
  try {
    const requestContent = await request.json();
    console.log(requestContent)
    const res = await sendMail(
      "Sitio WOOHOO: Formulario Contactanos",
      "jbotoku@gmail.com",
      `Client: ${requestContent.name}
     Correo: ${requestContent.email}
     Necessidades: ${requestContent.message}`
    );
    console.log(res)
    // const userRequestContent = await ServiceRequestSchema.create(
    //   requestContent
    // );
    // return new Response(JSON.stringify(userRequestContent));
    return new Response("success");
  } catch (error) {
    console.log(error);
    return new Response("error");
  }
}
