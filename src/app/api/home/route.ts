import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName, phone, email, message, company, industry, services, scope } = body;

    if (!firstName || !lastName || !email) {
      return NextResponse.json(
        { message: "Required fields (First name, Last name, Email) are missing." },
        { status: 400 }
      );
    }

    // Log the received consultation request
    console.log("New Project Architecture Proposal request:", {
      name: `${firstName} ${lastName}`,
      phone: phone || "Not provided",
      email,
      company: company || "Not specified",
      industry: industry || "Not specified",
      services: services || [],
      message: message || scope || "",
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      { message: "Consultation request received successfully! Our engineering team will review it within 1 business day.", received: true },
      { status: 200 }
    );
  } catch (error) {
    console.error("Home Form Error:", error);
    return NextResponse.json(
      { message: "Failed to process request." },
      { status: 500 }
    );
  }
}

