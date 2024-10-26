// src/app/api/auth/logout/route.ts

import { NextRequest, NextResponse } from "next/server";
import { deleteSession } from "utils/sessions/sessions";

export async function POST(req: NextRequest) {
  return deleteSession();
}
