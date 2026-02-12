import { NextResponse } from "next/server";

let users = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    role: "admin",
    status: "active",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    role: "user",
    status: "inactive",
  },
];

export async function GET() {
  return NextResponse.json(users);
}

export async function POST(request: Request) {
  const body = await request.json();

  const newUser = {
    id: users.length + 1,
    ...body,
  };

  users.push(newUser);

  return NextResponse.json(newUser, { status: 201 });
}