import * as Yup from "yup";
import Message from "../../_lib/models/message.model";
import connect from "@/app/_lib/db";
import mongoose from "mongoose";

const messageValidateSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  message: Yup.string().required("Message is required"),
});

export async function POST(req) {
  const { email, message } = await req.json();
  console.log(email, message);

  try {
    await messageValidateSchema.validate({ email, message });

    const conn = await connect();

    const result = await Message.create({ email, message });

    return Response.json(
      {
        message: "Message sent!",
      },
      { status: 200 }
    );
  } catch (reason) {
    const err = reason instanceof Error ? reason.message : "Unexpected error";

    return Response.json(
      {
        message: err,
        data: null,
      },
      { status: 400 }
    );
  } finally {
    await mongoose.connection.close();
  }
}
