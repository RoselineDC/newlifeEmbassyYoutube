import { connectToMongoDB } from "@/lib/db";
import User from "@/models/User";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    await connectToMongoDB();
    const { name, email, phone, password } = await req.json();
    // check undefined
    if (!name || !email || !password) {
      return NextResponse.json(
        { message: "All fields are  required" },
        { status: 400 },
      );
    }
    // check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { message: "Email already exists" },
        { status: 400 },
      );
    }
    await User.create({ name, email, phone, password });
    return NextResponse.json(
      { message: "User registered successfully" },
      { status: 201 },
    );
  } catch (error) {
    console.error("Error in registration:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 },
    );
  }
}
