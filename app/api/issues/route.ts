import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";
import { z } from "zod";

// Define the schema for issue creation
const issueSchema = z.object({
  title: z.string().min(1, "Title is required.").max(255),
  description: z.string().min(1, "Description is required.").max(65535),
});

// POST method handler
export async function POST(request: NextRequest) {
  try {
    // Parse JSON body from the request
    const body = await request.json();

    // Validate the request body against the schema
    const validation = issueSchema.safeParse(body);

    // If validation fails, return a 400 response with validation errors
    if (!validation.success) {
      return NextResponse.json(validation.error.format(), { status: 400 });
    }

    // Create a new issue in the database
    const newIssue = await prisma.issue.create({
      data: { title: body.title, description: body.description },
    });

    // Return a 201 response with the new issue data
    return NextResponse.json(newIssue,{status:201});
  } catch (error) {
    // Handle unexpected errors
    console.error("Error processing request:", error);

    // Return a 500 response for internal server error
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
