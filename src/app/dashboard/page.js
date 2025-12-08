"use client";

import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null); 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadUser() {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!session) {
        window.location.href = "/login";
        return;
      }

      setUser(session.user);

      const { data: profileData } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", session.user.id)
        .single();

      setProfile(profileData);
      setLoading(false);
    }

    loadUser();
  }, []);

  async function logout() {
    await supabase.auth.signOut();
    window.location.href = "/login";
  }

  if (loading)
    return (
      <div
        style={{
          background: "#020308",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
        }}
      >
        Carregando...
      </div>
    );

  return (
    <div style={container}>
      <div style={card}>
        <h2 style={{ color: "#f4c86c", textAlign: "center" }}>
          Bem-vindo ao BillionMind
        </h2>

        <p style={info}>
          <strong>Email:</strong> {user.email}
        </p>

        <p style={info}>
          <strong>Plano atual:</strong> {profile?.plan?.toUpperCase()}
        </p>

        {profile?.plan === "free" && (
          <a href="/plans" style={upgradeBtn}>
            Liberar Plano PRO / PREMIUM
          </a>
        )}

        <button style={logoutBtn} onClick={logout}>
          Sair da conta
        </button>
      </div>
    </div>
  );
}

const container = {
  background: "#020308",
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontFamily: "system-ui",
};

const card = {
  width: "90%",
  maxWidth: "420px",
  padding: "32px",
  borderRadius: "16px",
  background: "rgba(255,255,255,0.05)",
  backdropFilter: "blur(10px)",
  border: "1px solid rgba(255,255,255,0.1)",
  color: "#fff",
};

const info = {
  marginBottom: "10px",
  color: "#ddd",
};

const upgradeBtn = {
  width: "100%",
  display: "block",
  background: "linear-gradient(120deg, #f4c86c, #d9a63f)",
  padding: "12px",
  textAlign: "center",
  borderRadius: "8px",
  textDecoration: "none",
  color: "#000",
  fontWeight: "bold",
  marginTop: "12px",
  cursor: "pointer",
};

const logoutBtn = {
  width: "100%",
  padding: "12px",
  borderRadius: "8px",
  border: "none",
  background: "#ff5a5a",
  marginTop: "20px",
  cursor: "pointer",
  color: "#fff",
  fontWeight: "bold",
};
