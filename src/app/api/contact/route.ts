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
    const emailSent = await sendMail(
      "Sitio WOOHOO: Formulario Contactanos",
      "vbotoku@grupolvt.com",
      `Client: ${requestContent.name}
     Correo: ${requestContent.email}
     Telefono:${requestContent.phone}
     Necessidades: ${requestContent.message}`
    );

    // const userRequestContent = await ServiceRequestSchema.create(
    //   requestContent
    // );
    // return new Response(JSON.stringify(userRequestContent));
    if (!emailSent) {
      return NextResponse.json(
        { success: false, error: "Email failed to send" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { success: false, error: "Server error" },
      { status: 500 }
    );
  }
}
