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

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = Number(params.id);
  const body = await request.json();

  const index = users.findIndex((user) => user.id === id);

  if (index === -1) {
    return NextResponse.json(
      { message: "User not found" },
      { status: 404 }
    );
  }

  users[index] = { ...users[index], ...body };

  return NextResponse.json(users[index]);
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = Number(params.id);

  const index = users.findIndex((user) => user.id === id);

  if (index === -1) {
    return NextResponse.json(
      { message: "User not found" },
      { status: 404 }
    );
  }

  const deletedUser = users[index];
  users.splice(index, 1);

  return NextResponse.json(deletedUser);
}