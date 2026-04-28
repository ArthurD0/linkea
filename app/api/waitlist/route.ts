import { supabase } from "@/lib/supabase";

export async function POST(request: Request) {
  const { email, role } = await request.json();

  if (!email || !email.includes("@")) {
    return Response.json({ error: "Email invalide" }, { status: 400 });
  }
  if (role !== "founder" && role !== "developer") {
    return Response.json({ error: "Rôle invalide" }, { status: 400 });
  }

  const { error } = await supabase
    .from("waitlist")
    .insert({ email, role });

  if (error) {
    if (error.code === "23505") {
      return Response.json({ error: "Cet email est déjà inscrit" }, { status: 409 });
    }
    return Response.json({ error: "Erreur serveur" }, { status: 500 });
  }

  return Response.json({ success: true }, { status: 201 });
}

export async function GET() {
  const { data, error } = await supabase
    .from("waitlist")
    .select("id, email, created_at")
    .order("created_at", { ascending: false });

  if (error) {
    return Response.json({ error: "Erreur serveur" }, { status: 500 });
  }

  return Response.json({ emails: data });
}
